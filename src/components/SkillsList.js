import "../styles/SkillsList.css";
import frontend from "../images/frontend.png";
import backend from "../images/backend.png";
import bigdata from "../images/big-data.png";
import deeplearning from "../images/deep-learning.png";
import { useState } from 'react';
import  ButtonBase  from "@mui/material/ButtonBase";

function SkillsList() {
    const [activeTab, setActiveTab] = useState("frontend");

    const skills = {
        frontend: {
            title: "Frontend",
            description: "Experienced in frontend development, creating responsive and dynamic UIs using popular frameworks such as React/React Native and Redux. Familiar with UI/UX design principles and experienced in using Figma for prototyping.",
            img: frontend,
        },
        backend: {
            title: "Backend",
            description: "Experienced in general backend development using Python, Java, JavaScript, and C/C++ for building server-side applications. Proficient in implementing RESTful APIs for seamless integration with frontend components.",
            img: backend,
        },
        data: {
            title: "Big Data",
            description: "Skilled in working with big data, utilizing Apache Spark/PySpark and Spark SQL to optimize data reconciliation and transformation job performance. Experienced in scripting AWS Glue ETL jobs for efficient data integration from multiple sources.",
            img: bigdata,
        },
        ai: {
            title: "AI/ML",
            description: "Familiar with AI and ML concepts, including statistical modeling techniques. Experience in implementing AI/ML models using libraries such as TensorFlow, PyTorch, or scikit-learn. Also familiar with working with OpenAI GPT models, for text generation and language processing tasks.",
            img: deeplearning,
        }
    }

    const styles = {
        button: (isActive) => ({
            fontFamily: "NTR",
            fontSize: '16px',
            width: '180px',
            borderRadius: '6px',
            backgroundColor: isActive ? 'rgba(231, 221, 255, 0.15)' : 'transparent',
            color: isActive ? '#aa8fd6' : '#6e6e6e',
            border: isActive ? '1px solid #aa8fd6' : '1px solid #6e6e6e',
        })
    }

    return (
        <div className="skills__information">
            <div className="skills__navbar">
                {Object.keys(skills).map((key) => (
                    <ButtonBase
                        key={key}
                        onClick={() => setActiveTab(key)}
                        style={styles.button(activeTab === key)}
                        disableRipple={true}
                        className="skills__button"
                    >
                        <span>{skills[key].title.toUpperCase()}</span>
                    </ButtonBase>
                ))}
            </div>
            <div className="skills__card">
                <div className="skills__image">
                    <img src={skills[activeTab].img} alt={activeTab} />
                </div>
                <div className="skills__info">
                    <h3>{skills[activeTab].title}</h3>
                    <p>{skills[activeTab].description}</p>
                </div>
            </div>
        </div>
    )
}

export default SkillsList;