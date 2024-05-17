import "../styles/ExperienceList.css";
import { useState } from 'react';
import  ButtonBase  from "@mui/material/ButtonBase";


function ExperienceList() {
    const [activeTab, setActiveTab] = useState(0);
    const experiences = {
        // BitComplete: {
        //     jobTitle: "Full Stack Developer Intern @",
        //     duration: "May 2024 - Aug 2024",
        //     tools: "",
        //     desc: [],
        //     link: "https://www.bitcomplete.io/"
        // },
        Nasdaq: {
            jobTitle: "Software Developer Intern @",
            duration: "Sept 2023 - Dec 2023",
            tools: "Python, Scala, Apache Spark/PySpark, SQL, Boto3, AWS S3/RedShift/Glue",
            desc: [
                "Created and configured 2 schedulable AWS Glue ETL jobs performing SQL transformations to integrate data from 20+ partitioned S3 tables into a single table in S3 and RedShift",
                "Leveraged PySpark, Spark SQL, and DataFrame APIs to implement a set of utility services to improve performance and optimization of data reconciliation and transformation jobs with Big Data",
                "Implemented unit tests for AWS API calls using the Moto library to mock AWS services, ensuring the reliability and correctness of the AWS Glue ETL jobs and utility services"
            ],
            link: "https://www.nasdaq.com/about"
        },
        "Citron Hygiene": {
            jobTitle: "Technology Transformation Implementation Analyst Intern @",
            duration: "Jan 2023 - Apr 2023",
            tools: "Python, VBA, Excel, Workato, Salesforce, NetSuite",
            desc: [
                "Automated data migration activities by implementing Workato integration between legacy and production systems, eliminating all manual data transformation activities during file migrations between Salesforce systems",
                "Played critical role in ongoing, time-sensitive data cleansing and transformation activities for master and transactional data through data migrations for mock cycles, dry runs and final cutover, and post-go live support",
                "Participated in conducting data analysis and reconciliation, collecting, and communicating business requirements, while maintaining data correctness and quality"
            ],
            link: "https://www.citronhygiene.com/about-us/"
        },
        BitGo: {
            jobTitle: "Backend Software Engineer Intern @",
            duration: "May 2022 - Aug 2022",
            tools: "Java, JS, TS, Kotlin, RESTful APIs, RPC Protocols, MongoDB, Spring",
            desc: [
                "Implemented a generalized parsing logic to automate on-chain data extraction in Kotlin, eliminating manual efforts to write individual JSON recipes",
                "Designed end-to-end test cases in Hermetic Server for Polygon blockchain, supporting cross-functional engineering efforts by reducing blockchain onboarding time by 50%, as well as implementing unit and integration testing",
                "Developed new RESTful API endpoints to improve user experience, collaborating with the front-end team to integrate with clients’ website UI ensuring seamless operation"
            ],
            link: "https://www.bitgo.com/company/about-bitgo/"
        },
        KinCapsule: {
            jobTitle: "Software Developer Intern @",
            duration: "May 2021 - Aug 2021",
            tools: "JavaScript, React/Redux/Native, Node.js",
            desc: [
                "Translated design mocks into responsive and dynamic components using Material UI and React, allowing for flexibility while maintaining scalability",
                "Implemented centralized application states using Redux to dynamically render components in response to user input, while effectively and efficiently streamlining data input across multiple website components",
                "Optimized user experience by integrating search, suggest and autocomplete services using Google Maps Platform APIs, Query Suggestion APIs and other RESTful APIs"
            ],
            link: "https://kincapsule.ca/"
        }
    }

    return (
        <div className="experience__container">
            <div className='tabs'>
                {Object.keys(experiences).map((tab, index) => (
                    // <div
                    //     key={index}
                    //     onClick={() => setActiveTab(index)}
                    //     // className="tab__item"
                    //     className={activeTab === index ? 'tab__item clicked' : 'tab__item'}
                    //     style={{
                    //         color: activeTab === index ? '#aa8fd6' : '#6e6e6e',
                    //         borderRight: activeTab === index ? '3px solid #aa8fd6' : '3px solid transparent',}}
                    // >
                    //     {tab.toUpperCase()}
                    // </div>
                    <ButtonBase
                        key={index}
                        onClick={() => setActiveTab(index)}
                        className="tab__item"
                        style={{
                            color: activeTab === index ? '#aa8fd6' : '#6e6e6e',
                            borderRight: activeTab === index ? '3px solid #aa8fd6' : '3px solid transparent',
                            display: 'flex',
                            justifyContent: 'flex-start',
                            width: '100%',
                            paddingTop: '8px',
                            paddingBottom: '8px',
                            fontFamily: "NTR",
                            fontSize: '16px',
                        }}
                    >
                        {tab.toUpperCase()}
                    </ButtonBase>
                ))}
            </div>
            <div className="tab__container">
                {Object.keys(experiences).map((content, index) => (
                    <div key={index} style={{ display: activeTab === index ? 'block' : 'none' }}>
                        <div className="tab__content">
                            <h3>
                                <span>{experiences[content].jobTitle + " "}</span>
                                <span className="jobtitle">
                                    <a href={experiences[content].link} target="_blank" rel="noreferrer">{content}</a>
                                </span>
                            </h3>
                            <div className="duration"><small>{experiences[content].duration.toUpperCase()}</small></div>
                            <p className="tools">{"Tools: " + experiences[content].tools}</p>
                            <ul className="description">
                                {experiences[content].desc.map((item, index) => (
                                    <li key={index} className="enter">{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
  }
  
  export default ExperienceList;