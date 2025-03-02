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
      href: '#work',
    },
    {
      id: 4,
      name: 'Contact',
      href: '#contact',
    },
  ];
  
  export const myProjects = [
    {
      title: 'FriendFusion - A Social Media Platform',
      desc: 'Developed a dynamic social media application, "Friend Fusion", using ReactJS and TypeScript, providing users with a modern and engaging platform for social interactions. User can upload posts like comments and add friends. It also features a user profile page where users can view their own posts and friends.',
      subdesc:
        'With FriendFusion, users can connect with their friends and share their thoughts and experiences. It is build on top of ReactJS for frontend and MUI for styling also used Express for backend functionality',
      href: 'https://friend-fusion.vercel.app/',
      texture: '/textures/project/project2.mp4',
      logo: '/assets/project-logo2.png',
      logoStyle: {
        backgroundColor: '#13202F',
        border: '0.2px solid #17293E',
        boxShadow: '0px 0px 60px 0px #2F6DB54D',
      },
      spotlight: '/assets/spotlight2.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/assets/typescript.png',
        },
        {
          id: 4,
          name: 'Framer Motion',
          path: '/assets/framer.png',
        },
      ],
    },
    {
      title: 'ChatApp - An Advanced Chat Application',
      desc: 'ChatApp is a modern real-time chat application built with Next.js and Tailwind CSS, featuring seamless authentication with bcrypt and real-time messaging powered by Pusher. The app includes online status indicators, ensuring users can see who is active, and provides a smooth and responsive chat experience.',
      subdesc:
        'Instant updates using Pusher for a lag-free chat experience and password hashing with bcrypt for enhanced security',
      href: 'https://chat-app-9d3k.vercel.app/',
      texture: '/textures/project/project1.mp4',
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
          name: 'Next.js',
          path: '/assets/next.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/assets/typescript.png',
        },
        {
          id: 4,
          name: 'Framer Motion',
          path: '/assets/framer.png',
        },
      ],
    },
  ];
  
  export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
      deskScale: isSmall ? 0.5 : isMobile ? 0.7 : 1.2,
      deskPosition: isSmall ? [1, -2.5, 2.5] : isMobile ? [1.5, -2.5, 2.5] : [2.8, -4.0, -4.4],
      cubePosition: isSmall ? [-1, -6, -10] : isMobile ? [5, -5, 0] : isTablet ? [6, -5, 0] : [8, -5.5, 0],
      reactLogoPosition: isSmall ? [4, 3, -8] : isMobile ? [9, 2, 0] : isTablet ? [8, 2, 0] : [12, 3, 0],
      ringPosition: isSmall ? [-5, 4, -4] : isMobile ? [-15, 2, 0] : isTablet ? [-18, 8, 0] : [-24, 5, 0],
      targetPosition: isSmall ? [-3, -8, -1] : isMobile ? [-8, -8, -1] : isTablet ? [-9, -7, 0] : [-13, -9, -2],
    };
  };
  
  export const workExperiences = [
    {
      id: 1,
      name: 'Logichive Soluions Pvt. Ltd.',
      pos: 'Software Development Engineer',
      duration: 'November 2022 - Present',
      title: "As an accomplished Full Stack Developer, specialized in crafting dynamic and responsive user interfaces with React and Next.js, contributing to a significant improvement in overall application responsiveness also Partnered with designers, product managers, and developers to create innovative solutions.",
      icon: '/assets/logichive.svg',
      animation: 'victory',
    },
    {
      id: 2,
      name: 'Nokia Corporation',
      pos: 'Electronics RF Engineer',
      duration: 'December 2020 - June 2022',
      title: "At Nokia gained a lot of knowledge on how RF communication works and worked on testing and troubleshooting of Nokia Air Scale Radio Frequency electronics modules for proper communication.",
      icon: '/assets/nokia.svg',
      animation: 'clapping',
    },
    {
      id: 3,
      name: 'Canon India Pvt. Ltd.',
      pos: 'Electronics Engineer',
      duration: 'September 2019 - November 2020',
      title: "As an apprentice at Canon I worked on testing and fixing of Professional printing products of Canon also the operations associated with it.",
      icon: '/assets/canon.svg',
      animation: 'salute',
    },
  ];