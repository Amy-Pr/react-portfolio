import profileImage from '../assets/chuck.png';
import Link from './Link';

const Hero = () => {
    return(
        <section className="hero divider">
            <div className="image">
                <img src={profileImage} alt="Photo of Amy"/>
            </div>
            <div>
                <h1>Amy Preci</h1>
                <p>Web Developer</p>
                <p>Portland, Oregon</p>
                <Link href="#projects">Check out my work</Link>
            </div>
        </section>
    )
};

export default Hero;