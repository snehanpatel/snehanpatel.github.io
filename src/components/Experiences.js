import "../styles/Experiences.css";
import ExperienceList from "./ExperienceList";

function Experiences() {
  return (
    <section id="experiences" className="experiences__section">
      <div className="experiences__container">
        <div className="experiences__header">
          <span className="experiences__title">experiences</span>
        </div>
        <div className="experiences__content">
          <ExperienceList />
        </div>
      </div>

    </section>
  );
}

export default Experiences;