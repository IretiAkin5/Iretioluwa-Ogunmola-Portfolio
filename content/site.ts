import projectData from './projects.json';
import teardownData from './teardowns.json';
export const projects = projectData;
export const teardowns = teardownData;
export type Project = (typeof projects)[number];
export type Teardown = (typeof teardowns)[number];
export const site = { name: 'Iretioluwa Ogunmola', email: 'ogunmolaireti5@gmail.com', phone: '+234 814 423 5808', phoneHref: 'tel:+2348144235808', github: 'https://github.com/IretiAkin5', positioning: 'Product Manager | Technical Product Delivery & AI-Assisted Prototyping' };
// Original supplied CV, copied without modification and verified by SHA-256.
export const resume: { available: boolean; path: string } = { available: true, path: '/resume/Iretioluwa-Ogunmola-CV.pdf' };
export const recommendations: { quote: string; name: string; role: string; relationship: string; project: string }[] = [];
export const practice = ['Product discovery', 'User research', 'PRDs & FRDs', 'User stories & acceptance criteria', 'Roadmaps', 'Alpha & beta testing', 'Google Analytics', 'AI-assisted prototyping', 'Engineering collaboration'];
export const process = [
['Understand','I listen to users, examine their journey and consider the business context before proposing a solution. My customer experience background helps me recognise repeated problems behind individual complaints.','Research notes · Problem statements · Personas'],
['Define','I turn findings into a clear product direction, scope and requirements the team can discuss and build from.','PRDs · FRDs · User stories · Acceptance criteria'],
['Prioritise','I weigh user value, business needs, available evidence and effort to decide what belongs in the first release and what can wait.','Prioritised scope · Roadmap · Backlog'],
['Make it tangible','I use AI-assisted prototypes and design collaboration to make an idea easier to review before committing to development.','Prototype flows · Wireframes · Stakeholder feedback'],
['Test and deliver','I work with engineering and stakeholders to review behaviour, clarify issues and support alpha and beta testing.','Testing feedback · Clarified requirements'],
['Learn after launch','I combine usage data and customer feedback to identify the next improvement, while checking that the numbers are meaningful.','Analytics reviews · Improvement priorities']
];
export const learning = [
['Technical Product Management',"I'm strengthening my understanding of technical delivery and how product decisions connect with engineering implementation.",'Course in progress'],
['AI Products & Prototyping','I use Lovable, Bolt AI, OpenCode and Codex to make product ideas tangible, and continue developing my AI-product and prompting practice.','Active practice'],
['Scrum & Product Practice','My Certified Scrum Product Owner training supports my approach to prioritisation, team collaboration and iterative delivery.','CSPO · Scrum Alliance · 2025'],
['TypeScript Foundations',"I'm developing familiarity with the language and concepts used in modern web products.",'Learning in progress']
];
export const experience = [
['February 2026–present','Product Management Lead','True Horizon Tech','End-to-end PropertyBridge ownership, launch, onboarding, demonstrations and early analytics.'],
['September 2025–present','Technical Product Management Lead · Volunteer','Mikaelson Initiative','RIO product definition and coordination; initiative website content and design direction.'],
['June–August 2025','Associate Product Manager','BorderlessHR','Nul Footprint research, onboarding improvement work and prototype-first validation.'],
['March 2023–February 2026','Product Owner & Customer Experience Lead','Chayim Diagnostics','Customer and operational improvements, website content and results-access journey.'],
['August 2021–March 2023','Customer Service Executive','Firmcare Diagnostics','Customer support, follow-up and recurring-issue escalation.']
];
export const tools = [
['Planning & documentation','Jira, ClickUp, Trello, Notion, Google Docs and Google Workspace.'],
['Research & synthesis','Interviews, surveys, competitor benchmarking and ChatGPT-assisted research, with source checking.'],
['Design collaboration','Figma, FigJam and Canva.'],
['Prototyping','Lovable, Bolt AI, OpenCode, Codex and Stitch AI.'],
['Analytics','Google Analytics.'],
['Website & delivery workflows','WordPress; GitHub with AI assistance; Netlify, Docker, Vercel and Render experience.']
];

export const nav = [['Home','/'],['About','/about/'],['Products','/products/'],['Case Studies','/case-studies/'],['Teardowns','/teardowns/'],['Contact','/contact/']];
