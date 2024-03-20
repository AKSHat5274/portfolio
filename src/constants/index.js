import { meta, shopify, starbucks, tesla,image, NC, Parco } from "../assets/images";
import { car, contact, css, estate, express, git, github, html, javascript, linkedin, mongodb, motion, mui, nextjs, nodejs, pricewise, react, redux, sass, snapgram, summiz, tailwindcss, threads, threejs, typescript,java, spirngBoot } from "./icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: threejs,
        name: "Three.js",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: spirngBoot,
        name: "Spring Boot",
        type: "Backend",
    },
    {
        imageUrl: java,
        name: "JAVA",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Software Developer",
        company_name: "Namaste Credit",
        icon: NC,
        iconBg: "#accbe1",
        date: "February 2023 - October 2023",
        points: [            
            "•Engineered secure user registration and authentication mechanisms, curtailing unauthorized access incidents by 30%",
            "•Integrated third-party APIs for user data validation and credit assessment, resulting in a 25% reduction in fraudulent loan applications.",
            "•Contributed to developing software modules for embedded systems, resulting in a 15% improvement in code efficiency.",
            "•Assisted in the optimization of performance-critical algorithms, leading to a 20% reduction in execution time.",
            "•Implemented secure data encryption and access controls, ensuring the confidentiality and integrity of sensitive user information throughout the application process.",
            "•Engineered a new mechanism for data flow from the loan origination system which decreased the loading times by 30%.",
            "•Discovered the root cause of the slowdown, then swiftly migrated the application to Azure Cache for Redis, consequently enhancing loading speeds by 80%.",
        ],
    },
    {
        title: "React Developer",
        company_name: "Parco Agency",
        icon: Parco,
        iconBg: "#fbc3bc",
        date: "October 2022 - Feb 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/AKSHat5274',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/akshatsharma527',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'JIRA clone/CRM Dashboard',
        description: 'Developed a web application that helps the user visualize and manage the whole sales pipeline along with tasks and an event manager. Made with refine. dev framework along with graphql for the backend.',
        link: 'https://github.com/AKSHat5274/crm-dashboard',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Full Stack AI Saas Application',
        description: 'Created a platform which generates user answers and generates user images with the help of AI. Deployed as a SAAS service. ',
        link: 'https://github.com/AKSHat5274',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Job Posting Application',
        description: 'Built a job posting application using Java Spring boot which helps the user apply to job posts, compare companies and post reviews about them. Used Microservices and rest architecture along with kubernetes tools such as Docker',
        link: 'https://github.com/AKSHat5274/Job-Posting-Application-Using-Java-Spring-boot-and-docker',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Django truecaller API',
        description: 'Built an API that can tell you if the number is a scam, we can search a person name using just his phone number. Used MySQL along with ORM in the project.',
        link: 'https://github.com/AKSHat5274',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Startup Landing Page',
        description: 'Developed a web application for businesses who wants to showcase all of what they have to offer to their customers.It has user reveiws, plugins for videos and a dynamic UI which can highlight the product to its full potential.',
        link: 'https://github.com/AKSHat5274/StartuplandingPage',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'AI Summarizer Application',
        description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
        link: 'https://github.com/AKSHat5274/project_ai_summarizer',
    }
];