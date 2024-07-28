import profileImage from '../assets/chuck.png';
import Link from './Link';

const Hero = () => {
    return(
        <section className="hero divider">
            {/* <div className="image">
                <img src={profileImage} alt="Photo of Amy"/>
            </div> */}
            <div className="intro">
                <h1>Hello, I'm Amy Preci</h1>
                <p>I am a Web Developer in</p>
                <p>Portland, Oregon</p>
                <Link href="#projects">Check out my work</Link>
            </div>
        </section>
    )
};

export default Hero;