const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
// const mynewsdata = [
//   {
//     "title": "Blockbuster Sequel 'Avengers: Twilight' Announced",
//     "content": "Marvel Studios surprises fans with a sequel featuring the next generation of Avengers.",
//     "category": "Movies",
//     "source": "Variety",
//     "url": "https://variety.com/article/avengers-twilight",
//     "imageUrl": "https://images.cinemaexpress.com/uploads/user/imagelibrary/2025/7/avengers-twilight.jpg",
//     "publishedAt": "2025-07-26T10:00:00Z"
//   },
//   {
//     "title": "Nolan’s Next Sci-Fi Film 'Chronosphere' Set for 2026",
//     "content": "Christopher Nolan is back with a new mind-bending movie exploring time inversion on Mars.",
//     "category": "Movies",
//     "source": "Deadline",
//     "url": "https://deadline.com/article/nolan-chronosphere-2026",
//     "imageUrl": "https://img.filmcompanion.in/images/2025/07/chronosphere-nolan.jpg",
//     "publishedAt": "2025-07-25T09:30:00Z"
//   },
//   {
//     "title": "Priyanka Chopra Joins Cast of New James Bond Film",
//     "content": "Chopra will play a lead intelligence officer in Bond 27, marking a historic first for the franchise.",
//     "category": "Movies",
//     "source": "The Hollywood Reporter",
//     "url": "https://hollywoodreporter.com/news/priyanka-bond27",
//     "imageUrl": "https://images.indiatimes.com/2025/07/priyanka-bond.jpg",
//     "publishedAt": "2025-07-24T08:00:00Z"
//   },
//   {
//     "title": "'Baahubali 3' Teaser Breaks YouTube Record",
//     "content": "The much-awaited teaser garners over 50 million views within 24 hours.",
//     "category": "Movies",
//     "source": "India Today",
//     "url": "https://indiatoday.in/entertainment/baahubali-3-teaser-record",
//     "imageUrl": "https://stat3.bollywoodhungama.in/img/news/2025/07/baahubali3-teaser.jpg",
//     "publishedAt": "2025-07-23T12:00:00Z"
//   },
//   {
//     "title": "Shah Rukh Khan to Star in Rajkumar Hirani’s Next",
//     "content": "SRK’s next project is a family drama with a social twist, directed by Rajkumar Hirani.",
//     "category": "Movies",
//     "source": "Bollywood Hungama",
//     "url": "https://bollywoodhungama.com/news/srk-hirani-movie",
//     "imageUrl": "https://filmfare.wwmindia.com/content/2025/07/srknewfilm.jpg",
//     "publishedAt": "2025-07-22T18:45:00Z"
//   },
//   {
//     "title": "'The Joker Returns' Gets Oscar Buzz After Venice Premiere",
//     "content": "Joaquin Phoenix dazzles once again in this dark psychological thriller sequel.",
//     "category": "Movies",
//     "source": "IndieWire",
//     "url": "https://indiewire.com/news/joker-returns-review",
//     "imageUrl": "https://cdn.movieweb.com/articles/2025/07/joker2-venice-premiere.jpg",
//     "publishedAt": "2025-07-21T14:15:00Z"
//   },
//   {
//     "title": "Alia Bhatt Signs Three-Film Deal With Netflix",
//     "content": "Alia Bhatt will star in original thrillers, rom-coms, and drama series exclusively on the platform.",
//     "category": "Movies",
//     "source": "Hindustan Times",
//     "url": "https://hindustantimes.com/article/alia-bhatt-netflix-deal",
//     "imageUrl": "https://images.hindustantimes.com/2025/07/alia-netflix.jpg",
//     "publishedAt": "2025-07-20T11:30:00Z"
//   },
//   {
//     "title": "Korean Film 'Eclipse of Us' Wins Palme d'Or at Cannes",
//     "content": "A poetic drama exploring memory and identity takes home the highest honor at the film festival.",
//     "category": "Movies",
//     "source": "BBC",
//     "url": "https://bbc.com/news/entertainment-eclipse-of-us-cannes",
//     "imageUrl": "https://www.bbc.com/images/2025/07/eclipse-cannes.jpg",
//     "publishedAt": "2025-07-19T16:20:00Z"
//   },
//   {
//     "title": "New Harry Potter Spinoff Series in Development at HBO",
//     "content": "The wizarding world expands with a series set 100 years before Harry's birth.",
//     "category": "Movies",
//     "source": "Entertainment Weekly",
//     "url": "https://ew.com/news/harry-potter-prequel-hbo",
//     "imageUrl": "https://ewmedia.com/2025/07/harrypotter-prequel.jpg",
//     "publishedAt": "2025-07-18T13:00:00Z"
//   },
//   {
//     "title": "‘Pushpa 2’ Trailer Drops, Fans Go Wild",
//     "content": "Allu Arjun returns with swagger in the explosive trailer for Pushpa: The Rule.",
//     "category": "Movies",
//     "source": "Times of India",
//     "url": "https://timesofindia.indiatimes.com/entertainment/pushpa-2-trailer",
//     "imageUrl": "https://static.toiimg.com/photo/2025/07/pushpa2.jpg",
//     "publishedAt": "2025-07-17T09:00:00Z"
//   }
// ];
const businessNews = [
  {
    "title": "Adani Group secures $2.5B investment from global sovereign funds",
    "content": "Adani Group has attracted a $2.5 billion investment from sovereign wealth funds in the Middle East, boosting confidence in India’s infrastructure growth story.",
    "category": "Business",
    "reads": 1750,
    "source": "Bloomberg",
    "url": "https://www.bloomberg.com/news/articles/2025-08-23/adani-group-secures-2-5b-investment-from-global-sovereign-funds",
    "imageUrl": "https://storage.googleapis.com/mangementbkt/adani.avif",
    "publishedAt": "2025-08-23T09:30:00Z"
  },
  {
    "title": "TCS unveils AI-driven enterprise suite for global clients",
    "content": "Tata Consultancy Services launched a new AI-powered suite designed to automate workflows for banking, retail, and healthcare clients across 30 countries.",
    "category": "Business",
    "reads": 1420,
    "source": "Economic Times",
    "url": "https://economictimes.indiatimes.com/tech/ites/tcs-unveils-ai-driven-enterprise-suite-for-global-clients/articleshow/123478903.cms",
    "imageUrl": "https://storage.googleapis.com/mangementbkt/tcs.png",
    "publishedAt": "2025-08-23T12:00:00Z"
  },
  {
    "title": "Reliance Retail in talks with Walmart for strategic e-commerce tie-up",
    "content": "Reliance Retail is reportedly negotiating with Walmart for a partnership that could reshape India’s fast-growing online retail sector.",
    "category": "Business",
    "reads": 2200,
    "source": "Reuters",
    "url": "https://www.reuters.com/business/reliance-retail-walmart-in-strategic-ecommerce-tieup-talks-2025-08-23",
    "imageUrl": "https://storage.googleapis.com/mangementbkt/reliance-walmart.avif",//https://storage.googleapis.com/mangementbkt/reliance-walmart.avif
    "publishedAt": "2025-08-23T15:00:00Z"
  },
  {
    "title": "HDFC Bank announces record quarterly profit amid digital push",
    "content": "HDFC Bank posted its highest-ever quarterly profit at ₹18,200 crore, driven by digital adoption and a surge in retail loan growth.",
    "category": "Business",
    "reads": 1960,
    "source": "Mint",
    "url": "https://www.livemint.com/companies/news/hdfc-bank-reports-record-quarterly-profit-18200-crore-digital-push-2025-08-23",
    "imageUrl": "https://storage.googleapis.com/mangementbkt/hdfc-profit.jpg",
    "publishedAt": "2025-08-23T18:00:00Z"
  },
  {
    "title": "Infosys bags $1.8B contract from European telecom giant",
    "content": "Infosys signed a $1.8 billion multi-year deal with a leading European telecom operator to modernize its digital infrastructure and cloud services.",
    "category": "Business",
    "reads": 2340,
    "source": "Business Standard",
    "url": "https://www.business-standard.com/article/companies/infosys-bags-1-8b-contract-from-european-telecom-giant-125082301234_1.html",
    "imageUrl": "https://storage.googleapis.com/mangementbkt/infosys.avif",
    "publishedAt": "2025-08-23T20:30:00Z"
  }
]



async function main() {
  await prisma.news.createMany({
    data: businessNews


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
