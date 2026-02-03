import Styles from "./Footer.module.css";

export const Footer = () => {
    // Social Links
    const socialLinks = [
        {name: "Email", url: "mailto:wallgodds@gmail.com", path: '/socialLinks/Mail.svg'},
        {name: "GitHub", url: "https://github.com/WallGodds", path: '/socialLinks/GitHub.svg'},
        {name: "LinkedIn", url: "https://www.linkedin.com/company/wallgodds", path: '/socialLinks/LinkedIn.svg'},
        {name: "Discord", url: "https://discord.gg/kTQ5KWANp8", path: '/socialLinks/Discord.svg'},
    ];

    return (
        <footer className={Styles.footer}>
            {/* Left */}
            <div className={Styles.left}>
                <div className={Styles.logoBox} />
                <span className={Styles.footerText}>A Community Initiative</span>
            </div>

            {/* Right */}
            <div className={Styles.socials}>
                {socialLinks.map((link, index) => (
                    <a href={link.url} title={`WallGodds's ${link.name}`} target="_blank" aria-label={link.name} className={Styles.iconBtn} key={index}>
                        <img src={link.path} alt={link.name} />
                    </a>
                ))}
            </div>
        </footer>
    );
};

export default Footer;
