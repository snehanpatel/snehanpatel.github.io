import "../styles/Home.css";
import avatar from "../images/avatar.png";
import { Typewriter } from "react-simple-typewriter"

function Home() {
    return (
        <section id="home" className="home__section">
            <div className="home__navbar">
                <button className="navbar__item">
                    <a href="#about">about</a>
                    <div className="navbar__highlight"></div>
                </button>
                <button className="navbar__item">
                    <a href="#experiences">experiences</a>
                    <div className="navbar__highlight"></div>
                </button>
                <button className="navbar__item">
                    <a href="#skills">skills</a>
                    <div className="navbar__highlight"></div>
                </button>
                <button className="navbar__item">
                    <a href="#contact">contact</a>
                    <div className="navbar__highlight"></div>
                </button>
            </div>
            <img src={avatar} alt="avatar" className="avatar" />
            <h4 className="intro__hi">
                <span>hi, nice to meet you </span>
                <span className="waving__hand">👋</span>
            </h4>
            <h1 className="intro__name">I'm Sneha Patel</h1>
            <p className="intro__info">
                <Typewriter
                    words={["computer science student ", "software engineer", "currently exploring AI", "a photography enthusiast"]}
                    loop={true}
                    cursor
                    cursorColor="#C2A8FF"
                    cursorBlinking={false}
                    typeSpeed={150}
                    deleteSpeed={150}
                    delaySpeed={2000}
                />
            </p>
            <button className="connect__button">
                <a className="connect__link" href="https://www.linkedin.com/in/snehanpatel/" target="_blank" rel="noreferrer">Connect With Me</a>
            </button>
        </section>
    );
}

export default Home;