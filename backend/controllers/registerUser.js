const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function loginUser(req, res) {
    try {
        console.log(req.query);
           const { email, password } = req.query; // receiving via query

        console.log(email, password);

        const user = await prisma.user.findUnique({
            where: { email: email }
        });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        if (user.password !== password) {
            return res.status(401).json({ message: "Invalid password" });
        }

        return res.status(200).json({ message: "Login successful", user });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Something went wrong" });
    }
}

async function registerUser(req , res) {
    try {

        const {name , email , password , contact} = req.body;
        console.log(name , email , password , contact);



        const isUniqueEmail = await prisma.user.findUnique({
            where : {
                email : email
            }
        });
        if(isUniqueEmail){
            return res.status(400).json({ message: "Email already exists" });
        }
        

        const user = await prisma.user.create({
            data : {
                name : name,
                email : email,
                password : password,
                phoneNumber : contact
            }
        });

        return res.status(200).json({ message: "User registered successfully" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Something went wrong" });
        
    }
    
};


module.exports = { registerUser , loginUser };