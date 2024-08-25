import "../styles/Skills.css";
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