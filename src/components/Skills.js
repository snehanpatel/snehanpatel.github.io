import "../styles/Skills.css";
import frontend from "../images/frontend.png";
import backend from "../images/backend.png";
import bigdata from "../images/big-data.png";
import deeplearning from "../images/deep-learning.png";
import SkillsList from "./SkillsList";

function Skills() {
    return (
        <section id="skills" className="skills__section">
            <div className="skills__container">
                <div className="skills__header">
                    <span className="skills__title">skills</span>
                </div>
                <SkillsList />
            </div>
        </section>
    );
}

export default Skills;