
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
    videoUrl?: string;
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
    },
    {
        id: '5',
        title: 'End of Year Community Hangout',
        date: '2023-12-30',
        time: '4:00 PM - 7:00 PM',
        location: 'Marina Resort, Calabar',
        shortDescription: 'Our third physical hangout to celebrate the year\'s achievements and network.',
        description: 'Join us for our end-of-year celebration! This was a fantastic opportunity to connect with community members, reflect on our progress in 2023, and look forward to the year ahead. The event featured games, music, and great conversations.',
        imageUrl: 'https://picsum.photos/seed/event5/600/400',
        imageHint: 'community celebration',
        speakers: [],
        resources: 'Year-in-review presentation slides.'
    },
    {
        id: '6',
        title: 'Second Physical Hangout',
        date: '2022-12-21',
        time: '5:00 PM - 7:00 PM',
        location: 'The Playground, Calabar',
        shortDescription: 'Our second gathering to foster connections and collaborations within the community.',
        description: 'Building on the success of our first hangout, this event brought together even more members of the Calabar tech scene. It was an evening of networking, sharing project ideas, and strengthening the bonds of our growing community.',
        imageUrl: 'https://picsum.photos/seed/event6/600/400',
        imageHint: 'people networking',
        speakers: [],
        resources: 'N/A'
    },
    {
        id: '7',
        title: 'First Community Physical Hangout',
        date: '2022-10-21',
        time: '5:00 PM - 7:00 PM',
        location: 'The Meeting Point, Calabar',
        shortDescription: 'The very first physical meetup of the Calabar Tech Community.',
        description: 'A milestone event where our community moved from online interactions to face-to-face connections. This first hangout marked the beginning of a vibrant series of in-person events, laying the foundation for the strong, collaborative community we have today.',
        imageUrl: 'https://picsum.photos/seed/event7/600/400',
        imageHint: 'first meetup',
        speakers: [],
        resources: 'N/A'
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
        imageUrl: 'https://res.cloudinary.com/sirsuccess/image/upload/v1755992720/DSC_1520e_1_xzvgrs.jpg',
        imageHint: 'man founder portrait',
        bio: 'Amani Kanu is a Senior Software Engineer, Developer Relations (DevRel) professional, and the Founder of Calabar Tech Community. With over half a decade of experience, he has developed scalable web applications for both global and local clients while mentoring aspiring technologists through Semicolon Africa, Decagon, and FootPrint Mentorship—a platform he established to help job seekers navigate their career journeys, secure opportunities, and position themselves as top candidates.\n\nA passionate community builder and tech evangelist, Amani has made significant contributions to the African tech ecosystem by fostering innovation, collaboration, and career growth. His work continues to empower individuals and organizations while inspiring the next generation of technology leaders.',
        social: {
            linkedin: 'https://www.linkedin.com/in/amani-kanu/',
            twitter: 'https://twitter.com/AmaniKanu',
            github: '#'
        }
    },
    {
        id: '8',
        name: 'Florence Arong',
        role: 'Co-founder',
        imageUrl: 'https://picsum.photos/seed/team8/400/400',
        imageHint: 'woman professional',
        bio: 'I had always aspired to learn how to code, but had struggled to find the right resources to advance my career until I was introduced to the Calabar Tech Community. Since then, I have been fortunate to benefit from the wealth of knowledge within the community.',
        social: {
            linkedin: 'https://www.linkedin.com/in/florencesarah-arong-egwu',
            twitter: '#',
        }
    },
    {
        id: '9',
        name: 'Grace Effiong',
        role: 'Co-founder & Frontend Engineer',
        imageUrl: 'https://picsum.photos/seed/team9/400/400',
        imageHint: 'woman engineer',
        bio: 'Grace Effiong is a frontend engineer who possesses a strong interest in fostering the growth of individuals in the technology sector. With over three years of experience, she has gained expertise in developing user-friendly and responsive web interfaces utilizing React.js and Next.js frameworks. Grace is well-versed in frontend technologies, and is passionate about assisting novices in the tech industry by monitoring their progress. Her commitment to mentoring and guiding beginners has the potential to shape their professional journeys and promote the development of a more diverse and inclusive tech community.',
        social: {
            linkedin: 'https://www.linkedin.com/in/grace-effiong/',
            github: '#',
            twitter: 'https://twitter.com/Grace_ffiong'
        }
    },
    {
        id: '10',
        name: 'Bassey Archibong',
        role: 'Co-founder & Product Manager',
        imageUrl: 'https://picsum.photos/seed/team10/400/400',
        imageHint: 'man manager portrait',
        bio: 'Bassey Archibong is an experienced product manager with in-depth knowledge of the startup industry in Nigeria and a talent for innovative thinking. He continually challenges the status quo and seeks out new opportunities to excel. Bassey demonstrates excellence in launching cutting-edge products, mentoring emerging talent, and collaborating with cross-functional teams. However, his interests extend beyond business, as he is also dedicated to empowering the youth of Calabar by assisting them in securing gainful employment in the technology field. With his sharp wit and dynamic energy, Bassey is well-equipped to help individuals achieve their career goals, while simultaneously making the process enjoyable, competitive, and thrilling.',
        social: {
            twitter: '#',
            linkedin: 'https://www.linkedin.com/in/bassey-m-archibong',
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
      videoUrl: 'https://www.instagram.com/reel/DNTtbYmIwa1/?utm_source=ig_web_copy_link'
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
