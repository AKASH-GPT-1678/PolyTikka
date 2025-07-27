// Prisma Seed Data for 10 Politicians with All Relations
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  // Create 10 Politicians with all relations
  
  // Politician 1: Rajesh Kumar
  const politician1 = await prisma.politician.create({
    data: {
      name: "Rajesh Kumar Singh",
      party: "Bharatiya Janata Party",
      state: "Uttar Pradesh",
      constituency: "Varanasi",
      age: 52,
      gender: "Male",
      education: "MA Political Science, BHU Varanasi",
      criminalCases: 2,
      totalAssets: 850.0, // 8.5 Cr
      position: "MP",
      biography: "A seasoned politician with over 20 years of experience in public service. Known for his development initiatives in rural areas and strong advocacy for farmers' rights.",
      profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      avgRatings: 4,
      numOfSearched: 15420,
      ratingsOutOf: 25680,
      
      // Work History
      workHistory: {
        create: [
          {
            role: "Municipal Corporator",
            startYear: 2004,
            endYear: 2009,
            constituency: "Ward 15, Varanasi",
            state: "Uttar Pradesh"
          },
          {
            role: "MLA",
            startYear: 2012,
            endYear: 2017,
            constituency: "Varanasi South",
            state: "Uttar Pradesh"
          },
          {
            role: "MP",
            startYear: 2019,
            endYear: null,
            constituency: "Varanasi",
            state: "Uttar Pradesh"
          }
        ]
      },
      
      // Election Results
      electionResult: {
        create: [
          {
            year: 2019,
            electionType: "Lok Sabha",
            constituency: "Varanasi",
            state: "Uttar Pradesh",
            party: "Bharatiya Janata Party",
            result: "✅ Won",
            totalVotes: 853895,
            voteShare: 63.6,
            opponentName: "Shalini Yadav",
            victoryMargin: 479505
          },
          {
            year: 2017,
            electionType: "Vidhan Sabha",
            constituency: "Varanasi South",
            state: "Uttar Pradesh",
            party: "Bharatiya Janata Party",
            result: "✅ Won",
            totalVotes: 125430,
            voteShare: 58.2,
            opponentName: "Ramesh Gupta",
            victoryMargin: 35420
          }
        ]
      },
      
      // Family Details
      familyDetail: {
        create: {
          spouse: "Sunita Singh",
          children: 2,
          fatherName: "Late Shri Mahendra Singh",
          motherName: "Smt. Kamala Devi",
          background: "Born into a middle-class family in Varanasi. Father was a government school teacher and mother was a homemaker. Has two children - one son pursuing engineering and one daughter studying medicine."
        }
      },
      
      // Asset Details
      assetDetail: {
        create: {
          totalAssets: 850.0,
          movableAssets: 230.0,
          immovableAssets: 620.0
        }
      },
      
      // Criminal Cases
      criminalCase: {
        create: [
          {
            title: "Alleged misuse of government funds",
            description: "Case filed regarding alleged irregularities in rural development fund allocation during tenure as MLA",
            status: "Pending",
            filedAt: new Date("2020-03-15")
          },
          {
            title: "Defamation case",
            description: "Defamation case filed by political opponent regarding statements made during election campaign",
            status: "Acquitted",
            filedAt: new Date("2019-01-10")
          }
        ]
      },
      
      // Public Profile
      PublicProfile: {
        create: {
          coreIdeology: "Development for All - Sabka Saath Sabka Vikas",
          visionStatement: "To transform Varanasi into a model constituency through sustainable development, digital empowerment, and preservation of cultural heritage while ensuring inclusive growth for all sections of society.",
          publicPerception: "Viewed as a development-oriented leader with strong grassroots connections. Popular among youth for digital initiatives and among farmers for agricultural reforms. Some criticism regarding slow implementation of infrastructure projects.",
          keyStrengths: ["Oratory Skills", "Grassroots Engagement", "Digital Literacy Advocacy", "Cultural Preservation"],
          focusAreas: ["Digital Transformation", "Rural Empowerment", "Heritage Conservation", "Education Reform"],
          leadershipStyle: "Transformative"
        }
      },
      
      // News Articles
      newsArticles: {
        create: [
          {
            headline: "Rajesh Kumar launches digital literacy program in rural Varanasi",
            url: "https://timesofindia.com/rajesh-kumar-digital-literacy-varanasi",
            publishedAt: new Date("2024-01-15")
          },
          {
            headline: "MP Rajesh Kumar advocates for farmer loan waivers in Parliament",
            url: "https://indianexpress.com/rajesh-kumar-farmer-loans-parliament",
            publishedAt: new Date("2024-01-10")
          }
        ]
      }
    }
  });

  // Politician 2: Priya Sharma
  const politician2 = await prisma.politician.create({
    data: {
      name: "Dr. Priya Sharma",
      party: "Indian National Congress",
      state: "Rajasthan",
      constituency: "Jaipur Rural",
      age: 45,
      gender: "Female",
      education: "MBBS, MD Public Health, AIIMS Delhi",
      criminalCases: 0,
      totalAssets: 320.0,
      position: "MLA",
      biography: "A medical doctor turned politician, dedicated to healthcare reforms and women's empowerment. Has been instrumental in improving rural healthcare infrastructure.",
      profileImage: "https://images.unsplash.com/photo-1494790108755-2616b612b5c5?w=400&h=400&fit=crop&crop=face",
      avgRatings: 5,
      numOfSearched: 8750,
      ratingsOutOf: 12400,
      
      workHistory: {
        create: [
          {
            role: "Medical Officer",
            startYear: 2005,
            endYear: 2015,
            constituency: "District Hospital Jaipur",
            state: "Rajasthan"
          },
          {
            role: "MLA",
            startYear: 2018,
            endYear: null,
            constituency: "Jaipur Rural",
            state: "Rajasthan"
          }
        ]
      },
      
      electionResult: {
        create: [
          {
            year: 2018,
            electionType: "Vidhan Sabha",
            constituency: "Jaipur Rural",
            state: "Rajasthan",
            party: "Indian National Congress",
            result: "✅ Won",
            totalVotes: 98540,
            voteShare: 52.3,
            opponentName: "Vikram Singh Rathore",
            victoryMargin: 15680
          }
        ]
      },
      
      familyDetail: {
        create: {
          spouse: "Dr. Amit Sharma",
          children: 1,
          fatherName: "Shri Rajendra Prasad",
          motherName: "Smt. Meera Devi",
          background: "Daughter of a government school principal. Married to a cardiologist. Has one daughter studying in class 10th."
        }
      },
      
      assetDetail: {
        create: {
          totalAssets: 320.0,
          movableAssets: 120.0,
          immovableAssets: 200.0
        }
      },
      
      PublicProfile: {
        create: {
          coreIdeology: "Healthcare for All - Swasthya Seva",
          visionStatement: "To ensure quality healthcare reaches every doorstep while empowering women through education and economic opportunities.",
          publicPerception: "Highly respected for her medical background and genuine concern for public welfare. Strong support among women and healthcare workers.",
          keyStrengths: ["Medical Expertise", "Women's Rights Advocacy", "Policy Making", "Community Health"],
          focusAreas: ["Healthcare Reform", "Women Empowerment", "Rural Development", "Education"],
          leadershipStyle: "Inclusive"
        }
      },
      
      newsArticles: {
        create: [
          {
            headline: "Dr. Priya Sharma inaugurates mobile health clinics for rural areas",
            url: "https://hindustantimes.com/priya-sharma-mobile-clinics-rajasthan",
            publishedAt: new Date("2024-01-20")
          }
        ]
      }
    }
  });

  // Politician 3: Arjun Reddy
  const politician3 = await prisma.politician.create({
    data: {
      name: "Arjun Reddy Naidu",
      party: "Telugu Desam Party",
      state: "Andhra Pradesh",
      constituency: "Vijayawada East",
      age: 38,
      gender: "Male",
      education: "BTech Computer Science, MBA",
      criminalCases: 1,
      totalAssets: 1250.0,
      position: "MLA",
      biography: "A tech entrepreneur turned politician, focusing on digital governance and startup ecosystem development in Andhra Pradesh.",
      profileImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      avgRatings: 4,
      numOfSearched: 12300,
      ratingsOutOf: 18900,
      
      workHistory: {
        create: [
          {
            role: "IT Entrepreneur",
            startYear: 2010,
            endYear: 2019,
            constituency: "Hyderabad",
            state: "Andhra Pradesh"
          },
          {
            role: "MLA",
            startYear: 2019,
            endYear: null,
            constituency: "Vijayawada East",
            state: "Andhra Pradesh"
          }
        ]
      },
      
      electionResult: {
        create: [
          {
            year: 2019,
            electionType: "Vidhan Sabha",
            constituency: "Vijayawada East",
            state: "Andhra Pradesh",
            party: "Telugu Desam Party",
            result: "✅ Won",
            totalVotes: 89650,
            voteShare: 48.7,
            opponentName: "Srinivas Rao",
            victoryMargin: 8940
          }
        ]
      },
      
      familyDetail: {
        create: {
          spouse: "Lakshmi Reddy",
          children: 2,
          fatherName: "Venkata Reddy",
          motherName: "Smt. Padmavathi",
          background: "Son of a successful businessman. Married to a software engineer. Has twin sons aged 8 years."
        }
      },
      
      assetDetail: {
        create: {
          totalAssets: 1250.0,
          movableAssets: 450.0,
          immovableAssets: 800.0
        }
      },
      
      criminalCase: {
        create: [
          {
            title: "Tax evasion allegation",
            description: "IT department investigation regarding alleged tax irregularities in previous business ventures",
            status: "Under Investigation",
            filedAt: new Date("2021-06-20")
          }
        ]
      },
      
      PublicProfile: {
        create: {
          coreIdeology: "Digital First Governance",
          visionStatement: "To make Andhra Pradesh the leading digital state of India through innovation, technology adoption, and entrepreneurship promotion.",
          publicPerception: "Popular among young voters and IT professionals. Some skepticism from traditional voters regarding his business background.",
          keyStrengths: ["Technology Vision", "Innovation", "Youth Connect", "Business Acumen"],
          focusAreas: ["Digital Infrastructure", "Startup Ecosystem", "Innovation Hubs", "Skill Development"],
          leadershipStyle: "Innovative"
        }
      },
      
      newsArticles: {
        create: [
          {
            headline: "Arjun Reddy proposes blockchain-based land records system",
            url: "https://deccanchronicle.com/arjun-reddy-blockchain-land-records",
            publishedAt: new Date("2024-01-18")
          }
        ]
      }
    }
  });

  // Politician 4: Fatima Khan
  const politician4 = await prisma.politician.create({
    data: {
      name: "Fatima Khan",
      party: "All India Trinamool Congress",
      state: "West Bengal",
      constituency: "Kolkata North",
      age: 41,
      gender: "Female",
      education: "LLB, Calcutta University",
      criminalCases: 0,
      totalAssets: 180.0,
      position: "MP",
      biography: "A lawyer and social activist dedicated to minority rights and urban development. Known for her work in slum rehabilitation and women's safety.",
      profileImage: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&h=400&fit=crop&crop=face",
      avgRatings: 4,
      numOfSearched: 9870,
      ratingsOutOf: 14200,
      
      workHistory: {
        create: [
          {
            role: "Advocate",
            startYear: 2008,
            endYear: 2016,
            constituency: "Calcutta High Court",
            state: "West Bengal"
          },
          {
            role: "Councilor",
            startYear: 2015,
            endYear: 2019,
            constituency: "Kolkata Municipal Corporation",
            state: "West Bengal"
          },
          {
            role: "MP",
            startYear: 2019,
            endYear: null,
            constituency: "Kolkata North",
            state: "West Bengal"
          }
        ]
      },
      
      electionResult: {
        create: [
          {
            year: 2019,
            electionType: "Lok Sabha",
            constituency: "Kolkata North",
            state: "West Bengal",
            party: "All India Trinamool Congress",
            result: "✅ Won",
            totalVotes: 756420,
            voteShare: 59.8,
            opponentName: "Rahul Sinha",
            victoryMargin: 124563
          }
        ]
      },
      
      familyDetail: {
        create: {
          spouse: "Mohd. Arif Khan",
          children: 2,
          fatherName: "Late Abdul Rahman Khan",
          motherName: "Smt. Nasreen Begum",
          background: "Daughter of a small businessman. Husband is a chartered accountant. Has two children - one son and one daughter."
        }
      },
      
      assetDetail: {
        create: {
          totalAssets: 180.0,
          movableAssets: 80.0,
          immovableAssets: 100.0
        }
      },
      
      PublicProfile: {
        create: {
          coreIdeology: "Justice and Equality for All",
          visionStatement: "To create an inclusive society where minorities feel secure and women are empowered to participate fully in economic and social development.",
          publicPerception: "Highly respected for her integrity and commitment to social justice. Strong support among minorities and women voters.",
          keyStrengths: ["Legal Expertise", "Social Justice", "Community Mobilization", "Women's Rights"],
          focusAreas: ["Minority Rights", "Urban Development", "Women Safety", "Legal Reforms"],
          leadershipStyle: "Empathetic"
        }
      },
      
      newsArticles: {
        create: [
          {
            headline: "Fatima Khan leads initiative for women's safety in Kolkata",
            url: "https://telegraphindia.com/fatima-khan-women-safety-kolkata",
            publishedAt: new Date("2024-01-22")
          }
        ]
      }
    }
  });

  // Politician 5: Suresh Patel
  const politician5 = await prisma.politician.create({
    data: {
      name: "Suresh Bhai Patel",
      party: "Aam Aadmi Party",
      state: "Gujarat",
      constituency: "Ahmedabad West",
      age: 55,
      gender: "Male",
      education: "BCom, Certified Public Accountant",
      criminalCases: 3,
      totalAssets: 450.0,
      position: "MLA",
      biography: "Former businessman and anti-corruption activist. Known for his transparency initiatives and efforts to clean up local governance.",
      profileImage: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
      avgRatings: 3,
      numOfSearched: 6540,
      ratingsOutOf: 11200,
      
      workHistory: {
        create: [
          {
            role: "Business Owner",
            startYear: 1995,
            endYear: 2018,
            constituency: "Ahmedabad",
            state: "Gujarat"
          },
          {
            role: "Social Activist",
            startYear: 2015,
            endYear: 2020,
            constituency: "Ahmedabad",
            state: "Gujarat"
          },
          {
            role: "MLA",
            startYear: 2022,
            endYear: null,
            constituency: "Ahmedabad West",
            state: "Gujarat"
          }
        ]
      },
      
      electionResult: {
        create: [
          {
            year: 2022,
            electionType: "Vidhan Sabha",
            constituency: "Ahmedabad West",
            state: "Gujarat",
            party: "Aam Aadmi Party",
            result: "✅ Won",
            totalVotes: 78950,
            voteShare: 45.2,
            opponentName: "Kiran Patel",
            victoryMargin: 3420
          }
        ]
      },
      
      familyDetail: {
        create: {
          spouse: "Manju Ben Patel",
          children: 3,
          fatherName: "Late Bharat Bhai Patel",
          motherName: "Smt. Kokila Ben",
          background: "Son of a farmer who moved to the city. Built a successful textile business. Has three children - two sons and one daughter."
        }
      },
      
      assetDetail: {
        create: {
          totalAssets: 450.0,
          movableAssets: 180.0,
          immovableAssets: 270.0
        }
      },
      
      criminalCase: {
        create: [
          {
            title: "Protest related charges",
            description: "Cases filed during anti-corruption protests and civil disobedience movements",
            status: "Pending",
            filedAt: new Date("2018-08-15")
          },
          {
            title: "Defiance of prohibitory orders",
            description: "Case related to organizing protests without permission during anti-government demonstrations",
            status: "Bailed",
            filedAt: new Date("2019-03-10")
          },
          {
            title: "Public nuisance",
            description: "Case filed for blocking traffic during protest march",
            status: "Acquitted",
            filedAt: new Date("2017-12-05")
          }
        ]
      },
      
      PublicProfile: {
        create: {
          coreIdeology: "Transparent Governance",
          visionStatement: "To eliminate corruption from grassroots level and ensure transparent, accountable governance that serves the common people.",
          publicPerception: "Respected for his anti-corruption stance but faces criticism for his confrontational approach. Popular among middle-class voters.",
          keyStrengths: ["Anti-Corruption", "Financial Management", "Grassroots Connect", "Transparency"],
          focusAreas: ["Corruption Elimination", "Transparent Governance", "Public Services", "Administrative Reform"],
          leadershipStyle: "Reformative"
        }
      },
      
      newsArticles: {
        create: [
          {
            headline: "Suresh Patel exposes corruption in municipal contracts",
            url: "https://gujaratsamachar.com/suresh-patel-corruption-municipal",
            publishedAt: new Date("2024-01-25")
          }
        ]
      }
    }
  });

  // Politician 6: Meera Joshi
  const politician6 = await prisma.politician.create({
    data: {
      name: "Meera Joshi",
      party: "Shiv Sena",
      state: "Maharashtra",
      constituency: "Mumbai South",
      age: 48,
      gender: "Female",
      education: "MA Sociology, PhD Social Work",
      criminalCases: 0,
      totalAssets: 680.0,
      position: "MP",
      biography: "Social worker and women's rights activist with extensive experience in urban development and slum rehabilitation programs.",
      profileImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
      avgRatings: 4,
      numOfSearched: 11450,
      ratingsOutOf: 16800,
      
      workHistory: {
        create: [
          {
            role: "Social Worker",
            startYear: 2000,
            endYear: 2014,
            constituency: "Mumbai Slums",
            state: "Maharashtra"
          },
          {
            role: "Municipal Corporator",
            startYear: 2012,
            endYear: 2017,
            constituency: "Mumbai Municipal Corporation",
            state: "Maharashtra"
          },
          {
            role: "MP",
            startYear: 2019,
            endYear: null,
            constituency: "Mumbai South",
            state: "Maharashtra"
          }
        ]
      },
      
      electionResult: {
        create: [
          {
            year: 2019,
            electionType: "Lok Sabha",
            constituency: "Mumbai South",
            state: "Maharashtra",
            party: "Shiv Sena",
            result: "✅ Won",
            totalVotes: 542380,
            voteShare: 51.7,
            opponentName: "Milind Deora",
            victoryMargin: 89560
          }
        ]
      },
      
      familyDetail: {
        create: {
          spouse: "Prakash Joshi",
          children: 2,
          fatherName: "Shri Ramesh Kulkarni",
          motherName: "Smt. Sushila Kulkarni",
          background: "Daughter of a government officer. Husband works in the film industry. Has two daughters pursuing higher education."
        }
      },
      
      assetDetail: {
        create: {
          totalAssets: 680.0,
          movableAssets: 280.0,
          immovableAssets: 400.0
        }
      },
      
      PublicProfile: {
        create: {
          coreIdeology: "Mumbai for All Mumbaikars",
          visionStatement: "To ensure Mumbai remains a city of dreams where every resident, regardless of economic status, has access to basic amenities and opportunities for growth.",
          publicPerception: "Highly regarded for her work with underprivileged communities. Strong support among women and urban poor.",
          keyStrengths: ["Social Work", "Urban Planning", "Women Empowerment", "Community Development"],
          focusAreas: ["Slum Rehabilitation", "Urban Development", "Women's Rights", "Housing for All"],
          leadershipStyle: "Compassionate"
        }
      },
      
      newsArticles: {
        create: [
          {
            headline: "Meera Joshi launches affordable housing project in Mumbai",
            url: "https://mumbaimirror.com/meera-joshi-affordable-housing-mumbai",
            publishedAt: new Date("2024-01-28")
          }
        ]
      }
    }
  });

  // Politician 7: Vikram Singh
  const politician7 = await prisma.politician.create({
    data: {
      name: "Vikram Singh Chauhan",
      party: "Indian National Congress",
      state: "Himachal Pradesh",
      constituency: "Shimla",
      age: 49,
      gender: "Male",
      education: "BSc Agriculture, Diploma in Horticulture",
      criminalCases: 1,
      totalAssets: 290.0,
      position: "MLA",
      biography: "Former army officer turned politician, focusing on border security, tourism development, and sustainable agriculture in hill states.",
      profileImage: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=400&h=400&fit=crop&crop=face",
      avgRatings: 4,
      numOfSearched: 7850,
      ratingsOutOf: 12100,
      
      workHistory: {
        create: [
          {
            role: "Army Officer",
            startYear: 1998,
            endYear: 2015,
            constituency: "Indian Army",
            state: "Various"
          },
          {
            role: "MLA",
            startYear: 2017,
            endYear: null,
            constituency: "Shimla",
            state: "Himachal Pradesh"
          }
        ]
      },
      
      electionResult: {
        create: [
          {
            year: 2017,
            electionType: "Vidhan Sabha",
            constituency: "Shimla",
            state: "Himachal Pradesh",
            party: "Indian National Congress",
            result: "✅ Won",
            totalVotes: 65420,
            voteShare: 54.8,
            opponentName: "Suresh Bharadwaj",
            victoryMargin: 12450
          }
        ]
      },
      
      familyDetail: {
        create: {
          spouse: "Sunita Chauhan",
          children: 2,
          fatherName: "Late Col. Mahendra Singh",
          motherName: "Smt. Kamla Devi",
          background: "Son of a retired army colonel. Wife is a school teacher. Has one son in Indian Army and one daughter studying engineering."
        }
      },
      
      assetDetail: {
        create: {
          totalAssets: 290.0,
          movableAssets: 120.0,
          immovableAssets: 170.0
        }
      },
      
      criminalCase: {
        create: [
          {
            title: "Land dispute case",
            description: "Civil dispute regarding ancestral property boundaries with neighboring landowner",
            status: "Under Mediation",
            filedAt: new Date("2020-11-12")
          }
        ]
      },
      
      PublicProfile: {
        create: {
          coreIdeology: "Hill State Development with Security",
          visionStatement: "To develop Himachal Pradesh as a model hill state balancing economic growth through sustainable tourism while ensuring border security and environmental protection.",
          publicPerception: "Respected for his military background and disciplined approach. Popular among ex-servicemen and tourism industry.",
          keyStrengths: ["Military Experience", "Discipline", "Security Awareness", "Tourism Development"],
          focusAreas: ["Border Security", "Sustainable Tourism", "Hill Agriculture", "Ex-servicemen Welfare"],
          leadershipStyle: "Disciplined"
        }
      },
      
      newsArticles: {
        create: [
          {
            headline: "Vikram Singh proposes eco-tourism policy for Himachal",
            url: "https://tribuneindia.com/vikram-singh-eco-tourism-himachal",
            publishedAt: new Date("2024-01-30")
          }
        ]
      }
    }
  });

  // Politician 8: Kavita Menon
  const politician8 = await prisma.politician.create({
    data: {
      name: "Dr. Kavita Menon",
      party: "Communist Party of India (Marxist)",
      state: "Kerala",
      constituency: "Thiruvananthapuram",
      age: 44,
      gender: "Female",
      education: "MBBS, MD Pediatrics, MPH",
      criminalCases: 0,
      totalAssets: 85.0,
      position: "MLA",
      biography: "Pediatrician and public health expert committed to healthcare accessibility and social justice. Known for her work in child health and nutrition programs.",
      profileImage: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=400&fit=crop&crop=face",
      avgRatings: 5,
      numOfSearched: 5420,
      ratingsOutOf: 8900,
      
      workHistory: {
        create: [
          {
            role: "Pediatrician",
            startYear: 2005,
            endYear: 2021,
            constituency: "Medical College Hospital",
            state: "Kerala"
          },
          {
            role: "MLA",
            startYear: 2021,
            endYear: null,
            constituency: "Thiruvananthapuram",
            state: "Kerala"
          }
        ]
      },
      
      electionResult: {
        create: [
          {
            year: 2021,
            electionType: "Vidhan Sabha",
            constituency: "Thiruvananthapuram",
            state: "Kerala",
            party: "Communist Party of India (Marxist)",
            result: "✅ Won",
            totalVotes: 89640,
            voteShare: 49.8,
            opponentName: "Rajeev Chandrasekhar",
            victoryMargin: 4850
          }
        ]
      },
      
      familyDetail: {
        create: {
          spouse: "Dr. Suresh Menon",
          children: 1,
          fatherName: "Shri K.P. Nair",
          motherName: "Smt. Latha Nair",
          background: "Daughter of a retired teacher. Married to a cardiologist. Has one son studying medicine."
        }
      },
      
      assetDetail: {
        create: {
          totalAssets: 85.0,
          movableAssets: 50.0,
          immovableAssets: 35.0
        }
      },
      
      criminalCase: {
        create: [
          {
            title: "Land dispute case",
            description: "Civil dispute regarding ancestral property boundaries with neighboring landowner",
            status: "Under Mediation",
            filedAt: new Date("2020-11-12")
          }
        ]
      },
      
      PublicProfile: {
        create: {
          coreIdeology: "Health and Social Justice",
          visionStatement: "To ensure access to quality healthcare for all and promote social justice through education and empowerment.",
          publicPerception: "Known for her dedication to child health and nutrition programs. Popular among families and healthcare professionals.",
          keyStrengths: ["Pediatrician", "Public Health Expertise", "Social Justice", "Child Health"],  
          focusAreas: ["Child Health", "Health Accessibility", "Social Justice", "Child Nutrition"],
          leadershipStyle: "Empathetic"  
        }
      },      
      
      newsArticles: {
        create: [
          {
            headline: "Kavita Menon launches child health initiative in Kerala",
            url: "https://hindustantimes.com/kavita-menon-child-health-initiative-kerala",
            publishedAt: new Date("2024-01-30")
          }
        ]
      }
    }
  });
};


main()
  .catch((e) => {
    console.error("❌ Seeding error:", e);
    process.exit(1);
  })
  .finally(async () => {
    console.log("✅ Seeding finished");
    await prisma.$disconnect();
  });