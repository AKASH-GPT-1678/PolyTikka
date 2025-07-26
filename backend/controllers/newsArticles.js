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


module.exports = { getPoliticalNews };