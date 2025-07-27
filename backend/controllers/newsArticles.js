const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getPoliticalNews = async (req, res) => {

    try {

        const topNews = await prisma.news.findMany({
            where: {
                category: "Political"
            }
        });
        console.log(topNews);

        return res.status(200).json({ data: topNews });

    } catch (error) {

        console.log(error);
        return res.status(500).json({ message: "Something went wrong", error: error });

    }

};


async function getNewsByCategory(req, res) {
    try {
        const { category } = req.params;
        const news = await prisma.news.findMany({
            where: {
                category: category
            }
        });
        return res.status(200).json({ data: news });
    } catch (error) {
        console.log(error);
    }
};
// Controller: getTopNewsByReads.js

async function getTopNewsByReads(req, res) {
    try {

        const category = req.query.category;
        const news = await prisma.news.findMany({
            where: {
                category: category
            },
            orderBy: {
                reads: 'desc'
            },
            take: 5
        });

        console.log("Top news articles by reads:", news);

        return res.status(200).json({ data: news });
    } catch (error) {
        console.error("Error fetching top news by reads:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}





module.exports = { getPoliticalNews, getNewsByCategory, getTopNewsByReads };