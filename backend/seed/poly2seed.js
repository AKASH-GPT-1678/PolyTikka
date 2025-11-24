// Prisma Seed Data for 10 Politicians with All Relations
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function seedPoliticians() {
  await prisma.politician.create({
  data: {
    name: "Narendra Modi",
    party: "Bharatiya Janata Party (BJP)",
    state: "Gujarat",
    constituency: "Varanasi",
    age: 74,
    gender: "Male",
    education: "MA (Political Science)",
    criminalCases: 0,
    totalAssets: 3023.5,
    position: "Prime Minister of India",
    biography:
      "Narendra Modi is the 14th Prime Minister of India, known for economic reforms, foreign policy leadership, and large-scale governance initiatives.",
    profileImage:
      "https://polytika.s3.eu-north-1.amazonaws.com/narendra_modi.jpg",
    avgRatings: 4,
    numOfSearched: 1200450,
    ratingsOutOf: BigInt(2240000),

    // -------------------- Work History --------------------
    workHistory: {
      create: [
        {
          role: "Chief Minister",
          startYear: 2001,
          endYear: 2014,
          constituency: "Maninagar",
          state: "Gujarat"
        },
        {
          role: "Prime Minister",
          startYear: 2014,
          endYear: null,
          constituency: "Varanasi",
          state: "Uttar Pradesh"
        }
      ]
    },

    // -------------------- Election History --------------------
    electionResult: {
      create: [
        {
          year: 2019,
          electionType: "Lok Sabha",
          constituency: "Varanasi",
          state: "Uttar Pradesh",
          party: "BJP",
          result: "✅ Won",
          totalVotes: 692260,
          voteShare: 63.6,
          opponentName: "Shalini Yadav (SP)",
          victoryMargin: 479505
        },
        {
          year: 2014,
          electionType: "Lok Sabha",
          constituency: "Varanasi",
          state: "Uttar Pradesh",
          party: "BJP",
          result: "✅ Won",
          totalVotes: 581022,
          voteShare: 56.4,
          opponentName: "Arvind Kejriwal (AAP)",
          victoryMargin: 371784
        }
      ]
    },

    // -------------------- Family --------------------
    familyDetail: {
      create: {
        spouse: "Jashodaben Narendrabhai Modi",
        children: 0,
        fatherName: "Damodardas Mulchand Modi",
        motherName: "Heeraben Modi",
        background: "Born into a modest family in Vadnagar, Gujarat.",
        familyProfession: "Tea & small business",
        economicStatus: "Lower Middle",
        familyOrigin: "Urban",
        community: "OBC",
        politicalLegacy: "Self-Made"
      }
    },

    // -------------------- Assets --------------------
    assetDetail: {
      create: {
        totalAssets: 3023.5,
        movableAssets: 1723.5,
        immovableAssets: 1300
      }
    },

    // -------------------- Criminal Cases --------------------
    criminalCase: {
      create: [
        {
          title: "None",
          description: "No criminal convictions or pending criminal cases.",
          status: "Clean",
          filedAt: null
        }
      ]
    },

    // -------------------- Public Profile --------------------
    PublicProfile: {
      create: {
        coreIdeology: "Nationalism and Development",
        visionStatement:
          "To transform India into a global economic and cultural powerhouse.",
        publicPerception:
          "Highly influential leader with strong global presence and mass appeal.",
        keyStrengths: [
          "Leadership",
          "Public Speaking",
          "Foreign Policy"
        ],
        focusAreas: [
          "Infrastructure",
          "Economy",
          "Welfare Schemes"
        ],
        leadershipStyle: "Strong and Decisive"
      }
    },

    // -------------------- News Articles --------------------
    newsArticles: {
      create: [
        {
          headline: "PM Modi launches new infrastructure initiatives",
          url: "https://thehindu.com/modi-infra-initiatives",
          publishedAt: new Date("2024-02-15T00:00:00.000Z")
        },
        {
          headline: "India strengthens global ties under PM Modi",
          url: "https://indianexpress.com/modi-global-ties",
          publishedAt: new Date("2024-03-01T00:00:00.000Z")
        }
      ]
    }
  }
});
  
}







[ 'https://polytika.s3.eu-north-1.amazonaws.com/asauddin_owaisi.jpg',
  "https://polytika.s3.eu-north-1.amazonaws.com/rajnath_singh.jpg",
  "https://polytika.s3.eu-north-1.amazonaws.com/shashi-tharoor.jpg",
  "https://polytika.s3.eu-north-1.amazonaws.com/amit-shah.jpg"
]



seedPoliticians()
  .catch((e) => {
    console.error("❌ Seeding error:", e);
    process.exit(1);
  })
  .finally(async () => {
    console.log("✅ Seeding finished");
    await prisma.$disconnect();
  });