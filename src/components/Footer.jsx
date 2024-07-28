const Footer = () => {
    const currentYear = new Date().getFullYear()
    return (
        <footer>
            <span>Amy Preci {currentYear}&copy;</span>
        </footer>
    );
};

export default Footer;

