import { faGithub, faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // use FontAwesome to add social media icons

function Footer () {

    const currentYear = new Date().getFullYear();

    return (
        <div className="container bg-gradient-to-b from-blue-300 to-blue-600 text-lg p-2">
            <p className="text-white text-lg md:text-xl xl:text-2xl mb-1"> &copy; Wonder Nxumalo {currentYear} </p>
            <p className="text-white text-base md:text-xl xl:text-2xl mb-1">ALX Capstone Project. All Rights Reserved</p>
            <div className="text-white">
                <ul className="flex flex-row align-center justify-evenly">
                    <a  href="https://github.com/WonderNxumalo" target="_blank">
                    <FontAwesomeIcon icon={faGithub} size="xl" />
                    </a>
                    <a  href="https://x.com/Mthonti_" target="_blank">
                    <FontAwesomeIcon icon={faXTwitter} size="xl" />
                    </a>
                    
                    <a  href="https://www.linkedin.com/in/wonder-nxumalo-415b6289/" target="_blank">
                    <FontAwesomeIcon icon={faLinkedin} size="xl" />
                    </a>
                </ul>
            </div>
        </div>
        
    );
}

export default Footer;