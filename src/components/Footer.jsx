import greyhound from "../assets/greyhound_icon_one_hundred.png";

const Footer = () => {
    const currentYear = new Date().getFullYear()
    return (
        <footer>
            <span>Amy Preci {currentYear}&copy;</span>
            <img src={greyhound}/>
        </footer>
    );
};

export default Footer;

