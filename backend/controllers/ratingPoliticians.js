const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();



async function ratePolitician(req , res) {
    const { rating } = req.params;

    try {
        
    return res.status(200).json({ message: "Politician rated successfully" });
    } catch (error) {
        
    }
    
}

module.exports = { ratePolitician };