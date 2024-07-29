import smartShopping from "../assets/smart-shopping-img-resized.png";
import guessWord from "../assets/guess-word-thumb.png";
import stickynotes from "../assets/sticky-notes-thumb.png";
import accelerate from "../assets/accelerate-thumb.png";
import speechlibrary from "../assets/speechlibrary-thumb.png";
import Project from "./Project";

const projectList = [
  {
    id: 1,
    title: 'Speech Teletherapy Library',
    tech: ['React', 'Javascript/JSX', 'MUI'],
    description:
      "A passion project to help speech therapist colleagues locate free resources on the web. Features custom built filter chips and React components from Material-UI. Database built with Firebase/Firestore.",
    liveLink: '#',
    githubLink: '#',
    image: speechlibrary,
  },
  {
    id: 2,
    title: 'Smart Shopping List',
    tech: ['React', 'Javascript/JSX', 'MUI'],
    description:
      "A web application that automatically predicts when it's time to stock up based on previous buying behavior. This was an Agile team project with The Collab Lab. It employs React, Material-UI, and Firebase.",
    liveLink: '#',
    githubLink: '#',
    image: smartShopping,
  },
  {
    id: 3,
    title: 'Super Sticky Notes',
    tech: ['React', 'Javascript/JSX'],
    description:
      "This handy web-based app allows the user to create, edit, and search custom notes. I recently refactored it to implement React hooks.",
    liveLink: '#',
    githubLink: '#',
    image: stickynotes,
  },

  {
    id: 4,
    title: 'Accelerate Website',
    tech: ['HTML', 'CSS', 'WordPress'],
    description:
      "This is a multi-page, responsive, and dynamic website for a fictional marketing company. This site was built by creating custom templates in WordPress employing PHP.",
    liveLink: '#',
    githubLink: '#',
    image: accelerate,
  },

  {
    id: 5,
    title: 'Guess The Word Game',
    tech: ['HTML', 'CSS', 'Javascript'],
    description:
      "This is an interactive game that prompts you to guess a random word. It is designed to be fully responsive and can be played on a mobile phone. Built with vanilla Javascript.",
    liveLink: '#',
    githubLink: '#',
    image: guessWord,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="divider">
      <h2>My Projects</h2>
      <div>
        {projectList.map((project, i) => (
          <Project key={project.id} data={project}/> //reverse prop targets the even indexes
        ))}


      </div>
    </section>

  )
}

export default Projects; 