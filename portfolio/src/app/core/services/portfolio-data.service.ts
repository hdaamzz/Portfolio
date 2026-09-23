import { computed, Injectable, signal } from '@angular/core';
import { Education } from '../models/education.interface';
import { Experience } from '../models/experience.interface';
import { PersonalInfo, SocialLinks } from '../models/personal-info.interface';
import { Project } from '../models/project.interface';
import { Skills } from '../models/skills.interface';

@Injectable({
  providedIn: 'root'
})
export class PortfolioDataService {

private readonly _personalInfo = signal<PersonalInfo>({
    name: 'Hamzathul Dilshad C',
    title: 'MEAN Stack Developer',
    email: 'diluhd99@gmail.com',
    phone: '+91 75599 09796',
    summary: 'Software Engineer with hands-on experience building Governance, Risk, and Compliance (GRC) products and full-stack MEAN applications. Currently contributing to scalable, user-friendly Angular systems at Jethur, collaborating across multiple project teams and applying AI-driven development practices. Skilled in Angular, Express.js, MongoDB and Node.js, with a strong foundation in clean architecture, state management, real-time technologies (WebRTC, Socket.io), and cloud deployment (AWS).'
  });

  private readonly _socialLinks = signal<SocialLinks>({
    linkedin: 'https://www.linkedin.com/in/dilshhh/',
    github: 'https://github.com/hdaamzz',
    leetcode: 'https://leetcode.com/u/hdaamzz/',
    instagram: 'https://instagram.com/hamzathul.dilshad',
    whatsapp: 'https://wa.me/917559909796?text=Hi%20Hamzathul-Dilshad!%20I%20came%20across%20your%20portfolio%20and%20would%20love%20to%20connect.'
  });

  private readonly _skills = signal<Skills>({
    languages: ['JavaScript (ES6+)', 'TypeScript', 'SQL'],
    frontend: ['Angular (v18+)', 'NgRx', 'MobX', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap'],
    backend: ['Node.js', 'Express.js', 'REST APIs', 'Socket.io'],
    database: ['MongoDB', 'MySQL', 'Firebase', 'PostgreSQL'],
    architecture: ['SOLID Principles', 'Repository Pattern', 'MVC', 'Clean Architecture'],
    deployment: ['AWS EC2', 'Docker', 'Nginx', 'Vercel', 'Render'],
    security: ['JWT', 'OAuth 2.0', 'Bcrypt', 'RBAC'],
    tools: ['Postman', 'Figma', 'Stripe', 'Razorpay', 'Nodemailer', 'Git', 'GitHub'],
    others: ['DSA', 'Redis', 'WebSockets', 'WebRTC']
  });

  private readonly _experience = signal<Experience[]>([
    {
      role: 'Software Engineer',
      company: 'Jethur',
      period: 'Jul 2025 – Present',
      location: 'Kochi, Kerala, India',
      type: 'Hybrid',
      current: true,
      highlights: [
        'Contributing to the development of a Governance, Risk, and Compliance (GRC) product, working across multiple GRC modules alongside cross-functional project teams.',
        'Collaborated with the Angular team to build and maintain a user-friendly, scalable front-end system using Angular, Bootstrap, and MobX for state management.',
        'Applied AI-driven development practices to accelerate feature delivery and improve code quality.',
        'Streamlined CI/CD pipelines, automating build, test, and deployment workflows.',
        'Enforced clean code design patterns (SOLID, modular architecture) to strengthen system performance and maintainability.'
      ]
    }
  ]);

  private readonly _professionalProjects = signal<Project[]>([
    {
      title: 'EvenDigo',
      subtitle: 'Event Management and Booking System',
      liveUrl: 'https://evendigo.space/',
      githubUrl: 'https://github.com/hdaamzz/EvenDigo',
      description: [
        'Built comprehensive event platform serving 50+ active users with event creation, editing, and analytics for organizers.',
        'Implemented JWT auth with RBAC and real-time Socket.IO chat supporting 100+ concurrent users.',
        'Integrated Stripe payment processing 200+ transactions with tickets, coupons, refunds, and subscription management.',
        'Delivered an analytics dashboard and financial tracking module; architected a scalable backend with Repository Pattern, cutting code duplication by 40%.'
      ],
      technologies: ['Node.js', 'Express.js', 'Angular', 'NgRx', 'TypeScript', 'MongoDB', 'JWT', 'Socket.io', 'Stripe', 'Tailwind CSS']
    },
    {
      title: 'ShopEazy',
      subtitle: 'E-commerce Platform',
      liveUrl: 'https://shopeazy.evendigo.space/',
      githubUrl: 'https://github.com/hdaamzz/shopeazy',
      description: [
        'Engineered scalable REST APIs handling 1000+ products and 300+ daily requests; crafted a mobile-first UI that improved engagement by 45%.',
        'Added Razorpay support with multiple payment options and configured an Nginx reverse proxy, reducing response time by 35%.',
        'Created an admin dashboard for order management, inventory tracking, and real-time sales analytics; deployed on AWS EC2 with Docker.'
      ],
      technologies: ['Node.js', 'Express.js', 'MongoDB', 'Nginx', 'Razorpay', 'Bootstrap', 'AWS EC2']
    },
    {
      title: 'RingRing',
      subtitle: 'Video Calling Platform',
      liveUrl: 'https://ring-ring-nine.vercel.app/',
      githubUrl: 'https://github.com/hdaamzz/RingRing',
      description: [
        'Engineered secure authentication using Firebase OAuth, JWT, and HttpOnly cookies; applied a modular backend design with TypeScript, Dependency Injection, and Repository Pattern, reducing coupling by 50%.',
        'Designed a responsive Angular 19 UI with Signals and reusable components; optimized load time by 40% through lazy loading.',
        'Integrated WebRTC for peer-to-peer video calling with real-time connection and unique phone number assignment.'
      ],
      technologies: ['Angular 19', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'Firebase Auth', 'JWT']
    },
    {
      title: 'PingPoll',
      subtitle: 'Real-Time Polling and Chat Application',
      liveUrl: 'https://pingpoll.vercel.app/',
      githubUrl: 'https://github.com/hdaamzz/PingPoll',
      description: [
        'Delivered real-time polling and chat using WebSockets with instant updates supporting 50+ concurrent users.',
        'Implemented Firebase OAuth with JWT sessions; built a modular backend with TypeScript, DI (TSyringe), Repository Pattern.',
        'Established a responsive Angular 19 UI with Signals, guards, interceptors, and optimized lazy loading.'
      ],
      technologies: ['Angular 19', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io', 'Firebase Auth', 'Tailwind CSS']
    }
  ]);

  private readonly _otherProjects = signal<Project[]>([
    {
      title: 'BlogBee',
      subtitle: 'Content Management System (CMS)',
      liveUrl: 'https://blog-bee-nine.vercel.app/',
      githubUrl: 'https://github.com/hdaamzz/BlogBee',
      description: [
        'Built a full-stack CMS with user authentication, article CRUD, and an admin dashboard for content management.',
        'Added MongoDB schema validation middleware to enforce data integrity across content submissions.'
      ],
      technologies: ['Angular', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'JWT']
    },
    {
      title: 'UMS',
      subtitle: 'User Management System',
      githubUrl: 'https://github.com/hdaamzz/SMS-NgRx',
      description: [
        'Developed a CRUD-based user management system with secure authentication and role-based access control (RBAC).',
        'Integrated NgRx for centralized state management across the application.'
      ],
      technologies: ['Angular', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'JWT', 'NgRx']
    }
  ]);

  private readonly _education = signal<Education[]>([
    {
      institution: 'Brototype, Calicut',
      degree: 'MEAN Stack Development Intensive Bootcamp Certification',
      period: 'September 2024 – July 2025'
    },
    {
      institution: 'PPTM College of Arts and Science, University of Calicut',
      degree: 'Bachelor of Computer Applications (BCA)',
      period: '2020 - 2023'
    }
  ]);

  readonly personalInfo = this._personalInfo.asReadonly();
  readonly socialLinks = this._socialLinks.asReadonly();
  readonly skills = this._skills.asReadonly();
  readonly experience = this._experience.asReadonly();
  readonly professionalProjects = this._professionalProjects.asReadonly();
  readonly otherProjects = this._otherProjects.asReadonly();
  readonly education = this._education.asReadonly();

  readonly allProjects = computed(() => [
    ...this._professionalProjects(),
    ...this._otherProjects()
  ]);

  updatePersonalInfo(info: Partial<PersonalInfo>): void {
    this._personalInfo.update(current => ({ ...current, ...info }));
  }
}
