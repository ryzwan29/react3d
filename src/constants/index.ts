import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  // meta,
  starbucks,
  tesla,
  // shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "System Engineer",
    icon: web,
  },
  {
    title: "System Administrator",
    icon: mobile,
  },
  {
    title: "Cloud Engineer",
    icon: backend,
  },
  {
    title: "DevOps Engineer",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences: TExperience[] = [
  {
    title: "Technical Support",
    companyName: "Hawk Teknologi Solusi",
    icon: starbucks,
    iconBg: "#383E56",
    date: "July 2023 - January 2024",
    points: [
      "Has handled more than 100+ clients in various places for installation and maintanance internet.",
      "Carry out routine maintenance on network devices such as Routers, Switches and Access Points.",
      "Mikrotik, Switch and ONT configuration to build an FTTH network.",
      "Monitoring the client network and reporting to the technical team if there is a disturbance on the network.",
      "Assists in troubleshooting network problems and repairing problems that occur.",
    ],
  },
  {
    title: "System Engineer",
    companyName: "GIS Teknologi Prasasta",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "June 2024 - Now...",
    points: [
      "Backup&Restore VM/Nodes/Cloud Platform/Database to NAS with Vinchin, Arcserve, and Acronis.",
      "Collaborated on a team project regarding DRP simulation when Data Center downtime problems occurred.",
      "Backup&Restore VM/Nodes/Cloud Platform/Database to NAS with Vinchin, Arcserve, and Acronis.",
      "Manage, Troubleshoot VMware ESXi, VMware vSphere, and VMware vCenter.",
      "Install, Manage, Proxmox Cluster as Hyper-Converged Infrastructure and High Availability Ceph Storage.",
      "Configure, Manage, and Troubleshoot DNS Server, Active Directory, File Sharing, and IIS Web Server with Windows Server 2022.",
    ],
  },
  // {
  //   title: "Web Developer",
  //   companyName: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   companyName: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects: TProject[] = [
  {
    name: "Linux Server",
    description:
      "Install Linux servers for production using various tools such as DNS, WebServer, Database and Monitoring Resources.",
    tags: [
      {
        name: "Debian",
        color: "blue-text-gradient",
      },
      {
        name: "Ubuntu",
        color: "green-text-gradient",
      },
      {
        name: "KaliLinux",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    sourceCodeLink: "https://docs.rizwanfairuz.my.id/",
  },
  {
    name: "Computer Network",
    description:
      "Cisco and Mikrotik basic network configuration such as DHCP Server, DNS Server, interVLAN Trunk&Access, and Routing.",
    tags: [
      {
        name: "Mikrotik",
        color: "blue-text-gradient",
      },
      {
        name: "Cisco",
        color: "green-text-gradient",
      },
      {
        name: "Networking",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    sourceCodeLink: "https://docs.rizwanfairuz.my.id/",
  },
  {
    name: "AWS Cloud",
    description:
      "Production servers in the cloud have many features, such as databases, VPN endpoints, private subnets, and Load Balance",
    tags: [
      {
        name: "AWS",
        color: "blue-text-gradient",
      },
      {
        name: "VPC",
        color: "green-text-gradient",
      },
      {
        name: "WebsiteAplication",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    sourceCodeLink: "https://docs.rizwanfairuz.my.id/",
  },
];

export { services, technologies, experiences, testimonials, projects };
