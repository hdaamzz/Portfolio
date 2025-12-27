import { computed, Injectable, signal } from '@angular/core';
import { Education } from '../models/education.interface';
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
    summary: 'MEAN stack developer skilled in MongoDB, Express.js, Angular, and Node.js. Experienced in developing scalable web applications, designing database schemas, and creating responsive UIs. Passionate about writing clean, maintainable code and contributing to modern web solutions.'
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
    frontend: ['Angular', 'NgRx', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap'],
    backend: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'REST APIs', 'Socket.io'],
    database: ['MongoDB', 'MySQL', 'Firebase', 'PostgreSQL'],
    architecture: ['SOLID', 'Repository Pattern', 'MVC'],
    deployment: ['AWS EC2', 'Nginx', 'Vercel', 'Docker'],
    security: ['JWT', 'OAuth', 'Bcrypt', 'RBAC'],
    tools: ['Figma', 'Postman', 'Git', 'GitHub', 'Stripe', 'Razorpay'],
    others: ['DSA', 'Redis', 'WebSockets', 'Nodemailer', 'Multer']
  });

  private readonly _professionalProjects = signal<Project[]>([
    {
      title: 'EvenDigo',
      subtitle: 'Event Management and Booking System',
      liveUrl: 'https://evendigo.space/',
      githubUrl: 'https://github.com/hdaamzz/EvenDigo',
      description: [
        'Developed comprehensive event management system with create, edit, and analytics capabilities for organizers.',
        'Implemented JWT auth with RBAC and real-time chat using Socket.IO.',
        'Integrated ticket purchasing, coupons, payments, and refunds.',
        'Added subscription management and gamified badges.',
        'Built analytics dashboard and financial tracking modules.',
        'Built responsive UI ensuring seamless experience across devices.',
        'Followed Repository Pattern and SOLID principles for scalable architecture.'
      ],
      technologies: ['Node.js', 'Express.js', 'Angular', 'NgRx', 'TypeScript', 'MongoDB', 'JWT', 'Socket.io', 'Stripe', 'Tailwind CSS']
    },
    {
      title: 'ShopEazy',
      subtitle: 'E-commerce Platform',
      liveUrl: 'https://shopezy.shop/',
      githubUrl: 'https://github.com/hdaamzz/shopeazy',
      description: [
        'Developed scalable backend using Node.js, Express.js, and MongoDB.',
        'Designed mobile-first responsive UI for optimal experience.',
        'Integrated Stripe payment with multiple payment options.',
        'Configured Nginx reverse proxy for performance optimization.',
        'Created admin dashboard for order and inventory management.'
      ],
      technologies: ['Node.js', 'Express.js', 'MongoDB', 'Nginx', 'Razorpay', 'Bootstrap', 'AWS EC2']
    },
    {
      title: 'RingRing',
      subtitle: 'Video Calling Platform',
      liveUrl: 'https://ring-ring-nine.vercel.app/',
      githubUrl: 'https://github.com/hdaamzz/RingRing',
      description: [
        'Built a secure authentication flow using Firebase Google OAuth, JWT, and HttpOnly cookies.',
        'Implemented modular backend with TypeScript, Express, Mongoose, DI (TSyringe), and Repository Pattern.',
        'Designed a modern responsive UI using Angular 19, Signals, Tailwind, and reusable component architecture.',
        'Added protected routes, interceptors, guards, and optimized lazy loading for performance.',
        'Prepared WebRTC calling pipeline with real time connection setup, and unique phone number.'
      ],
      technologies: ['Angular 19', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'Firebase Auth', 'JWT']
    },
    {
      title: 'PingPoll',
      subtitle: 'Real-Time Polling and Chat Application',
      liveUrl: 'https://pingpoll.vercel.app/',
      githubUrl: 'https://github.com/hdaamzz/PingPoll',
      description: [
        'Built a real-time polling and chat system with live vote updates and instant messaging.',
        'Implemented Google OAuth with Firebase, JWT sessions, and secure HttpOnly cookie flow.',
        'Developed modular backend using TypeScript, Express, Mongoose, and TSyringe-based DI.',
        'Designed responsive Angular 19 UI with Signals, guards, interceptors, and lazy loading.'
      ],
      technologies: ['Angular 19', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io', 'Firebase Auth', 'Tailwind CSS']
    }
  ]);

  private readonly _otherProjects = signal<Project[]>([
    {
      title: 'BlogBee',
      subtitle: 'Content Management System (CMS)',
      githubUrl: 'https://github.com/hdaamzz/BlogBee',
      description: [
        'Full-stack CMS with user authentication, article CRUD, and dashboard.',
        'Angular frontend with Auth, Router, Guards; backend APIs with Express.js.',
        'MongoDB with validation middleware and Mongoose schemas.'
      ],
      technologies: ['Angular', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'JWT']
    },
    {
      title: 'UMS',
      subtitle: 'User Management System',
      githubUrl: 'https://github.com/hdaamzz/Angular-NGRX-Student-Management-System',
      description: [
        'CRUD-based system with secure authentication and RBAC.',
        'Angular frontend with Tailwind CSS and NgRx state management.'
      ],
      technologies: ['Angular', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'JWT']
    },
    {
      title: 'Netflix Clone',
      subtitle: 'Streaming Platform',
      githubUrl: 'https://github.com/hdaamzz/Netflix-Clone-Angular',
      description: [
        'User-friendly interface for browsing and streaming.',
        'Dynamic profile management and personalized recommendations.'
      ],
      technologies: ['Angular', 'Node.js', 'Express.js', 'TypeScript', 'Tailwind CSS']
    }
  ]);

  private readonly _education = signal<Education[]>([
    {
      institution: 'Brototype, Calicut',
      degree: 'MEAN Stack Development Certification',
      period: '2024 - Present'
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
