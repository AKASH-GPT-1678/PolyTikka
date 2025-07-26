const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();


async function main() {
  await prisma.news.createMany({
    data: [
      {
        title: "Modi visits Maldives to strengthen regional ties",
        content: "Prime Minister Modi's visit to the Maldives aims at deepening strategic and economic partnerships.",
        category: "Political",
        source: "Hindustan Times",
        url: "https://hindustantimes.com/article/modi-maldives",
        imageUrl: "https://www.hindustantimes.com/ht-img/img/2025/07/26/550x309/modi_maldives_1753536465606_1753536485766.jpg",
        publishedAt: "2025-07-25T10:00:00Z"
      },
      {
        title: "Indian markets surge after tech stocks rally",
        content: "The BSE Sensex and NSE Nifty saw a sharp rise following gains in the technology sector.",
        category: "Business",
        source: "Times of India",
        url: "https://toi.com/article/market-surge",
        imageUrl: "https://static.toiimg.com/thumb/msid-122924826,imgsize-38252,width-400,resizemode-4/122924826.jpg",
        publishedAt: "2025-07-25T11:30:00Z"
      },
      {
        title: "New education policy announced by central government",
        content: "The new education policy focuses on digital learning and multilingual education at all levels.",
        category: "Political",
        source: "LiveMint",
        url: "https://livemint.com/article/education-policy",
        imageUrl: "https://www.livemint.com/lm-img/img/2025/07/26/600x338/Screenshot_2025-07-26_151322_1753523009696_1753523025140.png",
        publishedAt: "2025-07-24T09:15:00Z"
      },
      {
        title: "Ranbir Kapoor’s new film breaks box office records",
        content: "The film grossed ₹300 crores globally in just five days after release.",
        category: "Entertainment",
        source: "News18",
        url: "https://news18.com/article/ranbir-boxoffice",
        imageUrl: "https://images.news18.com/ibnlive/uploads/2025/07/Untitled-design-2025-07-26T141138.558-2025-07-08f92cb1b6c55d0f872e725fed410d12-16x9.jpg?impolicy=website&width=640&height=360",
        publishedAt: "2025-07-24T08:00:00Z"
      },
      {
        title: "Environmentalists protest over deforestation plans",
        content: "Massive protests were held against the forest clearance in the Western Ghats region.",
        category: "Environment",
        source: "NewsBand",
        url: "https://newsband.in/article/forest-protest",
        imageUrl: "https://www.newsband.in/uploads/blog_main_img/e48b111ee8a2e22352fd4887dacba34d_1.jpg",
        publishedAt: "2025-07-23T14:00:00Z"
      },
      {
        title: "Opposition unites against central bill",
        content: "All major opposition parties have agreed to oppose the new agricultural reform bill.",
        category: "Political",
        source: "NDTV",
        url: "https://ndtv.com/article/opposition-unites",
        imageUrl: "https://www.hindustantimes.com/ht-img/img/2025/07/26/550x309/modi_maldives_1753536465606_1753536485766.jpg",
        publishedAt: "2025-07-23T13:30:00Z"
      },
      {
        title: "Cricket team prepares for Asia Cup",
        content: "The Indian cricket team begins training for the upcoming Asia Cup tournament in Dubai.",
        category: "Sports",
        source: "Times of India",
        url: "https://toi.com/article/asia-cup-training",
        imageUrl: "https://static.toiimg.com/thumb/msid-122924826,imgsize-38252,width-400,resizemode-4/122924826.jpg",
        publishedAt: "2025-07-22T07:45:00Z"
      },
      {
        title: "Parliament passes controversial surveillance bill",
        content: "The government passed a new bill allowing real-time digital surveillance by agencies.",
        category: "Political",
        source: "LiveMint",
        url: "https://livemint.com/article/surveillance-bill",
        imageUrl: "https://www.livemint.com/lm-img/img/2025/07/26/600x338/Screenshot_2025-07-26_151322_1753523009696_1753523025140.png",
        publishedAt: "2025-07-21T16:20:00Z"
      },
      {
        title: "Heavy rains lash Mumbai, local trains delayed",
        content: "Mumbai received record rainfall, disrupting daily life and halting rail services.",
        category: "Weather",
        source: "NewsBand",
        url: "https://newsband.in/article/mumbai-rains",
        imageUrl: "https://www.newsband.in/uploads/blog_main_img/e48b111ee8a2e22352fd4887dacba34d_1.jpg",
        publishedAt: "2025-07-21T06:00:00Z"
      },
      {
        title: "Congress leader announces rally against inflation",
        content: "A mass rally will be conducted to protest against rising prices of essential goods.",
        category: "Political",
        source: "News18",
        url: "https://news18.com/article/congress-rally-inflation",
        imageUrl: "https://images.news18.com/ibnlive/uploads/2025/07/Untitled-design-2025-07-26T141138.558-2025-07-08f92cb1b6c55d0f872e725fed410d12-16x9.jpg?impolicy=website&width=640&height=360",
        publishedAt: "2025-07-20T11:00:00Z"
      },
      {
        title: "Government launches new MSME portal",
        content: "The new MSME portal aims to support small businesses with credit and tax benefits.",
        category: "Business",
        source: "NDTV",
        url: "https://ndtv.com/article/msme-portal",
        imageUrl: "https://www.hindustantimes.com/ht-img/img/2025/07/26/550x309/modi_maldives_1753536465606_1753536485766.jpg",
        publishedAt: "2025-07-19T09:45:00Z"
      },
      {
        title: "Government reshuffles cabinet ministers",
        content: "Several ministers were reassigned to new portfolios in a major reshuffle.",
        category: "Political",
        source: "Times of India",
        url: "https://toi.com/article/cabinet-reshuffle",
        imageUrl: "https://static.toiimg.com/thumb/msid-122924826,imgsize-38252,width-400,resizemode-4/122924826.jpg",
        publishedAt: "2025-07-19T13:00:00Z"
      },
      {
        title: "India secures gold at World Chess Championship",
        content: "Indian grandmaster wins gold medal, defeating top players from Russia and China.",
        category: "Sports",
        source: "LiveMint",
        url: "https://livemint.com/article/chess-gold-india",
        imageUrl: "https://www.livemint.com/lm-img/img/2025/07/26/600x338/Screenshot_2025-07-26_151322_1753523009696_1753523025140.png",
        publishedAt: "2025-07-18T17:00:00Z"
      },
      {
        title: "Lok Sabha debates climate finance proposal",
        content: "Lawmakers debated a proposal to increase funds allocated to climate adaptation.",
        category: "Political",
        source: "NewsBand",
        url: "https://newsband.in/article/loksabha-climate",
        imageUrl: "https://www.newsband.in/uploads/blog_main_img/e48b111ee8a2e22352fd4887dacba34d_1.jpg",
        publishedAt: "2025-07-17T12:00:00Z"
      },
      {
        title: "NASA plans mission to Europa in 2026",
        content: "The space agency announced a mission to Jupiter's moon Europa to look for life.",
        category: "Science",
        source: "News18",
        url: "https://news18.com/article/nasa-europa",
        imageUrl: "https://images.news18.com/ibnlive/uploads/2025/07/Untitled-design-2025-07-26T141138.558-2025-07-08f92cb1b6c55d0f872e725fed410d12-16x9.jpg?impolicy=website&width=640&height=360",
        publishedAt: "2025-07-16T10:30:00Z"
      },
      {
        title: "PM Modi addresses nation on Independence Day",
        content: "In his speech, PM Modi emphasized unity, innovation, and digital India.",
        category: "Political",
        source: "Hindustan Times",
        url: "https://hindustantimes.com/article/independence-address",
        imageUrl: "https://www.hindustantimes.com/ht-img/img/2025/07/26/550x309/modi_maldives_1753536465606_1753536485766.jpg",
        publishedAt: "2025-07-15T08:00:00Z"
      },
      {
        title: "ISRO launches 5 satellites into low earth orbit",
        content: "India’s space agency successfully deployed 5 communication satellites.",
        category: "Technology",
        source: "Times of India",
        url: "https://toi.com/article/isro-launch",
        imageUrl: "https://static.toiimg.com/thumb/msid-122924826,imgsize-38252,width-400,resizemode-4/122924826.jpg",
        publishedAt: "2025-07-14T07:00:00Z"
      },
      {
        title: "Parliament adjourned amid protests over budget cut",
        content: "Session was adjourned after MPs protested against the education budget cut.",
        category: "Political",
        source: "LiveMint",
        url: "https://livemint.com/article/budget-cut-protest",
        imageUrl: "https://www.livemint.com/lm-img/img/2025/07/26/600x338/Screenshot_2025-07-26_151322_1753523009696_1753523025140.png",
        publishedAt: "2025-07-13T11:00:00Z"
      },
      {
        title: "Taj Mahal to go solar in new green initiative",
        content: "Government plans to install solar panels to reduce energy use at heritage site.",
        category: "Environment",
        source: "NewsBand",
        url: "https://newsband.in/article/tajmahal-solar",
        imageUrl: "https://www.newsband.in/uploads/blog_main_img/e48b111ee8a2e22352fd4887dacba34d_1.jpg",
        publishedAt: "2025-07-12T09:00:00Z"
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
