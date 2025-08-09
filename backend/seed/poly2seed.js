// Prisma Seed Data for 10 Politicians with All Relations
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


 // Comprehensive seed data for 10 Indian politicians with complete profiles

async function seedPoliticians() {

  // Politician 1: Narendra Modi
  const politician1 = await prisma.politician.create({
    data: {
      name: "Narendra Damodardas Modi",
      party: "Bharatiya Janata Party",
      state: "Gujarat",
      constituency: "Varanasi",
      age: 74,
      gender: "Male",
      education: "BA Political Science, MA Political Science",
      criminalCases: 0,
      totalAssets: 2500.0, // 2.5 Cr
      position: "Prime Minister",
      biography: "The 14th Prime Minister of India since 2014. Former Chief Minister of Gujarat (2001-2014). Known for economic reforms, digital India initiatives, and strong leadership.",
      profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      avgRatings: 4,
      numOfSearched: 185420,
      ratingsOutOf: 225680,
      
      workHistory: {
        create: [
          {
            role: "RSS Pracharak",
            startYear: 1971,
            endYear: 1987,
            constituency: "Gujarat",
            state: "Gujarat"
          },
          {
            role: "Chief Minister",
            startYear: 2001,
            endYear: 2014,
            constituency: "Gujarat",
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
      
      electionResult: {
        create: [
          {
            year: 2024,
            electionType: "Lok Sabha",
            constituency: "Varanasi",
            state: "Uttar Pradesh",
            party: "Bharatiya Janata Party",
            result: "✅ Won",
            totalVotes: 912673,
            voteShare: 61.9,
            opponentName: "Ajay Rai",
            victoryMargin: 612970
          },
          {
            year: 2019,
            electionType: "Lok Sabha",
            constituency: "Varanasi",
            state: "Uttar Pradesh",
            party: "Bharatiya Janata Party",
            result: "✅ Won",
            totalVotes: 674664,
            voteShare: 63.6,
            opponentName: "Shalini Yadav",
            victoryMargin: 479505
          }
        ]
      },
      
      familyDetail: {
        create: {
          spouse: "Jashodaben Chimanlal Modi",
          children: 0,
          fatherName: "Damodardas Mulchand Modi",
          motherName: "Hiraben Modi",
          background: "Born into a Modh-Ghanchi family in Vadnagar, Gujarat. Father ran a tea stall at the local railway station. Helped father in tea business during childhood.",
          familyProfession: "Tea Business",
          economicStatus: "Lower Middle",
          familyOrigin: "Rural",
          community: "OBC",
          politicalLegacy: "Self-Made"
        }
      },
      
      assetDetail: {
        create: {
          totalAssets: 2500.0,
          movableAssets: 500.0,
          immovableAssets: 2000.0
        }
      },
      
      criminalCase: {
        create: []
      },
      
      PublicProfile: {
        create: {
          coreIdeology: "Sabka Saath, Sabka Vikas, Sabka Vishwas",
          visionStatement: "To make India a developed nation by 2047 through digital transformation, economic growth, and social inclusion while preserving cultural heritage and values.",
          publicPerception: "Highly popular leader with strong oratory skills and decisive governance. Praised for economic reforms and infrastructure development. Some criticism on social issues and democratic institutions.",
          keyStrengths: ["Oratory Skills", "Digital Innovation", "Economic Vision", "International Relations"],
          focusAreas: ["Digital India", "Make in India", "Clean Energy", "Infrastructure Development"],
          leadershipStyle: "Transformative"
        }
      },
      
      newsArticles: {
        create: [
          {
            headline: "PM Modi launches new infrastructure projects worth ₹15,000 crores",
            url: "https://timesofindia.com/modi-infrastructure-projects-15000-cr",
            publishedAt: new Date("2024-08-05")
          },
          {
            headline: "Modi emphasizes renewable energy targets at G20 summit",
            url: "https://indianexpress.com/modi-renewable-energy-g20",
            publishedAt: new Date("2024-07-20")
          }
        ]
      }
    }
  });

  // Politician 2: Rahul Gandhi
  const politician2 = await prisma.politician.create({
    data: {
      name: "Rahul Gandhi",
      party: "Indian National Congress",
      state: "Kerala",
      constituency: "Wayanad",
      age: 54,
      gender: "Male",
      education: "BA History, Harvard University; MPhil Development Studies, Trinity College Cambridge",
      criminalCases: 3,
      totalAssets: 1640.0, // 16.4 Cr
      position: "MP",
      biography: "Leader of Opposition in Lok Sabha. Former President of Indian National Congress. Member of the Nehru-Gandhi family with extensive political heritage.",
      profileImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      avgRatings: 3,
      numOfSearched: 125420,
      ratingsOutOf: 185680,
      
      workHistory: {
        create: [
          {
            role: "MP",
            startYear: 2004,
            endYear: 2019,
            constituency: "Amethi",
            state: "Uttar Pradesh"
          },
          {
            role: "Congress President",
            startYear: 2017,
            endYear: 2019,
            constituency: "National",
            state: "National"
          },
          {
            role: "MP",
            startYear: 2019,
            endYear: null,
            constituency: "Wayanad",
            state: "Kerala"
          }
        ]
      },
      
      electionResult: {
        create: [
          {
            year: 2024,
            electionType: "Lok Sabha",
            constituency: "Wayanad",
            state: "Kerala",
            party: "Indian National Congress",
            result: "✅ Won",
            totalVotes: 647445,
            voteShare: 59.7,
            opponentName: "Annie Raja",
            victoryMargin: 364422
          },
          {
            year: 2019,
            electionType: "Lok Sabha",
            constituency: "Wayanad",
            state: "Kerala",
            party: "Indian National Congress",
            result: "✅ Won",
            totalVotes: 706367,
            voteShare: 64.7,
            opponentName: "P P Suneer",
            victoryMargin: 431770
          }
        ]
      },
      
      familyDetail: {
        create: {
          spouse: null,
          children: 0,
          fatherName: "Rajiv Gandhi",
          motherName: "Sonia Gandhi",
          background: "Born into the Nehru-Gandhi political dynasty. Son of former Prime Minister Rajiv Gandhi and Congress leader Sonia Gandhi. Educated abroad before entering politics.",
          familyProfession: "Politics",
          economicStatus: "Upper Class",
          familyOrigin: "Urban",
          community: "General",
          politicalLegacy: "Fourth Generation"
        }
      },
      
      assetDetail: {
        create: {
          totalAssets: 1640.0,
          movableAssets: 840.0,
          immovableAssets: 800.0
        }
      },
      
      criminalCase: {
        create: [
          {
            title: "National Herald Case",
            description: "Allegations of financial irregularities in the acquisition of Associated Journals Limited",
            status: "Pending",
            filedAt: new Date("2014-06-26")
          },
          {
            title: "Defamation case - 'Modi surname' remark",
            description: "Defamation case filed over remarks about people with Modi surname being thieves",
            status: "Acquitted",
            filedAt: new Date("2019-04-15")
          },
          {
            title: "Savarkar defamation case",
            description: "Case filed over comments on freedom fighter Veer Savarkar",
            status: "Pending",
            filedAt: new Date("2023-07-20")
          }
        ]
      },
      
      PublicProfile: {
        create: {
          coreIdeology: "Social Justice and Inclusive Development",
          visionStatement: "To build an India that provides equal opportunities for all, protects democratic institutions, and ensures social justice while promoting sustainable economic growth.",
          publicPerception: "Viewed as a champion of marginalized communities and democratic values. Strong critic of current government policies. Mixed public perception on leadership capabilities and political strategy.",
          keyStrengths: ["Youth Connect", "International Education", "Social Justice Advocacy", "Democratic Values"],
          focusAreas: ["Employment Generation", "Farmer Rights", "Social Justice", "Democratic Institutions"],
          leadershipStyle: "Inclusive"
        }
      },
      
      newsArticles: {
        create: [
          {
            headline: "Rahul Gandhi leads opposition protest on Manipur violence",
            url: "https://thehindu.com/rahul-gandhi-manipur-protest",
            publishedAt: new Date("2024-07-25")
          },
          {
            headline: "Gandhi calls for caste census in Parliament speech",
            url: "https://indianexpress.com/rahul-gandhi-caste-census-parliament",
            publishedAt: new Date("2024-07-15")
          }
        ]
      }
    }
  });

  // Politician 3: Mamata Banerjee
  const politician3 = await prisma.politician.create({
    data: {
      name: "Mamata Banerjee",
      party: "All India Trinamool Congress",
      state: "West Bengal",
      constituency: "Bhabanipur",
      age: 69,
      gender: "Female",
      education: "BA History, MA Islamic History, LLB, MA Geography",
      criminalCases: 2,
      totalAssets: 1530.0, // 15.3 Cr
      position: "Chief Minister",
      biography: "Chief Minister of West Bengal since 2011. Founder of All India Trinamool Congress. Known for her fiery speeches and strong regional leadership.",
      profileImage: "https://images.unsplash.com/photo-1494790108755-2616c88b2dc7?w=400&h=400&fit=crop&crop=face",
      avgRatings: 4,
      numOfSearched: 95420,
      ratingsOutOf: 135680,
      
      workHistory: {
        create: [
          {
            role: "MLA",
            startYear: 1984,
            endYear: 1991,
            constituency: "Jadavpur",
            state: "West Bengal"
          },
          {
            role: "MP",
            startYear: 1991,
            endYear: 2011,
            constituency: "Calcutta South",
            state: "West Bengal"
          },
          {
            role: "Chief Minister",
            startYear: 2011,
            endYear: null,
            constituency: "Bhabanipur",
            state: "West Bengal"
          }
        ]
      },
      
      electionResult: {
        create: [
          {
            year: 2021,
            electionType: "Vidhan Sabha",
            constituency: "Bhabanipur",
            state: "West Bengal",
            party: "All India Trinamool Congress",
            result: "✅ Won",
            totalVotes: 85263,
            voteShare: 71.9,
            opponentName: "Priyanka Tibrewal",
            victoryMargin: 58835
          },
          {
            year: 2011,
            electionType: "Vidhan Sabha",
            constituency: "Bhabanipur",
            state: "West Bengal",
            party: "All India Trinamool Congress",
            result: "✅ Won",
            totalVotes: 69564,
            voteShare: 62.1,
            opponentName: "Deepa Dasmunshi",
            victoryMargin: 50080
          }
        ]
      },
      
      familyDetail: {
        create: {
          spouse: null,
          children: 0,
          fatherName: "Upendra Nath Banerjee",
          motherName: "Gayetri Devi",
          background: "Born in a middle-class Bengali family in Calcutta. Father was a freedom fighter. Started political career at a young age with Congress party.",
          familyProfession: "Freedom Fighter/Teacher",
          economicStatus: "Middle Class",
          familyOrigin: "Urban",
          community: "General",
          politicalLegacy: "Self-Made"
        }
      },
      
      assetDetail: {
        create: {
          totalAssets: 1530.0,
          movableAssets: 430.0,
          immovableAssets: 1100.0
        }
      },
      
      criminalCase: {
        create: [
          {
            title: "Narada Sting Operation",
            description: "Case related to alleged bribery captured in sting operation involving TMC leaders",
            status: "Pending",
            filedAt: new Date("2017-03-17")
          },
          {
            title: "Chit Fund Scam",
            description: "Investigation related to various chit fund companies operating in West Bengal",
            status: "Under Investigation",
            filedAt: new Date("2013-04-24")
          }
        ]
      },
      
      PublicProfile: {
        create: {
          coreIdeology: "Ma-Mati-Manush (Mother-Soil-People)",
          visionStatement: "To make West Bengal the most developed state in India through industrial growth, cultural preservation, and social welfare while maintaining Bengali identity.",
          publicPerception: "Strong regional leader with mass appeal. Known for emotional connect with people and decisive governance. Criticism on handling of opposition and democratic dissent.",
          keyStrengths: ["Mass Appeal", "Regional Pride", "Quick Decision Making", "Cultural Connect"],
          focusAreas: ["Industrial Development", "Cultural Preservation", "Women Empowerment", "Social Welfare"],
          leadershipStyle: "Populist"
        }
      },
      
      newsArticles: {
        create: [
          {
            headline: "Mamata launches new industrial policy for West Bengal",
            url: "https://telegraphindia.com/mamata-industrial-policy-bengal",
            publishedAt: new Date("2024-08-01")
          },
          {
            headline: "Bengal CM announces relief for flood-affected districts",
            url: "https://anandabazar.com/mamata-flood-relief-bengal",
            publishedAt: new Date("2024-07-18")
          }
        ]
      }
    }
  });

  // Politician 4: Yogi Adityanath
  const politician4 = await prisma.politician.create({
    data: {
      name: "Yogi Adityanath",
      party: "Bharatiya Janata Party",
      state: "Uttar Pradesh",
      constituency: "Gorakhpur Urban",
      age: 52,
      gender: "Male",
      education: "BSc Mathematics",
      criminalCases: 6,
      totalAssets: 740.0, // 7.4 Cr
      position: "Chief Minister",
      biography: "Chief Minister of Uttar Pradesh since 2017. Former MP from Gorakhpur for five consecutive terms. Head priest of Gorakhnath Temple.",
      profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      avgRatings: 3,
      numOfSearched: 85420,
      ratingsOutOf: 125680,
      
      workHistory: {
        create: [
          {
            role: "MP",
            startYear: 1998,
            endYear: 2017,
            constituency: "Gorakhpur",
            state: "Uttar Pradesh"
          },
          {
            role: "Head Priest",
            startYear: 2014,
            endYear: null,
            constituency: "Gorakhnath Temple",
            state: "Uttar Pradesh"
          },
          {
            role: "Chief Minister",
            startYear: 2017,
            endYear: null,
            constituency: "Gorakhpur Urban",
            state: "Uttar Pradesh"
          }
        ]
      },
      
      electionResult: {
        create: [
          {
            year: 2022,
            electionType: "Vidhan Sabha",
            constituency: "Gorakhpur Urban",
            state: "Uttar Pradesh",
            party: "Bharatiya Janata Party",
            result: "✅ Won",
            totalVotes: 110564,
            voteShare: 67.3,
            opponentName: "Subhawati Shukla",
            victoryMargin: 74782
          },
          {
            year: 2014,
            electionType: "Lok Sabha",
            constituency: "Gorakhpur",
            state: "Uttar Pradesh",
            party: "Bharatiya Janata Party",
            result: "✅ Won",
            totalVotes: 597648,
            voteShare: 61.2,
            opponentName: "Praveen Kumar Nishad",
            victoryMargin: 312692
          }
        ]
      },
      
      familyDetail: {
        create: {
          spouse: null,
          children: 0,
          fatherName: "Anand Singh Bisht",
          motherName: "Savitri Devi",
          background: "Born as Ajay Singh Bisht in Panchur village, Uttarakhand. Became a disciple of Mahant Avaidyanath and took sanyas. Dedicated to religious and political service.",
          familyProfession: "Agriculture/Forest Officer",
          economicStatus: "Middle Class",
          familyOrigin: "Rural",
          community: "General",
          politicalLegacy: "Self-Made"
        }
      },
      
      assetDetail: {
        create: {
          totalAssets: 740.0,
          movableAssets: 140.0,
          immovableAssets: 600.0
        }
      },
      
      criminalCase: {
        create: [
          {
            title: "Communal riots case",
            description: "Cases related to alleged inflammatory speeches during communal tensions",
            status: "Pending",
            filedAt: new Date("2007-01-27")
          },
          {
            title: "Unlawful assembly",
            description: "Case filed for unlawful assembly and rioting during protests",
            status: "Acquitted",
            filedAt: new Date("2006-11-15")
          },
          {
            title: "Attempt to murder",
            description: "Case related to alleged attack on opponents during political rivalry",
            status: "Under Trial",
            filedAt: new Date("2008-03-10")
          }
        ]
      },
      
      PublicProfile: {
        create: {
          coreIdeology: "Hindutva and Cultural Nationalism",
          visionStatement: "To transform Uttar Pradesh into a developed state through law and order, infrastructure development, and cultural revival while ensuring social harmony.",
          publicPerception: "Strong administrator known for improved law and order. Popular among Hindu voters for cultural initiatives. Criticism on minority rights and democratic space.",
          keyStrengths: ["Law and Order", "Religious Leadership", "Administrative Skills", "Mass Base"],
          focusAreas: ["Law and Order", "Infrastructure", "Religious Tourism", "Industrial Development"],
          leadershipStyle: "Authoritative"
        }
      },
      
      newsArticles: {
        create: [
          {
            headline: "Yogi government launches new industrial policy for UP",
            url: "https://timesofindia.com/yogi-industrial-policy-up",
            publishedAt: new Date("2024-08-03")
          },
          {
            headline: "UP CM inaugurates religious tourism circuit projects",
            url: "https://indianexpress.com/yogi-religious-tourism-up",
            publishedAt: new Date("2024-07-22")
          }
        ]
      }
    }
  });

  // Politician 5: Arvind Kejriwal
  const politician5 = await prisma.politician.create({
    data: {
      name: "Arvind Kejriwal",
      party: "Aam Aadmi Party",
      state: "Delhi",
      constituency: "New Delhi",
      age: 56,
      gender: "Male",
      education: "BTech Mechanical Engineering IIT Kharagpur",
      criminalCases: 4,
      totalAssets: 230.0, // 2.3 Cr
      position: "Chief Minister",
      biography: "Chief Minister of Delhi. Former IRS officer and social activist. Founder of Aam Aadmi Party. Known for anti-corruption movement and welfare policies.",
      profileImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      avgRatings: 4,
      numOfSearched: 115420,
      ratingsOutOf: 155680,
      
      workHistory: {
        create: [
          {
            role: "IRS Officer",
            startYear: 1992,
            endYear: 2006,
            constituency: "Income Tax Department",
            state: "Delhi"
          },
          {
            role: "Social Activist",
            startYear: 2006,
            endYear: 2012,
            constituency: "Anti-corruption Movement",
            state: "Delhi"
          },
          {
            role: "Chief Minister",
            startYear: 2013,
            endYear: null,
            constituency: "New Delhi",
            state: "Delhi"
          }
        ]
      },
      
      electionResult: {
        create: [
          {
            year: 2020,
            electionType: "Vidhan Sabha",
            constituency: "New Delhi",
            state: "Delhi",
            party: "Aam Aadmi Party",
            result: "✅ Won",
            totalVotes: 71596,
            voteShare: 53.6,
            opponentName: "Sunil Kumar Yadav",
            victoryMargin: 21697
          },
          {
            year: 2015,
            electionType: "Vidhan Sabha",
            constituency: "New Delhi",
            state: "Delhi",
            party: "Aam Aadmi Party",
            result: "✅ Won",
            totalVotes: 69076,
            voteShare: 62.3,
            opponentName: "Kiran Walia",
            victoryMargin: 31583
          }
        ]
      },
      
      familyDetail: {
        create: {
          spouse: "Sunita Kejriwal",
          children: 2,
          fatherName: "Gobind Ram Kejriwal",
          motherName: "Gita Devi",
          background: "Born in a middle-class family in Siwani, Haryana. Father was an electrical engineer. Studied at IIT Kharagpur and worked as IRS officer before entering politics.",
          familyProfession: "Engineering/Government Service",
          economicStatus: "Middle Class",
          familyOrigin: "Rural",
          community: "General",
          politicalLegacy: "Self-Made"
        }
      },
      
      assetDetail: {
        create: {
          totalAssets: 230.0,
          movableAssets: 80.0,
          immovableAssets: 150.0
        }
      },
      
      criminalCase: {
        create: [
          {
            title: "Defamation case - Nitin Gadkari",
            description: "Criminal defamation case filed by Nitin Gadkari over corruption allegations",
            status: "Pending",
            filedAt: new Date("2015-05-19")
          },
          {
            title: "Defamation case - Arun Jaitley",
            description: "Criminal defamation case related to allegations against Arun Jaitley",
            status: "Acquitted",
            filedAt: new Date("2017-12-07")
          },
          {
            title: "Excise Policy case",
            description: "Case related to alleged irregularities in Delhi's excise policy",
            status: "Under Investigation",
            filedAt: new Date("2022-08-17")
          }
        ]
      },
      
      PublicProfile: {
        create: {
          coreIdeology: "Swaraj and Anti-Corruption",
          visionStatement: "To create a corruption-free governance model focused on education, healthcare, and citizen services while ensuring transparency and accountability.",
          publicPerception: "Popular for education and healthcare reforms in Delhi. Strong anti-corruption stance. Criticism on confrontational politics and governance style.",
          keyStrengths: ["Anti-Corruption", "Education Reform", "Healthcare Innovation", "Citizen Connect"],
          focusAreas: ["Education", "Healthcare", "Power Supply", "Public Transport"],
          leadershipStyle: "Reformist"
        }
      },
      
      newsArticles: {
        create: [
          {
            headline: "Kejriwal announces free electricity scheme expansion",
            url: "https://thehindu.com/kejriwal-free-electricity-expansion",
            publishedAt: new Date("2024-08-04")
          },
          {
            headline: "Delhi CM launches new pollution control measures",
            url: "https://indianexpress.com/kejriwal-pollution-control-delhi",
            publishedAt: new Date("2024-07-28")
          }
        ]
      }
    }
  });

  // Politician 6: Nitish Kumar
  const politician6 = await prisma.politician.create({
    data: {
      name: "Nitish Kumar",
      party: "Janata Dal (United)",
      state: "Bihar",
      constituency: "Nalanda",
      age: 73,
      gender: "Male",
      education: "BTech Electrical Engineering, NIT Patna",
      criminalCases: 1,
      totalAssets: 680.0, // 6.8 Cr
      position: "Chief Minister",
      biography: "Chief Minister of Bihar for multiple terms. Former Union Minister. Known for development work and social engineering in Bihar politics.",
      profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      avgRatings: 3,
      numOfSearched: 75420,
      ratingsOutOf: 115680,
      
      workHistory: {
        create: [
          {
            role: "MLA",
            startYear: 1985,
            endYear: 1989,
            constituency: "Harnaut",
            state: "Bihar"
          },
          {
            role: "MP",
            startYear: 1989,
            endYear: 2005,
            constituency: "Barh",
            state: "Bihar"
          },
          {
            role: "Chief Minister",
            startYear: 2005,
            endYear: null,
            constituency: "Nalanda",
            state: "Bihar"
          }
        ]
      },
      
      electionResult: {
        create: [
          {
            year: 2020,
            electionType: "Vidhan Sabha",
            constituency: "Nalanda",
            state: "Bihar",
            party: "Janata Dal (United)",
            result: "✅ Won",
            totalVotes: 92540,
            voteShare: 56.7,
            opponentName: "Keshav Kumar",
            victoryMargin: 15388
          },
          {
            year: 2015,
            electionType: "Vidhan Sabha",
            constituency: "Nalanda",
            state: "Bihar",
            party: "Janata Dal (United)",
            result: "✅ Won",
            totalVotes: 88234,
            voteShare: 58.2,
            opponentName: "Kundan Kumar",
            victoryMargin: 18567
          }
        ]
      },
      
      familyDetail: {
        create: {
          spouse: "Late Manju Sinha",
          children: 1,
          fatherName: "Kaviraj Ram",
          motherName: "Parmeshwari Devi",
          background: "Born in Kalyanpur village, Nalanda district. Father was a freedom fighter and village head. Started political career with Jayaprakash Narayan movement.",
          familyProfession: "Agriculture/Village Leadership",
          economicStatus: "Middle Class",
          familyOrigin: "Rural",
          community: "OBC",
          politicalLegacy: "Self-Made"
        }
      },
      
      assetDetail: {
        create: {
          totalAssets: 680.0,
          movableAssets: 180.0,
          immovableAssets: 500.0
        }
      },
      
      criminalCase: {
        create: [
          {
            title: "Fodder Scam",
            description: "Case related to alleged involvement in multi-crore fodder scam in Bihar",
            status: "Acquitted",
            filedAt: new Date("1996-01-29")
          }
        ]
      },
      
      PublicProfile: {
        create: {
          coreIdeology: "Social Justice and Development",
          visionStatement: "To transform Bihar through good governance, social justice, women empowerment, and sustainable development while maintaining communal harmony.",
          publicPerception: "Respected for development work in Bihar, especially infrastructure and women empowerment. Known for political pragmatism and coalition building.",
          keyStrengths: ["Development Focus", "Social Engineering", "Coalition Building", "Women Empowerment"],
          focusAreas: ["Infrastructure", "Education", "Women Rights", "Prohibition"],
          leadershipStyle: "Pragmatic"
        }
      },
      
      newsArticles: {
        create: [
          {
            headline: "Nitish Kumar launches new road connectivity projects in Bihar",
        
            url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",

      
            publishedAt: new Date("2023-01-01")
          },
          {
            headline: "Nitish Kumar wins election in Bihar",
            url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
            publishedAt: new Date("2023-01-01")
          }
        ]
      }
    }
  }); 
  

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