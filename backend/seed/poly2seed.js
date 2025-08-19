// Prisma Seed Data for 10 Politicians with All Relations
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


// Comprehensive seed data for 10 Indian politicians with complete profiles

async function seedPoliticians() {
  // --- Politician 1: Shashi Tharoor ---
 async function seedPoliticians() {
  // --- Politician 1: Shashi Tharoor ---
  const shashiTharoor = await prisma.politician.create({
    data: {
      title: "MP, Former Union Minister", // ✅ added
      name: "Shashi Tharoor",
      party: "Indian National Congress",
      state: "Kerala",
      constituency: "Thiruvananthapuram",
      age: 68,
      gender: "Male",
      education: "BA History, MA International Relations, DPhil (Oxford)",
      criminalCases: 0,
      totalAssets: 3700.0,
      position: "MP, Former Union Minister",
      biography:
        "Author, diplomat, and politician known for eloquence and contributions to parliamentary debates. Served as Minister of State for External Affairs and Human Resource Development.",
      profileImage:
        "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=400&h=400&fit=crop&crop=face",
      avgRatings: 4.1,
      numOfSearched: 65210,
      ratingsOutOf: 92850,

      workHistory: {
        create: [
          {
            role: "UN Diplomat",
            startYear: 1978,
            endYear: 2007,
            constituency: "International",
            state: "N/A",
          },
          {
            role: "Lok Sabha MP",
            startYear: 2009,
            endYear: null,
            constituency: "Thiruvananthapuram",
            state: "Kerala",
          },
        ],
      },

      electionResult: {
        create: [
          {
            year: 2019,
            electionType: "Lok Sabha",
            constituency: "Thiruvananthapuram",
            state: "Kerala",
            party: "INC",
            result: "✅ Won",
            totalVotes: 416131,
            voteShare: 48.7,
            opponentName: "Kummanam Rajasekharan",
            victoryMargin: 9956,
          },
          {
            year: 2014,
            electionType: "Lok Sabha",
            constituency: "Thiruvananthapuram",
            state: "Kerala",
            party: "INC",
            result: "✅ Won",
            totalVotes: 297806,
            voteShare: 34.1,
            opponentName: "O. Rajagopal",
            victoryMargin: 15470,
          },
        ],
      },

      familyDetail: {
        create: {
          spouse: "Sunanda Pushkar (Late)",
          children: 2,
          fatherName: "Chandran Tharoor",
          motherName: "Lily Tharoor",
          background:
            "Comes from a Malayali family; father was a journalist.",
          familyProfession: "Journalism",
          economicStatus: "Middle",
          familyOrigin: "Urban",
          community: "Malayali Nair",
          politicalLegacy: "Self-Made",
        },
      },

      assetDetail: {
        create: {
          totalAssets: 3700.0,
          movableAssets: 1500.0,
          immovableAssets: 2200.0,
        },
      },

      criminalCase: { create: [] },

      PublicProfile: {
        create: {
          coreIdeology: "Liberal Democracy and Global Engagement",
          visionStatement:
            "To promote India as a progressive, inclusive, and globally engaged democracy.",
          publicPerception:
            "Seen as articulate, intellectual, and cosmopolitan leader.",
          keyStrengths: ["Oratory", "International Relations", "Policy Knowledge"],
          focusAreas: ["Foreign Policy", "Education", "Culture"],
          leadershipStyle: "Intellectual",
        },
      },

      newsArticles: {
        create: [
          {
            headline:
              "Shashi Tharoor raises questions on foreign policy in Parliament",
            url: "https://indianexpress.com/shashi-tharoor-foreign-policy",
            publishedAt: new Date("2024-04-18"),
          },
        ],
      },
    },
  });

  // --- Politician 2: Asaduddin Owaisi ---
  const asaduddinOwaisi = await prisma.politician.create({
    data: {
      title: "MP, AIMIM President", // ✅ added
      name: "Asaduddin Owaisi",
      party: "All India Majlis-e-Ittehad-ul-Muslimeen (AIMIM)",
      state: "Telangana",
      constituency: "Hyderabad",
      age: 55,
      gender: "Male",
      education: "LLB, Barrister-at-Law (London)",
      criminalCases: 1,
      totalAssets: 1800.0,
      position: "MP, AIMIM President",
      biography:
        "Prominent Muslim leader and MP from Hyderabad, known for strong speeches and advocacy of minority rights.",
      profileImage:
        "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=400&fit=crop&crop=face",
      avgRatings: 3.7,
      numOfSearched: 54200,
      ratingsOutOf: 78210,

      workHistory: {
        create: [
          {
            role: "MLA",
            startYear: 1994,
            endYear: 2004,
            constituency: "Charminar",
            state: "Andhra Pradesh",
          },
          {
            role: "Lok Sabha MP",
            startYear: 2004,
            endYear: null,
            constituency: "Hyderabad",
            state: "Telangana",
          },
        ],
      },

      electionResult: {
        create: [
          {
            year: 2019,
            electionType: "Lok Sabha",
            constituency: "Hyderabad",
            state: "Telangana",
            party: "AIMIM",
            result: "✅ Won",
            totalVotes: 517471,
            voteShare: 58.9,
            opponentName: "Dr. Bhagavanth Rao (BJP)",
            victoryMargin: 282186,
          },
          {
            year: 2014,
            electionType: "Lok Sabha",
            constituency: "Hyderabad",
            state: "Telangana",
            party: "AIMIM",
            result: "✅ Won",
            totalVotes: 513868,
            voteShare: 52.8,
            opponentName: "Dr. Bhagavanth Rao (BJP)",
            victoryMargin: 202454,
          },
        ],
      },

      familyDetail: {
        create: {
          spouse: "Farheen Owaisi",
          children: 6,
          fatherName: "Sultan Salahuddin Owaisi",
          motherName: "Nazima Owaisi",
          background:
            "Belongs to a political family with deep roots in Hyderabad.",
          familyProfession: "Politics",
          economicStatus: "Middle",
          familyOrigin: "Urban",
          community: "Muslim",
          politicalLegacy: "Dynastic",
        },
      },

      assetDetail: {
        create: {
          totalAssets: 1800.0,
          movableAssets: 800.0,
          immovableAssets: 1000.0,
        },
      },

      criminalCase: {
        create: [
          { caseDetail: "Hate Speech Case", yearFiled: 2013, status: "Pending" },
        ],
      },

      PublicProfile: {
        create: {
          coreIdeology: "Minority Rights and Secularism",
          visionStatement: "To safeguard minority rights and strengthen democracy.",
          publicPerception:
            "Strong voice for Muslim community, polarizing figure nationally.",
          keyStrengths: ["Oratory", "Community Connect", "Legal Knowledge"],
          focusAreas: ["Minority Rights", "Education", "Secularism"],
          leadershipStyle: "Assertive",
        },
      },

      newsArticles: {
        create: [
          {
            headline: "Owaisi slams government over minority rights",
            url: "https://thehindu.com/owaisi-minority-rights",
            publishedAt: new Date("2024-03-10"),
          },
        ],
      },
    },
  });

  // --- Politician 3: Rajnath Singh ---
  const rajnathSingh = await prisma.politician.create({
    data: {
      title: "Defence Minister of India", // ✅ added
      name: "Rajnath Singh",
      party: "Bharatiya Janata Party",
      state: "Uttar Pradesh",
      constituency: "Lucknow",
      age: 73,
      gender: "Male",
      education: "MSc Physics",
      criminalCases: 0,
      totalAssets: 4200.0,
      position: "Defence Minister of India",
      biography:
        "Senior BJP leader, served as Union Home Minister, Defence Minister, and former Chief Minister of Uttar Pradesh.",
      profileImage:
        "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=400&h=400&fit=crop&crop=face",
      avgRatings: 4.0,
      numOfSearched: 59210,
      ratingsOutOf: 80250,

      workHistory: {
        create: [
          {
            role: "MLA",
            startYear: 1977,
            endYear: 1991,
            constituency: "Mirzapur",
            state: "Uttar Pradesh",
          },
          {
            role: "Chief Minister",
            startYear: 2000,
            endYear: 2002,
            constituency: "Haidergarh",
            state: "Uttar Pradesh",
          },
          {
            role: "Union Minister",
            startYear: 2014,
            endYear: null,
            constituency: "Lucknow",
            state: "Uttar Pradesh",
          },
        ],
      },

      electionResult: {
        create: [
          {
            year: 2019,
            electionType: "Lok Sabha",
            constituency: "Lucknow",
            state: "Uttar Pradesh",
            party: "BJP",
            result: "✅ Won",
            totalVotes: 622885,
            voteShare: 56.0,
            opponentName: "Poonam Sinha (SP)",
            victoryMargin: 347302,
          },
          {
            year: 2014,
            electionType: "Lok Sabha",
            constituency: "Lucknow",
            state: "Uttar Pradesh",
            party: "BJP",
            result: "✅ Won",
            totalVotes: 561106,
            voteShare: 54.5,
            opponentName: "Rita Bahuguna Joshi (INC)",
            victoryMargin: 272749,
          },
        ],
      },

      familyDetail: {
        create: {
          spouse: "Savitribai Singh",
          children: 2,
          fatherName: "Ram Badan Singh",
          motherName: "Gujarati Devi",
          background: "Born in a farmer family in UP.",
          familyProfession: "Agriculture",
          economicStatus: "Lower Middle",
          familyOrigin: "Rural",
          community: "Rajput",
          politicalLegacy: "Self-Made",
        },
      },

      assetDetail: {
        create: {
          totalAssets: 4200.0,
          movableAssets: 1500.0,
          immovableAssets: 2700.0,
        },
      },

      criminalCase: { create: [] },

      PublicProfile: {
        create: {
          coreIdeology: "Nationalism and Good Governance",
          visionStatement: "To strengthen India’s defence and uphold security.",
          publicPerception: "Seen as a calm, balanced, and respected leader.",
          keyStrengths: ["Calm Leadership", "Experience", "Governance"],
          focusAreas: ["Defence", "National Security", "Rural Development"],
          leadershipStyle: "Balanced",
        },
      },

      newsArticles: {
        create: [
          {
            headline: "Rajnath Singh inaugurates new defence projects",
            url: "https://timesofindia.com/rajnath-singh-defence",
            publishedAt: new Date("2024-05-12"),
          },
        ],
      },
    },
  });

  // --- Politician 4: Amit Shah ---
  const amitShah = await prisma.politician.create({
    data: {
      title: "Union Home Minister", // ✅ added
      name: "Amit Shah",
      party: "Bharatiya Janata Party",
      state: "Gujarat",
      constituency: "Gandhinagar",
      age: 60,
      gender: "Male",
      education: "BSc Biochemistry",
      criminalCases: 0,
      totalAssets: 5800.0,
      position: "Union Home Minister",
      biography:
        "Key strategist of the BJP, former party president, and Union Home Minister of India.",
      profileImage:
        "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=400&fit=crop&crop=face",
      avgRatings: 4.3,
      numOfSearched: 81240,
      ratingsOutOf: 105620,

      workHistory: {
        create: [
          {
            role: "MLA",
            startYear: 1997,
            endYear: 2017,
            constituency: "Sarkhej",
            state: "Gujarat",
          },
          {
            role: "Lok Sabha MP",
            startYear: 2019,
            endYear: null,
            constituency: "Gandhinagar",
            state: "Gujarat",
          },
        ],
      },

      electionResult: {
        create: [
          {
            year: 2019,
            electionType: "Lok Sabha",
            constituency: "Gandhinagar",
            state: "Gujarat",
            party: "BJP",
            result: "✅ Won",
            totalVotes: 892403,
            voteShare: 69.1,
            opponentName: "C. J. Chavda (INC)",
            victoryMargin: 557014,
          },
          {
            year: 2017,
            electionType: "Rajya Sabha",
            constituency: "Gujarat",
            state: "Gujarat",
            party: "BJP",
            result: "✅ Won",
            totalVotes: 185,
            voteShare: null,
            opponentName: "Ahmed Patel (INC)",
            victoryMargin: null,
          },
        ],
      },

      familyDetail: {
        create: {
          spouse: "Sonal Shah",
          children: 1,
          fatherName: "Anilchandra Shah",
          motherName: "Kusumben Shah",
          background:
            "Born in Mumbai, raised in Gujarat in a business family.",
          familyProfession: "Business",
          economicStatus: "Middle",
          familyOrigin: "Urban",
          community: "Baniya",
          politicalLegacy: "Self-Made",
        },
      },

      assetDetail: {
        create: {
          totalAssets: 5800.0,
          movableAssets: 2300.0,
          immovableAssets: 3500.0,
        },
      },

      criminalCase: { create: [] },

      PublicProfile: {
        create: {
          coreIdeology: "Strong Nationalism and Security",
          visionStatement: "To build a secure, united, and powerful India.",
          publicPerception:
            "Considered BJP’s chief strategist, powerful and influential.",
          keyStrengths: ["Strategy", "Organization", "Decisiveness"],
          focusAreas: ["Internal Security", "Party Building", "Governance"],
          leadershipStyle: "Strategic",
        },
      },

      newsArticles: {
        create: [
          {
            headline: "Amit Shah announces new policy on border security",
            url: "https://ndtv.com/amit-shah-border-security",
            publishedAt: new Date("2024-06-22"),
          },
        ],
      },
    },
  });
}






};


seedPoliticians()
  .catch((e) => {
    console.error("❌ Seeding error:", e);
    process.exit(1);
  })
  .finally(async () => {
    console.log("✅ Seeding finished");
    await prisma.$disconnect();
  });