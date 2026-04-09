import {
  CodingProfileItem,
  ContactItem,
  ExperienceItem,
  NavItem,
  ProjectItem,
  SkillCategory
} from '../models/portfolio.models';

export const NAV_ITEMS: NavItem[] = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'profiles', label: 'Coding Profiles' },
  { id: 'contact', label: 'Contact' }
];

export const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    company: 'Effiya Technologies',
    role: 'Software Engineer',
    duration: 'July 2025 - Present',
    responsibilities: [
      'Designing and developing scalable, high-performance applications using Spring Boot, PostgreSQL/SQL Server, and Angular, with a strong focus on code maintainability and clean architecture.',
      'Designed and implemented complete data models and database schemas for a greenfield project, ensuring high query performance and data consistency.',
      'Executed SQL Server to PostgreSQL migration for two large-scale systems, enhancing performance and reducing infrastructure costs.'
    ]
  },
  {
    company: 'Effiya Technologies',
    role: 'Software Engineer Intern',
    duration: 'January 2025 - June 2025',
    responsibilities: [
      'Designed and implemented 50+ RESTful APIs to support scalable backend services.',
      'Implemented 20+ new features using Angular and Spring Boot, increasing application maintainability by 20%.',
      'Optimized data exchange between Angular frontend and Spring Boot backend, improving response times by 40% and enhancing user experience.'
    ]
  }
];

export const PROJECT_ITEMS: ProjectItem[] = [
  {
    name: 'ConnectSphere',
    description:
      'A LinkedIn-style social platform built with distributed microservices for real-time social interactions and scalable data flow.',
    highlights: [
      'Built a LinkedIn-style social platform using Spring Boot microservices with User, Post, Notification, and Connection services.',
      'Implemented API Gateway with custom Spring Security, Eureka service discovery, and Spring Cloud Config for centralized configuration.',
      'Integrated Kafka-based asynchronous messaging to decouple services and enable event-driven communication.',
      'Used Neo4j graph database to model social connections and efficiently query multi-degree relationships.',
      'Added Resilience4j circuit breakers, Zipkin tracing, and ELK stack logging for fault tolerance and observability.'
    ],
    techStack: ['Spring Boot', 'Microservices', 'Kafka', 'Neo4j', 'Spring Cloud', 'Angular'],
    githubUrl: 'https://github.com/deepak4572/ConnectSphere'
  },
  {
    name: 'CabConnect',
    description:
      'A ride-hailing backend system featuring secure authentication, trip orchestration, and resilient service-to-service communication.',
    highlights: [
      'Built a ride-hailing backend with authentication and secure role-based access.',
      'Designed REST APIs for trip management, bookings, and backend orchestration.',
      'Structured services for scalability and clean separation of responsibilities.'
    ],
    techStack: ['Spring Boot', 'SQL Server', 'REST API'],
    githubUrl: 'https://github.com/deepak4572/CabConnect'
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  { category: 'Languages', items: ['C', 'C++', 'Java', 'JavaScript'] },
  { category: 'Backend & Frameworks', items: ['Spring Boot', 'Spring MVC', 'Spring Data JPA', 'Hibernate', 'Spring Security'] },
  { category: 'Frontend', items: ['Angular'] },
  { category: 'Databases', items: ['PostgreSQL', 'SQL Server', 'Neo4j', 'MongoDB'] },
  { category: 'API, Architecture & Messaging', items: ['REST APIs', 'Microservices', 'Apache Kafka'] },
  { category: 'Core Concepts', items: ['Object-Oriented Programming (OOP)', 'Data Structures and Algorithms', 'DBMS', 'Operating Systems', 'Computer Networks'] }
];

export const CODING_PROFILES: CodingProfileItem[] = [
  {
    platform: 'GeeksforGeeks',
    handle: 'deepakchauhan4572',
    icon: 'fa-solid fa-code',
    href: 'https://www.geeksforgeeks.org/profile/deepakchauhan4572'
  },
  {
    platform: 'LeetCode',
    handle: 'deepak_4572',
    icon: 'fa-solid fa-laptop-code',
    href: 'https://leetcode.com/u/deepak_4572/'
  },
  {
    platform: 'AtCoder',
    handle: 'deepak_457',
    icon: 'fa-solid fa-microchip',
    href: 'https://atcoder.jp/users/deepak_457'
  },
  {
    platform: 'Codeforces',
    handle: 'deepak_457',
    icon: 'fa-solid fa-trophy',
    href: 'https://codeforces.com/profile/deepak_457'
  },
  {
    platform: 'CSES',
    handle: 'Problem Set Profile',
    icon: 'fa-solid fa-list-check',
    href: 'https://cses.fi/user/188409'
  },
  {
    platform: 'CodeChef',
    handle: 'flex_07',
    icon: 'fa-solid fa-star',
    href: 'https://www.codechef.com/users/flex_07'
  },
  {
    platform: 'LeetCode (2nd Account)',
    handle: 'deepak_457',
    icon: 'fa-solid fa-laptop-code',
    href: 'https://leetcode.com/u/deepak_457/'
  },
  {
    platform: 'Codeforces (2nd Account)',
    handle: 'deepak_4572',
    icon: 'fa-solid fa-trophy',
    href: 'https://codeforces.com/profile/deepak_4572'
  },
];

export const CONTACT_ITEMS: ContactItem[] = [
  {
    label: 'Email',
    value: 'deepakchauhan4572@gmail.com',
    href: 'mailto:deepakchauhan4572@gmail.com',
    icon: 'fa-solid fa-envelope'
  },
  {
    label: 'GitHub',
    value: 'github.com/deepak4572',
    href: 'https://github.com/deepak4572',
    icon: 'fa-brands fa-github'
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/deepakchauhan4572',
    href: 'https://www.linkedin.com/in/deepakchauhan4572/',
    icon: 'fa-brands fa-linkedin'
  },
  {
    label: 'Phone',
    value: '+91-77038-06877',
    href: 'tel:+917703806877',
    icon: 'fa-solid fa-phone'
  }
];
