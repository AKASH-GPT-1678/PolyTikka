const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();




async function createPoliticians(req, res) {


  // if (!req.verified) {
  //     return res.status(403).json({ message: 'Only Admin Can Add and Manipulate data', status: 403, verified: false });
  // }
  const {
    name,
    party,
    state,
    constituency,
    age,
    gender,
    education,
    criminalCases,
    totalAssets,
    position,
    biography,
    profileImage,
    avgRatings,
    ratingsOutOf
  } = req.body;

  // Validate required fields
  if (!name || !party || !state || !constituency || !education) {
    return res.status(400).json({
      error: "Missing required fields: name, party, state, constituency, avgRatings"
    });
  }
  try {
    const newPolitician = await prisma.politician.create({
      data: {
        name,
        party,
        state,
        constituency,
        age,
        gender,
        education,
        criminalCases: criminalCases ?? 0,
        totalAssets,
        position,
        biography,
        profileImage,
        avgRatings,
        ratingsOutOf
      }
    });
    // ...existing code...
    const politician = {
      ...newPolitician,
      ratingsOutOf: newPolitician.ratingsOutOf ? newPolitician.ratingsOutOf.toString() : null,
    };

    res.status(201).json(politician);
    // ...existing code...




  } catch (error) {
    console.error("Error creating politician:", error);
    res.status(500).json({ error: "Something went wrong", error: error });
  }
}




async function getPoliticiansByName(req, res) {
  const { name } = req.params;
  try {
    const politicians = await prisma.politician.findMany({
      where: {
        name: {
          contains: name,
        },
      },
    });

    politicians.map((politician) => {
      politician.ratingsOutOf = politician.ratingsOutOf ? politician.ratingsOutOf.toString() : null;
    });
    res.status(200).json(politicians);
    // ...existing code...
  } catch (error) {
    console.error("Error fetching politicians:", error);
    res.status(500).json({ error: "Something went wrong" });
  }

}

module.exports = {
  createPoliticians,
  getPoliticiansByName
}