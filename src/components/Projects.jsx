import smartShopping from "../assets/smart-shopping-img-resized.png";
import guessWord from "../assets/guess-word-thumb.png";
import stickynotes from "../assets/sticky-notes-thumb.png";
// import accelerate from "../assets/accelerate-thumb.png";
import reactTheme from "../assets/react-context-thumb8.png";
import speechlibrary from "../assets/speechlibrary-thumb.png";
import Project from "./Project";

const projectList = [
  {
    id: 1,
    title: 'Speech Teletherapy Library',
    tech: ['React', 'Javascript/JSX', 'MUI'],
    description:
      "A passion project to help speech therapist colleagues locate free resources on the web. Features custom built filter chips and React components from Material-UI. Database built with Firebase/Firestore.",
    liveLink: 'https://speechlibrary.netlify.app/',
    githubLink: 'https://github.com/Amy-Pr/therapy-resource-library-react-vite',
    image: speechlibrary,
  },
  {
    id: 2,
    title: 'Smart Shopping List',
    tech: ['React', 'Javascript/JSX', 'MUI'],
    description:
      "A web application that automatically predicts when it's time to stock up based on previous buying behavior. This was an Agile team project with The Collab Lab. It employs React, Material-UI, and Firebase.",
    liveLink: 'https://ap-smart-shopping-list.netlify.app/',
    githubLink: 'https://github.com/Amy-Pr/ap-tcl-smart-shopping-list',
    image: smartShopping,
  },
  {
    id: 3,
    title: 'Super Sticky Notes',
    tech: ['React', 'Javascript/JSX'],
    description:
      "This handy web-based app allows the user to create, edit, and search custom notes. I recently refactored it to implement React hooks.",
    liveLink: 'https://superstickynotes-app.netlify.app/',
    githubLink: 'https://github.com/Amy-Pr/super-sticky-notes-app',
    image: stickynotes,
  },

  // {
  //   id: 4,
  //   title: 'Accelerate Website',
  //   tech: ['HTML', 'CSS', 'WordPress'],
  //   description:
  //     "This is a multi-page, responsive, and dynamic website for a fictional marketing company. This site was built by creating custom templates in WordPress employing PHP.",
  //   liveLink: 'https://amy-pr.github.io/accelerate-case-study/',
  //   githubLink: 'https://github.com/Amy-Pr/203-accelerate',
  //   image: accelerate,
  // },

  {
    id: 4,
    title: 'React Theme Widget',
    tech: ['React', 'Javascript/JSX'],
    description:
      "Using specialized React hooks, this is an app that changes the user's color and font preferences. It also uses React Router to feature a dynamic navigation bar based on user sign-in status.",
    liveLink: 'https://react-context-themes.netlify.app/',
    githubLink: 'https://github.com/Amy-Pr/react-usecontext-themes',
    image: reactTheme
  },

  {
    id: 5,
    title: 'Guess The Word Game',
    tech: ['HTML', 'CSS', 'Javascript'],
    description:
      "This is an interactive game that prompts you to guess a random word. It is designed to be fully responsive and can be played on a mobile phone. Built with vanilla Javascript.",
    liveLink: 'https://amy-pr.github.io/guess-the-word/',
    githubLink: 'https://github.com/Amy-Pr/guess-the-word',
    image: guessWord,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="divider">
      <h2>My Projects</h2>
      <div>
        {projectList.map((project) => (
          <Project key={project.id} data={project}/> 
        ))}


      </div>
    </section>

  )
}

export default Projects; 