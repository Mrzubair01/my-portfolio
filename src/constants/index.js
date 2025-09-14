const navItems = [{
  id: 1,
  name: "Home",
  path: "#hero"
}, {
  id: 2,
  name: "About",
  path: "#about"
}, {
  id: 3,
  name: "Skills",
  path: "#skills"
},
{
  id: 4,
  name: "Projects",
  path: "#projects"
},
{
  id: 5,
  name: "Contact",
  path: "#contact"
}];


const projects = [
  {
    id: 1,
    title: "Music-Verse",
    description: "A modern, full-stack music streaming web application that enables users to listen to songs, connect with other listeners, and enjoy an interactive experience with real-time features and admin controls.",
    image: "/assets/projects/images/music-verse_home_page.png",
    github: "https://github.com/Mrzubair01/Music-Verse",
    live: "https://music-verse.onrender.com"
  },
  {
    id: 2,
    title: "Convoflow",
    description: "ConvoFlow is a real-time conversation web application built with the MERN stack.It provides seamless live messaging between users with secure authentication, responsive UI, and real-time notifications.",
    image: "/assets/projects/images/convoFlow-ss.png",
    github: "https://github.com/Mrzubair01/convoFlow",
    live: "https://convoflow-fq4m.onrender.com"
  },
  {
    id: 3,
    title: "My Blog App",
    description: "A full-stack Blog Application where users can sign up, log in, view posts from other users, and create their own blog posts. Authenticated users have full control over their content, including the ability to edit and delete their posts.",
    image: "/assets/projects/images/my-blogspace-ss.png",
    github: "https://github.com/Mrzubair01/MyBlogSpace",
    live: "https://myblogspace-544l.onrender.com"
  }
];

const socials = [{
  name: "github",
  link: "https://github.com/Mrzubair01",
  icon: "/assets/icons/GitHub_dark.svg",
  color: "bg-gray-900 dark:bg-gray-800",
},
{
  name: "linkedin",
  link: "https://www.linkedin.com/in/zubair-alam-/",
  icon: "/assets/icons/linkedIn.svg",
  color: "bg-[#0077B5]",
},
{
  name: "instagram",
  link: "https://www.instagram.com/mr.zubair__01/",
  icon: "/assets/icons/instagram.svg",
  color: "bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600",
},
{
  name: "twitter",
  link: "https://x.com/mr_zubair_01",
  icon: "/assets/icons/x_dark.svg",
  color: "bg-gray-900 dark:bg-gray-800",
}, {
  name: "Reddit",
  link: "https://www.reddit.com/user/mr_zubair_01/",
  icon: "/assets/icons/reddit.svg",
  color: "bg-gray-900 dark:bg-gray-800",
}];

const skills = [
  { name: "HTML", icon: "/assets/logos/html5.svg" },
  { name: "CSS", icon: "/assets/logos/css3.svg" },
  { name: "Sass", icon: "/assets/logos/sass.svg" },
  { name: "JavaScript", icon: "/assets/logos/javascript.svg" },
  { name: "Tailwindcss", icon: "/assets/logos/tailwindcss.svg" },
  { name: "Bootstrap", icon: "/assets/logos/bootstrap.svg" },
  { name: "React.js", icon: "/assets/logos/react.svg" },
  { name: "Redux.js", icon: "/assets/logos/redux.svg" },
  { name: "Node.js", icon: "/assets/logos/nodejs.svg" },
  { name: "Express.js", icon: "/assets/logos/express.svg" },
  { name: "MongoDB", icon: "/assets/logos/mongodb.svg" },
  { name: "Redis", icon: "/assets/logos/redis.svg" },
  { name: "TypeScript", icon: "/assets/logos/typescript.svg" },
  { name: "Next.js", icon: "/assets/logos/nextjs.svg" },
  { name: "Git", icon: "/assets/logos/git.svg" },
  { name: "GitHub", icon: "/assets/logos/github.svg" },
  { name: "C++", icon: "/assets/logos/cplusplus.svg" },
  { name: "Firebase", icon: "/assets/logos/firebase.svg" },
  { name: "Cloudinary", icon: "/assets/logos/cloudinary.svg" },
  { name: "ImageKit", icon: "/assets/logos/imagekit.svg" },
  { name: "Appwrite", icon: "/assets/logos/appwrite.svg" },
  { name: "Figma", icon: "/assets/logos/figma.svg" },
];

export { navItems, projects, socials, skills };
