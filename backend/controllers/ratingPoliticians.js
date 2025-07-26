const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();



async function ratePolitician(req, res) {
    const { rating } = req.params;

    try {

        return res.status(200).json({ message: "Politician rated successfully" });
    } catch (error) {

    }

};



async function topRatedPoliticians(req, res) {
    try {
        const topPoliticians = await prisma.politician.findMany({
            orderBy: {
                avgRatings: "desc",
            },
            take: 5,
        });

        // Serialize BigInt to string
        const serialized = topPoliticians.map(politician => ({
            ...politician,
            ratingsOutOf: politician.ratingsOutOf?.toString(), // convert BigInt
        }));

        return res.status(200).json({ data: serialized });
    } catch (error) {
        console.error("Error fetching top politicians:", error);
        return res.status(500).json({ error: error })
    }



}




async function mostSearhchedPoliticians(req, res) {
    try {
        const topPoliticians = await prisma.politician.findMany({
            orderBy: {
                numOfSearched: "desc",
            },
            take: 5,
        });

        // Serialize BigInt to string
        const serialized = topPoliticians.map(politician => ({
            ...politician,
            ratingsOutOf: politician.ratingsOutOf?.toString(), // convert BigInt
        }));


        return res.status(200).json({ data: serialized });
    } catch (error) {
        console.error("Error fetching top politicians:", error);
        return res.status(500).json({ error: error })
    }

}

module.exports = { ratePolitician, topRatedPoliticians, mostSearhchedPoliticians };