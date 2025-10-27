const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();




async function getTrendingNews(req , res) {


    try {
        const trendingNews = await prisma.news.findMany({});
        return res.status(200).json(trendingNews);
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Something went wrong" , error : error});
        
    }
    
};



module.exports = { getTrendingNews };