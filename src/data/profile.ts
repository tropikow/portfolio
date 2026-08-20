export const contact = {
	name: 'Jovanny Ruiz Lovera',
	role: 'Full Stack Developer',
	location: 'Medellín, Colombia',
	phone: '+57 323 235 2591',
	email: 'jovannydevops@gmail.com',
	linkedinUrl: 'https://linkedin.com/in/jovannyruizlovera',
	githubUrl: 'https://github.com/tropikow',
};

export const heroSnippet = [
	'const developer = {',
	`  name: '${contact.name}',`,
	`  role: '${contact.role}',`,
	"  stack: ['Nuxt 3', 'React', 'NestJS',",
	"          'React Native', 'n8n'],",
	"  focus: 'UX, automation & DevOps',",
	'};',
];

export const navTabs = [
	{ href: '#home', label: 'Home' },
	{ href: '#experience', label: 'Experience' },
	{ href: '#skills', label: 'Skills' },
	{ href: '#about', label: 'About' },
	{ href: '#contact', label: 'Contact' },
];

export const features = [
	{
		title: 'B2B Partner App',
		description:
			'Technical lead for the React Native mobile app, with Firebase Auth, push messaging, and Crashlytics monitoring.',
		accentStart: '#6fb3ff',
		accentEnd: '#1e6fd9',
	},
	{
		title: 'WhatsApp Automation',
		description:
			'Built a B2B support bot with n8n handling ~35 conversations per day, plus a shared team inbox on whatsapp-web.js.',
		accentStart: '#8fe07a',
		accentEnd: '#4c8a0c',
	},
	{
		title: 'CI/CD & Docker',
		description: 'Dockerized the ecosystem and manage continuous deployments with GitHub Actions across services.',
		accentStart: '#ffd27a',
		accentEnd: '#e8791a',
	},
	{
		title: 'Data Dashboards',
		description:
			'Automated OCR document reading and real-time dashboards with BigQuery + Looker Studio for operational visibility.',
		accentStart: '#c99bff',
		accentEnd: '#8b3fd1',
	},
];

export interface Job {
	id: string;
	company: string;
	role: string;
	period: string;
	windowLabel: string;
	accentStart: string;
	accentEnd: string;
	snippet: string[];
	bullets: string[];
}

export const jobs: Job[] = [
	{
		id: 'experience-laundryheap',
		company: 'Laundryheap',
		role: 'Full Stack Developer',
		period: 'July 2024 – Present · Full time',
		windowLabel: 'laundryheap / partner-web',
		accentStart: '#6fb3ff',
		accentEnd: '#0b4fa8',
		snippet: [
			'async notifyPartner(order) {',
			"  await whatsapp.send(order.partner, 'Order updated');",
			"  await slack.post('#ops', order.summary);",
			'}',
		],
		bullets: [
			'Led web interfaces with **Nuxt 3 & Tailwind CSS** for a B2B SaaS platform used by 100+ partner laundries, processing 600+ monthly orders.',
			'Technical lead for the **B2B partner mobile app** (React Native), with Firebase Authentication, Cloud Messaging, and Crashlytics.',
			'Implemented automated **OCR document reading** and real-time dashboards with BigQuery and Looker Studio.',
			'Designed an order tracking system with **WhatsApp & Slack automation**, cutting handling cycle time by 10%.',
			'Automated hourly, daily, weekly, and monthly cronjobs, saving ~2–3 hours of daily manual ops work (≈30%).',
			'Built a WhatsApp support bot with **n8n** handling ~35 conversations/day, plus a shared team WhatsApp platform on whatsapp-web.js.',
			'Integrated **NestJS** endpoints for billing uploads and Twilio in-app calls; dockerized the ecosystem with GitHub Actions CI/CD.',
			"Led the redesign of logic, database, and tooling after Laundryheap's acquisition of GetLavado (August 2024).",
		],
	},
	{
		id: 'experience-getlavado',
		company: 'GetLavado',
		role: 'Full Stack Developer · acquired by Laundryheap, August 2024',
		period: 'January 2024 – July 2024 · Full time',
		windowLabel: 'getlavado / control-panel',
		accentStart: '#ffd27a',
		accentEnd: '#b34e00',
		snippet: ['onSnapshot(ordersRef, (snapshot) => {', '  renderPanel(snapshot.docs);', '});'],
		bullets: [
			'Developed responsive web apps with **Nuxt 3 & Tailwind CSS** for laundry service logistics management.',
			'Designed a control panel connected to **Firestore** for centralized, live coordination of 500+ monthly orders.',
			'Maintained the backend with **ExpressJS**, powering the logistics management interface.',
		],
	},
	{
		id: 'experience-cluvi',
		company: 'CLUVI',
		role: 'UX Research Analyst',
		period: 'November 2022 – August 2023 · Part time',
		windowLabel: 'cluvi-pay / research-notes',
		accentStart: '#c99bff',
		accentEnd: '#5c1f96',
		snippet: ['pay-at-table flow: 3 friction points', 'priority: checkout confirmation', 'status: shipped to roadmap'],
		bullets: [
			'Collected feedback from diners via in-person visits, focused on **CLUVI Pay** — paying the bill directly from the table.',
			'Translated field research into concrete UI & payment flow proposals, prioritizing the most reported friction points.',
			'Presented and defended proposed improvements to design & development teams to secure roadmap prioritization.',
		],
	},
	{
		id: 'experience-japi',
		company: 'JAPI',
		role: 'Frontend Developer',
		period: 'March 2021 – December 2023 · Part time',
		windowLabel: 'japi / landing-pages',
		accentStart: '#8fe07a',
		accentEnd: '#2f6b0c',
		snippet: ["test('renders CTA', () => {", '  expect(cta).toBeVisible();', '});'],
		bullets: [
			'Deployed 20+ conversion-optimized landing pages for corporate clients using **React & Vue.js**.',
			'Developed modular web interfaces with Vue.js, Nuxt 3, and React, prioritizing reusable components.',
			'Designed custom dashboards integrated with **Supabase & MariaDB** for SME and corporate decision-making.',
			'Implemented unit testing with **Vitest** and **Jest** as part of the quality control workflow.',
			'Built hybrid UI components for mobile platforms with **React Native & Expo**.',
		],
	},
];

export const skillGroups = [
	{
		title: 'Frontend Frameworks',
		items: ['Vue.js', 'Nuxt 3', 'React', 'TypeScript', 'JavaScript (ES6+)', 'Composition API'],
	},
	{
		title: 'Styling & UI',
		items: ['Tailwind CSS', 'Design Systems', 'Responsive Design', 'UX/UI'],
	},
	{
		title: 'Automated Testing',
		items: ['Vitest', 'Jest', 'Data Mocking', 'Code Coverage'],
	},
	{
		title: 'Mobile Development',
		items: ['React Native', 'Expo', 'React Navigation', 'Firebase Auth', 'FCM', 'Crashlytics'],
	},
	{
		title: 'Backend & Integration',
		items: ['Node.js', 'ExpressJS', 'NestJS', 'RESTful APIs', 'Twilio', 'Global State Management'],
	},
	{
		title: 'Automation & WhatsApp',
		items: ['n8n', 'whatsapp-web.js', 'WhatsApp Business API', 'Campaign Compliance'],
	},
	{
		title: 'Databases',
		items: ['PostgreSQL', 'MariaDB', 'Firestore', 'Supabase'],
	},
	{
		title: 'Tools & DevOps',
		items: ['Git', 'GitHub Actions', 'Docker', 'GCP (BigQuery, OCR, Looker Studio)', 'Figma'],
	},
];

export const softSkills = [
	{ title: 'Teamwork', description: 'close collaboration with cross-functional product, design, and backend teams.' },
	{ title: 'Problem solving', description: 'identifying performance bottlenecks and proposing solutions.' },
	{
		title: 'Assertive communication',
		description: 'translating technical requirements for business audiences and vice versa.',
	},
	{ title: 'Continuous learning', description: 'quickly adopting new methodologies, libraries, and tools.' },
	{
		title: 'Time management',
		description: 'autonomy and organization to meet deadlines in high-velocity sprints.',
	},
];

export const languages = [
	{ name: 'Spanish', level: 'Native' },
	{ name: 'English', level: 'B2 Level' },
];

export const education = [
	'Software Engineering Fundamentals — Platzi, 2026',
	'GCP Basics Course — Platzi, 2026',
	'React Native: Fundamentals — Platzi, 2025',
	'Complete PostgreSQL Course — Platzi, 2023',
	'Backend Basics Course — Platzi, 2023',
	'Digital Skills Developer for Information Management — SENA, 2021',
];
