import reactLogo from '../assets/icons/react.svg.png'
import awsLogo from '../assets/icons/aws.svg.png'
import dockerLogo from '../assets/icons/docker.png'
import jsLogo from '../assets/icons/JS.png'
import pythonLogo from '../assets/icons/python.png'
import cssLogo from '../assets/icons/css.png'

export const languages = [
  { name: 'JavaScript (ES6+)', level: 90 },
  { name: 'Python', level: 88 },
  { name: 'C#', level: 85 },
  { name: 'SQL', level: 85 },
  { name: 'HTML5', level: 92 },
  { name: 'CSS3 / SCSS', level: 90 },
]

export const techSkills = [
  {
    category: 'Frontend',
    items: [
      { name: 'React', icon: reactLogo },
      { name: 'JavaScript', icon: jsLogo },
      { name: 'CSS / SCSS', icon: cssLogo },
    ],
  },
  {
    category: 'Backend & Cloud',
    items: [
      { name: 'Python', icon: pythonLogo },
      { name: 'AWS', icon: awsLogo },
      { name: 'Docker', icon: dockerLogo },
    ],
  },
]

export const toolSkills = [
  { name: 'Vue.js' },
  { name: '.NET MVC' },
  { name: 'REST APIs' },
  { name: 'Git & GitHub' },
  { name: 'Azure DevOps' },
  { name: 'SQL Server' },
  { name: 'Visual Studio' },
  { name: 'VS Code' },
  { name: 'WordPress' },
  { name: 'FastAPI' },
]

export const practices = [
  'Agile / Scrum',
  'Code Review',
  'Unit Testing',
  'Responsive Design',
  'WCAG Accessibility',
  'Technical Documentation',
  'REST API Integration',
  'Query Optimisation',
]

export default techSkills
