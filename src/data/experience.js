import atlasLogo from '../assets/icons/company1.png'
import eliteLogo from '../assets/icons/elitedev.jpg'

const experience = [
  {
    id: 1,
    role: 'Software Developer',
    company: 'Atlas Blind & Curtain',
    location: 'Brisbane, QLD',
    period: '2023 – Present',
    logo: atlasLogo,
    summary:
      'Maintaining and developing internal software systems and business tools used daily across the company, with a focus on workflow automation, data management, and production reliability.',
    bullets: [
      'Maintain, enhance, and support internal software systems and web applications used across daily business operations',
      'Design, develop, and deploy custom internal applications for swing measurement processing, automating manual workflows and significantly improving accuracy and speed',
      'Build and maintain responsive front-end interfaces using HTML, CSS, JavaScript, and WordPress, improving system usability and customer experience',
      'Implement and upgrade internal tools for sales processing, employee records, and client data management',
      'Debug, test, and review production code across C#, Python, and JavaScript systems, ensuring reliability and performance',
      'Write and optimise SQL queries and reports, improving data accuracy and reporting efficiency',
      'Provide technical support and training to staff on new software tools and digital workflows',
    ],
    tech: ['C#', 'Python', 'JavaScript', 'SQL', 'WordPress', '.NET MVC'],
  },
  {
    id: 2,
    role: 'Web Developer Intern',
    company: 'Elite Dev',
    location: 'Brisbane, QLD',
    period: '2025 – 2026',
    logo: eliteLogo,
    summary:
      'Contributed to production web applications at a Brisbane-based development agency, focusing on responsive frontend development, REST API integration, and accessibility improvements within an agile team.',
    bullets: [
      'Built responsive front-end features using HTML5, CSS3/SCSS, and JavaScript, ensuring cross-browser compatibility and mobile-first design',
      'Developed and maintained React and Vue.js components, implementing state management patterns and integrating REST API endpoints',
      'Contributed to code reviews and followed Git branching workflows (feature branches, pull requests) within an agile sprint cadence',
      'Improved application performance and accessibility by implementing WCAG 2.1-compliant enhancements, reducing accessibility audit findings',
      'Authored technical documentation and handover notes to streamline onboarding for incoming developers',
    ],
    tech: ['React', 'Vue.js', 'JavaScript', 'CSS3/SCSS', 'REST APIs', 'Git'],
  },
]

export default experience
