import{SiOpenaigym}  from 'react-icons/si'
import{MdAddReaction}  from 'react-icons/md'



export const links = [

    {
        name: "Home",
        path : '/'
    },

    {
        name: "About",
        path: '/about'
    },

    {
        name: "Contact",
        path: '/contact'
    },
    {
        name: "Plans",
        path: '/plans'
    },
    {
        name: "Gallery",
        path: '/gallery'
    }


]


export const programs = [
    {
        id: 1,
        icon: <SiOpenaigym/>,
        title: "Program One",
        info: "This is the day that the lord has made. We will rejoice!",
        path: "/programs/111"
    },
    {
        id: 2,
        icon: <MdAddReaction/>,
        title: "Program Two",
        info: "This is the day that the lord has made. We will rejoice!",
        path: "/programs/222"
    },
    {
        id: 3,
        icon: <SiOpenaigym/>,
        title: "Program Three",
        info: "This is the day that the lord has made. We will rejoice!",
        path: "/programs/333"
    },
    {
        id: 4,
        icon: <SiOpenaigym/>,
        title: "Program Four",
        info: "This is the day that the lord has made. We will rejoice!",
        path: "/programs/444"
    }
]



export const values = [
    {
        id: 1,
        icon: <SiOpenaigym/>,
        title: "Value One",
        desc: "Join our company and be a part of a vibrant community that values innovation, collaboration, and excellence. Together, we're building the future of technology!"
    },
    {
        id: 2,
        icon: <SiOpenaigym/>,
        title: "Value Two",
        desc: "Join a team that embraces agility, adapting quickly to change and staying at the forefront of industry trends."
    },
    {
        id: 3,
        icon: <SiOpenaigym/>,
        title: "Value Three",
        desc: "We foster a culture of open communication, where every team member's voice is heard, and ideas are encouraged to flourish."
    },
    {
        id: 4,
        icon: <SiOpenaigym/>,
        title: "Value Four",
        desc: "Our company believes in a healthy work-life balance, supporting our software engineers, product managers, and data scientists to excel both personally and professionally."
    }
]



export const faqs = [
    {
        id: 1,
        question: "What roles are currently open for software engineers, product managers, and data scientists at your company?",
        answer: "We have various openings across different teams and projects for software engineers, product managers, and data scientists. Please visit our careers page for the most up-to-date list of available positions."
    },
    {
        id: 2,
        question: "What qualifications and experience do you look for in software engineer candidates?",
        answer: "We seek candidates with a strong foundation in computer science or related fields, proficiency in programming languages, and a track record of building innovative software solutions. Relevant experience and a passion for staying up-to-date with industry trends are also valued."
    },
    {
        id: 3,
        question: "What qualities do you value in potential product manager candidates?",
        answer: "Our ideal product manager candidates possess excellent communication skills, a strategic mindset, and the ability to bridge the gap between technical and business aspects. Leadership experience, product lifecycle knowledge, and a customer-centric approach are highly regarded."
    },
    {
        id: 4,
        question: "What qualifications are essential for data scientist candidates to join your team?",
        answer: "We seek data scientist candidates with a background in statistics, machine learning, or data analysis. Proficiency in programming languages (e.g., Python, R) and experience in data manipulation, modeling, and visualization are critical. Strong analytical and problem-solving abilities are also highly valued."
    },
    {
        id: 5,
        question: "What is the company's approach to fostering a culture of innovation and collaboration?",
        answer: "We believe in nurturing a culture where creativity thrives. We encourage open communication, idea-sharing, and cross-functional collaboration to drive innovation and tackle challenges collectively."
    },
    {
        id: 6,
        question: "What is the typical recruitment process for software engineers, product managers, and data scientists?",
        answer: "Our recruitment process involves an initial screening of applications, followed by interviews that may include technical assessments and discussions with team members and managers"
    }
]








export const testimonials = [
    {
        id: 1,
        name: "Diana Ayi",
        quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ipsam facere ea a laboriosam sed? Quod vel voluptates a! Maxime minima cumque aut? In expedita numquam consectetur non officia iusto.",
        job: "Student",
        avatar: require("./Images/avatar1.jpg")
    },
    {
        id: 2,
        name: "Daniel Vinyo",
        quote: "Harum quaerat hic consequuntur molestias repellat ad quo tenetur vitae rem, labore quisquam? Atque, assumenda rerum this and that odit harum quaerat hic praesentium quisquam quae, enim iste ipsam id repellat.",
        job: "Software Engineer",
        avatar: require("./Images/avatar2.jpg")
    },
    {
        id: 3,
        name: "Edem Quist",
        quote: "Quaerat hic praesentium consequuntur molestias repellat ad quo tenetur vitae rem, labore quisquam? Atque, assumenda rerum odit harum quaerat hic praesentium quisquam quae, enim iste ipsam id repellat.",
        job: "University Lecturer",
        avatar: require("./Images/avatar3.jpg")
    },
    {
        id: 4,
        name: "Grace Lavoe",
        quote: "Cupiditate deleniti sint consequuntur molestias repellat ad quo tenetur vitae rem, labore quisquam? Atque, assumenda rerum odit harum quaerat hic praesentium quisquam quae, enim iste ipsam id repellat.",
        job: "Data scientist",
        avatar: require("./Images/avatar4.jpg")
    },
    {
        id: 5,
        name: "Nana Yaa Dankwa",
        quote: "Maxime minima cumque sit amet consectetur adipisicing elit. Praesentium ipsam facere ea a laboriosam sed? Quod vel voluptates a! Maxime minima cumque aut? In expedita numquam consectetur non officia iusto.",
        job: "Product Manager",
        avatar: require("./Images/avatar5.jpg")
    }
]



export const plans = [
    {
        id: 1,
        name: 'Silver Package',
        desc: 'This package is perfect for beginners who need constant help',
        price: 29.99,
        features: [
            {feature: 'First Feature', available: true},
            {feature: 'Second Feature', available: true},
            {feature: 'Third Feature', available: true},
            {feature: 'Fourth Feature', available: true},
            {feature: 'Fifth Feature', available: true},
            {feature: 'Fifth Feature Plus', available: false},
            {feature: 'Sixth Feature', available: false},
            {feature: 'Seventh Feature', available: false},
            {feature: 'Seventh Feature Plus', available: false},
            {feature: 'Eighth Feature', available: false},
            {feature: 'Ninth Feature', available: false},
            {feature: 'Tenth Feature', available: false},
            {feature: 'Eleventh Feature', available: false}
        ]
    },
    {
        id: 2,
        name: 'Gold Package',
        desc: 'This is the perfect package for beginners who know what their doing',
        price: 49.99,
        features: [
            {feature: 'First Feature', available: true},
            {feature: 'Second Feature', available: true},
            {feature: 'Third Feature', available: true},
            {feature: 'Fourth Feature', available: true},
            {feature: 'Fifth Feature', available: true},
            {feature: 'Fifth Feature Plus', available: true},
            {feature: 'Sixth Feature', available: true},
            {feature: 'Seventh Feature', available: true},
            {feature: 'Seventh Feature Plus', available: true},
            {feature: 'Eighth Feature', available: false},
            {feature: 'Ninth Feature', available: false},
            {feature: 'Tenth Feature', available: false},
            {feature: 'Eleventh Feature', available: false}
        ]
    },
    {
        id: 3,
        name: 'Platinum Package',
        desc: 'This package is perfect for busy people who need home service',
        price: 89.99,
        features: [
            {feature: 'First Feature', available: true},
            {feature: 'Second Feature', available: true},
            {feature: 'Third Feature', available: true},
            {feature: 'Fourth Feature', available: true},
            {feature: 'Fifth Feature', available: true},
            {feature: 'Fifth Feature Plus', available: true},
            {feature: 'Sixth Feature', available: true},
            {feature: 'Seventh Feature', available: true},
            {feature: 'Seventh Feature Plus', available: true},
            {feature: 'Eighth Feature', available: true},
            {feature: 'Ninth Feature', available: true},
            {feature: 'Tenth Feature', available: true},
            {feature: 'Eleventh Feature', available: true}
        ]
    }
]

