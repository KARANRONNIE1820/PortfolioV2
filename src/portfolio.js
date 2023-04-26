/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: false, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello 👋.",
  title2: "Mohit Saini",
  logo_name: "Mohit Saini",
  nickname: "Mohit",
  full_name: "Mohit Saini",
  subTitle:
    "Full Stack Developer 📌 | Technical Writer 📘 | Open Source Contributor 🔥",
  resumeLink:
    "https://drive.google.com/file/d/1UopMKCxBqhF8BmRI3BVaRpItNfUPl3LL/view?usp=sharing",
  mail: "mailto:msaini0r@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/msaini0r",
  hashnode: "https://msaini0r.hashnode.dev/",
  linkedin: "https://www.linkedin.com/in/msaini0r",
  gmail: "msaini0r@gmail.com",
  facebook: "https://www.facebook.com/msaini0r/",
  twitter: "https://twitter.com/msaini0r",
  instagram: "https://www.instagram.com/msaini0r/",
};

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications",
        "⚡ Building responsive website front end using ReactJS",
        "⚡ Creating application backend in Node, Express & MongoDB",
        "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "Bootstrap",
          fontAwesomeClassname: "simple-icons:bootstrap",
          style: {
            backgroundColor: "#8411f6",
            color: "#d7d7d7",
          },
        },
        {
          skillName: "Angular",
          fontAwesomeClassname: "simple-icons:angular",
          style: {
            color: "#d6002f",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#439743",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:java",
          style: {
            color: "#f89820",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "Wordpress",
          fontAwesomeClassname: "simple-icons:wordpress",
          style: {
            color: "#207297",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "GitHub",
          fontAwesomeClassname: "simple-icons:github",
          style: {
            color: "#b0b0b0",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "Django",
          fontAwesomeClassname: "simple-icons:django",
          style: {
            color: "#20aa76",
          },
        },
        {
          skillName: "Linux",
          fontAwesomeClassname: "simple-icons:linux",
          style: {
            color: "#b0b0b0",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Experience hosting and managing websites",
        "⚡ Experience with Continuous Integration",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Netlify",
          fontAwesomeClassname: "simple-icons:netlify",
          style: {
            color: "#38AFBB",
          },
        },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "simple-icons:heroku",
          style: {
            color: "#6863A6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "GitHub Actions",
          fontAwesomeClassname: "simple-icons:githubactions",
          style: {
            color: "#5b77ef",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Lovely Professional University",
      subtitle: "Bachelor in Computer Science",
      logo_path: "lpu3.png",
      alt_name: "SSEC",
      duration: "Aug 2020 - Aug 2024",
      descriptions: [
        "⚡ I'm currently pursuing my bachelors in Computer Science.",
        "⚡ I have studied core subjects like Data Structures, DBMS, Networking, Security, etc.",
        "⚡ I have also completed various online courses for Backend , Web , Mobile App Development, etc.",
        // "⚡ I have implemented several projects based on what I've leart under my Computer Engineering course. ",
      ],
      website_link: "https://www.lpu.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "React.js Essential Training",
      subtitle: "LinkedIn",
      logo_path: "react.png",
      certificate_link:
        "https://www.linkedin.com/learning/certificates/87ee1e310b799df7a35de618ab0da480dc9ece912a3a43fe0ba356f6d67dc825?u=60693444",
      alt_name: "React.js",
      // color_code: "#2AAFED",
      color_code: "#007ab9",
    },
    {
      title: "BootStrap 5 Essential Training",
      subtitle: "LinkedIn",
      logo_path: "boot.png",
      certificate_link:
        "https://drive.google.com/file/d/1RnFA4q5jql2e-jPqSGLUOq6b18wKvz7c/view",
      alt_name: "BootStrap",
      color_code: "#8211fa",
    },
    {
      title: "Node,js Essential Training",
      subtitle: "LinkedIn",
      logo_path: "node.png",
      certificate_link:
        "https://www.linkedin.com/learning/certificates/7a9754dc9bbfb9856a0feab8096e2294af2336bf96b152657c071b0418d91b17?u=60693444",
      alt_name: "LinkedIn",
      // color_code: "#F6B808",
      color_code: "#6fa518",
    },
    {
      title: "Make Your Own App",
      subtitle: "Varients",
      logo_path: "var.png",
      certificate_link:
        "https://certificate.givemycertificate.com/c/43571618-c3ec-47a4-b3d4-67e4a5b3f237",
      alt_name: "Workshop",
      color_code: "#f28525",
    },
    {
      title: "Introduction To Frontend Development",
      subtitle: "Simplilearn",
      logo_path: "simpli.jpg",
      certificate_link:
        "https://drive.google.com/file/d/15RDCa_0gwts-7PQ_uZWHxzo-a6hSfhkp/view",
      alt_name: "Simplilearn",
      color_code: "#fbab15",
    },
    {
      title: "The Complete Web Development Bootcamp",
      subtitle: "Udemy",
      logo_path: "udemy.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-cc111725-5126-49ed-b2f6-109f2f74ff71/",
      alt_name: "Udemy",
      color_code: "#ffffff",
    },
    {
      title: "Postman Student Expert",
      subtitle: "Postman",
      logo_path: "postman.png",
      certificate_link:
        "https://badgr.com/public/assertions/h2qevHs4SlyoHErJQ0mn2g",
      alt_name: "Postman",
      // color_code: "#f36c3d",
      color_code: "#e9d6d8",
    },
    // color_code: "#8C151599",
    // color_code: "#7A7A7A",
    // color_code: "#0C9D5899",
    // color_code: "#C5E2EE",
    // color_code: "#ffc475",
    // color_code: "#g",
    // color_code: "#ffbfae",
    // color_code: "#fffbf3",
    // color_code: "#b190b0",
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I've completed one internship. I've mostly done projects on my own and I am actively looking for internships. I love organizing workshops to share my knowledge with others.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "Virtual Intern",
          company: "Deloitte",
          company_url:
            "https://drive.google.com/file/d/1rrT0Ycb-EtJhhF0T95dIl0RZoTsvP_pC/view?usp=sharing",
          logo_path: "Deloitte.png",
          duration: "March 2023 - April 2023",
          location: "Remotely",
          description: `Created and implemented advanced algorithms in Python, resulting in the successful unification of multiple disparate data modules, leading to improved data accuracy and streamlined workflows. Spearheaded the development and deployment of a user-friendly dashboard to analyze and visualize complex telemetry data for clients, resulting in enhanced insights and informed decision-making.
          `,
          color: "#ee3c26",
        },
        {
          title: "Full-Stack Developer",
          company: "Google Student Developer Club",
          company_url: "https://gdsc.community.dev/",
          logo_path: "gdg.png",
          duration: "Aug 2022 - Nov 2022",
          location: "Punjab, India",
          description: `Collaborated with 3 other developers on ongoing projects and
          helped them with code reviews and solving major bugs with 99%
          accuracy. Solved 7 issues related to the GitHub workflow, which
          automatically sends a notification when a new person clones the
          repository and a new user joins Slack. Improved the document section of the repository by merging 3
          pull requests explaining the major instructions of the project.
          `,
          // "I worked on the Dashboard project which helps users track their activities while using Walo Application. I also worked on Ocean Inventory Application and it's Admin panel Backend as well as on Ocean Inventory Admin Front-end using React and also worked on Walo Admin Backend.",
          color: "#0071C5",
        },
        {
          title: "Full-Stack Developer (Intern)",
          company: "Napstack Solutions",
          company_url:
            "https://drive.google.com/file/d/1dJC7-E0aLhhmF8vuKqFA3yQ5XUn1T6HJ/view?usp=sharing",
          logo_path: "napstack.jpg",
          duration: "Jan 2022 - Mar 2022",
          location: "Punjab, India",
          description: `Optimized the performance of an e-commerce website with 5,000 daily users by reducing page load time by 35% with the help of async-loaded JavaScript and building a backend API in
          Node.js, resulted in increased sales of 3.4X.Created a $5000 E-Learning platform front end in Angular and Metronic 8 themes, reducing development time by 33% and improving customer satisfaction by 75%. Debugged existing code and handling backend maintenance
          tasks, including the creation of APIs, integration with payment gateways, and connecting servers for proper functioning.
          `,
          color: "#0071C5",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Beta Campus Ambassador",
          company: "Microsft",
          company_url:
            "https://studentambassadors.microsoft.com/en-US/studentambassadors/profile/833c9565-97d1-4e66-ac80-423b68f1befa",
          logo_path: "microsoft.png",
          duration: "Nov 2022 - present",
          location: "Remotely",
          description: `Coordinated with a team of 3 members to organize webinars
          related to open source and resume hacks for more than 150
          students across the country. Gained knowledge by completing more than 7 learning modules
          related to GitHub fundamentals, including workflow changes,
          GitHub copilot, sharing, and retrieving. Delivered a session on GitHub to a team of 49 developers,
          covering advanced topics like GitHub Desktop, Git branching and
          version control system.
          `,
          // "Created Front end of Yearn Financial Mutual Funds website. also degined simple web application for better user experience, designed DB Schemas as well.",
          color: "#ee3c26",
        },
        {
          title: "GitHub Student Developer",
          company: "GitHub",
          company_url: "https://github.com/",
          logo_path: "github.png",
          duration: "Nov 2020 - Present",
          location: "Remotely",
          description:
            "Contribute to Open Source Community and Open Source Project.",
          color: "#040f26",
        },
        {
          title: "Open Source Contributor",
          company: "Meshery",
          company_url: "https://meshery.io/",
          logo_path: "meshery-logo.png",
          duration: "Jan 2022 - May 2022",
          location: "Remotely",
          description:
            "Worked on the core of meshery system to enchance UI, decrease loading time and overall performance.",
          color: "#5a900f",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of a vast variety of latest technology tools. My best experience is to create NodeJS Backend Projects, REST API's, and React Project. Below are some of my projects. You can check all of my projects on my GitHub by clicking on the project.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "mohit2.png",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I blog frequently and do subscribe to my newsletter to never miss an update. I write on Hashnode.",
    link: "https://msaini0r.hashnode.dev/",
    avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [
    {
      id: "0",
      name: "PHEONIX CHAT APPLICATION",
      url: "https://github.com/msaini0r/Pheonix-Chat-App",
      description:
        "A fullstack chat application build using React, socket.io, node.js, and MongoDB. Allocated resources to ensure scalability, and implemented a secure authentication system that ensured data.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "NodeJs",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "Socket",
          iconifyClass: "tabler:brand-socket-io",
        },
      ],
    },
    {
      id: "1",
      name: "BIGCART ECOMMERCE",
      url: "https://github.com/msaini0r/Bigcart-Ecommerce",
      description:
        "Bigcart is an ecommerce website built with help of React.js, Material UI & Strapi. Besides allowing you to add and remove products from your cart, it has a Stripe payment gateway.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "SCSS",
          iconifyClass: "vscode-icons:file-type-scss2",
        },
        {
          name: "Strapi",
          iconifyClass: "logos:strapi-icon",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "Material UI",
          iconifyClass: "logos:material-ui",
        },
        {
          name: "Stripe",
          iconifyClass: "vscode-icons:file-type-silverstripe",
        },
      ],
    },
    {
      id: "2",
      name: "YOUTUBE CLONE",
      url: "https://github.com/msaini0r/YouTube-Clone-React",
      description:
        "This clone utilizes Rapid APIs to bring all data from backend. With this platform, you can easily search for random channels, select specific topics, and control the playback of videos at your discretion.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "NodeJS",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "Material UI",
          iconifyClass: "logos:material-ui",
        },
      ],
    },
    {
      id: "3",
      name: "Training Modules",
      url: "https://github.com/msaini0r/Training-Modules",
      description:
        "A basic portfolio website made with swiper js, bootstrap and other web technologies to showcase potential skills and work experience with a responsive contact form.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "GraphQL",
          iconifyClass: "logos:graphql",
        },
      ],
    },
    {
      id: "4",
      name: "CLOUD KITCHEN",
      url: "https://github.com/msaini0r/Cloud-Kitchen",
      description:
        "Cloud-kitchen is a food ordering frontend application built in Angular, which cover advanced concepts like routing, services, two way data binding and much more.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "Angular",
          iconifyClass: "logos:angular-icon",
        },
        {
          name: "TypeScript",
          iconifyClass: "logos:typescript-icon-round",
        },
      ],
    },
    {
      id: "9",
      name: "VIDEO CALLING APPLICATION",
      url: "https://github.com/msaini0r/Videocall-App",
      description:
        "A video conferencing application with peer to peer video calling feature which allow you to connect with your loved ones all over the globe.",
      languages: [
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "NodeJS",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "Material UI",
          iconifyClass: "logos:material-ui",
        },
        {
          name: "Socket",
          iconifyClass: "tabler:brand-socket-io",
        },
      ],
    },
    {
      id: "5",
      name: "PERSONAL PORTFOLIO",
      url: "https://github.com/msaini0r/Personal-Portfolio",
      description:
        "A basic portfolio website made with swiper js, bootstrap and other web technologies to showcase potential skills and work experience with a responsive contact form.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "Swiper",
          iconifyClass: "simple-icons:swiper",
        },
      ],
    },
    {
      id: "6",
      name: "TRAVEL WEBSITE",
      url: "https://github.com/msaini0r/Travel-Website",
      description:
        "Travel website features the most breathtaking beaches from around the world, all easily accessible through a user-friendly interface and comes with both light and dark mode.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
      ],
    },
    {
      id: "7",
      name: "GUESS MY NUMBER",
      url: "https://github.com/msaini0r/Guess-My-Number",
      description:
        "A Simple game made with help of pure JavaScript to guess a number from 1 to 20 covering advance basics of JavaScript. With added functionality to reset buttion to play again.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
      ],
    },
    {
      id: "8",
      name: "BANKIST WEBSITE",
      url: "https://github.com/msaini0r/Bankist-Website",
      description:
        "A advanced banking website made with advance topics of a programming language and added functionality of lazy loading, image blur and fade animations, etc all at same place.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
      ],
    },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
