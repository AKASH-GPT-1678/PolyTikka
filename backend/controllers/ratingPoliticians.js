const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();



async function ratePolitician(req, res) {
    const { politicianId } = req.params; // politician ID from URL
    const { rating } = req.body; // rating from body (e.g., 1–5)

    try {
        if (!politicianId || !rating) {
            return res.status(400).json({ message: "Politician ID and rating are required" });
        }

        // Find existing politician
        const politician = await prisma.politician.findUnique({
            where: { id: politicianId }
        });

        if (!politician) {
            return res.status(404).json({ message: "Politician not found" });
        }

        // Calculate new rating stats
        const totalRatingsCount = Number(politician.ratingsOutOf || 0) + 1;
        const totalRatingSum = (politician.avgRatings * (totalRatingsCount - 1)) + rating;
        const newAverageRating = Math.round(totalRatingSum / totalRatingsCount);

        // Update politician
        await prisma.politician.update({
            where: { id: politicianId },
            data: {
                avgRatings: newAverageRating,
                ratingsOutOf: totalRatingsCount
            }
        });

        return res.status(200).json({ 
            message: "Politician rated successfully",
            newAverageRating
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}



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