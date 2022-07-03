import education from './images/3371818_computer_education_elearning_student hat_icon.png'
import experience from './images/2206181_client_job_laptop_man_occupation_icon.png'
import languages from './images/6081441_expert_interpreter_languages_professional_translator_icon.png'
import skills from './images/4222179_business_development_education_job_skills_icon.png'

export const sidebarData = [
    {
        id: 1,
        navLink: "Education",
        icon: education,
        list: [
            'Hillel IT School - Front-End Pro',
            'Source It School - Markup Developer',
            'Yaroslav Mudryi NLU - Magister degree',
        ]
    },
    {
        id: 2,
        navLink: "Work experience",
        icon: experience,
        list: [
            'NaNutru - Front-End Developer (five month)',
            'Shark Farm - Front-End Developer (eight month)',
            'Freelance UpWork - Markup Developer (one year)',
        ]
    },
    {
        id: 3,
        navLink: "My languages",
        icon: languages,
        list: [
            'Ukrainian - Native',
            'English - Pre-intermediate',
            'Russian -  Proficiency (try to forget)',
        ],
    },
    {
        id: 4,
        navLink: 'Skills',
        icon: skills,
        list: [
            'HTML/CSS',
            'JavaScript',
            'React',
            'jQuery',
            'Webpack',
            'Bootstrap',
            'GitHub',
        ]
    }
];