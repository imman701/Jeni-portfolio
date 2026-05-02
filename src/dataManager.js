// src/dataManager.js

// Default mock data to bootstrap the portfolio
const DEFAULT_PROJECTS = [
  { 
    id: 'p1', 
    title: 'Perfumo – Perfume Shopping App', 
    desc: 'Redesigned the complete mobile experience for a perfume shopping app, focusing on visual luxury, clean layouts, and simplified navigation.', 
    img: '../src/assets/perfumo.png', 
    link: 'https://www.figma.com/proto/Hoe0KKpuyYiaXWT1uXKTd4/proj1?node-id=103-299&page-id=0%3A1&starting-point-node-id=103%3A299&t=Jn17M6mfT8isyeuv-1' 
  },
  { 
    id: 'p2', 
    title: '🍴 Yumzy – Food Delivery App', 
    desc: 'Created a vibrant and intuitive food delivery app interface with modern visuals, smooth interactions, and an easy-to-use ordering flow.', 
    img: '../src/assets/yumzy.png', 
    link: 'https://www.figma.com/proto/xy7hEo7ncSr062mBG7zBZ0/proj-2?node-id=54-17&p=f&viewport=215%2C220%2C0.33&t=xzfhe4GGasLHlPJn-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2%3A2&page-id=0%3A1' 
  },
  { 
    id: 'p3', 
    title: '🌱 Tree Care App – Plant Tracking', 
    desc: 'Design a mobile app for plant care enthusiasts to track plant health, get watering reminders, and identify plant species.', 
    img: '../src/assets/tree.png', 
    link: 'https://www.figma.com/proto/zXW3UrXF8vSzlvRkbRmVGe/Untitled?page-id=0%3A1&node-id=3-2&p=f&m=draw&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=3%3A2&t=X5V5WkUoWdALH3RZ-1' 
  },
  { 
    id: 'p4', 
    title: '💊 MediCare – Medicine Reminder App', 
    desc: 'A mobile app designed to help users remember and manage their medication schedules.', 
    img: '../src/assets/medicine.png', 
    link: 'https://www.figma.com/proto/zeZubceof0cnIXfRZRl6LS/Untitled?page-id=0%3A1&node-id=4-2&p=f&viewport=117%2C181%2C0.63&t=C0c36cObAhDO2j53-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=4%3A2' 
  },
  { 
    id: 'p5', 
    title: 'Student Dashboard-UI', 
    desc: 'A modern dashboard for students to track their academic progress and engage with campus life.', 
    img: '../src/assets/student-dashborad.png', 
    link: '#' 
  },
  { 
    id: 'p6', 
    title: 'Poster-UI', 
    desc: 'Posters are designed to grab attention, communicate quickly, and create a lasting impression. Each poster is crafted with a specific goal in mind, whether it’s to promote an event, share information, or celebrate a moment. By combining strong visuals, strategic layouts, and clear typography, these designs aim to deliver their message effectively and memorably. ', 
    img: '../src/assets/Poster-UI.png',
    link: '#' 
  },
];

const DEFAULT_CERTS = [
  { 
    id: 'c1', 
    title: 'UI/UX Design Professional Certificate', 
    img: '../src/assets/certi1.jpeg' 
  },
  { 
    id: 'c2', 
    title: 'Web Development Associate Certificate', 
    img: '../src/assets/certi2.jpeg' 
  },
  {
    id:'c3',
    title:"Internship UI/UX Certificate",
    img:"../src/assets/certi3.jpeg"
  },
  {
    id:'c4',
    title:"Graphics Design Certificate",
    img:"../src/assets/certi4.jpeg"
  },
  {
    id:'c5',
    title:"Adobe XD Certificate",
    img:"../src/assets/certi5.jpeg"
  }
];

const DEFAULT_TECH = [
  { id: 't1', name: 'Figma', icon: 'FiFigma' },
  { id: 't2', name: 'Tailwind CSS', icon: 'SiTailwindcss' },
  { id: 't3', name: 'JavaScript ES6+', icon: 'SiJavascript' },
  { id: 't4', name: 'Adobe XD', icon: 'SiAdobexd' },
  { id: 't5', name: 'Framer Motion', icon: 'FiFramer' },
  {id:'t6',name:'Webflow',icon:'SiWebflow'},
  {id:'t7',name:'Notion',icon:'SiNotion'},
  {id:'t8',name:'HTML5',icon:'FaHtml5'},
];

// Initialization
export const initData = () => {
  if (!localStorage.getItem('projects')) localStorage.setItem('projects', JSON.stringify(DEFAULT_PROJECTS));
  if (!localStorage.getItem('certificates')) localStorage.setItem('certificates', JSON.stringify(DEFAULT_CERTS));
  if (!localStorage.getItem('techStack')) localStorage.setItem('techStack', JSON.stringify(DEFAULT_TECH));
}

// ---------------- PROJECTS ----------------
export const getProjects = () => JSON.parse(localStorage.getItem('projects') || '[]');
export const addProject = (project) => {
  const data = getProjects();
  data.push({ id: Date.now().toString(), ...project });
  localStorage.setItem('projects', JSON.stringify(data));
};
export const deleteProject = (id) => {
  const data = getProjects().filter(p => p.id !== id);
  localStorage.setItem('projects', JSON.stringify(data));
};

// ---------------- CERTIFICATES ----------------
export const getCertificates = () => JSON.parse(localStorage.getItem('certificates') || '[]');
export const addCertificate = (cert) => {
  const data = getCertificates();
  data.push({ id: Date.now().toString(), ...cert });
  localStorage.setItem('certificates', JSON.stringify(data));
};
export const deleteCertificate = (id) => {
  const data = getCertificates().filter(c => c.id !== id);
  localStorage.setItem('certificates', JSON.stringify(data));
};

// ---------------- TECH STACK ----------------
export const getTechStack = () => JSON.parse(localStorage.getItem('techStack') || '[]');
export const addTech = (tech) => {
  const data = getTechStack();
  data.push({ id: Date.now().toString(), ...tech });
  localStorage.setItem('techStack', JSON.stringify(data));
};
export const deleteTech = (id) => {
  const data = getTechStack().filter(t => t.id !== id);
  localStorage.setItem('techStack', JSON.stringify(data));
};
