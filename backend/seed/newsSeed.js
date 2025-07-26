const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();


async function main() {
  await prisma.news.createMany({
    data: [
      {
        title: "Government Launches New Digital ID Program",
        content: "The government has launched a new digital identity program aimed at streamlining public services and enhancing security.",
        category: "Politics",
        source: "NDTV",
        url: "https://ndtv.com/news/digital-id",
        imageUrl: "https://via.placeholder.com/300x200?text=Digital+ID",
        publishedAt: new Date('2024-07-20T10:00:00Z')
      },
      {
        title: "Opposition Criticizes Budget Cuts in Education Sector",
        content: "The opposition parties have strongly criticized the recent budget cuts in the education sector, calling it a step backward.",
        category: "Politics",
        source: "Times of India",
        url: "https://timesofindia.indiatimes.com/education-budget-cuts",
        imageUrl: "https://via.placeholder.com/300x200?text=Budget+Cuts",
        publishedAt: new Date('2024-07-21T12:30:00Z')
      },
      {
        title: "AI Breakthrough Promises Faster Drug Discovery",
        content: "A new AI model is revolutionizing how researchers approach drug discovery, significantly speeding up early testing.",
        category: "Technology",
        source: "BBC",
        url: "https://bbc.com/news/ai-drug-discovery",
        imageUrl: "https://via.placeholder.com/300x200?text=AI+Breakthrough",
        publishedAt: new Date('2024-07-22T09:45:00Z')
      },
      {
        title: "New Smartphone Launch Sets Sales Records in India",
        content: "The latest smartphone model has shattered previous sales records in India with over 2 million units sold in 48 hours.",
        category: "Technology",
        source: "Gadgets360",
        url: "https://gadgets.ndtv.com/news/smartphone-launch-records",
        imageUrl: "https://via.placeholder.com/300x200?text=Smartphone+Launch",
        publishedAt: new Date('2024-07-22T16:15:00Z')
      },
      {
        title: "Stock Markets Hit Record Highs Amid Global Optimism",
        content: "Markets around the world are surging, with major indices hitting record highs amid renewed investor confidence.",
        category: "Business",
        source: "Economic Times",
        url: "https://economictimes.indiatimes.com/stock-market-highs",
        imageUrl: "https://via.placeholder.com/300x200?text=Stock+Market",
        publishedAt: new Date('2024-07-23T08:00:00Z')
      },
      {
        title: "RBI Raises Interest Rates to Tame Inflation",
        content: "The Reserve Bank of India has announced a rate hike in a bid to control rising inflation and stabilize the economy.",
        category: "Business",
        source: "Mint",
        url: "https://livemint.com/news/rbi-interest-hike",
        imageUrl: "https://via.placeholder.com/300x200?text=RBI+Rates",
        publishedAt: new Date('2024-07-23T13:20:00Z')
      },
      {
        title: "India Clinches Victory in Test Series Against England",
        content: "In an exhilarating finish, India secured a test series win over England, continuing their strong cricketing form.",
        category: "Sports",
        source: "Cricbuzz",
        url: "https://cricbuzz.com/news/india-test-win",
        imageUrl: "https://via.placeholder.com/300x200?text=India+Wins",
        publishedAt: new Date('2024-07-24T11:30:00Z')
      },
      {
        title: "Olympic Champion Sets New World Record in Swimming",
        content: "An Olympic gold medalist has set a new world record in the 100m freestyle event at an international meet.",
        category: "Sports",
        source: "ESPN",
        url: "https://espn.com/olympics/swimming-record",
        imageUrl: "https://via.placeholder.com/300x200?text=World+Record",
        publishedAt: new Date('2024-07-24T18:10:00Z')
      },
      {
        title: "Bollywood Blockbuster Earns ₹300 Crores in Opening Week",
        content: "The latest Bollywood hit has crossed ₹300 crore in just 7 days, making it one of the biggest openers of the year.",
        category: "Entertainment",
        source: "India Today",
        url: "https://indiatoday.in/bollywood-blockbuster",
        imageUrl: "https://via.placeholder.com/300x200?text=Blockbuster",
        publishedAt: new Date('2024-07-25T14:00:00Z')
      },
      {
        title: "Famous Singer Announces Surprise World Tour",
        content: "Popular singer shocks fans by announcing an unexpected world tour starting this September in Asia.",
        category: "Entertainment",
        source: "Rolling Stone India",
        url: "https://rollingstoneindia.com/world-tour-announcement",
        imageUrl: "https://via.placeholder.com/300x200?text=World+Tour",
        publishedAt: new Date('2024-07-25T19:30:00Z')
      }
    ]
  });

  console.log("✅ Seeded news articles.");
}

main()
  .catch((e) => {
    console.error("❌ Seeding error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
