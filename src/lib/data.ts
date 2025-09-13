
export interface Speaker {
    name: string;
    title: string;
    imageUrl: string;
    imageHint: string;
}

export interface Event {
    id: string;
    title: string;
    date: string;
    time: string;
    location: string;
    description: string;
    shortDescription: string;
    imageUrl: string;
    imageHint: string;
    speakers: Speaker[];
    resources: string;
}

export interface Project {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    imageHint: string;
    team: string[];
    repoUrl?: string;
}

export interface TeamMember {
    id: string;
    name: string;
    role: string;
    imageUrl: string;
    imageHint: string;
    bio: string;
    social: {
        twitter?: string;
        linkedin?: string;
        github?: string;
    };
}

export interface Program {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageHint: string;
  details: {
    schools: string[];
    goal: string;
    hasVideo: boolean;
  };
}

const events: Event[] = [
    {
        id: '1',
        title: 'Introduction to Generative AI',
        date: '2024-08-15',
        time: '6:00 PM - 8:00 PM',
        location: 'Co-Creation Hub, Calabar',
        shortDescription: 'Discover the fundamentals of Generative AI and how it\'s shaping the future of technology.',
        description: 'Join us for an exciting evening as we dive into the world of Generative AI. This session will cover the basic concepts, popular models like GPT and DALL-E, and practical applications. Whether you\'re a developer, a designer, or just curious about AI, this event is for you. We will explore how to integrate AI into your projects and the ethical considerations involved.',
        imageUrl: 'https://picsum.photos/seed/event1/600/400',
        imageHint: 'tech conference',
        speakers: [
            { name: 'Dr. Anya Okoro', title: 'AI Researcher', imageUrl: 'https://picsum.photos/seed/speaker1/100/100', imageHint: 'man professional' }
        ],
        resources: 'Slides from the presentation, a list of curated articles on Generative AI, and links to open-source models will be provided to all attendees.'
    },
    {
        id: '2',
        title: 'Building Modern Web Apps with Next.js & Firebase',
        date: '2024-09-05',
        time: '10:00 AM - 4:00 PM',
        location: 'Online Workshop',
        shortDescription: 'A hands-on workshop on building fast, scalable web applications with Next.js and Firebase.',
        description: 'This full-day workshop will guide you through building a complete web application from scratch using Next.js. We will cover file-based routing, server components, data fetching strategies, and deployment on Vercel. Participants should have a basic understanding of React and JavaScript. Bring your laptops for a hands-on coding session!',
        imageUrl: 'https://picsum.photos/seed/event2/600/400',
        imageHint: 'workshop collaboration',
        speakers: [
            { name: 'Funke Adebayo', title: 'Senior Frontend Engineer', imageUrl: 'https://picsum.photos/seed/speaker2/100/100', imageHint: 'woman developer' }
        ],
        resources: 'Starter code repository, a cheat sheet of Next.js features, and a guide to deploying on Vercel.'
    },
    {
        id: '3',
        title: 'Tech Community Networking Night',
        date: '2024-09-20',
        time: '7:00 PM - 9:00 PM',
        location: 'The Tech Garden, Calabar',
        shortDescription: 'Meet and connect with fellow tech enthusiasts, developers, and entrepreneurs in Calabar.',
        description: 'Our monthly networking event is back! It\'s a great opportunity to relax, share ideas, and make valuable connections within the Calabar tech ecosystem. Light refreshments will be served. Don\'t forget to bring your business cards and your best elevator pitch!',
        imageUrl: 'https://picsum.photos/seed/event3/600/400',
        imageHint: 'tech meetup',
        speakers: [],
        resources: 'N/A'
    },
     {
        id: '4',
        title: 'Annual Hackathon: Solving Local Challenges',
        date: '2024-10-18',
        time: '6:00 PM Fri - 6:00 PM Sun',
        location: 'University of Calabar',
        shortDescription: 'A 48-hour coding marathon to build solutions for problems facing our local community.',
        description: 'The Calabar Tech Community Annual Hackathon is here! Form a team, pick a challenge, and build an innovative solution in just 48 hours. We have tracks for education, healthcare, and environmental sustainability. Prizes will be awarded to the top three teams. Mentors from leading tech companies will be available to guide you. Food, drinks, and plenty of coffee will be provided.',
        imageUrl: 'https://picsum.photos/seed/event4/600/400',
        imageHint: 'hackathon code',
        speakers: [],
        resources: 'Challenge statements, access to sponsor APIs, and mentorship session schedules.'
    }
];

const projects: Project[] = [
    {
        id: '1',
        title: 'Calabar Tour Guide App',
        description: 'A mobile application that helps tourists and residents discover the best spots in Calabar, from historical sites to local restaurants. Features user reviews and offline maps.',
        imageUrl: 'https://picsum.photos/seed/project1/600/400',
        imageHint: 'mobile app',
        team: ['Jane Doe', 'John Smith'],
        repoUrl: 'https://github.com/example/tour-guide'
    },
    {
        id: '2',
        title: 'Waste Management Analytics',
        description: 'A web-based platform that visualizes waste collection data across the city, helping to optimize routes and improve efficiency for waste management services.',
        imageUrl: 'https://picsum.photos/seed/project2/600/400',
        imageHint: 'dashboard analytics',
        team: ['Peter Jones', 'Mary Johnson'],
        repoUrl: 'https://github.com/example/waste-dashboard'
    },
    {
        id: '3',
        title: 'Artisan Marketplace',
        description: 'An e-commerce website connecting local artisans in Calabar with a global audience, allowing them to sell their handmade crafts and products online.',
        imageUrl: 'https://picsum.photos/seed/project3/600/400',
        imageHint: 'ecommerce website',
        team: ['Chris Green', 'Patricia White'],
    },
     {
        id: '4',
        title: 'E-Learning Platform',
        description: 'An accessible online learning platform offering courses on digital skills, tailored for the youth in our community. Includes video tutorials and quizzes.',
        imageUrl: 'https://picsum.photos/seed/project4/600/400',
        imageHint: 'online learning',
        team: ['Mike Adenuga', 'Fatima Bello'],
        repoUrl: 'https://github.com/example/elearning'
    },
    {
        id: '5',
        title: 'Community Health Connect',
        description: 'A mobile app that connects individuals with local health services and provides reliable health information and emergency contacts.',
        imageUrl: 'https://picsum.photos/seed/project5/600/400',
        imageHint: 'health app',
        team: ['David Okon', 'Grace Bassey'],
    },
     {
        id: '6',
        title: 'Local Farm Produce Directory',
        description: 'A simple web directory that lists local farms and their produce, helping consumers buy fresh, locally-sourced food directly from farmers.',
        imageUrl: 'https://picsum.photos/seed/project6/600/400',
        imageHint: 'local food',
        team: ['Samuel Etta', 'Amina Yusuf'],
        repoUrl: 'https://github.com/example/farm-directory'
    }
];

const teamMembers: TeamMember[] = [
    {
        id: '7',
        name: 'Amani Kanu',
        role: 'Founder',
        imageUrl: 'https://picsum.photos/seed/team7/400/400',
        imageHint: 'man founder portrait',
        bio: 'Amani Kanu is an accomplished software engineer with over four years of experience developing robust web applications for both domestic and international clients. He is also the founder of the Calabar Tech Community, which has played a pivotal role in providing access to technical skills and employment opportunities for numerous tech enthusiasts. As a skilled community builder, Amani has demonstrated exceptional proficiency in fostering strong relationships within the tech industry. Moreover, he has devoted his time to mentoring aspiring technologists, offering guidance and assistance in navigating their career paths. Overall, Amani\'s contributions to the tech community have been highly valuable, and he is widely regarded as a respected figure in the field.',
        social: {
            linkedin: 'https://www.linkedin.com/in/amani-kanu/',
            twitter: '#',
            github: '#'
        }
    },
    {
        id: '1',
        name: 'Amina Yusuf',
        role: 'Community Lead',
        imageUrl: 'https://picsum.photos/seed/team1/400/400',
        imageHint: 'woman portrait',
        bio: 'Amina is a passionate software engineer and community builder. She co-founded Calabar Tech Community to create a space for tech enthusiasts to learn and grow together.',
        social: {
            twitter: '#',
            linkedin: '#',
            github: '#'
        }
    },
    {
        id: '2',
        name: 'Chinedu Eze',
        role: 'Head of Projects',
        imageUrl: 'https://picsum.photos/seed/team2/400/400',
        imageHint: 'man portrait',
        bio: 'A product designer with a knack for turning ideas into beautiful and functional products. Chinedu leads our community project initiatives.',
        social: {
            twitter: '#',
            linkedin: '#',
        }
    },
    {
        id: '3',
        name: 'Blessing Adebayo',
        role: 'Events Coordinator',
        imageUrl: 'https://picsum.photos/seed/team3/400/400',
        imageHint: 'person smiling',
        bio: 'Blessing is the organizational powerhouse behind all our events. She ensures every meetup, workshop, and hackathon runs smoothly.',
        social: {
            twitter: '#',
            linkedin: '#',
        }
    },
    {
        id: '4',
        name: 'David Okon',
        role: 'Lead Mentor',
        imageUrl: 'https://picsum.photos/seed/team4/400/400',
        imageHint: 'professional portrait',
        bio: 'David is a senior data scientist with years of industry experience. He is dedicated to mentoring the next generation of tech talent in Calabar.',
        social: {
            linkedin: '#',
            github: '#'
        }
    },
     {
        id: '5',
        name: 'Grace Bassey',
        role: 'Frontend Developer & Instructor',
        imageUrl: 'https://picsum.photos/seed/team5/400/400',
        imageHint: 'developer portrait',
        bio: 'Grace is a frontend wizard who loves sharing her knowledge. She frequently leads our web development workshops.',
        social: {
            twitter: '#',
            github: '#'
        }
    },
     {
        id: '6',
        name: 'Samuel Etta',
        role: 'UX Researcher',
        imageUrl: 'https://picsum.photos/seed/team6/400/400',
        imageHint: 'man professional',
        bio: 'Samuel helps our project teams understand user needs and build products that people love to use.',
        social: {
            linkedin: '#',
        }
    }
];

const programs: Program[] = [
  {
    id: '1',
    title: 'Tech School Storm',
    description: 'The Tech School Storm is our flagship initiative to introduce young students in Calabar to the world of technology. We visit secondary schools to inspire, educate, and ignite a passion for tech in the next generation.',
    imageUrl: 'https://picsum.photos/seed/program1/600/400',
    imageHint: 'students classroom',
    details: {
      schools: ['NYSC Demonstration Secondary School', 'Estate Model High School'],
      goal: 'To ignite a passion for technology in young students and expose them to career opportunities in the tech industry.',
      hasVideo: true,
    }
  }
];

export function getEvents(): Event[] {
    return events;
}

export function getEventById(id: string): Event | undefined {
    return events.find(event => event.id === id);
}

export function getProjects(): Project[] {
    return projects;
}

export function getTeamMembers(): TeamMember[] {
    return teamMembers;
}

export function getPrograms(): Program[] {
    return programs;
}
