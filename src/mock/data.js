import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Achref Mekni | Software Engineer', // e.g: 'Name | Developer'
  lang: 'EN', // e.g: en, es, fr, jp
  description: 'Welcome to My Portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is',
  name: 'Achref Mekni',
  subtitle: "I'am the Developer you need.",
  cta: 'Know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile1.jpg',
  paragraphOne:
    'I am a Second Year Software Engineering student at the Budapest University of Technology and Economics.I have developed excellent analytical and leadership skills through my career. Experienced with all stages of the development cycle for projects and applications Well-versed in numerous programming languages including Python,Java,Lua,C++,JavaScript,HTML,CSS,MySQL.I am now looking further to develop and use my skills in a practical setting.',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project1.jpg',
    title: 'Robo-Friends',
    info: 'it is a React Web App to List and search for cool Robots',
    info2: '',
    url: 'https://achref-mekni.github.io/Robo-Friends/',
    repo: 'https://github.com/Achref-Mekni/Robo-Friends.git', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/achref-mekni-b0a162166/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Achref-Mekni',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
