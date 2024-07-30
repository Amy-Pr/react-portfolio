import { Icons } from "./Icons";

const Contact = () => {
    return (
        <section className="contact" id="contact">
            <h2>Contact</h2>
            <p>Let&apos;s connect and create together.</p>
            <div className="socials-container">
                <a href="https://www.linkedin.com/in/amy-preci-developer" target="_blank"><Icons.linkedin /></a>
                <a href="https://github.com/Amy-Pr" target="_blank"><Icons.github /></a>
            </div>
        </section>
    )
}

export default Contact;