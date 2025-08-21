
import React from 'react';
import { Role } from './types';

// Icon components (Heroicons)
const AiIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V8.25a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 8.25v10.5A2.25 2.25 0 006.75 21z" /></svg>
);
const WebDevIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" /></svg>
);
const DataScienceIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" /></svg>
);
const SecurityIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286zm0 13.036h.008v.008h-.008v-.008z" /></svg>
);
const CloudIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.5 4.5 0 002.25 15z" /></svg>
);
const MobileIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18h3" /></svg>
);
const DevOpsIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0011.667 0l3.181-3.183m-10.023-4.991v4.992m0 0h4.992m-4.993 0l3.181-3.183a8.25 8.25 0 0111.667 0l3.181 3.183" /></svg>
);
const DesignIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.998 15.998 0 011.622-3.385m5.043.025a15.998 15.998 0 001.622-3.385m3.388 1.62a15.998 15.998 0 00-1.62-3.385m-5.043-.025a15.998 15.998 0 01-3.388-1.621m7.702 7.702a15.998 15.998 0 00-3.388-1.622m5.043.025a15.998 15.998 0 01-1.622 3.385m-5.043-.025a15.998 15.998 0 00-1.622 3.385m-3.388-1.62a15.998 15.998 0 001.62 3.385m5.043.025a15.998 15.998 0 013.388 1.622m-7.702-7.702a15.998 15.998 0 013.388 1.622m0 0a15.998 15.998 0 003.388 1.622m-3.388-1.622a15.998 15.998 0 01-3.388 1.622m0 0a15.998 15.998 0 00-3.388 1.622m-3.388-1.622a15.998 15.998 0 01-3.388-1.622m7.702 7.702c.812 0 1.554-.18 2.22-.504a15.998 15.998 0 001.622-3.385m-1.622 3.385a15.998 15.998 0 01-3.388 1.621m0 0a15.998 15.998 0 00-1.622 3.385m3.388-1.622a15.998 15.998 0 01-1.622 3.385" /></svg>
);
const BlockchainIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" /></svg>
);
const ProductManagerIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 100 15 7.5 7.5 0 000-15zM21 21l-5.197-5.197" /></svg>
);


export const APP_NAME = "TechMastery Pro";

export const Logo = () => (
    <div className="flex items-center space-x-2">
        <div className="p-2 bg-brand-accent rounded-lg">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </div>
        <span className="text-xl font-bold text-white">{APP_NAME}</span>
    </div>
);


export const ROLES: Role[] = [
    {
        title: 'AI & Machine Learning Specialist',
        description: 'Master the art of creating intelligent systems that can learn, adapt, and make decisions.',
        icon: AiIcon,
        chapters: [
            {
                title: 'Introduction to Artificial Intelligence',
                lessons: [
                    { title: 'What is AI?', analogy: 'The Digital Brain Analogy' },
                    { title: 'History of AI', analogy: 'From Calculators to Companions' },
                    { title: 'Types of AI', analogy: 'Narrow vs General Intelligence' },
                    { title: 'AI vs Human Intelligence', analogy: 'Different Tools, Same Goals' },
                    { title: 'Real-world AI Applications', analogy: 'Your Daily AI Encounters' },
                    { title: 'Ethics in AI', analogy: 'Teaching Machines Right from Wrong' },
                    { title: 'AI Limitations', analogy: 'When Robots Get Confused' },
                    { title: 'Machine vs Human Learning', analogy: 'Practice Makes Perfect' },
                    { title: 'AI Terminology Decoded', analogy: 'Speaking the Language' },
                    { title: 'Future of AI', analogy: 'Tomorrow\'s Possibilities' },
                    { title: 'AI in Different Industries', analogy: 'Healthcare to Entertainment' },
                    { title: 'Common AI Myths Debunked', analogy: 'Hollywood vs Reality' },
                    { title: 'AI Research Methods', analogy: 'How Scientists Teach Machines' },
                    { title: 'AI Hardware Requirements', analogy: 'The Brain Needs a Body' },
                    { title: 'Open Source vs Proprietary AI', analogy: 'Sharing vs Keeping Secrets' },
                    { title: 'AI Development Timeline', analogy: 'Rome Wasn\'t Built in a Day' },
                    { title: 'Understanding AI Bias', analogy: 'When Machines Mirror Our Mistakes' },
                    { title: 'AI Safety Principles', analogy: 'Building Safe Digital Assistants' },
                    { title: 'Career Paths in AI', analogy: 'Where AI Experts Work' },
                    { title: 'Getting Started with AI Tools', analogy: 'Your First AI Playground' },
                ]
            },
            {
                title: 'Machine Learning Fundamentals',
                lessons: [
                    { title: 'What is Machine Learning?', analogy: 'Teaching Without Programming' },
                    { title: 'Supervised Learning', analogy: 'Learning with a Teacher' },
                    { title: 'Unsupervised Learning', analogy: 'Finding Patterns Alone' },
                    { title: 'Reinforcement Learning', analogy: 'Learning Through Trial and Error' },
                    { title: 'Training Data', analogy: 'The Textbooks for Machines' },
                    { title: 'Features and Labels', analogy: 'Ingredients and Recipes' },
                    { title: 'Model Training Process', analogy: 'Practice Makes Perfect' },
                    { title: 'Overfitting and Underfitting', analogy: 'Memorizing vs Understanding' },
                    { title: 'Cross-Validation', analogy: 'Testing Before the Real Test' },
                    { title: 'Performance Metrics', analogy: 'Grading Machine Learning' },
                    { title: 'Linear Regression', analogy: 'Drawing the Best Line' },
                    { title: 'Classification vs Regression', analogy: 'Sorting vs Measuring' },
                    { title: 'Decision Trees', analogy: 'Following a Flowchart' },
                    { title: 'Random Forest', analogy: 'Asking Multiple Experts' },
                    { title: 'Support Vector Machines', analogy: 'Finding the Best Boundary' },
                    { title: 'K-Means Clustering', analogy: 'Grouping Similar Things' },
                    { title: 'Neural Networks Basics', analogy: 'Digital Brain Cells' },
                    { title: 'Feature Engineering', analogy: 'Preparing Data for Learning' },
                    { title: 'Model Selection', analogy: 'Choosing the Right Tool' },
                    { title: 'Deployment Strategies', analogy: 'Putting Models to Work' },
                ]
            },
        ]
    },
    {
        title: 'Full-Stack Web Developer',
        description: 'Build complete web applications from the user interface to the server-side logic and database.',
        icon: WebDevIcon,
        chapters: [
            {
                title: 'Web Development Foundations',
                lessons: [
                    { title: 'How Websites Work', analogy: 'Digital Storefronts' },
                    { title: 'Frontend vs Backend', analogy: 'The Restaurant Analogy' },
                    { title: 'Client-Server Architecture', analogy: 'Ordering Food Delivery' },
                ]
            },
            {
                title: 'HTML - The Structure',
                lessons: [
                    { title: 'HTML Basics', analogy: 'Building Blocks of Web Pages' },
                    { title: 'Document Structure', analogy: 'The Skeleton' },
                    { title: 'Forms and Input', analogy: 'Gathering User Data' },
                ]
            }
        ]
    },
    {
        title: 'Programming Languages',
        description: 'Understand software\'s building blocks. Learn popular languages through simple, real-world analogies.',
        icon: WebDevIcon,
        chapters: [
            {
                title: 'Intro to Programming Concepts',
                lessons: [
                    { title: 'What is Programming?', analogy: 'Giving Instructions to a Robot Chef' },
                    { title: 'Variables', analogy: 'Labeled Jars in a Kitchen' },
                    { title: 'Functions', analogy: 'A Reusable Recipe Card' },
                    { title: 'Loops', analogy: 'Washing Dishes Until the Sink is Empty' },
                    { title: 'Conditionals (If/Else)', analogy: 'Choosing an Outfit Based on the Weather' },
                    { title: 'APIs', analogy: 'A Restaurant Menu for Software' },
                    { title: 'Algorithms', analogy: 'A Step-by-Step Recipe to Bake a Cake' }
                ]
            },
            {
                title: 'Python - The Swiss Army Knife',
                lessons: [
                    { title: 'What is Python?', analogy: 'A Versatile, All-in-One Tool' },
                    { title: 'Why is Python so Popular?', analogy: 'Speaking Plain English to a Computer' },
                    { title: 'What Can You Build with Python?', analogy: 'From Automating Chores to Building a Brain' },
                ]
            },
            {
                title: 'JavaScript - The Language of the Web',
                lessons: [
                    { title: 'What is JavaScript?', analogy: 'Bringing a Painting to Life' },
                    { title: 'How does JS work in a browser?', analogy: 'The Director of a Play on Stage' },
                    { title: 'What Can You Build with JS?', analogy: 'Interactive Websites, Games, and Mobile Apps' },
                ]
            },
            {
                title: 'C++ - The Performance Beast',
                lessons: [
                    { title: 'What is C++?', analogy: 'Building a High-Performance Race Car Engine' },
                    { title: 'Why is C++ so Fast?', analogy: 'Speaking the Computer\'s Native Language' },
                    { title: 'What is Built with C++?', analogy: 'Complex Video Games and Operating Systems' },
                ]
            },
            {
                title: 'C - The Foundation',
                lessons: [
                    { title: 'What is C?', analogy: 'The Bedrock Foundation of a Skyscraper' },
                    { title: 'Why Learn C Today?', analogy: 'Understanding How Everything is Built' },
                    { title: 'Where is C Used?', analogy: 'In Your Car, TV, and other devices' },
                ]
            },
            {
                title: 'Java - The Corporate Workhorse',
                lessons: [
                    { title: 'What is Java?', analogy: 'Building with Universal LEGO Bricks' },
                    { title: 'Write Once, Run Anywhere', analogy: 'A Universal Adapter for Your Electronics' },
                    { title: 'What is Built with Java?', analogy: 'Large-Scale Corporate Systems & Android Apps' },
                ]
            },
            {
                title: 'SQL - The Data Interrogator',
                lessons: [
                    { title: 'What is SQL?', analogy: 'Asking a Librarian to Find Specific Books' },
                    { title: 'How does SQL work?', analogy: 'Filling out a very specific request form' },
                    { title: 'Why is SQL essential?', analogy: 'Every Digital Service Needs a Library' },
                ]
            }
        ]
    },
    {
        title: 'Data Scientist',
        description: 'Turn raw data into meaningful insights and predictions that drive business decisions.',
        icon: DataScienceIcon,
        chapters: [
            {
                title: 'Introduction to Data Science',
                lessons: [
                    { title: 'What is Data Science?', analogy: 'Detective Work with Numbers' },
                    { title: 'Data Science Lifecycle', analogy: 'From Question to Answer' },
                ]
            }
        ]
    },
    {
        title: 'Cybersecurity Specialist',
        description: 'Protect digital systems and networks from cyber threats and security breaches.',
        icon: SecurityIcon,
        chapters: [
            {
                title: 'Cybersecurity Fundamentals',
                lessons: [
                    { title: 'What is Cybersecurity?', analogy: 'Digital Bodyguards' },
                    { title: 'CIA Triad', analogy: 'Confidentiality, Integrity, Availability' },
                ]
            }
        ]
    },
    {
        title: 'Cloud Solutions Architect',
        description: 'Design and deploy scalable, secure, and robust applications on cloud platforms.',
        icon: CloudIcon,
        chapters: [
            {
                title: 'Cloud Computing Fundamentals',
                lessons: [
                    { title: 'What is Cloud Computing?', analogy: 'Renting vs Owning' },
                    { title: 'Cloud Service Models', analogy: 'IaaS, PaaS, SaaS' },
                ]
            }
        ]
    },
    {
        title: 'Mobile App Developer',
        description: 'Create applications for iOS and Android devices, reaching users on the go.',
        icon: MobileIcon,
        chapters: [
            {
                title: 'Mobile Development Fundamentals',
                lessons: [
                    { title: 'Mobile vs Desktop Development', analogy: 'Different Playgrounds' },
                    { title: 'Native vs Cross-platform', analogy: 'Speaking Local vs Universal' },
                ]
            }
        ]
    },
    {
        title: 'DevOps Engineer',
        description: 'Bridge the gap between development and operations to automate and streamline software delivery.',
        icon: DevOpsIcon,
        chapters: [
            {
                title: 'DevOps Fundamentals',
                lessons: [
                    { title: 'What is DevOps?', analogy: 'Breaking Down Walls' },
                    { title: 'Continuous Integration', analogy: 'Regular Check-ins' },
                ]
            }
        ]
    },
    {
        title: 'UI/UX Designer',
        description: 'Craft intuitive and beautiful user interfaces that provide a seamless user experience.',
        icon: DesignIcon,
        chapters: [
            {
                title: 'Design Fundamentals',
                lessons: [
                    { title: 'What is UI/UX Design?', analogy: 'Making Things Beautiful and Useful' },
                    { title: 'User-Centered Design', analogy: 'Putting Users First' },
                ]
            }
        ]
    },
    {
        title: 'Blockchain Developer',
        description: 'Build decentralized applications and smart contracts on blockchain technology.',
        icon: BlockchainIcon,
        chapters: [
            {
                title: 'Blockchain Fundamentals',
                lessons: [
                    { title: 'What is Blockchain?', analogy: 'Digital Ledger Book' },
                    { title: 'How Blockchain Works', analogy: 'Chain of Trust' },
                ]
            }
        ]
    },
    {
        title: 'Product Manager (Tech)',
        description: 'Lead the product lifecycle from conception to launch, defining the why, what, and when.',
        icon: ProductManagerIcon,
        chapters: [
            {
                title: 'Product Management Fundamentals',
                lessons: [
                    { title: 'What is Product Management?', analogy: 'The Orchestra Conductor' },
                    { title: 'Product Lifecycle', analogy: 'Birth to Retirement' },
                ]
            }
        ]
    }
];
