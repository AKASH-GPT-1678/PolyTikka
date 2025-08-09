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
const sampleNews = [
  {
    title: "Shadow City",
    content: "A gripping noir thriller about a detective unraveling the secrets of a corrupt metropolis.",
    category: "Movies",
    reads: 1450,
    source: "BBC",
    url: "https://www.bbc.com/movies/shadow-city",
    imageUrl: "https://example.com/images/movies1.jpg",
    publishedAt: new Date("2025-07-01T10:00:00Z")
  },
  {
    title: "Eternal Skies",
    content: "A breathtaking sci-fi epic exploring humanity's first journey beyond the Milky Way.",
    category: "Movies",
    reads: 1675,
    source: "NDTV",
    url: "https://www.ndtv.com/movies/eternal-skies",
    imageUrl: "https://example.com/images/movies2.jpg",
    publishedAt: new Date("2025-07-02T12:30:00Z")
  },
  {
    title: "The Silent Oath",
    content: "A historical drama about loyalty, betrayal, and the untold heroes of independence.",
    category: "Movies",
    reads: 980,
    source: "Times of India",
    url: "https://timesofindia.indiatimes.com/movies/the-silent-oath",
    imageUrl: "https://example.com/images/movies3.jpg",
    publishedAt: new Date("2025-07-03T09:15:00Z")
  },
  {
    title: "Neon Horizon",
    content: "A cyberpunk action film following a hacker's fight against a megacorporation.",
    category: "Movies",
    reads: 1540,
    source: "BBC",
    url: "https://www.bbc.com/movies/neon-horizon",
    imageUrl: "https://example.com/images/movies4.jpg",
    publishedAt: new Date("2025-07-04T15:45:00Z")
  },
  {
    title: "Under the Banyan Moon",
    content: "A romantic drama set in rural India, where tradition clashes with modern love.",
    category: "Movies",
    reads: 1120,
    source: "NDTV",
    url: "https://www.ndtv.com/movies/under-the-banyan-moon",
    imageUrl: "https://example.com/images/movies5.jpg",
    publishedAt: new Date("2025-07-05T18:20:00Z")
  },
  {
    title: "Steel Wings",
    content: "An inspiring war story of fighter pilots during the 1971 Indo-Pak war.",
    category: "Movies",
    reads: 1300,
    source: "Times of India",
    url: "https://timesofindia.indiatimes.com/movies/steel-wings",
    imageUrl: "https://example.com/images/movies6.jpg",
    publishedAt: new Date("2025-07-06T08:00:00Z")
  },
  {
    title: "The Forgotten Island",
    content: "An adventure film where a group of explorers uncover ancient mysteries on a lost island.",
    category: "Movies",
    reads: 1760,
    source: "BBC",
    url: "https://www.bbc.com/movies/the-forgotten-island",
    imageUrl: "https://example.com/images/movies7.jpg",
    publishedAt: new Date("2025-07-07T21:10:00Z")
  },
  {
    title: "Dancing Through Time",
    content: "A musical romance that blends past and present through a magical time-travel twist.",
    category: "Movies",
    reads: 940,
    source: "NDTV",
    url: "https://www.ndtv.com/movies/dancing-through-time",
    imageUrl: "https://example.com/images/movies8.jpg",
    publishedAt: new Date("2025-07-08T14:25:00Z")
  },
  {
    title: "Blood and Sand",
    content: "A gritty revenge drama set in the deserts of Rajasthan.",
    category: "Movies",
    reads: 1230,
    source: "Times of India",
    url: "https://timesofindia.indiatimes.com/movies/blood-and-sand",
    imageUrl: "https://example.com/images/movies9.jpg",
    publishedAt: new Date("2025-07-09T19:40:00Z")
  },
  {
    title: "Digital Shadows",
    content: "A cyber-crime thriller exploring the dark web and stolen identities.",
    category: "Movies",
    reads: 1500,
    source: "BBC",
    url: "https://www.bbc.com/movies/digital-shadows",
    imageUrl: "https://example.com/images/movies10.jpg",
    publishedAt: new Date("2025-07-10T20:10:00Z")
  }
]


async function main() {
  await prisma.news.createMany({
    data: sampleNews


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
