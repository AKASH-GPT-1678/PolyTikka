const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function getMovieNews(req, res) {
    try {
        const movieNews = await prisma.news.findMany({
            where: {
                category: "Movies"
            },
            take: 3,
        });

        console.log("Fetched movie news:", movieNews);

        return res.status(200).json({ data: movieNews });
    } catch (error) {
        console.error("Error fetching movie news:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
};


module.exports = { getMovieNews };