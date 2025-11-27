const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function seedPoliticians() {
  await prisma.politician.create({
    data: {
      name: "Nirmala Sitharaman",
      party: "Bharatiya Janata Party (BJP)",
      state: "Karnataka",
      constituency: "Rajya Sabha",
      age: 65,
      gender: "Female",
      education: "B.A. in Economics, Seethalakshmi Ramaswami College, Tiruchirappalli; M.A. in Economics and M.Phil. in Indo-European Textile Trade, Jawaharlal Nehru University",
      criminalCases: 0,
      totalAssets: 3450.7,
      position: "Minister of Finance and Corporate Affairs, Government of India",
      biography:
        "Nirmala Sitharaman is India's Finance Minister and the first full-time female Finance Minister of India. A seasoned administrator and economist, she has held various ministerial portfolios and is known for her decisive leadership in economic policy-making and financial reforms.",
      profileImage:
        "https://polytika.s3.eu-north-1.amazonaws.com/nirmala_sitharaman.jpg",
      avgRatings: 3.9,
      numOfSearched: 680000,
      ratingsOutOf: BigInt(1350000),

      // -------------------- Work History --------------------
      workHistory: {
        create: [
          {
            role: "National Spokesperson, BJP",
            startYear: 2010,
            endYear: 2014,
            constituency: null,
            state: null
          },
          {
            role: "Member of Parliament, Rajya Sabha",
            startYear: 2014,
            endYear: 2020,
            constituency: "Rajya Sabha",
            state: "Karnataka"
          },
          {
            role: "Minister of State (Independent Charge), Ministry of Commerce and Industry",
            startYear: 2014,
            endYear: 2017,
            constituency: "Rajya Sabha",
            state: "Karnataka"
          },
          {
            role: "Minister of Defence",
            startYear: 2017,
            endYear: 2019,
            constituency: "Rajya Sabha",
            state: "Karnataka"
          },
          {
            role: "Member of Parliament, Rajya Sabha",
            startYear: 2020,
            endYear: null,
            constituency: "Rajya Sabha",
            state: "Karnataka"
          },
          {
            role: "Minister of Finance and Corporate Affairs",
            startYear: 2019,
            endYear: null,
            constituency: "Rajya Sabha",
            state: "Karnataka"
          }
        ]
      },

      // -------------------- Election History --------------------
      electionResult: {
        create: [
          {
            year: 2014,
            electionType: "Rajya Sabha",
            constituency: "Rajya Sabha",
            state: "Karnataka",
            party: "BJP",
            result: "✅ Elected",
            totalVotes: 1,
            voteShare: 1,
            opponentName: "N/A",
            victoryMargin: 1
          },
          {
            year: 2020,
            electionType: "Rajya Sabha",
            constituency: "Rajya Sabha",
            state: "Karnataka",
            party: "BJP",
            result: "✅ Re-elected",
            totalVotes: 1,
            voteShare: 1,
            opponentName: "N/A",
            victoryMargin: 1
          }
        ]
      },

      // -------------------- Family --------------------
      familyDetail: {
        create: {
          spouse: "Parakala Prabhakar (Political Analyst and Communications Advisor)",
          children: 1,
          fatherName: "Narayanan Sitharaman",
          motherName: "Savitri Sitharaman",
          background: "Born in a Tamil Brahmin family in Madurai, Tamil Nadu. Grew up in different parts of India due to her father's transferable job.",
          familyProfession: "Government Service and Academia",
          economicStatus: "Middle",
          familyOrigin: "Urban Professional Background",
          community: "General",
          politicalLegacy: "Self-Made"
        }
      },

      // -------------------- Assets --------------------
      assetDetail: {
        create: {
          totalAssets: 3450.7,
          movableAssets: 2100.4,
          immovableAssets: 1350.3
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
          coreIdeology: "Economic Liberalization, Fiscal Discipline, and Reform-Oriented Governance",
          visionStatement:
            "To build a self-reliant, globally competitive Indian economy through strategic reforms, inclusive growth, and sustainable development.",
          publicPerception:
            "Seen as a competent and detail-oriented administrator who handles complex economic portfolios with confidence. Known for presenting lengthy Union Budgets and navigating challenging economic scenarios including COVID-19 pandemic. Respected for breaking gender barriers in traditionally male-dominated ministries.",
          keyStrengths: [
            "Economic Policy Expertise",
            "Administrative Efficiency",
            "Crisis Management",
            "Parliamentary Communication",
            "Defense Knowledge",
            "Reform Implementation"
          ],
          focusAreas: [
            "Economic Policy",
            "Fiscal Management",
            "Financial Reforms",
            "Tax Policy",
            "Banking Sector",
            "Corporate Governance",
            "Infrastructure Financing",
            "Digital Economy"
          ],
          leadershipStyle: "Data-Driven and Methodical"
        }
      },

      // -------------------- News Articles --------------------
      newsArticles: {
        create: [
          {
            headline: "Finance Minister Sitharaman presents Union Budget 2024-25 focusing on inclusive growth",
            url: "https://thehindu.com/sitharaman-budget-2024-inclusive-growth",
            publishedAt: new Date("2024-07-23T00:00:00.000Z")
          },
          {
            headline: "Nirmala Sitharaman announces measures to boost MSME sector and exports",
            url: "https://indianexpress.com/sitharaman-msme-exports-boost",
            publishedAt: new Date("2024-09-12T00:00:00.000Z")
          },
          {
            headline: "FM addresses GST Council meeting, proposes key tax reforms",
            url: "https://thehindu.com/sitharaman-gst-council-reforms",
            publishedAt: new Date("2024-10-08T00:00:00.000Z")
          },
          {
            headline: "Finance Minister defends India's economic growth trajectory amid global challenges",
            url: "https://indianexpress.com/sitharaman-economic-growth-defense",
            publishedAt: new Date("2024-11-05T00:00:00.000Z")
          },
          {
            headline: "Sitharaman highlights capital expenditure push for infrastructure development",
            url: "https://thehindu.com/sitharaman-capex-infrastructure",
            publishedAt: new Date("2024-08-20T00:00:00.000Z")
          }
        ]
      }
    }


  });

}







['https://polytika.s3.eu-north-1.amazonaws.com/asauddin_owaisi.jpg',
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