import css from "../assests/css.png";
import tailwind from "../assests/tailwind.png";
import html from "../assests/html.png";
import nodejs from "../assests/Node js.png";
import reactjs from "../assests/reactjs.png";
import mongodb from "../assests/mongodb.png";
import javascript from "../assests/javascript.png";
import web from "../assests/web.png";
import ux from "../assests/ux.png"
import reacr from "../assests/reacr.png";
import git from "../assests/git.png";
import expressjs from "../assests/express-js.png"
import pro1 from "../assests/pro1.png"
import pro2 from "../assests/pro2.png"

const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: reacr,
    },
    {
      title: "Front-End Design",
       icon: ux,
    },
   
  ];
  const technologies = [
    {
      name: "HTML",
      icon: html,
    },
    {
      name: "CSS",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
   
    {
      name: "Tailwind",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
   {
    name:"Express Js",
     icon :expressjs
   },
    {
      name: "git",
      icon: git,
    },
 
  ];

  const projects = [
    {
      name :"Blogging Website",
      description:"Web site for made using Express Node and MongoDB for posting the blog in and share our throughts and make it responsive Bootsrap is used",
      tags: [
        {
          name: "Typescript",
          color: "blue-text-gradient",
        },
        {
          name: "Angular",
          color: "green-text-gradient",
        },
        {
          name: "Bootstrap",
          color: "pink-text-gradient",
        },
      ],
      images:pro1,
      source_code_Link:"https://github.com/Shivanshu-samadhiya/Bloging-website",
      source_deploy_Link:""
    },
    {
      name: "Spotify",
      description:
       "Web application that enables users to Listen the music and play our favourite songs streamlessly",
       tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Tailwind",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      images:pro2,
      source_code_Link:"https://github.com/Shivanshu-samadhiya/SPOTIFY-CLONE",
      source_deploy_Link:""
    },


  ]
  export { services, projects,technologies};