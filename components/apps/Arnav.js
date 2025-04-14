import React, { Component } from 'react';
import ReactGA from 'react-ga4';

export class AboutArnav extends Component {

    constructor() {
        super();
        this.screens = {};
        this.state = {
            screen: () => { },
            active_screen: "about", // by default 'about' screen is active
            navbar: false,
        }
    }

    componentDidMount() {
        this.screens = {
            "about": <About />,
            "education": <Education />,
            "skills": <Skills />,
            "projects": <Projects />,
            "resume": <Resume />,
        }

        let lastVisitedScreen = localStorage.getItem("about-section");
        if (lastVisitedScreen === null || lastVisitedScreen === undefined) {
            lastVisitedScreen = "about";
        }

        // focus last visited screen
        this.changeScreen(document.getElementById(lastVisitedScreen));
    }

    changeScreen = (e) => {
        const screen = e.id || e.target.id;

        // store this state
        localStorage.setItem("about-section", screen);

        // google analytics
        ReactGA.send({ hitType: "pageview", page: `/${screen}`, title: "Custom Title" });


        this.setState({
            screen: this.screens[screen],
            active_screen: screen
        });
    }

    showNavBar = () => {
        this.setState({ navbar: !this.state.navbar });
    }

    renderNavLinks = () => {
        return (
            <>
                <div id="about" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "about" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="about vivek" src="./themes/Yaru/status/about.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">About Me</span>
                </div>
                <div id="education" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "education" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="vivek' education" src="./themes/Yaru/status/education.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Education</span>
                </div>
                <div id="skills" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "skills" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="vivek' skills" src="./themes/Yaru/status/skills.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Skills</span>
                </div>
                <div id="projects" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "projects" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="vivek' projects" src="./themes/Yaru/status/projects.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Projects</span>
                </div>
                <div id="resume" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "resume" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="vivek's resume" src="./themes/Yaru/status/download.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Resume</span>
                </div>
                <div className='my-0.5 w-28 md:w-full h-8 px-2 md:px-2.5 flex' >
                </div>
            </>
        );
    }

    render() {
        return (
            <div className="w-full h-full flex bg-ub-cool-grey text-white select-none relative">
                <div className="md:flex hidden flex-col w-1/4 md:w-1/5 text-sm overflow-y-auto windowMainScreen border-r border-black">
                    {this.renderNavLinks()}
                </div>
                <div onClick={this.showNavBar} className="md:hidden flex flex-col items-center justify-center absolute bg-ub-cool-grey rounded w-6 h-6 top-1 left-1">
                    <div className=" w-3.5 border-t border-white"></div>
                    <div className=" w-3.5 border-t border-white" style={{ marginTop: "2pt", marginBottom: "2pt" }}></div>
                    <div className=" w-3.5 border-t border-white"></div>
                    <div className={(this.state.navbar ? " visible animateShow z-30 " : " invisible ") + " md:hidden text-xs absolute bg-ub-cool-grey py-0.5 px-1 rounded-sm top-full mt-1 left-0 shadow border-black border border-opacity-20"}>
                        {this.renderNavLinks()}
                    </div>
                </div>
                <div className="flex flex-col w-3/4 md:w-4/5 justify-start items-center flex-grow bg-ub-grey overflow-y-auto windowMainScreen">
                    {this.state.screen}
                </div>
            </div>
        );
    }
}

export default AboutArnav;

export const displayAboutArnav = () => {
    return <AboutArnav />;
}


function About() {
    return (
        <>
            <div className="w-20 md:w-28 my-4 bg-white rounded-full">
                <img className="w-full" src="./images/logos/bitmoji.png" alt="Arnav Logo" />
            </div>
            <div className=" mt-4 md:mt-8 text-lg md:text-2xl text-center px-1">
                <div>my name is <span className="font-bold">Arnav Singha</span> ,</div>
                <div className="font-normal ml-1">I'm a <span className="text-pink-600 font-bold">Full-Stack Developer!</span></div>
            </div>
            <div className=" mt-4 relative md:my-8 pt-px bg-white w-32 md:w-48">
                <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-0"></div>
                <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-0"></div>
            </div>
            <ul className=" mt-4 leading-tight tracking-tight text-sm md:text-base w-5/6 md:w-3/4 emoji-list">
                <li className=" list-pc">I'm a <span className=" font-medium">Postgraduate Student</span> currently pursuing MCA. I've completed my 4 month Full-Stack Developer intern at Tea Tech Solution, and now I'm looking for internship and full-time full-stack Developer roles! ( Hit me up <a className='text-underline' href='mailto:arnav.singha2002@gmail.com'><u>arnav.singha2002@gmail.com</u></a> :) )</li>
                <li className=" mt-3 list-building"> I enjoy building awesome softwares and web app's that solve practical problems.</li>
                <li className=" mt-3 list-time"> When I am not coding my next project, I like to spend my time reading books, playing valorant or watching <a href="https://www.youtube.com/@harkirat1" target="_blank" rel="noreferrer"><u>harkirat's videos.</u></a></li>
                <li className=" mt-3 list-star"> And I also have interest in Blockchain!</li>
            </ul>
        </>
    )
}
function Education() {
    return (
        <>
            <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Education
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>
            <ul className=" w-10/12  mt-4 ml-4 px-0 md:px-1">
                <li className="list-disc">
                    <div className=" text-lg md:text-xl text-left font-bold leading-tight">
                        Kalinga Institute of Industrial Technology
                    </div>
                    <div className=" text-sm text-gray-400 mt-0.5">2024 - 2026</div>
                    <div className=" text-sm md:text-base">MCA</div>
                    <div className="text-sm text-gray-300 font-bold mt-1">CGPA &nbsp; 8.25/10</div>
                </li>
                <li className="list-disc">
                    <div className=" text-lg md:text-xl mt-4 text-left font-bold leading-tight">
                        Dr. B. C. Roy Engineering College
                    </div>
                    <div className=" text-sm text-gray-400 mt-0.5">2020 - 2023</div>
                    <div className=" text-sm md:text-base">BCA</div>
                    <div className="text-sm text-gray-300 font-bold mt-1">CGPA &nbsp; 8.40/10</div>
                </li>
                <li className="list-disc mt-5">
                    <div className=" text-lg md:text-xl text-left font-bold leading-tight">
                        Class 12<sup>th</sup>
                    </div>
                    <div className=" text-sm text-gray-400 mt-0.5">2018 - 2020</div>
                    <div className=" text-sm md:text-base">Maths, Physics, Chemistry</div>
                    <div className="text-sm text-gray-300 font-bold mt-1">Percentile Rank &nbsp; 65.3%</div>
                </li>
            </ul>
        </>
    )
}
function Skills() {
    return (
        <>
            <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Technical Skills
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>
            <ul className=" tracking-tight text-sm md:text-base w-10/12 emoji-list">
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    I've worked with a wide variety of programming languages & frameworks.
                </li>
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    <div> My areas of expertise are <strong className="text-ubt-gedit-orange">full-stack development, React.js & javascript!</strong></div>
                </li>
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    <div>Here are my most frequently used</div>
                </li>
            </ul>
            <div className="w-full md:w-10/12 flex mt-4">
                <div className=" text-sm text-center md:text-base w-1/2 font-bold">Languages & Tools</div>
                <div className=" text-sm text-center md:text-base w-1/2 font-bold">Frameworks & Libraries</div>
            </div>
            <div className="w-full md:w-10/12 flex justify-center items-start font-bold text-center">
                <div className="px-2 w-1/2">
                    <div className="flex flex-wrap justify-center items-start w-full mt-2">
                        <img className="m-1" src="https://img.shields.io/badge/-JavaScript-%23F7DF1C?style=flat&logo=javascript&logoColor=000000&labelColor=%23F7DF1C&color=%23FFCE5A" alt="Arnav Javascript" />
                        <img className="m-1" src="https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=fff" alt="Arnav TypeScript" />
                        <img className="m-1" src="https://img.shields.io/badge/Java-%23ED8B00.svg?logo=openjdk&logoColor=white" alt="Arnav Java" />
                        <img src="https://img.shields.io/badge/-Firebase-FFCA28?style=flat&logo=firebase&logoColor=ffffff" alt="Arnav firebase" className="m-1" />
                        <img src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?logo=mongodb&logoColor=white" alt="Arnav mongodb" className="m-1" />
                        <img className="m-1" src="https://img.shields.io/badge/MySQL-4479A1?logo=mysql&logoColor=fff" alt="Arnav mysql" />
                        <img className="m-1" src="https://img.shields.io/badge/Prisma-2D3748?logo=prisma&logoColor=white" alt="Arnav prisma" />
                        <img className="m-1" src="https://img.shields.io/badge/Vercel-%23000000.svg?logo=vercel&logoColor=white" alt="Arnav vercel" />
                        <img className="m-1" src="https://img.shields.io/badge/AWS-%23FF9900.svg?logo=amazon-web-services&logoColor=white" alt="Arnav aws" />
                        <img className="m-1" src="https://img.shields.io/badge/npm-CB3837?logo=npm&logoColor=fff" alt="Arnav npm" />
                        <img src="https://img.shields.io/badge/-Git-%23F05032?style=flat&logo=git&logoColor=%23ffffff" alt="Arnav git" className="m-1" />
                    </div>
                </div>
                <div className="px-2 flex flex-wrap items-start w-1/2">
                    <div className="flex flex-wrap justify-center items-start w-full mt-2">
                        <img className=" m-1" src="https://img.shields.io/badge/Next-black?style=flat&logo=next.js&logoColor=ffffff" alt="Arnav next" />
                        <img className=" m-1" src="https://img.shields.io/badge/React-%2320232a.svg?logo=react&logoColor=%2361DAFB" alt="Arnav react" />
                        <img className=" m-1" src="https://img.shields.io/badge/Express.js-%23404d59.svg?logo=express&logoColor=%2361DAFB" alt="Arnav express" />
                        <img src="https://img.shields.io/badge/-Nodejs-339933?style=flat&logo=Node.js&logoColor=ffffff" alt="Arnav node.js" className="m-1" />
                        <img className="m-1" src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white" alt="Arnav tailwind css" />
                        <img src="https://img.shields.io/badge/Sass-C69?logo=sass&logoColor=fff" alt="Arnav SASS" className="m-1" />
                        <img src="https://img.shields.io/badge/Bootstrap-7952B3?logo=bootstrap&logoColor=fff" alt="Arnav Bootstrap" className="m-1" />
                        <img src="https://img.shields.io/badge/shadcn%2Fui-000?logo=shadcnui&logoColor=fff" alt="Arnav shadcnui" className="m-1" />
                        <img className="m-1" src="https://img.shields.io/badge/Redux-593D88?style=flat&logo=redux&logoColor=white" alt="Arnav redux" />
                        <img className="m-1" src="https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=fff" alt="Arnav docker" />
                    </div>
                </div>
            </div>
            <ul className=" tracking-tight text-sm md:text-base w-10/12 emoji-list mt-4">
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    <span> And of course,</span> <img className=" inline ml-1" src="http://img.shields.io/badge/-Linux-0078D6?style=plastic&logo=linux&logoColor=ffffff" alt="Arnav linux" /> <span>!</span>
                </li>
            </ul>
        </>
    )
}

function Projects() {
    const project_list = [
        {
            name: "UbuntuOS Portfolio",
            date: "Feb 2025",
            link: "",
            description: [
                "Personal portfolio website of theme Ubuntu 20.04, made using NEXT.js & tailwind CSS",
            ],
            domains: ["Javascript", "next.js", "tailwindcss"]
        },
        {
            name: "Colour-Paletter",
            date: "Dec 2024",
            link: "https://github.com/ArnavSingha/Colour-Paletter",
            description: [
                "Colour Paletter is All-in-one color tool where you can create your own colour palette as per your website requirements",
            ],
            domains: ["Typescript", "next.js", "tailwindcss","Rapid API", "Material UI","Postman"]
        },
        {
            name: "MeetUP",
            date: "Apr 2024",
            link: "https://github.com/ArnavSingha/MeetUP",
            description: [
                "Developed a comprehensive meeting scheduler platform designed to optimize the scheduling process, integrating with popular calendar services and video conferencing tools. Key features include e-mail scheduling. Built with Next.js, Tailwind CSS, Material UI, and Firebase.",
            ],
            domains: ["Typescript","Next.JS", "tailwindcss", "Material UI","Node.JS", "Express.JS", "Firebase", "Google Calendar API", "Postman"]
        },
        {
            name: "oriJEEn",
            date: "Aug 2024",
            link: "https://github.com/ArnavSingha/oriJEEn",
            description: [
                "It's a online education system with live paid classes and tutorials. It includes an advance student management system where students and teachers can login and share studymaterials",
            ],
            domains: ["Javascript", "PHP", "SCSS", "MYSQL","Socket.io", "WebRTC", "RestAPI","Postman"]
        },
        {
            name: "TypoBlitz",
            date: "Apr 2023",
            link: "https://github.com/ArnavSingha/TypoBlitz",
            description: [
                "TypoBlitz is a typing speed test game where you can test your typing speed and accuracy. It's a fun game to play and improve your typing skills.",
            ],
            domains: ["Typescript","React.JS", "tailwindcss", "Material UI","Docker"]
        },
        {
            name: "Car_rental",
            date: "Mar 2023",
            link: "https://github.com/ArnavSingha/Car_rental",
            description: [
                "A chrome extension to read Paid Articles for Free & with no Ads, no subscription, no memberships!",
            ],
            domains: ["Javascript", "PHP", "Mysql", "RestAPI","Postman", "XAMPP"]
        },
    ];

    const tag_colors = {
        "javascript": "#ffeb3b",
        "typescript": "blue-400",
        "firebase": "red-600",
        "firestore": "red-500",
        "firebase auth": "red-400",
        "chrome-extension": "yellow-400",
        "flutter": "blue-400",
        "dart": "blue-500",
        "react-native": "purple-500",
        "html5": "pink-600",
        "sass": "pink-400",
        "tensorflow": "yellow-600",
        "django": "green-600",
        "python": "green-200",
        "codeforces-api": "gray-300",
        "tailwindcss": "blue-300",
        "next.js": "purple-600"
    }

    return (
        <>
            <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Projects
            </div>

            {
                project_list.map((project, index) => {
                    const projectNameFromLink = project.link.split('/')
                    const projectName = projectNameFromLink[projectNameFromLink.length - 1]
                    return (
                        <a key={index} href={project.link} target="_blank" rel="noreferrer" className="flex w-full flex-col px-4">
                            <div className="w-full py-1 px-2 my-2 border border-gray-50 border-opacity-10 rounded hover:bg-gray-50 hover:bg-opacity-5 cursor-pointer">
                                <div className="flex flex-wrap justify-between items-center">
                                    <div className='flex justify-center items-center'>
                                        <div className=" text-base md:text-lg mr-2">{project.name.toLowerCase()}</div>
                                        <iframe src={`https://ghbtns.com/github-btn.html?user=ArnavSingha&repo=${projectName}&type=star&count=true`} frameBorder="0" scrolling="0" width="150" height="20" title={project.name.toLowerCase() + "-star"}></iframe>
                                    </div>
                                    <div className="text-gray-300 font-light text-sm">{project.date}</div>
                                </div>
                                <ul className=" tracking-normal leading-tight text-sm font-light ml-4 mt-1">
                                    {
                                        project.description.map((desc, index) => {
                                            return <li key={index} className="list-disc mt-1 text-gray-100">{desc}</li>;
                                        })
                                    }
                                </ul>
                                <div className="flex flex-wrap items-start justify-start text-xs py-2">
                                    {
                                        (project.domains ?
                                            project.domains.map((domain, index) => {
                                                return <span key={index} className={`px-1.5 py-0.5 w-max border border-${tag_colors[domain]} text-${tag_colors[domain]} m-1 rounded-full`}>{domain}</span>
                                            })

                                            : null)
                                    }
                                </div>
                            </div>
                        </a>
                    )
                })
            }
        </>
    )
}
function Resume() {
    return (
        <iframe className="h-full w-full" src="./files/Arnav_s_Resume.pdf" title="Arnav Singha resume" frameBorder="0"></iframe>
    )
}