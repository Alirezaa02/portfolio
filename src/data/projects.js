const projects = [
  {
    id: 1,
    slug: 'ai-triage-system',
    title: 'AI Emergency Triage System',
    description:
      'A full-stack AI-assisted triage platform using agentic AI (Gemini) to support emergency department workflows through intelligent patient registration, triage, and disposition.',
    tech: ['Python', 'FastAPI', 'Gemini AI', 'React', 'AWS', 'Docker'],
    overview:
      'Built as a modern healthcare product combining agentic AI with emergency department workflows. The system uses specialised AI agents to handle patient registration, triage assessment, patient management, and disposition — reducing manual workload and improving decision speed in high-pressure environments.',
    role: 'Full-Stack Developer',
    year: '2025',
    highlights: [
      'Implemented agentic AI architecture using Google Gemini with four specialised agents: registration, triage, patient, and disposition',
      'Built FastAPI backend with dedicated endpoints per agent (POST /agents/registration, /triage, /patient, /disposition)',
      'Integrated Google Vertex AI and direct Gemini API with environment-based configuration (USE_VERTEX flag)',
      'Designed React frontend for real-time patient queue management and structured clinical decision support',
      'Containerised the full application with Docker for consistent deployment across environments',
      'Deployed infrastructure on AWS suited for healthcare-grade workloads',
    ],
    learnings: [
      'Gained deep experience designing multi-agent AI systems where each agent has a focused, bounded responsibility',
      'Learned how to build AI-assisted tools for safety-critical environments where reliability and clarity of output matter',
      'Improved understanding of Google Gemini API, Vertex AI integration, and environment-based AI configuration',
    ],
    github: 'https://github.com/Alirezaa02/ed-agentic-ai-with-agents-slim',
    category: 'Full-Stack · Agentic AI · Healthcare',
    image: '/projects/ai-triage.png',
  },
  {
    id: 2,
    slug: 'oakd-realtime-dashboard',
    title: 'OAK-D Real-Time Monitoring Dashboard',
    description:
      'A full-stack web application for monitoring UAV sensor data and AI vision detections in real time, streaming live telemetry and computer vision results to a browser over a local network.',
    tech: ['React', 'Python', 'Flask', 'OAK-D', 'DepthAI', 'JavaScript'],
    overview:
      'Built to stream live telemetry and AI computer vision results from an OAK-D camera system mounted on a UAV to a browser dashboard over a local network. The system continuously updates without page refreshes, giving operators a real-time view of environmental conditions and visual detections simultaneously.',
    role: 'Full-Stack Developer',
    year: '2025',
    highlights: [
      'Built a React dashboard with continuous real-time updates for UAV sensor data and AI vision detections',
      'Developed a Python/Flask backend to interface with the OAK-D depth camera system using DepthAI',
      'Streamed live AI vision detections — faces, markers, and objects — to the frontend without page refreshes',
      'Implemented real-time environmental sensor monitoring: temperature, humidity, and gas readings',
      'Added UAV position tracking in 3D space (x, y, z coordinates) with live display',
      'Enabled historical data recording for post-flight analysis',
      'Designed for local network (LAN) accessibility so operators can monitor from any device on the network',
    ],
    learnings: [
      'Gained hands-on experience integrating hardware computer vision systems (OAK-D) with web applications',
      'Learned real-time data streaming patterns between Python backends and React frontends',
      'Improved understanding of UAV telemetry systems and sensor data handling in live environments',
    ],
    github: 'https://github.com/Alirezaa02/webvis-oakd-dashboard',
    category: 'Full-Stack · AI Vision · UAV · Real-Time',
    image: '/projects/oakd-dashboard.png',
  },
  {
    id: 3,
    slug: 'cloud-microservices-platform',
    title: 'Cloud Microservices Platform',
    description:
      'A scalable cloud-based platform built with distributed services, containerisation, and modern deployment practices for maintainability and performance.',
    tech: ['AWS', 'Docker', 'Node.js'],
    overview:
      'Focused on modular service design, cloud deployment workflows, and scalable backend architecture. Each service is independently deployable, allowing teams to iterate on individual components without affecting the wider system.',
    role: 'Software Engineer',
    year: '2026',
    highlights: [
      'Designed a distributed microservices architecture with independently deployable services',
      'Used Docker and Docker Compose to containerise and orchestrate all services locally and in the cloud',
      'Deployed services to AWS with load balancing and auto-scaling configurations',
      'Built Node.js service layers with clear API contracts between components',
      'Implemented centralised logging and monitoring across services for observability',
    ],
    learnings: [
      'Gained hands-on experience with microservices communication patterns and trade-offs',
      'Learned how to manage complexity in distributed systems through clear service boundaries',
      'Improved understanding of AWS networking, IAM roles, and cloud cost management',
    ],
    github: '',
    category: 'Cloud · Backend · DevOps',
    image: null,
  },
  {
    id: 4,
    slug: 'sokoban-ai-planner',
    title: 'Sokoban AI Planning Agent',
    description:
      'An intelligent AI agent that solves Sokoban warehouse puzzles using A* search with custom heuristics, minimising movement cost while pushing weighted boxes to goal positions.',
    tech: ['Python', 'A* Search', 'Jupyter Notebook', 'AI Planning'],
    overview:
      'Developed as part of QUT\'s CAB320 Artificial Intelligence course, this project implements an informed search agent that navigates a warehouse environment, pushing weighted boxes to designated goal positions while minimising total cost. The agent uses A* search with a custom heuristic based on Manhattan distances and box weights.',
    role: 'AI Developer',
    year: '2024',
    highlights: [
      'Implemented A* search algorithm with a custom admissible heuristic for optimal pathfinding',
      'Designed state representation to efficiently encode the warehouse grid, box positions, and agent location',
      'Used Manhattan distance combined with box weights in the heuristic function to guide search efficiently',
      'Applied cost formula (1 + box weight) to evaluate push actions, balancing exploration and exploitation',
      'Tested across multiple puzzle configurations with varying box counts and grid complexities',
    ],
    learnings: [
      'Deepened understanding of informed search algorithms and the importance of heuristic admissibility',
      'Learned how state space design directly impacts search performance and memory usage',
      'Gained practical experience applying AI planning concepts to a constrained real-world problem',
    ],
    github: 'https://github.com/Alirezaa02/sokoban-ai-planner',
    category: 'AI · Search Algorithms · Python',
    image: null,
  },
]

export default projects
