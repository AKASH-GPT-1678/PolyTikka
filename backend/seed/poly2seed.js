// Prisma Seed Data for 10 Politicians with All Relations
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function seedPoliticians() {
  await prisma.politician.create({
  data: {
  name: "Dr. Subrahmanyam Jaishankar",
  party: "Bharatiya Janata Party (BJP)",
  state: "Gujarat",
  constituency: "Rajya Sabha",
  age: 69,
  gender: "Male",
  education: "B.A. in Political Science, St. Stephen's College, Delhi; M.A. in Political Science and M.Phil. in International Relations, Jawaharlal Nehru University; Ph.D. in International Relations, Jawaharlal Nehru University",
  criminalCases: 0,
  totalAssets: 4850.6,
  position: "Minister of External Affairs, Government of India",
  biography:
    "Dr. S. Jaishankar is India's External Affairs Minister and a distinguished diplomat with over four decades of experience in foreign service. Former Foreign Secretary and Ambassador to multiple countries, he is known for his articulate defense of India's national interests and strategic vision on the global stage.",
  profileImage:
    "https://polytika.s3.eu-north-1.amazonaws.com/s_jaishankar.webp",
  avgRatings: 4.2,
  numOfSearched: 720000,
  ratingsOutOf: BigInt(1400000),

  // -------------------- Work History --------------------
  workHistory: {
    create: [
      {
        role: "Indian Foreign Service Officer",
        startYear: 1977,
        endYear: 2015,
        constituency: null,
        state: null
      },
      {
        role: "Ambassador to Czech Republic",
        startYear: 2001,
        endYear: 2004,
        constituency: null,
        state: null
      },
      {
        role: "Ambassador to Singapore",
        startYear: 2007,
        endYear: 2009,
        constituency: null,
        state: null
      },
      {
        role: "High Commissioner to China",
        startYear: 2009,
        endYear: 2013,
        constituency: null,
        state: null
      },
      {
        role: "Ambassador to United States",
        startYear: 2013,
        endYear: 2015,
        constituency: null,
        state: null
      },
      {
        role: "Foreign Secretary of India",
        startYear: 2015,
        endYear: 2018,
        constituency: null,
        state: null
      },
      {
        role: "President, Global Corporate Affairs, Tata Sons",
        startYear: 2018,
        endYear: 2019,
        constituency: null,
        state: null
      },
      {
        role: "Member of Parliament, Rajya Sabha",
        startYear: 2019,
        endYear: null,
        constituency: "Rajya Sabha",
        state: "Gujarat"
      },
      {
        role: "Minister of External Affairs",
        startYear: 2019,
        endYear: null,
        constituency: "Rajya Sabha",
        state: "Gujarat"
      }
    ]
  },

  // -------------------- Election History --------------------
  electionResult: {
    create: [
      {
        year: 2019,
        electionType: "Rajya Sabha",
        constituency: "Rajya Sabha",
        state: "Gujarat",
        party: "BJP",
        result: "✅ Elected",
        totalVotes: 1,
        voteShare: 1,
        opponentName: "N/A",
        victoryMargin: 1
      },
      {
        year: 2024,
        electionType: "Rajya Sabha",
        constituency: "Rajya Sabha",
        state: "Gujarat",
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
      spouse: "Kyoko Jaishankar",
      children: 3,
      fatherName: "K. Subrahmanyam (Late, National Security Advisor and Strategic Affairs Expert)",
      motherName: "Sulochana Subrahmanyam",
      background: "Born into an intellectual family; father was a renowned strategic affairs expert and former member of the National Security Advisory Board.",
      familyProfession: "Diplomacy, Strategic Affairs, and Academia",
      economicStatus: "Upper Middle",
      familyOrigin: "Urban Professional Background",
      community: "General",
      politicalLegacy: "Self-Made in Politics, Legacy in Strategic Affairs"
    }
  },

  // -------------------- Assets --------------------
  assetDetail: {
    create: {
      totalAssets: 4850.6,
      movableAssets: 2950.4,
      immovableAssets: 1900.2
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
      coreIdeology: "Strategic Autonomy, National Interest, and Multi-Alignment",
      visionStatement:
        "To position India as a leading global power through strategic partnerships, economic diplomacy, and unwavering defense of national interests.",
      publicPerception:
        "Widely respected as one of India's finest diplomats and foreign policy experts. Known for his articulate, confident defense of India on international platforms and his candid, no-nonsense approach to global affairs. Popular for his strong responses to Western criticism and advocacy for the Global South.",
      keyStrengths: [
        "Foreign Policy Expertise",
        "Strategic Communication",
        "Diplomatic Experience",
        "Crisis Management",
        "Global Network",
        "Articulate Spokesperson"
      ],
      focusAreas: [
        "Foreign Affairs",
        "Strategic Partnerships",
        "India-US Relations",
        "Neighborhood Diplomacy",
        "Economic Diplomacy",
        "Global South Leadership",
        "Multilateral Forums"
      ],
      leadershipStyle: "Assertive and Articulate"
    }
  },

  // -------------------- News Articles --------------------
  newsArticles: {
    create: [
      {
        headline: "Jaishankar defends India's position on Russia-Ukraine at international forum",
        url: "https://thehindu.com/jaishankar-russia-ukraine-stance",
        publishedAt: new Date("2024-09-15T00:00:00.000Z")
      },
      {
        headline: "EAM Jaishankar holds talks with US Secretary of State on bilateral cooperation",
        url: "https://indianexpress.com/jaishankar-us-bilateral-talks",
        publishedAt: new Date("2024-10-05T00:00:00.000Z")
      },
      {
        headline: "India-China border resolution discussed by External Affairs Minister",
        url: "https://thehindu.com/jaishankar-india-china-border",
        publishedAt: new Date("2024-10-21T00:00:00.000Z")
      },
      {
        headline: "Jaishankar addresses diaspora, emphasizes India's growing global role",
        url: "https://indianexpress.com/jaishankar-diaspora-global-india",
        publishedAt: new Date("2024-11-10T00:00:00.000Z")
      },
      {
        headline: "External Affairs Minister advocates for Global South at UN General Assembly",
        url: "https://thehindu.com/jaishankar-unga-global-south",
        publishedAt: new Date("2024-09-25T00:00:00.000Z")
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