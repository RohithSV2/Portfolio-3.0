// Portfolio Data Source for Rohith S
// Integrated from Verified Resume, Old Portfolio (portfolio-2-0-peach-xi.vercel.app), and d:\Certificates

export const portfolioData = {
  personal: {
    name: "Rohith S",
    role: "Information Science & Engineering Undergraduate",
    college: "The National Institute of Engineering, Mysuru (Class of 2028)",
    university: "Visvesvaraya Technological University",
    location: "Shivamogga / Mysuru, Karnataka, India",
    email: "rohithsvernekar2@gmail.com",
    phone: "+91 8660573142",
    linkedin: "https://linkedin.com/in/rohith-s-4b5218330",
    github: "https://github.com/RohithSV2",
    calLink: "rohith-s/30min",
    bio: "Information Science & Engineering undergraduate at NIE Mysuru with hands-on experience across backend systems, machine learning, Android development, and cybersecurity. Proficient in Java, Python, SQL, and Data Structures & Algorithms, with a strong focus on applied AI, resilient relational database design, and software built to hold up under real-world demands.",
    statusBadge: "Available for Software Engineering Internships & Research",
    spokenLanguages: ["English", "Kannada", "Hindi", "Konkani"],
    focusAreas: ["AI/ML & Deep Learning", "Backend & REST APIs", "Cybersecurity", "Android & Full-Stack"],
    stats: [
      { label: "Core Projects Built", value: "5" },
      { label: "Verified Credentials", value: "11" },
      { label: "SSLC Board Score", value: "98.72%" },
      { label: "PUC Board Score", value: "93.66%" }
    ]
  },

  skills: {
    languages: [
      { name: "Java", level: "Proficient", icon: "code" },
      { name: "Python", level: "Proficient", icon: "terminal" },
      { name: "SQL", level: "Proficient", icon: "database" },
      { name: "C", level: "Proficient", icon: "cpu" },
      { name: "JavaScript (ES6+)", level: "Proficient", icon: "globe" },
      { name: "Kotlin", level: "Intermediate", icon: "smartphone" }
    ],
    dsa: [
      { name: "Arrays & Strings", level: "Proficient" },
      { name: "Linked Lists", level: "Proficient" },
      { name: "Stacks & Queues", level: "Proficient" },
      { name: "Trees & Binary Trees", level: "Proficient" },
      { name: "Graphs & Traversal", level: "Intermediate" },
      { name: "Sorting & Searching", level: "Proficient" },
      { name: "Algorithmic Complexity (Big-O)", level: "Advanced" },
      { name: "Design & Analysis of Algorithms", level: "Advanced" }
    ],
    web: [
      { name: "HTML5", level: "Advanced" },
      { name: "CSS3 / Modern CSS", level: "Advanced" },
      { name: "JavaScript", level: "Advanced" },
      { name: "Flask (Python)", level: "Proficient" },
      { name: "REST API Architecture", level: "Proficient" },
      { name: "Full-Stack CRUD", level: "Proficient" },
      { name: "Responsive UI/UX", level: "Advanced" }
    ],
    aiData: [
      { name: "CNN (Convolutional Neural Networks)", level: "Proficient" },
      { name: "LSTM (Long Short-Term Memory)", level: "Proficient" },
      { name: "NumPy", level: "Advanced" },
      { name: "Pandas", level: "Advanced" },
      { name: "Natural Language Processing (NLP)", level: "Proficient" },
      { name: "gTTS Voice Synthesis", level: "Proficient" },
      { name: "Feature Engineering", level: "Proficient" }
    ],
    databases: [
      { name: "SQL", level: "Proficient" },
      { name: "MySQL", level: "Proficient" },
      { name: "Database Management Systems (DBMS)", level: "Proficient" },
      { name: "Relational Schema Normalization (1NF–3NF)", level: "Advanced" },
      { name: "Complex SQL Joins & Queries", level: "Proficient" },
      { name: "Room / SQLite (Android)", level: "Proficient" }
    ],
    tools: [
      { name: "Git & GitHub", level: "Proficient" },
      { name: "VS Code", level: "Advanced" },
      { name: "Android Studio", level: "Proficient" },
      { name: "Jupyter Notebook", level: "Proficient" },
      { name: "Eclipse", level: "Proficient" },
      { name: "Postman", level: "Proficient" }
    ],
    coreCS: [
      { name: "Object-Oriented Programming (OOP)", level: "Advanced" },
      { name: "Operating Systems", level: "Intermediate" },
      { name: "Computer Networks", level: "Intermediate" },
      { name: "Software Development Lifecycle (SDLC)", level: "Proficient" },
      { name: "Cybersecurity Fundamentals", level: "Proficient" }
    ]
  },

  projects: [
    {
      id: "agri-ai-chatbot",
      title: "Agri AI Chatbot",
      category: "AI & Machine Learning",
      tagline: "NLP-driven agricultural advisory chatbot with Flask REST APIs and gTTS voice responses.",
      description: "An AI-powered agriculture chatbot that answers farmers' real-time queries, with natural language processing and voice-enabled responses through gTTS. Backend served via Flask REST APIs for reliable, repeatable, modular responses.",
      image: "assets/projects/agri-chatbot.svg",
      tech: ["Python", "Flask", "REST APIs", "NLP", "gTTS", "HTML/CSS", "JSON"],
      highlights: [
        "Built and deployed REST APIs using Flask to reliably handle real-time farmer advisory queries.",
        "Integrated Natural Language Processing (NLP) with tokenization and intent detection.",
        "Developed voice-guided feedback loop using Google Text-to-Speech (gTTS) for accessibility.",
        "Designed a modular, testable backend structure with sub-second response times for pest control and crop diagnostics."
      ],
      github: "https://github.com/RohithSV2",
      badge: "AI & Voice Assistant"
    },
    {
      id: "food-delivery-prediction",
      title: "Food Delivery Time Prediction (CNN-LSTM)",
      category: "AI & Machine Learning",
      tagline: "Deep learning hybrid CNN-LSTM model predicting delivery latency from spatio-temporal data.",
      description: "A deep learning model combining CNN and LSTM architectures to predict food delivery time, with engineered features from historical delivery data and accuracy evaluated against baseline approaches using NumPy, Pandas, and Jupyter Notebook.",
      image: "assets/projects/food-delivery.svg",
      tech: ["Python", "CNN", "LSTM", "Deep Learning", "NumPy", "Pandas", "Jupyter Notebook", "Feature Engineering"],
      highlights: [
        "Combined 1D Convolutional Neural Network (CNN) layers for spatial route feature extraction.",
        "Trained Bidirectional LSTM sequence layers to model temporal weather shifts and traffic congestion variance.",
        "Engineered features and normalized multi-parameter tabular datasets using NumPy and Pandas.",
        "Evaluated model performance against baseline regression models, yielding a significant boost in prediction accuracy."
      ],
      github: "https://github.com/RohithSV2",
      badge: "Deep Learning Research"
    },
    {
      id: "website-auditing-tool",
      title: "Website Auditing Tool",
      category: "Developer Tools",
      tagline: "Automated Python SEO & DOM crawler for structural issues and broken link reports.",
      description: "A Python-based tool that automatically scans websites for common SEO issues — scraping and analyzing HTML content across pages to generate audit reports flagging missing meta tags, broken links, and heading-structure issues.",
      image: "assets/projects/website-auditing.svg",
      tech: ["Python", "Web Scraping", "Data Extraction", "HTML Parsing", "SEO Auditing", "Backend Automation"],
      highlights: [
        "Engineered a Python tool that crawls and parses HTML across pages to automatically detect structural SEO bugs.",
        "Generated automated audit reports catching missing meta tags, broken hyperlinks (404s), and heading hierarchy gaps.",
        "Implemented recursive crawling algorithms with automated JSON and tabular report exports.",
        "Streamlined web QA through systematic debugging and automated DOM health checks."
      ],
      github: "https://github.com/RohithSV2",
      badge: "Automation & QA"
    },
    {
      id: "hostel-management-app",
      title: "Hostel Management Android App",
      category: "Mobile Apps",
      tagline: "Native Android application for student records, room allocation, and complaint tracking.",
      description: "An Android application to manage hostel administration, with modules for student records, room allocation, and complaint tracking behind an intuitive, day-to-day usable interface backed by structured data models.",
      image: "assets/projects/hostel-management.svg",
      tech: ["Java/Kotlin", "Android Studio", "UI/UX", "Database Management", "Room / SQLite", "Mobile Architecture"],
      highlights: [
        "Developed an Android application with modules for student records, room allocation, and complaint tracking.",
        "Designed structured relational SQLite / Room entities for seamless student and inventory administration.",
        "Built intuitive ticket lifecycle workflows streamlining issue reporting from students to hostel wardens.",
        "Engineered an intuitive UI/UX with smooth transitions to eliminate physical paperwork."
      ],
      github: "https://github.com/RohithSV2",
      badge: "Mobile Engineering"
    },
    {
      id: "textile-store-management",
      title: "Textile Store Management System",
      category: "Full-Stack & Web",
      tagline: "Normalized relational DB & CRUD inventory billing system with complex SQL optimization.",
      description: "A database-driven textile inventory and billing management system, built on a normalized relational schema for product and customer records, with full CRUD operations, complex SQL optimization, and a responsive frontend.",
      image: "assets/projects/textile-store.svg",
      tech: ["SQL", "MySQL", "Relational Database", "HTML5", "CSS3", "JavaScript", "CRUD Architecture"],
      highlights: [
        "Designed a normalized 3NF relational database schema eliminating anomalies and data duplication.",
        "Built a full CRUD-based inventory billing system for product and customer records.",
        "Implemented complex SQL queries for real-time stock tracking, automated bill calculation, and cashier checkout.",
        "Paired with a responsive HTML/CSS/JavaScript frontend delivering sub-5ms query response speeds."
      ],
      github: "https://github.com/RohithSV2",
      badge: "Full-Stack Architecture"
    }
  ],

  certificates: [
    {
      id: "cert-ccsa",
      title: "Certified Cybersecurity Associate (CCSA)",
      issuer: "Cyberverse Foundation & NIE Mysuru",
      issuerCategory: "Cybersecurity",
      credentialId: "CVF2025NIE0294",
      date: "Dec 2024 – Mar 2025",
      image: "assets/certificates/cyberverse-ccsa-official.jpeg",
      fileUrl: "assets/certificates/cyberverse-ccsa-official.jpeg",
      badgeColor: "indigo",
      summary: "Official Certificate of Completion awarded by Cyberverse Foundation to Rohith S (Dept of Information Science and Engineering, NIE Mysuru). Completed both online (16 Dec 2024 – 4 Jan 2025) and offline intensive hands-on phases (18 Mar 2025 – 20 Mar 2025). Signed by Director Kantharaj Urs.",
      skills: ["Network Security", "Perimeter Defense", "Vulnerability Assessment", "Cyber Threat Analysis", "Security Governance", "Incident Response"],
      verificationLink: "https://cyberversefoundation.org",
      isOfficialDocument: true
    },
    {
      id: "cert-daa-nie",
      title: "Design and Analysis of Algorithms",
      issuer: "The National Institute of Engineering, Mysuru",
      issuerCategory: "Academic & Algorithms",
      credentialId: "USN: 4NI24IS157",
      date: "Academic Year 2024–2025",
      image: "assets/certificates/coursera-c.svg",
      fileUrl: "assets/certificates/nie_4ni24is157-Design and Analysis of Algorithms.pdf",
      badgeColor: "cyan",
      summary: "Department of Information Science and Engineering, NIE Mysuru academic verification for Design and Analysis of Algorithms. Awarded to Rohith S (USN: 4NI24IS157) covering Divide-and-Conquer, Greedy Algorithms, Dynamic Programming, Graph Traversals, and Asymptotic Complexity.",
      skills: ["Algorithm Analysis", "Divide & Conquer", "Dynamic Programming", "Greedy Method", "Graph Algorithms", "Asymptotic Complexity"],
      verificationLink: "assets/certificates/nie_4ni24is157-Design and Analysis of Algorithms.pdf",
      isOfficialDocument: true
    },
    {
      id: "cert-hackathon-jnnce",
      title: "HACKYUGMA 24-Hour Hackathon Certificate",
      issuer: "JNNCE, Shivamogga & IEEE Computer Society",
      issuerCategory: "Hackathons",
      credentialId: "JNNCE-HACK-YUGMA-2025",
      date: "21–22 August 2025",
      image: "assets/certificates/cssa-cyberverse.svg",
      fileUrl: "assets/certificates/Rohith S.pdf",
      badgeColor: "amber",
      summary: "Official Certificate of Participation in the 24-hour State-Level Technical Symposium Hackathon 'HACKYUGMA' held during YUGMA TECHFEST 1.0, organized by the Department of ISE & IEEE Computer Society Student Chapter at JNNCE, Shivamogga.",
      skills: ["Rapid Prototyping", "Full-Stack Development", "Problem Solving", "Hackathon Collaboration", "System Integration"],
      verificationLink: "assets/certificates/Rohith S.pdf",
      isOfficialDocument: true
    },
    {
      id: "cert-cyber-tools",
      title: "Introduction to Cybersecurity Tools & Cyberattacks",
      issuer: "IBM · Coursera",
      issuerCategory: "Cybersecurity",
      credentialId: "U01OCYXUL58K",
      date: "Mar 2025",
      image: "assets/certificates/coursera-cybersecurity.svg",
      fileUrl: "assets/certificates/Coursera U01OCYXUL58K.pdf",
      badgeColor: "purple",
      summary: "Verified IBM Specialization credential covering cyber threat vectors, malware analysis, network vulnerability scanners, firewall architecture, cryptography protocols, and security compliance.",
      skills: ["Cybersecurity Tools", "Malware Analysis", "Threat Defense", "Cryptography", "Network Security Protocols"],
      verificationLink: "https://coursera.org/verify/U01OCYXUL58K",
      isOfficialDocument: true
    },
    {
      id: "cert-py-ds",
      title: "Python for Data Science, AI & Development",
      issuer: "IBM · Coursera",
      issuerCategory: "Data Science & AI",
      credentialId: "LJH5RY4A7JEJ",
      date: "Mar 2025",
      image: "assets/certificates/coursera-python-ds.svg",
      fileUrl: "assets/certificates/PYTHON certificate.pdf",
      badgeColor: "emerald",
      summary: "IBM verified credential covering Python syntax, data structures, logic, REST APIs, HTTP requests, web scraping, NumPy arrays, and Pandas dataframe manipulation for AI pipelines.",
      skills: ["Python", "NumPy", "Pandas", "REST APIs", "Data Extraction", "AI Workflows"],
      verificationLink: "https://coursera.org/verify/LJH5RY4A7JEJ",
      isOfficialDocument: true
    },
    {
      id: "cert-pandas-packt",
      title: "Foundations of Data Analysis with Pandas & Python",
      issuer: "Packt · Coursera",
      issuerCategory: "Data Science & AI",
      credentialId: "6TEYP8XQYNPS",
      date: "Sep 2025",
      image: "assets/certificates/coursera-python-ds.svg",
      fileUrl: "assets/certificates/pandas.pdf",
      badgeColor: "emerald",
      summary: "Packt verified coursework specializing in exploratory data analysis, tabular data transformation, missing value imputation, multi-index aggregation, and statistical visualization using Python and Pandas.",
      skills: ["Pandas", "Data Wrangling", "Exploratory Data Analysis (EDA)", "Data Cleaning", "Data Visualization"],
      verificationLink: "https://coursera.org/verify/6TEYP8XQYNPS",
      isOfficialDocument: true
    },
    {
      id: "cert-intro-java",
      title: "Introduction to Java",
      issuer: "LearnQuest · Coursera",
      issuerCategory: "Programming",
      credentialId: "9TY5RYQT94IO",
      date: "Mar 2025",
      image: "assets/certificates/coursera-java.svg",
      fileUrl: "assets/certificates/JAVA certificate.pdf",
      badgeColor: "blue",
      summary: "LearnQuest verified specialization covering Java fundamentals, object-oriented concepts, classes, inheritance, control structures, exception handling, and modular software design.",
      skills: ["Java", "Object-Oriented Programming (OOP)", "Inheritance & Polymorphism", "Exception Handling", "Modular Code"],
      verificationLink: "https://coursera.org/verify/9TY5RYQT94IO",
      isOfficialDocument: true
    },
    {
      id: "cert-c-prog",
      title: "C Programming: Getting Started",
      issuer: "Dartmouth & IMT · Coursera",
      issuerCategory: "Programming",
      credentialId: "PZ647BH9ABM5",
      date: "Mar 2025",
      image: "assets/certificates/coursera-c.svg",
      fileUrl: "assets/certificates/C certificate.pdf",
      badgeColor: "cyan",
      summary: "Dartmouth College and Institut Mines-Télécom verified coursework covering foundational C programming, memory addressing, pointers, loops, logic, and compilation pipelines.",
      skills: ["C Programming", "Pointers & Memory", "Algorithms", "Control Flow", "Modular Functions"],
      verificationLink: "https://coursera.org/verify/PZ647BH9ABM5",
      isOfficialDocument: true
    },
    {
      id: "cert-ds-c-michigan",
      title: "Data Structures in C",
      issuer: "University of Michigan · Coursera",
      issuerCategory: "Programming",
      credentialId: "L2AB1HE5W8MR",
      date: "Jan 2026",
      image: "assets/certificates/coursera-c.svg",
      fileUrl: "https://coursera.org/verify/L2AB1HE5W8MR",
      badgeColor: "cyan",
      summary: "University of Michigan verified course mastering memory allocation (`malloc`, `free`), linked lists, trees, hash tables, and pointer-based data structure implementations in C.",
      skills: ["Data Structures in C", "Dynamic Memory Allocation", "Linked Lists", "Trees", "Pointer Manipulation"],
      verificationLink: "https://coursera.org/verify/L2AB1HE5W8MR",
      isOfficialDocument: false
    },
    {
      id: "cert-core-java-learnkart",
      title: "Core Java — Foundations",
      issuer: "LearnKartS · Coursera",
      issuerCategory: "Programming",
      credentialId: "YFAYOIQP3IFB",
      date: "Aug 2025",
      image: "assets/certificates/coursera-java.svg",
      fileUrl: "https://coursera.org/verify/YFAYOIQP3IFB",
      badgeColor: "blue",
      summary: "Comprehensive training in core Java paradigms, Java Collections Framework, interfaces, abstract classes, encapsulation, and unit testing principles.",
      skills: ["Core Java", "Collections Framework", "Interfaces & Abstraction", "Encapsulation", "Clean Code"],
      verificationLink: "https://coursera.org/verify/YFAYOIQP3IFB",
      isOfficialDocument: false
    },
    {
      id: "cert-linalg-jhu",
      title: "Linear Algebra: Matrix Algebra, Determinants & Eigenvectors",
      issuer: "Johns Hopkins University · Coursera",
      issuerCategory: "Data Science & AI",
      credentialId: "WCRBUIWWOE11",
      date: "Jun 2025",
      image: "assets/certificates/coursera-python-ds.svg",
      fileUrl: "https://coursera.org/verify/WCRBUIWWOE11",
      badgeColor: "emerald",
      summary: "Johns Hopkins University rigorous mathematical coursework covering matrix transformations, vector spaces, determinants, eigenvalues, eigenvectors, and foundational mathematics for machine learning.",
      skills: ["Linear Algebra", "Matrix Transformations", "Eigenvalues & Eigenvectors", "Vector Spaces", "Math for Machine Learning"],
      verificationLink: "https://coursera.org/verify/WCRBUIWWOE11",
      isOfficialDocument: false
    }
  ],

  education: [
    {
      institution: "The National Institute of Engineering, Mysuru",
      degree: "B.E. in Information Science & Engineering",
      affiliation: "Visvesvaraya Technological University (VTU)",
      period: "2024 – 2028",
      type: "Undergraduate Degree",
      details: "Pursuing Bachelor of Engineering with coursework across Data Structures & Algorithms, Database Management Systems, Operating Systems, Computer Networks, and Object-Oriented Programming. USN: 4NI24IS157.",
      current: true
    },
    {
      institution: "Sri Adichunchanagiri Independent PU College, Shivamogga",
      degree: "Pre-University (PCMC: Physics, Chemistry, Mathematics, Computer Science)",
      period: "05/2022 – 03/2024",
      score: "93.66%",
      location: "Shivamogga, Karnataka",
      type: "Pre-University Education",
      details: "Graduated with 93.66% academic distinction, mastering advanced mathematics, computational logic, and physical sciences."
    },
    {
      institution: "Sri Mahaveer Vidyalaya, Shivamogga",
      degree: "Secondary School Leaving Certificate (SSLC)",
      period: "Completed 04/2022",
      score: "98.72%",
      location: "Shivamogga, Karnataka",
      type: "Secondary School",
      details: "Achieved an exceptional 98.72% score, graduating at the top percentile of the secondary school board."
    }
  ],

  achievements: [
    {
      title: "HACKYUGMA 24-Hour Hackathon — YUGMA Techfest 1.0",
      organization: "JNNCE, Shivamogga & IEEE Computer Society",
      date: "21–22 August 2025",
      type: "24-Hour State Hackathon",
      description: "Participated in an intense 24-hour hackathon conducted as part of the state-level technical symposium at JNNCE, Shivamogga, engineering rapid full-stack prototypes under competitive time constraints."
    }
  ],

  volunteering: [
    {
      role: "Academic Mentor",
      organization: "Chinmaya Vidyalaya, Jayalakshmipuram, Mysuru",
      period: "2025 – Present",
      description: "Mentor PUC Science students with academic guidance, doubt clarification, and study strategies to build subject confidence; guide students on engineering disciplines and career paths, collaborating with faculty to build leadership and communication skills."
    }
  ]
};
