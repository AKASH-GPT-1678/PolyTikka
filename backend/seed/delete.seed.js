
// Prisma Seed Data for 10 Politicians with All Relations
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();




async function deletePoliticians() {

    const politicianId = "9bba38aa-9d8f-49c8-9bd0-fc7f0ee65d22";

    await prisma.electionResult.deleteMany({ where: { politicianId } });
    await prisma.assetDetail.deleteMany({ where: { politicianId } });
    await prisma.criminalCase.deleteMany({ where: { politicianId } });
    await prisma.workHistory.deleteMany({ where: { politicianId } });
    await prisma.familyDetail.deleteMany({ where: { politicianId } });
    await prisma.publicProfile.deleteMany({ where: { politicianId } });
    await prisma.rating.deleteMany({ where: { politicianId } });
    await prisma.newsArticle.deleteMany({ where: { politicianId } });

    // Finally delete main record
    await prisma.politician.delete({ where: { id: politicianId } });
}


deletePoliticians()
    .catch((e) => {
        console.error("❌ Seeding error:", e);
        process.exit(1);
    })
    .finally(async () => {
        console.log("✅ Seeding finished");
        await prisma.$disconnect();
    });