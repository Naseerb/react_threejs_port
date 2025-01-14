export const navLinks = [
    {
        id: 1,
        name: 'Home',
        href: '#home',
    },
    {
        id: 2,
        name: 'About',
        href: '#about',
    },
    {
        id: 3,
        name: 'Work',
        href: '#projects',
    },
    {
        id: 4,
        name: 'Contact',
        href: '#contact',
    },
];

export const clientReviews = [
    {
        id: 1,
        name: 'Emily Johnson',
        position: 'Marketing Director at GreenLeaf',
        img: 'assets/review1.png',
        review:
            'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
    },
    {
        id: 2,
        name: 'Mark Rogers',
        position: 'Founder of TechGear Shop',
        img: 'assets/review2.png',
        review:
            'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
    },
    {
        id: 3,
        name: 'John Dohsas',
        position: 'Project Manager at UrbanTech ',
        img: 'assets/review3.png',
        review:
            'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
    },
    {
        id: 4,
        name: 'Ether Smith',
        position: 'CEO of BrightStar Enterprises',
        img: 'assets/review4.png',
        review:
            'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
    },
];

export const myProjects = [
    {
        title: 'D3 Github API Dashboard',
        desc: 'This project visualises JavaScript repositories on GitHub, using the D3.js library for dynamic and interactive data representation. By leveraging the GitHub API, the application retrieves repository data, including star counts and licences. The bar chart displays repositories sorted by star count, while a filter section enables users to toggle between different licences for more focused exploration. The interface provides an engaging and customisable way to analyse popular repositories and their associated licences.',
        subdesc:
            'The project was built using D3.js for data visualisation, the GitHub API for fetching repository data, JavaScript for logic and interactivity, and HTML/CSS for structuring and styling the user interface.',
        href: 'https://ngb-d3.netlify.app/',
        texture: '/textures/project/D3_Github_API.mp4',
        logo: '/assets/project-logo1.png',
        logoStyle: {
            backgroundColor: '#2A1816',
            border: '0.2px solid #36201D',
            boxShadow: '0px 0px 60px 0px #AA3C304D',
        },
        spotlight: '/assets/spotlight1.png',
        tags: [
            {
                id: 1,
                name: 'HTML',
                path: '/assets/HTML5.svg.png',
            },
            {
                id: 2,
                name: 'CSS',
                path: 'assets/CSS.svg.png',
            },
            {
                id: 3,
                name: 'JavaScript',
                path: '/assets/js.png',
            },
            {
                id: 4,
                name: 'D3.js',
                path: '/assets/d3.png',
            },
        ],
    },
    {
        title: 'D3 Character Frequency Chart',
        desc: 'This project utilises D3.js to create a dynamic bar chart that visually represents the frequency of characters entered into a text input field. As the user types, the chart updates in real time, displaying the count of each character, including spaces, with distinct colours for clarity. This interactive visualisation highlights how data can be processed and represented dynamically using D3.js.',
        subdesc:
            'The project was built using D3.js for real-time data visualisation, JavaScript for dynamic updates and interactivity, and HTML/CSS for structuring and styling the interface',
        href: 'https://ngb-d3-chart.netlify.app/',
        texture: '/textures/project/D3_bar_chart.mp4',
        logo: '/assets/project-logo1.png',
        logoStyle: {
            backgroundColor: '#13202F',
            border: '0.2px solid #17293E',
            boxShadow: '0px 0px 60px 0px #2F6DB54D',
        },
        spotlight: '/assets/spotlight2.png',
        tags: [
            {
                id: 1,
                name: 'HTML',
                path: '/assets/HTML5.svg.png',
            },
            {
                id: 2,
                name: 'CSS',
                path: 'assets/CSS.svg.png',
            },
            {
                id: 3,
                name: 'JavaScript',
                path: '/assets/js.png',
            },
            {
                id: 4,
                name: 'D3.js',
                path: '/assets/d3.png',
            },
        ],
    },
    {
        title: 'Flappy Bird Clone',
        desc: 'This is a clone of the popular mobile game Flappy bird build on the Unity Engine using C#. The game is built with a focus on creating a visually appealing and engaging experience. ',
        subdesc:
            'The game is built using C# for game logic and Unity for game development',
        href: 'https://github.com/Naseerb/Flappy_bird_clone',
        texture: '/textures/project/flappy_nest.mp4',
        logo: '/assets/unitytut-birdbody.png',
        logoStyle: {
            backgroundColor: '#60f5a1',
            background:
                'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
            border: '0.2px solid rgba(208, 213, 221, 1)',
            boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
        },
        spotlight: '/assets/spotlight3.png',
        tags: [
            {
                id: 1,
                name: 'C#',
                path: '/assets/C_Sharp_Logo_2023.png',
            },
            {
                id: 2,
                name: 'Unity',
                path: 'assets/Unity.png',
            },
        ],
    },
    {
        title: 'PhD Thesis: Realisation of an efficient Terahertz source using Quantum dot devices',
        desc: 'This research advances terahertz (THz) technology by developing a compact, tunable, and efficient THz source using quantum dot (QD)-based photoconductive antennas (PCAs). Unlike bulky or cryogenically cooled alternatives, the QD PCAs operate efficiently with compact semiconductor lasers, improving optical-to-THz conversion. A tunable QD external cavity laser (1143–1295 nm) was developed for continuous-wave THz generation, and QD PCAs demonstrated higher THz power output than commercial alternatives at low pump powers. These findings pave the way for practical, room-temperature THz systems for applications in spectroscopy, communication, and imaging.',
        subdesc:
            'The thesis main focus is to pave way for THz devices that can be used for biomedical applications',
        href: 'https://publications.aston.ac.uk/id/eprint/44531/',
        texture: '/textures/project/PhD_Thesis.mp4',
        logo: '/assets/Spectre_Terahertz.svg',
        logoStyle: {
            backgroundColor: '#0E1F38',
            border: '0.2px solid #0E2D58',
            boxShadow: '0px 0px 60px 0px #2F67B64D',
        },
        spotlight: '/assets/spotlight4.png',
        tags: [
            {
                id: 1,
                name: 'Lasers',
                path: '/assets/Lasers.png',
            },

        ],
    },
    {
        title: 'Towards realisation of an efficient continuous wave terahertz source using quantum dot devices',
        desc: 'An academic paper deomnstrating research on the realisation of efficient continuous wave terahertz source using quantum dot devices',
        subdesc:
            'This research was published in SPIE Conference Proceedings and was presented in SPIE Optics + Photonics Conference in San Diego',
        href: 'https://www.spiedigitallibrary.org/conference-proceedings-of-spie/11124/111240G/Towards-realisation-of-an-efficient-continuous-wave-terahertz-source-using/10.1117/12.2530730.full?tab=ArticleLink',
        texture: '/textures/project/THz_Paper_1.mp4',
        logo: '/assets/project-logo5.png',
        logoStyle: {
            backgroundColor: '#1C1A43',
            border: '0.2px solid #252262',
            boxShadow: '0px 0px 60px 0px #635BFF4D',
        },
        spotlight: '/assets/spotlight5.png',
        tags: [
            {
                id: 1,
                name: 'Lasers',
                path: '/assets/Lasers.png',
            },
        ],
    },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
        deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
        deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
        cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
        reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
        ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
        targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
};

export const workExperiences = [
    {
        id: 1,
        name: 'Framer',
        pos: 'Lead Web Developer',
        duration: '2022 - Present',
        title: "Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to  life, allowing stakeholders to experience the user flow and interactions before development.",
        icon: '/assets/framer.svg',
        animation: 'victory',
    },
    {
        id: 2,
        name: 'Figma',
        pos: 'Web Developer',
        duration: '2020 - 2022',
        title: "Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based.",
        icon: '/assets/figma.svg',
        animation: 'clapping',
    },
    {
        id: 3,
        name: 'Notion',
        pos: 'Junior Web Developer',
        duration: '2019 - 2020',
        title: "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
        icon: '/assets/notion.svg',
        animation: 'salute',
    },
];
