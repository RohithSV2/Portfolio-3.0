# Rohith S — Pro-Level Engineering Portfolio

A modern, responsive personal portfolio website for **Rohith S**, Information Science & Engineering undergraduate at **The National Institute of Engineering (NIE), Mysuru** (Class of 2028, VTU, USN: `4NI24IS157`).

Curated from:
1. **[Evavic44/portfolio-ideas](https://github.com/Evavic44/portfolio-ideas)** — Incorporating top industry design patterns (Brittany Chiang cursor spotlight glow, Dale Larroder / Lee Robinson frosted glass aesthetic, interactive command palette `Cmd+K`, and Bento-grid layouts).
2. **[Old Portfolio (portfolio-2-0-peach-xi.vercel.app)](https://portfolio-2-0-peach-xi.vercel.app/)** — Integrated terminal typing effect, comprehensive skills hierarchy, academic facts, spoken languages, and project descriptions.
3. **[d:\Certificates](file:///d:/Certificates)** — Embedded official credentials, including the Cyberverse Foundation CCSA certificate image, NIE Design & Analysis of Algorithms award, JNNCE HACKYUGMA 24h Hackathon certificate, and Coursera certificates.

---

## 🌟 Key Highlights & Integrations

### 1. Dual-Column Hero with Developer Typing Terminal
- **Left Column**: Headline, academic affiliation at NIE Mysuru, bio summary, Cal.com scheduling button, and quick-copy contact pills.
- **Right Column**: Interactive retro-modern macOS/Linux developer terminal typing live commands (`whoami`, `cat focus.txt`, `ls projects/`, `ls credentials/`, `./status.sh`).

### 2. Live Cal.com Scheduling Integration
- Embedded official Cal.com calendar widget in the **[Connect Section](file:///d:/Portfolio%203.0/index.html#cal-section)** (`cal.com/rohith-s/30min`).
- Floating header and hero buttons that launch the direct Cal booking modal.
- Built-in handle customizer to modify or test your Cal.com username anytime with live reload.

### 3. All 11 Verified Certificates & Learning Milestones
- **[Certificates Section](file:///d:/Portfolio%203.0/index.html#certificates)** with filter tabs (*Cybersecurity*, *Programming*, *Data Science & AI*, *Academic & Algorithms*, *Hackathons*):
  1. **Certified Cybersecurity Associate (CCSA)** — Cyberverse Foundation & NIE Mysuru (`UID: CVF2025NIE0294`) — *Includes official certificate image with signatures*
  2. **Design and Analysis of Algorithms** — The National Institute of Engineering, Mysuru (`USN: 4NI24IS157`) — *Includes official departmental PDF*
  3. **HACKYUGMA 24-Hour Hackathon Certificate** — JNNCE, Shivamogga & IEEE Computer Society — *Includes official symposium PDF*
  4. **Introduction to Cybersecurity Tools & Cyberattacks** — IBM · Coursera (`U01OCYXUL58K`) — *Includes official Coursera PDF & verify link*
  5. **Python for Data Science, AI & Development** — IBM · Coursera (`LJH5RY4A7JEJ`) — *Includes official Coursera PDF & verify link*
  6. **Foundations of Data Analysis with Pandas & Python** — Packt · Coursera (`6TEYP8XQYNPS`) — *Includes official Coursera PDF & verify link*
  7. **Introduction to Java** — LearnQuest · Coursera (`9TY5RYQT94IO`) — *Includes official Coursera PDF & verify link*
  8. **C Programming: Getting Started** — Dartmouth & IMT · Coursera (`PZ647BH9ABM5`) — *Includes official Coursera PDF & verify link*
  9. **Data Structures in C** — University of Michigan · Coursera (`L2AB1HE5W8MR`)
  10. **Core Java — Foundations** — LearnKartS · Coursera (`YFAYOIQP3IFB`)
  11. **Linear Algebra: Matrix Algebra, Determinants & Eigenvectors** — Johns Hopkins University · Coursera (`WCRBUIWWOE11`)
- **Credential Inspector**: Click **Inspect** to open full-screen modals with course syllabi, verified skills, and direct download links for all original PDFs and images!

### 4. Comprehensive Skills & Technologies Matrix
- **Languages**: Java, Python, SQL, C, JavaScript (ES6+), Kotlin
- **Data Structures & Algorithms**: Arrays & Strings, Linked Lists, Stacks & Queues, Trees & Binary Trees, Graphs, Sorting & Searching, Algorithmic Complexity (Big-O), Design & Analysis of Algorithms
- **Web Development & APIs**: HTML5, CSS3, JavaScript, Flask (Python), REST API Architecture, Full-Stack CRUD, Responsive UI/UX
- **Machine Learning & Applied AI**: CNN, LSTM, NumPy, Pandas, Natural Language Processing (NLP), gTTS Voice Synthesis, Feature Engineering
- **Databases & Modeling**: SQL, MySQL, DBMS, Relational Normalization (1NF–3NF), Complex SQL Joins, Room / SQLite (Android)
- **Tools & Platforms**: Git, GitHub, VS Code, Android Studio, Jupyter Notebook, Eclipse, Postman
- **Core CS Foundations**: Object-Oriented Programming (OOP), Operating Systems, Computer Networks, SDLC, Cybersecurity Fundamentals
- **Spoken Languages**: English, Kannada, Hindi, Konkani

### 5. All 5 Featured Engineering Projects
- **Agri AI Chatbot**: Flask REST APIs, NLP intent extraction, gTTS voice response synthesis.
- **Food Delivery Time Prediction (CNN-LSTM)**: Hybrid deep learning model capturing spatial route dynamics and temporal traffic shifts.
- **Website Auditing Tool**: Automated Python SEO crawler and DOM inspector with automated bug reporting.
- **Hostel Management Android App**: Kotlin, Room SQLite, structured administration models.
- **Textile Store Management System**: 3NF normalized schema, complex SQL CRUD inventory & billing engine.
- Every project features custom architectural SVG schematics, technical highlights, and GitHub links.

### 6. Interactive Command Palette (`Cmd+K` / `Ctrl+K`)
- Instantly search projects, launch certificate inspection, copy email/phone, book a Cal call, or toggle themes with keyboard navigation.

---

## 🚀 How to Run & Preview Locally

```powershell
# Open terminal in d:\Portfolio 3.0:
python -m http.server 3000
```
Open **[http://localhost:3000](http://localhost:3000)** in any modern browser, or right-click `index.html` in VS Code and select **"Open with Live Server"**.

---

## 📁 Directory Structure

```
Portfolio 3.0/
├── index.html                   # Master layout with dual hero, terminal, Bento-grid, & native dialogs
├── README.md                    # Project documentation
├── css/
│   └── style.css                # Glassmorphism, mouse glow spotlight, dialog animations, print styles
├── js/
│   ├── app.js                   # Main application script, typing terminal, modals, command palette
│   ├── cal-embed.js             # Cal.com embed logic, modal triggers, and inline scheduler
│   └── data.js                  # Structured dataset with all 11 certificates, projects, and skills
└── assets/
    ├── avatar.svg               # Modern developer monogram avatar
    ├── certificates/            # Official certificate images, PDFs, and SVGs
    │   ├── cyberverse-ccsa-official.jpeg                                 # Official Cyberverse CCSA Certificate
    │   ├── nie_4ni24is157-Design and Analysis of Algorithms.pdf          # NIE DAA Certificate (USN: 4NI24IS157)
    │   ├── Rohith S.pdf                                                  # JNNCE HACKYUGMA 24h Hackathon Certificate
    │   ├── Coursera U01OCYXUL58K.pdf                                     # IBM Cybersecurity Certificate
    │   ├── PYTHON certificate.pdf                                        # IBM Python for Data Science Certificate
    │   ├── JAVA certificate.pdf                                          # LearnQuest Java Certificate
    │   ├── C certificate.pdf                                             # Dartmouth & IMT C Certificate
    │   ├── pandas.pdf                                                    # Packt Pandas & Python Certificate
    │   └── *.svg                                                         # Vector credential seals
    └── projects/                # Architecture diagrams for all 5 projects
        ├── agri-chatbot.svg
        ├── food-delivery.svg
        ├── website-auditing.svg
        ├── hostel-management.svg
        └── textile-store.svg
```
