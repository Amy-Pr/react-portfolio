import Link from './Link';

const Hero = () => {
    return(
        <section className="hero divider">
            <div className="intro">
                <h1>Hello, I'm Amy Preci</h1>
                <p>I am a Web Developer in</p>
                <p>Portland, Oregon</p>
                <Link href="#projects" noTarget>Check out my work</Link>
            </div>
        </section>
    )
};

export default Hero;