
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

export interface Volunteer {
  id: string;
  name: string;
  role: string;
  imageUrl: string;
  imageHint: string;
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
export interface Faq {
  question: string;
  answer: string;
}

const events: Event[] = [
    {
        id: '11',
        title: 'Navigating Your Career as a Techy',
        date: '2024-01-27',
        time: 'Not specified',
        location: 'Virtual',
        shortDescription: 'Insights on navigating a career in tech from industry experts.',
        description: 'A huge shoutout to our amazing speakers, Onone Ega, Oyebamiji Jeremiah, Mary Onuorah, and Godswill Ejike, for illuminating the path to success in the tech world at our recent event! Your insights on "Navigating Your Career as a Techy" were truly inspiring.',
        imageUrl: 'https://res.cloudinary.com/dedjhsw2k/image/upload/v1758884131/tech_event_1_py9sni.jpg',
        imageHint: 'tech career event',
        speakers: [
            { name: 'Onone Ega', title: 'IT Project Manager & Scrum Master', imageUrl: 'https://picsum.photos/seed/speaker4/100/100', imageHint: 'woman professional' },
            { name: 'Godswill Ejike', title: 'Lead Product Designer', imageUrl: 'https://picsum.photos/seed/speaker5/100/100', imageHint: 'man designer' },
            { name: 'Mary Onuorah', title: 'Software Quality Assurance (QA)', imageUrl: 'https://picsum.photos/seed/speaker6/100/100', imageHint: 'woman qa' },
            { name: 'Oyebamiji Jeremiah', title: 'Snr. Software Engineer', imageUrl: 'https://picsum.photos/seed/speaker7/100/100', imageHint: 'man engineer' }
        ],
        resources: 'N/A'
    },
    {
        id: '8',
        title: 'Calabar Tech Community Hangout',
        date: '2024-07-20',
        time: '3:00 PM',
        location: 'Lions Park, Marian Rd by Ekong Etta Traffic Light',
        shortDescription: 'A community hangout at Lions Park to connect and have fun.',
        description: 'It’s all going down at the Calabar Tech Community Hangout! Bring your A-game. See you soon!',
        imageUrl: 'https://res.cloudinary.com/dedjhsw2k/image/upload/v1757938742/481986853_595576653317630_7237548188180696827_n_m7ra3l.jpg',
        imageHint: 'community hangout',
        speakers: [],
        resources: 'N/A'
    },
    {
        id: '9',
        title: 'Calabar Tech Community Pizza Hangout 3.0',
        date: '2023-12-30',
        time: 'Not specified',
        location: 'Deluxe bar Atekong junction Marian',
        shortDescription: 'Not just a regular hangout, this one is coming with so many vibes and varieties, Games, and lots more.',
        description: 'It\'s "Calabar Tech Community" Pizza Hangout 3.0. This is not your regular hangout, This one is coming with so many vibes and varieties, Games, and lots more. You wouldn\'t want to miss it. Share to invite those already in Tech and those who are interested in building a Career in Tech. We look forward to having you there.',
        imageUrl: 'https://res.cloudinary.com/dedjhsw2k/image/upload/v1757938742/480349656_584475874427708_2364846479836564905_n_ciuufx.jpg',
        imageHint: 'pizza hangout',
        speakers: [],
        resources: 'Registration Link: https://bit.ly/cal_tech_hangout'
    },
    {
        id: '10',
        title: 'CRACKING THE CODE: A Roadmap To Success In Tech Interview Process',
        date: '2024-04-27',
        time: '9:00 AM',
        location: 'Virtual',
        shortDescription: 'Discover insider tips and strategies to ace your next tech interview.',
        description: 'Join us for "CRACKING THE CODE: A Roadmap To Success In Tech Interview Process" hosted by Calabar Tech Community. Discover insider tips and strategies from professional HR, Eva Ebuzoeme to ace your next tech interview. From resume crafting to interview etiquette, unlock the secrets to landing your dream job in tech. This event promises invaluable insights and networking opportunities.',
        imageUrl: 'https://res.cloudinary.com/dedjhsw2k/image/upload/v1757938741/482210798_621941777352465_418539730082261152_n_kt4xpc.jpg',
        imageHint: 'tech interview',
        speakers: [
            { name: 'Eva Ebuzoeme', title: 'Professional HR', imageUrl: 'https://picsum.photos/seed/speaker3/100/100', imageHint: 'woman professional' },
            { name: 'Amani Kanu', title: 'Senior Software Engineer and Program Manager', imageUrl: 'https://res.cloudinary.com/sirsuccess/image/upload/v1755979859/IMG-20250616-WA0039_1_u9c4ta.jpg', imageHint: 'man professional' }
        ],
        resources: 'Register at: https://bit.ly/ctc_interview'
    },
    {
        id: 'tech-conference-calabar',
        title: 'The Tech Conference Calabar',
        date: '2025-11-28',
        time: '9:00 AM',
        location: 'Calabar International Convention Centre',
        shortDescription: 'The biggest tech conference in Calabar, bringing together the brightest minds in technology.',
        description: 'Join us for the largest gathering of tech talent in Calabar. "The Tech Conference Calabar" will feature keynote speeches from industry leaders, hands-on workshops, and networking opportunities. Whether you are a seasoned professional or just starting, this is an event you cannot miss.',
        imageUrl: 'https://res.cloudinary.com/sirsuccess/image/upload/v1759598949/1003150400_zk97b3.png',
        imageHint: 'tech conference audience',
        speakers: [],
        resources: 'Official event website: https://calabartechconf.ng'
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
        imageUrl: 'https://res.cloudinary.com/sirsuccess/image/upload/v1755979859/IMG-20250616-WA0039_1_u9c4ta.jpg',
        imageHint: 'man founder portrait',
        bio: 'Amani Kanu is a Senior Software Engineer, Developer Relations (DevRel) professional, and the Founder of Calabar Tech Community. With over half a decade of experience, he has developed scalable web applications for both global and local clients while mentoring aspiring technologists through Semicolon Africa, Decagon, and FootPrint Mentorship—a platform he established to help job seekers navigate their career journeys, secure opportunities, and position themselves as top candidates.\n\nA passionate community builder and tech evangelist, Amani has made significant contributions to the African tech ecosystem by fostering innovation, collaboration, and career growth. His work continues to empower individuals and organizations while inspiring the next generation of technology leaders.',
        social: {
             linkedin: 'https://www.linkedin.com/in/amani-kanu/',
            twitter: 'https://twitter.com/AmaniKanu',
            github: 'https://github.com/AmaniKanu'
        }
    },
    {
        id: '8',
        name: 'Florence Arong',
        role: 'Co-founder',
        imageUrl: 'https://res.cloudinary.com/sirsuccess/image/upload/v1757839614/florence_aa8cyo.jpg',
        imageHint: 'woman professional',
        bio: 'Florence Egwu is a software engineer with half a decade of experience spanning fintech and healthtech. She is the co-founder of the Calabar Tech Community, where she drives initiatives that foster innovation, collaboration, and talent development. As a Backend Engineer, she builds scalable distributed systems with modern technologies, and is passionate about knowledge sharing, mentorship, and community building. Florence is committed to advancing Calabar’s position as a growing hub for tech and innovation.',
        social: {
            linkedin: 'https://www.linkedin.com/in/florencesarah-arong-egwu',
            twitter: '#',
        }
    },
    {
        id: '9',
        name: 'Grace Effiong',
        role: 'Co-founder & Frontend Engineer',
        imageUrl: 'https://res.cloudinary.com/sirsuccess/image/upload/v1757839681/grace_nqxvpr.jpg',
        imageHint: 'woman engineer',
        bio: 'Grace Effiong is a frontend engineer who possesses a strong interest in fostering the growth of individuals in the technology sector. With over five years of experience, she has gained expertise in developing user-friendly and responsive web interfaces utilizing React.js and Next.js frameworks. Grace is well-versed in frontend technologies, and is passionate about assisting novices in the tech industry by monitoring their progress. Her commitment to mentoring and guiding beginners has the potential to shape their professional journeys and promote the development of a more diverse and inclusive tech community.',
        social: {
            linkedin: 'https://www.linkedin.com/in/grace-effiong/',
            twitter: 'https://twitter.com/Grace_ffiong',
        }
    },
    {
        id: '10',
        name: 'Bassey Archibong',
        role: 'Co-founder & Product Manager',
        imageUrl: 'https://res.cloudinary.com/sirsuccess/image/upload/v1757839613/bassey_ykmymm.jpg',
        imageHint: 'man manager portrait',
        bio: 'Bassey Archibong is an experienced product manager with in-depth knowledge of the startup industry in Nigeria and a talent for innovative thinking. He continually challenges the status quo and seeks out new opportunities to excel. Bassey demonstrates excellence in launching cutting-edge products, mentoring emerging talent, and collaborating with cross-functional teams. However, his interests extend beyond business, as he is also dedicated to empowering the youth of Calabar by assisting them in securing gainful employment in the technology field. With his sharp wit and dynamic energy, Bassey is well-equipped to help individuals achieve their career goals, while simultaneously making the process enjoyable, competitive, and thrilling.',
        social: {
            linkedin: 'https://www.linkedin.com/in/basseyarchibong/',
            twitter: '#',
        }
    }
];

const volunteers: Volunteer[] = [
  {
    id: '1',
    name: 'Churchill Nnanna',
    role: 'Front-end Developer',
    imageUrl: 'https://res.cloudinary.com/dedjhsw2k/image/upload/v1757943229/Churchill-nnanna_-_Churchill_Nnanna_mzxumw.png',
    imageHint: 'man developer portrait',
  }
];

const programs: Program[] = [
  {
    id: '1',
    title: 'Tech School Storm',
    description: 'The Tech School Storm is our flagship initiative to introduce young students in Calabar to the world of technology. We visit secondary schools to inspire, educate, and ignite a passion for tech in the next generation.',
    imageUrl: 'https://res.cloudinary.com/sirsuccess/image/upload/v1757839977/m_100_1_zz5rfb.jpg',
    imageHint: 'students classroom',
    details: {
      schools: ['NYSC Demonstration Secondary School', 'Estate Model High School'],
      goal: 'To ignite a passion for technology in young students and expose them to career opportunities in the tech industry.',
      hasVideo: true,
      videoUrl: 'https://www.instagram.com/reel/DNTtbYmIwa1/?utm_source=ig_web_copy_link'
    }
  }
];

const faqs: Faq[] = [
  {
    question: 'What is the Calabar Tech Community?',
    answer: 'The Calabar Tech Community is a group of individuals and organizations in Calabar, Nigeria who are passionate about technology and its potential to transform society. The community provides a platform for tech enthusiasts, entrepreneurs, developers, and investors to connect, share ideas, and collaborate on projects.',
  },
  {
    question: 'Who can join the Calabar Tech Community?',
    answer: 'Anyone who is interested in technology and innovation can join the Calabar Tech Community. This includes tech enthusiasts, entrepreneurs, developers, investors, and students.',
  },
  {
    question: 'How do I join the Calabar Tech Community?',
    answer: 'You can join the Calabar Tech Community by visiting their website or social media pages, and following the instructions to become a member. You may be required to fill out a membership form or attend a community event to become a member.',
  },
  {
    question: 'What are the benefits of joining the Calabar Tech Community?',
    answer: 'By joining the Calabar Tech Community, you will have the opportunity to network with like-minded individuals, attend events and workshops, learn new skills, collaborate on projects, and stay up-to-date with the latest trends and developments in the tech industry.',
  },
  {
    question: 'What kind of events does the Calabar Tech Community organize?',
    answer: 'The Calabar Tech Community organizes a variety of events, including hackathons, workshops, meetups, and conferences. These events cover topics such as programming, entrepreneurship, data science, artificial intelligence, and blockchain.',
  },
  {
    question: 'How can I get involved in organizing events for the Calabar Tech Community?',
    answer: 'If you are interested in organizing events for the Calabar Tech Community, you can reach out to the community leaders or attend a community meeting to express your interest. The community is always looking for enthusiastic and dedicated individuals to help organize events and activities.',
  },
  {
    question: 'Is the Calabar Tech Community only for tech professionals?',
    answer: 'No, the Calabar Tech Community is open to anyone who is interested in technology and innovation. Whether you are a student, a professional in a non-tech field, or simply someone who is passionate about technology, you are welcome to join the community.',
  },
  {
    question: 'Does the Calabar Tech Community offer any training or mentorship programs?',
    answer: 'Yes, the Calabar Tech Community offers training and mentorship programs for its members. These programs are designed to help members develop their skills, learn new technologies, and advance their careers in the tech industry.',
  },
  {
    question: 'How can I stay updated on the activities of the Calabar Tech Community?',
    answer: 'You can stay updated on the activities of the Calabar Tech Community by following their social media pages, subscribing to their newsletter, attending community events, or joining their online discussion forums.',
  },
];


export function getEvents(): Event[] {
    return events.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
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

export function getVolunteers(): Volunteer[] {
    return volunteers;
}

export function getPrograms(): Program[] {
    return programs;
}

export function getFaqs(): Faq[] {
  return faqs;
}
