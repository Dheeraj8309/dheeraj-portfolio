import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

const illustration = {
  animated: true
};

const greeting = {
  username: "Dheeraj Merugu",
  title: "Hi all, I'm Dheeraj",
  subTitle: emoji(
    "Senior Software Engineer | Passionate about Automation, Machine Learning, and Building Smart Tools."
  ),
  resumeLink:
    "/dheeraj_resume.pdf",
  displayGreeting: true
};

const socialMediaLinks = {
  github: "https://github.com/Dheeraj8309",
  linkedin: "https://www.linkedin.com/in/dheeraj-merugu-bb7735214/",
  gmail: "merugudheeraj123@gmail.com",
  display: true
};

const skillsSection = {
  title: "What I do",
  subTitle: "Senior Software Engineer with AI & Full Stack Dev Skills",
  skills: [
    emoji("⚡ Built automation tools with Python, Pandas, and Tkinter"),
    emoji("⚡ Developing ML apps using Streamlit, Scikit-learn, and Flask"),
    emoji("⚡ Create responsive UIs with HTML, CSS, JavaScript, and React")
  ],
softwareSkills: [
  {
    skillName: "Python",
    iconifyIconClass: require("./assets/images/python.png")
  },
  {
    skillName: "HTML5",
    iconifyIconClass: require("./assets/images/html5.png")
  },
  {
    skillName: "CSS3",
    iconifyIconClass: require("./assets/images/css3.png")
  },
  {
    skillName: "JavaScript",
    iconifyIconClass: require("./assets/images/javascript.png")
  },
  {
    skillName: "ReactJS",
    iconifyIconClass: require("./assets/images/react.png")
  },
  {
    skillName: "SQL",
    iconifyIconClass: require("./assets/images/sql.png")
  },
  {
    skillName: "Git",
    iconifyIconClass: require("./assets/images/git.png")
  },
  {
    skillName: "Flask",
    iconifyIconClass: require("./assets/images/flask.png")
  },
  {
    skillName: "Streamlit",
    iconifyIconClass: require("./assets/images/streamlit.png")
  },
  {
    skillName: "Bootstrap",
    iconifyIconClass: require("./assets/images/bootstrap.png")
  }
],

  display: true
};

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "KL University",
      logo: require("./assets/images/KL_University_logo.jpg"), // Replace with actual logo if available
      subHeader: "M.Tech in Computer Science and Engineering (AI & DS)",
      duration: "August 2024 – Present",
      desc: "CGPA: 9.25/10.0. Courses include Deep Learning, Big Data Optimization, ANN, and Agile Development.",
      descBullets: []
    },
    {
      schoolName: "Gudlavalleru Engineering College",
      logo: require("./assets/images/gudlavalleru.jpg"),
      subHeader: "B.Tech in Computer Science",
      duration: "July 2019 – May 2023",
      desc: "CGPA: 7.71/10.0. Focused on DSA, Operating Systems, Python, and DBMS.",
      descBullets: []
    }
  ]
};

const techStack = {
  viewSkillBars: true,
  experience: [
    { Stack: "Frontend/Design", progressPercentage: "85%" },
    { Stack: "Backend", progressPercentage: "75%" },
    { Stack: "Machine Learning", progressPercentage: "70%" }
  ],
  displayCodersrank: false
};

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Senior Software Engineer",
      company: "Titan Company Limited",
      companylogo: require("./assets/images/titan.png"),
      date: "June 2023 – July 2024",
      desc: "Built Python-based automation tools for order tracking, vendor communication, and email reporting — reducing dispatch time by 97% and manual effort by 70%."
    },
    {
      role: "Machine Learning Intern",
      company: "SmartBridge Pvt. Ltd.",
      companylogo: require("./assets/images/smartbridge.png"),
      date: "Feb 2022 – Apr 2022",
      desc: "Created a Book Recommendation System using IBM Watson NLP and Python, improving user engagement by 40%."
    }
  ]
};

const openSource = {
  showGithubProfile: "true",
  display: false
};

const bigProjects = {
  display: false // You can enable and customize this later
};

const achievementSection = {
  title: emoji("Achievements & Certifications 🏆"),
  subtitle: "A few recognitions and credentials",
  achievementsCards: [
    {
      title: "Azure Fundamentals Certified",
      subtitle: "Microsoft Certified: Azure Fundamentals - Nov 2021",
      image: require("./assets/images/azure.png"),
      imageAlt: "Azure Logo",
      footerLink: []
    },
    {
      title: "Git & GitHub: Beginner to Expert",
      subtitle: "Completed a professional course in Aug 2023",
      image: require("./assets/images/udemy.png"),
      imageAlt: "GitHub Logo",
      footerLink: []
    },
    {
      title: "Build Your Own Responsive Website",
      subtitle: "Completed a professional course in Jul 2022",
      image: require("./assets/images/nxtwave.jpg"),
      imageAlt: "GitHub Logo",
      footerLink: []
    },
    {
      title: "Programming Foundations With Python",
      subtitle: "Completed a professional course in Feb 2023",
      image: require("./assets/images/nxtwave.jpg"),
      imageAlt: "GitHub Logo",
      footerLink: []
    },
    {
      title: "SQL and Relational Databases 101",
      subtitle: "Completed a professional course in Aug 2024",
      image: require("./assets/images/ibm.webp"),
      imageAlt: "GitHub Logo",
      footerLink: []
    },
    {
      title: "The Fundamentals of Digital Marketing",
      subtitle: "Completed a professional course in Jan 2022",
      image: require("./assets/images/google.webp"),
      imageAlt: "GitHub Logo",
      footerLink: []
    }
  ],
  display: true
};

const blogSection = {
  title: "Blogs",
  subtitle: "I like sharing my learnings through writing (coming soon!)",
  displayMediumBlogs: "false",
  blogs: [],
  display: false
};

const talkSection = {
  title: "TALKS",
  subtitle: emoji("Currently exploring speaking engagements 🎤"),
  talks: [],
  display: false
};

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "No podcasts yet, but stay tuned!",
  podcast: [],
  display: false
};

const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Open to collaborations, freelance, and job opportunities.",
  number: "+91 8309587172",
  email_address: "merugudheeraj123@gmail.com"
};

const twitterDetails = {
  userName: "", // if you have Twitter, put username here
  display: false
};

const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
