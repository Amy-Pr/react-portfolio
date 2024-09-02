import Link from "./Link";
import profileImage from '../assets/me_cropped_200.png';

const About = () => {
  return (
    <section id="about" className="about divider">
      <h2>About Me</h2>
      <div>
        <p>
        Hi, I'm Amy. I am a web developer who specializes in Javascript and React. I love to code. 
        I love languages, problem solving, and creating. Drawing from my diverse background as a speech-language 
        therapist in telepractice and an editor for digital media, I’m inspired by digital tools that make a positive 
        impact on our well-being and that create a joyful user experience.
        </p>

        <div className="image">
          <img src={profileImage} alt="Photo of Amy" />
        </div>

        <p>
        My journey began with the Break Into Tech program at Skillcrush where I completed an intensive learning track in 
        Front-End Web Development. After completing the program, I broadened my knowledge base by diving deeper 
        into the ins-and-outs of React and principles of UI/UX design. I have also expanded my skillset by joining the 
        The Collab Lab and spending two months on a group project where I learned best practices of Agile development.
        </p>

        <p>
        Web development to me is a non-stop learning experience, and I feel confident through these experiences that 
        I can tackle any new project along the way. Let’s build something together!
        </p>
      </div>

      <Link href="https://www.linkedin.com/in/amy-preci-developer">Visit my LinkedIn Profile</Link>

    </section>
  )
}

export default About;