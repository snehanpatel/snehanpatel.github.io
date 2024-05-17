import "../styles/Contact.css";
import LinkedIn from '../images/linkedin.png';
import GitHub from '../images/github.png';
import Devpost from '../images/devpost.svg';
import Email from '../images/email.png';

function Contact() {
    return (
        <section id="contact" className="contact__section">
            <div>
                <h3 className="contact__header">Let's get in touch!</h3>
                <div className="contact__links">
                    <div className="contact__icon">
                        <a href="https://www.linkedin.com/in/snehanpatel/" target="_blank" rel="noreferrer">
                            <img src={LinkedIn} alt="LinkedIn" />
                        </a>
                    </div>

                    <div className="contact__icon">
                        <a href="https://github.com/snehanpatel" target="_blank" rel="noreferrer">
                            <img src={GitHub} alt="GitHub" />
                        </a>
                    </div>

                    <div className="contact__icon">
                        <a href="https://devpost.com/snehanpatel" target="_blank" rel="noreferrer">
                            <img src={Devpost} alt="Devpost" />
                        </a>
                    </div>

                    <div className="contact__icon">
                        <a href="mailto:s448patel@uwaterloo.ca" target="_blank" rel="noreferrer">
                            <img src={Email} alt="Email" />
                        </a>
                    </div>
                </div>
                <div className="contact__footer">
                    <p>Made with ❤️ by Sneha Patel</p>
                    <small>Last Updated: May 2024</small>
                </div>
            </div>
        </section>
    );
}

export default Contact;