import Link from "./Link";
import profileImage from '../assets/me_cropped_200.png';

const About = () => {
  return (
    <section id="about" className="about divider">
      <h2>About Me</h2>
      <div>
        <p>

          I am a passionate full-stack web developer who transforms ideas into
          immersive digital experiences. With a blend of creativity and
          technical expertise, I bridge the gap between design and
          functionality, weaving code into seamless user journeys. My mission is
          to turn your vision into a reality by building web solutions that not
          only look stunning but also perform flawlessly. Let's embark on a
          digital adventure together, where innovation knows no bounds.
        </p>

        <div className="image">
          <img src={profileImage} alt="Photo of Amy" />
        </div>

        <p>
          As a full-stack web developer, I&apos;ve been on an exciting journey,
          and it all began with Team Treehouse&apos;s TechDegree program.
          Through their comprehensive curriculum and supportive community,
          I&apos;ve had the immersive learning experience has empowered me to
          craft a portfolio filled with impressive projects that showcase my
          skills and creativity. Thanks to Team Treehouse, I&apos;ve not only
          gained the knowledge and expertise, but also the confidence to tackle
          any web development challenge that comes my way.
        </p>
      </div>

      <Link href="#">Visit my LinkedIn Profile</Link>

    </section>
  )
}

export default About;