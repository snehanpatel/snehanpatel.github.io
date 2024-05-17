import "../styles/About.css";
import me from "../images/me.png";

function About() {
    return (
        <section id="about" className="about__section">
            <div className="about__container">
                <div className="about__header">
                    <span className="about__title">about me</span>
                </div>
                <div className="about__content">
                    <div className="about__description">
                        <p>
                            Hi, nice to meet you! 👋
                        </p>
                        <p>
                            I am a 4th year Computer Science student at the <b>University of Waterloo</b>, 
                            on a mission to make a positive impact through technology. With a 
                            background in <b>full stack web development</b> and <b>backend software engineering</b>, 
                            I have developed a strong affinity for working with data and enhancing 
                            user productivity. I am also currently exploring ways to integrate AI 
                            into web applications and streamline work processes to create personalized 
                            user interactions.
                        </p>
                        <p>
                            When I’m not in front of a screen, you can usually find me with a coffee 
                            or a book in hand. I also enjoy baking, hiking and exploring new places 
                            with my camera.
                        </p>
                    </div>
                    <div className="about__image">
                        <img src={me} alt="me" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;