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




async function getPoliticiansByNam(req, res) {
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

};

// Controller function to search politicians by name
const getPoliticiansByName = async (req, res) => {
  try {
    const {name} = req.params;
    
    if (!name || name.trim().length === 0) {
      return res.status(400).json({
        success: false,
        message: "Name parameter is required"
      });
    }

    // Find single politician with ALL core data + ALL relations
    const politician = await prisma.politician.findFirst({
      where: {
        name: {
          equals: name,
          mode: 'insensitive'
        }
      },
      select: {
        // Core politician data
        id: true,
        name: true,
        party: true,
        state: true,
        constituency: true,
        age: true,
        gender: true,
        education: true,
        criminalCases: true,
        totalAssets: true,
        position: true,
        biography: true,
        profileImage: true,
        avgRatings: true,
        numOfSearched: true,
        ratingsOutOf: true,
        createdAt: true,
        updatedAt: true,
        
        // All relations
        workHistory: true,
        electionResult: true,
        familyDetail: true,
        assetDetail: true,
        criminalCase: true,
        PublicProfile: true,
        newsArticles: true,
        Comment: true
      }
    });

    // If politician not found
    if (!politician) {
      return res.status(404).json({
        success: false,
        message: "Politician not found"
      });
    }

    // Convert BigInt to string for JSON serialization
    const serializedPolitician = {
      ...politician,
      ratingsOutOf: politician.ratingsOutOf ? politician.ratingsOutOf.toString() : null
    };

    // Update search count for the found politician
    await prisma.politician.update({
      where: {
        id: politician.id
      },
      data: {
        numOfSearched: {
          increment: 1
        }
      }
    });

    // Return politician with all core data + all relations
    return res.status(200).json({data : serializedPolitician});

  } catch (error) {
    console.error('Error searching politician:', error);
    return res.status(500).json({
      success: false,
      message: "Internal server error while searching politician",
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};

module.exports = {
  createPoliticians,
  getPoliticiansByName,
  getPoliticiansByNam
}