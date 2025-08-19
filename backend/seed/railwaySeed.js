const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function seedPoliticians() {
// Narendra Modi
const narendraModi = await prisma.politician.create({
  data: {
    name: "Narendra Modi",
    party: "Bharatiya Janata Party",
    state: "Gujarat",
    constituency: "Varanasi",
    age: 74,
    gender: "Male",
    education: "BA Political Science, MA Political Science",
    criminalCases: 0,
    totalAssets: 2850.0,
    position: "Prime Minister of India",
    biography:
      "23rd Prime Minister of India since 2014. Former Chief Minister of Gujarat (2001-2014). Known for economic reforms, digital initiatives, and strong leadership style.",
    profileImage:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    avgRatings: 4.3,
    numOfSearched: 2850000,
    ratingsOutOf: 4200000,

    workHistory: {
      create: [
        {
          role: "Chief Minister of Gujarat",
          startYear: 2001,
          endYear: 2014,
          constituency: "Gujarat",
          state: "Gujarat",
        },
        {
          role: "Prime Minister",
          startYear: 2014,
          endYear: null,
          constituency: "Varanasi",
          state: "Uttar Pradesh",
        },
      ],
    },

    electionResult: {
      create: [
        {
          year: 2024,
          electionType: "Lok Sabha",
          constituency: "Varanasi",
          state: "Uttar Pradesh",
          party: "BJP",
          result: "✅ Won",
          totalVotes: 612970,
          voteShare: 54.8,
          opponentName: "Ajay Rai",
          victoryMargin: 152513,
        },
        {
          year: 2019,
          electionType: "Lok Sabha",
          constituency: "Varanasi",
          state: "Uttar Pradesh",
          party: "BJP",
          result: "✅ Won",
          totalVotes: 674664,
          voteShare: 63.6,
          opponentName: "Shalini Yadav",
          victoryMargin: 381645,
        },
      ],
    },

    familyDetail: {
      create: {
        spouse: "Jashodaben Chimanlal Modi",
        children: 0,
        fatherName: "Damodardas Mulchand Modi",
        motherName: "Hiraben Modi",
        background:
          "Born into a Gujarati family involved in grocery business.",
        familyProfession: "Business",
        economicStatus: "Lower Middle",
        familyOrigin: "Rural",
        community: "Gujarati Ghanchi",
        politicalLegacy: "Self-Made",
      },
    },

    assetDetail: {
      create: {
        totalAssets: 2850.0,
        movableAssets: 850.0,
        immovableAssets: 2000.0,
      },
    },

    criminalCase: { create: [] },

    PublicProfile: {
      create: {
        coreIdeology: "Hindutva and Economic Nationalism",
        visionStatement:
          "To make India a developed nation by 2047 with strong cultural identity.",
        publicPerception:
          "Seen as decisive leader with strong mass appeal and development focus.",
        keyStrengths: ["Mass Communication", "Administrative Skills", "Vision"],
        focusAreas: ["Economic Development", "Digital India", "Infrastructure"],
        leadershipStyle: "Authoritative",
      },
    },

    newsArticles: {
      create: [
        {
          headline:
            "PM Modi launches new infrastructure projects worth ₹50,000 crores",
          url: "https://timesofindia.com/pm-modi-infrastructure-launch",
          publishedAt: new Date("2024-05-15"),
        },
      ],
    },
  },
});

// Rahul Gandhi
const rahulGandhi = await prisma.politician.create({
  data: {
    name: "Rahul Gandhi",
    party: "Indian National Congress",
    state: "Kerala",
    constituency: "Wayanad",
    age: 54,
    gender: "Male",
    education: "BA History, MPhil Development Studies",
    criminalCases: 2,
    totalAssets: 1590.0,
    position: "MP, Leader of Opposition (Lok Sabha)",
    biography:
      "Former President of Indian National Congress (2017-2019). Member of the Nehru-Gandhi political dynasty. Known for championing social justice and inclusive growth.",
    profileImage:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    avgRatings: 3.7,
    numOfSearched: 1850000,
    ratingsOutOf: 2950000,

    workHistory: {
      create: [
        {
          role: "Congress President",
          startYear: 2017,
          endYear: 2019,
          constituency: "National",
          state: "N/A",
        },
        {
          role: "Lok Sabha MP",
          startYear: 2004,
          endYear: null,
          constituency: "Wayanad",
          state: "Kerala",
        },
      ],
    },

    electionResult: {
      create: [
        {
          year: 2024,
          electionType: "Lok Sabha",
          constituency: "Wayanad",
          state: "Kerala",
          party: "INC",
          result: "✅ Won",
          totalVotes: 647445,
          voteShare: 59.7,
          opponentName: "Annie Raja",
          victoryMargin: 364422,
        },
        {
          year: 2019,
          electionType: "Lok Sabha",
          constituency: "Wayanad",
          state: "Kerala",
          party: "INC",
          result: "✅ Won",
          totalVotes: 706367,
          voteShare: 64.7,
          opponentName: "P.P. Suneer",
          victoryMargin: 431770,
        },
      ],
    },

    familyDetail: {
      create: {
        spouse: "Not Married",
        children: 0,
        fatherName: "Rajiv Gandhi",
        motherName: "Sonia Gandhi",
        background:
          "Member of the Nehru-Gandhi political dynasty with Italian-Indian heritage.",
        familyProfession: "Politics",
        economicStatus: "Upper",
        familyOrigin: "Urban",
        community: "Mixed (Italian-Kashmiri Pandit)",
        politicalLegacy: "Fourth Generation",
      },
    },

    assetDetail: {
      create: {
        totalAssets: 1590.0,
        movableAssets: 590.0,
        immovableAssets: 1000.0,
      },
    },

    criminalCase: {
      create: [
        {
          title: "Defamation",
          description: "Defamation case related to 'Modi surname' remarks",
          status: "Pending",
          filedAt: new Date("2019-04-15"),
        },
        {
          title: "Criminal Defamation",
          description: "Case related to 'democracy under attack' comments",
          status: "Pending",
          filedAt: new Date("2023-03-20"),
        },
      ],
    },

    PublicProfile: {
      create: {
        coreIdeology: "Social Democracy and Secularism",
        visionStatement:
          "To build an inclusive India where every citizen has equal opportunities.",
        publicPerception:
          "Seen as youth icon advocating for marginalized communities.",
        keyStrengths: ["Youth Connect", "Social Issues", "Empathy"],
        focusAreas: ["Employment", "Social Justice", "Rural Development"],
        leadershipStyle: "Collaborative",
      },
    },

    newsArticles: {
      create: [
        {
          headline:
            "Rahul Gandhi addresses unemployment crisis in parliamentary speech",
          url: "https://indianexpress.com/rahul-gandhi-unemployment-speech",
          publishedAt: new Date("2024-06-20"),
        },
      ],
    },
  },
});

// Arvind Kejriwal
const arvindKejriwal = await prisma.politician.create({
  data: {
    name: "Arvind Kejriwal",
    party: "Aam Aadmi Party",
    state: "Delhi",
    constituency: "New Delhi",
    age: 56,
    gender: "Male",
    education: "BTech Mechanical Engineering (IIT Kharagpur)",
    criminalCases: 4,
    totalAssets: 220.0,
    position: "Chief Minister of Delhi",
    biography:
      "Founder of Aam Aadmi Party. Former IRS officer turned activist and politician. Known for anti-corruption campaigns and welfare schemes in Delhi.",
    profileImage:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
    avgRatings: 4.0,
    numOfSearched: 950000,
    ratingsOutOf: 1450000,

    workHistory: {
      create: [
        {
          role: "IRS Officer",
          startYear: 1989,
          endYear: 2006,
          constituency: "N/A",
          state: "Various",
        },
        {
          role: "Chief Minister of Delhi",
          startYear: 2013,
          endYear: null,
          constituency: "New Delhi",
          state: "Delhi",
        },
      ],
    },

    electionResult: {
      create: [
        {
          year: 2020,
          electionType: "Assembly",
          constituency: "New Delhi",
          state: "Delhi",
          party: "AAP",
          result: "✅ Won",
          totalVotes: 71827,
          voteShare: 53.6,
          opponentName: "Sunil Kumar Yadav",
          victoryMargin: 21697,
        },
        {
          year: 2015,
          electionType: "Assembly",
          constituency: "New Delhi",
          state: "Delhi",
          party: "AAP",
          result: "✅ Won",
          totalVotes: 69225,
          voteShare: 52.3,
          opponentName: "Kiran Walia",
          victoryMargin: 25864,
        },
      ],
    },

    familyDetail: {
      create: {
        spouse: "Sunita Kejriwal",
        children: 2,
        fatherName: "Gobind Ram Kejriwal",
        motherName: "Gita Devi",
        background:
          "Comes from a middle-class business family from Haryana.",
        familyProfession: "Business",
        economicStatus: "Middle",
        familyOrigin: "Urban",
        community: "Baniya",
        politicalLegacy: "Self-Made",
      },
    },

    assetDetail: {
      create: {
        totalAssets: 220.0,
        movableAssets: 120.0,
        immovableAssets: 100.0,
      },
    },

    criminalCase: {
      create: [
        {
          title: "Defamation",
          description: "Defamation case by Arun Jaitley",
          status: "Pending",
          filedAt: new Date("2018-05-10"),
        },
        {
          title: "Criminal Defamation",
          description: "Case related to allegations against political rivals",
          status: "Pending",
          filedAt: new Date("2020-08-15"),
        },
        {
          title: "Corruption",
          description: "Delhi Excise Policy case",
          status: "Pending",
          filedAt: new Date("2024-01-20"),
        },
        {
          title: "Money Laundering",
          description: "PMLA case related to excise policy",
          status: "Pending",
          filedAt: new Date("2024-02-10"),
        },
      ],
    },

    PublicProfile: {
      create: {
        coreIdeology: "Anti-Corruption and Welfare Governance",
        visionStatement:
          "To provide honest governance and quality public services to all citizens.",
        publicPerception:
          "Seen as anti-establishment leader focused on common man's issues.",
        keyStrengths: ["Governance", "Public Welfare", "Honesty"],
        focusAreas: ["Education", "Healthcare", "Anti-Corruption"],
        leadershipStyle: "Populist",
      },
    },

    newsArticles: {
      create: [
        {
          headline:
            "Kejriwal announces free electricity scheme extension in Delhi",
          url: "https://hindustantimes.com/kejriwal-electricity-scheme-delhi",
          publishedAt: new Date("2024-07-12"),
        },
      ],
    },
  },
});

// Mamata Banerjee
const mamataBanerjee = await prisma.politician.create({
  data: {
    name: "Mamata Banerjee",
    party: "All India Trinamool Congress",
    state: "West Bengal",
    constituency: "Bhabanipur",
    age: 69,
    gender: "Female",
    education: "BA History, LLB, BEd, MA Islamic History",
    criminalCases: 3,
    totalAssets: 290.0,
    position: "Chief Minister of West Bengal",
    biography:
      "Founder and leader of All India Trinamool Congress. Chief Minister of West Bengal since 2011. Known for breaking Left Front's 34-year rule in Bengal.",
    profileImage:
      "https://images.unsplash.com/photo-1494790108755-2616b612b5bc?w=400&h=400&fit=crop&crop=face",
    avgRatings: 3.9,
    numOfSearched: 850000,
    ratingsOutOf: 1250000,

    workHistory: {
      create: [
        {
          role: "Railway Minister",
          startYear: 2009,
          endYear: 2012,
          constituency: "Central Government",
          state: "N/A",
        },
        {
          role: "Chief Minister of West Bengal",
          startYear: 2011,
          endYear: null,
          constituency: "Bhabanipur",
          state: "West Bengal",
        },
      ],
    },

    electionResult: {
      create: [
        {
          year: 2021,
          electionType: "Assembly",
          constituency: "Bhabanipur",
          state: "West Bengal",
          party: "AITC",
          result: "✅ Won",
          totalVotes: 85263,
          voteShare: 58.4,
          opponentName: "Priyanka Tibrewal",
          victoryMargin: 58832,
        },
        {
          year: 2016,
          electionType: "Assembly",
          constituency: "Bhowanipore",
          state: "West Bengal",
          party: "AITC",
          result: "✅ Won",
          totalVotes: 52207,
          voteShare: 62.3,
          opponentName: "Deepa Dasmunsi",
          victoryMargin: 25301,
        },
      ],
    },

    familyDetail: {
      create: {
        spouse: "Not Married",
        children: 0,
        fatherName: "Promileswar Banerjee",
        motherName: "Gayetri Devi",
        background:
          "Comes from a middle-class Bengali family with modest means.",
        familyProfession: "Service",
        economicStatus: "Lower Middle",
        familyOrigin: "Urban",
        community: "Bengali Brahmin",
        politicalLegacy: "Self-Made",
      },
    },

    assetDetail: {
      create: {
        totalAssets: 290.0,
        movableAssets: 90.0,
        immovableAssets: 200.0,
      },
    },

    criminalCase: {
      create: [
        {
          title: "Defamation",
          description: "Defamation case related to political statements",
          status: "Pending",
          filedAt: new Date("2019-07-12"),
        },
        {
          title: "Election Related",
          description: "Case related to election campaign violations",
          status: "Pending",
          filedAt: new Date("2021-04-25"),
        },
        {
          title: "Public Order",
          description: "Case related to public rally permissions",
          status: "Pending",
          filedAt: new Date("2022-06-30"),
        },
      ],
    },

    PublicProfile: {
      create: {
        coreIdeology: "Regional Autonomy and Social Welfare",
        visionStatement:
          "To preserve Bengal's cultural identity while ensuring development and social justice.",
        publicPerception:
          "Seen as fiery leader who champions Bengali interests and women's empowerment.",
        keyStrengths: ["Mass Appeal", "Regional Politics", "Women's Issues"],
        focusAreas: ["Women Empowerment", "Cultural Preservation", "Social Schemes"],
        leadershipStyle: "Charismatic",
      },
    },

    newsArticles: {
      create: [
        {
          headline:
            "Mamata Banerjee launches new scholarship scheme for girl students",
          url: "https://telegraphindia.com/mamata-scholarship-girls-bengal",
          publishedAt: new Date("2024-08-03"),
        },
      ],
    },
  },
});

// Yogi Adityanath
const yogiAdityanath = await prisma.politician.create({
  data: {
    name: "Yogi Adityanath",
    party: "Bharatiya Janata Party",
    state: "Uttar Pradesh",
    constituency: "Gorakhpur Urban",
    age: 52,
    gender: "Male",
    education: "BSc Mathematics",
    criminalCases: 7,
    totalAssets: 150.0,
    position: "Chief Minister of Uttar Pradesh",
    biography:
      "Chief Minister of Uttar Pradesh since 2017. Head priest of Gorakhnath Temple. Known for strong law and order measures and development initiatives in UP.",
    profileImage:
      "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=400&h=400&fit=crop&crop=face",
    avgRatings: 4.2,
    numOfSearched: 780000,
    ratingsOutOf: 1150000,

    workHistory: {
      create: [
        {
          role: "Lok Sabha MP",
          startYear: 1998,
          endYear: 2017,
          constituency: "Gorakhpur",
          state: "Uttar Pradesh",
        },
        {
          role: "Chief Minister of Uttar Pradesh",
          startYear: 2017,
          endYear: null,
          constituency: "Gorakhpur Urban",
          state: "Uttar Pradesh",
        },
      ],
    },

    electionResult: {
      create: [
        {
          year: 2022,
          electionType: "Assembly",
          constituency: "Gorakhpur Urban",
          state: "Uttar Pradesh",
          party: "BJP",
          result: "✅ Won",
          totalVotes: 107394,
          voteShare: 58.9,
          opponentName: "Subhakar Pathak",
          victoryMargin: 74621,
        },
        {
          year: 2017,
          electionType: "Assembly",
          constituency: "Gorakhpur Urban",
          state: "Uttar Pradesh",
          party: "BJP",
          result: "✅ Won",
          totalVotes: 95766,
          voteShare: 55.2,
          opponentName: "Pawan Pandey",
          victoryMargin: 62709,
        },
      ],
    },

    familyDetail: {
      create: {
        spouse: "Celibate (Sanyasi)",
        children: 0,
        fatherName: "Anand Singh Bisht",
        motherName: "Savitri Devi",
        background:
          "Born into a Garhwali family; became a sanyasi at young age.",
        familyProfession: "Farming",
        economicStatus: "Middle",
        familyOrigin: "Rural",
        community: "Garhwali Thakur",
        politicalLegacy: "Self-Made",
      },
    },

    assetDetail: {
      create: {
        totalAssets: 150.0,
        movableAssets: 50.0,
        immovableAssets: 100.0,
      },
    },

    criminalCase: {
      create: [
        {
          title: "Rioting",
          description: "Case related to communal violence",
          status: "Pending",
          filedAt: new Date("2007-03-15"),
        },
        {
          title: "Criminal Intimidation",
          description: "Case related to threatening statements",
          status: "Pending",
          filedAt: new Date("2008-09-20"),
        },
        {
          title: "Attempt to Murder",
          description: "Case related to violence during protest",
          status: "Pending",
          filedAt: new Date("2009-11-08"),
        },
        {
          title: "Hate Speech",
          description: "Case related to inflammatory speeches",
          status: "Pending",
          filedAt: new Date("2015-02-14"),
        },
        {
          title: "Unlawful Assembly",
          description: "Case related to illegal gathering",
          status: "Pending",
          filedAt: new Date("2017-05-22"),
        },
        {
          title: "Defamation",
          description: "Defamation case by political rivals",
          status: "Pending",
          filedAt: new Date("2019-08-10"),
        },
        {
          title: "Public Mischief",
          description: "Case related to controversial statements",
          status: "Pending",
          filedAt: new Date("2020-12-05"),
        },
      ],
    },

    PublicProfile: {
      create: {
        coreIdeology: "Hindutva and Law & Order",
        visionStatement:
          "To transform Uttar Pradesh into a model state with strong law and order and development.",
        publicPerception:
          "Seen as strong administrator focused on law and order and Hindu nationalist agenda.",
        keyStrengths: ["Administration", "Law & Order", "Religious Leadership"],
        focusAreas: ["Law & Order", "Infrastructure", "Religious Affairs"],
        leadershipStyle: "Authoritarian",
      },
    },

    newsArticles: {
      create: [
        {
          headline:
            "Yogi Adityanath inaugurates new expressway connecting major UP cities",
          url: "https://timesofindia.com/yogi-expressway-up-development",
          publishedAt: new Date("2024-07-25"),
        },
      ],
    },
  },
});

}

seedPoliticians()
    .catch((e) => {
        console.error("❌ Seeding error:", e);
        process.exit(1);
    })
    .finally(async () => {
        console.log("✅ Seeding finished");
        await prisma.$disconnect();
    });