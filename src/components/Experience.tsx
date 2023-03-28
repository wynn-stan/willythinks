import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { textVariant } from "../utils/motion";
import {motion} from "framer-motion";
import {styles} from "../styles"
import SectionWrapper from "../hoc/SectionWrapper";
import { experiences, IExperience } from "../constants";

const ExperienceCard = ({experience}:{experience: IExperience}) => {
    return (
        <VerticalTimelineElement
            contentStyle={{background: "#1d1836", color: "#fff"}}
            contentArrowStyle={{borderRight: "7px solid #232631"}}
            date={experience.date}
            iconStyle={{background: "#E6DEDD", boxShadow: "none"}}
            icon={
                <div className="flex justify-center items-center w-full h-full">
                    <img    
                        src={experience.icon}
                        alt={experience.company_name}
                        className="w-[60%] h-[60%] object-contain"
                    />
                </div>
            }
        >
            <div>
                <h3 className="text-white text-[24px] font-bold">
                    {experience.title}
                </h3>
                <p className="text-secondary text-[16px] font-semibold m-0">
                    {experience.company_name}
                </p>

                <ul className="mt-5 list-disc ml-5 space-y-2">
                    {experience.points.map((point, index) => (
                        <li
                            key={`experience-point-${index}`}
                            className="text-white-100 text-[14px] pl-1 tracking-wider"
                        >
                            {point}
                        </li>
                    ))}
                </ul>
            </div>
        </VerticalTimelineElement>
    )
}

const Experience = () => {
    return (
        <>
            <motion.div variants={textVariant(0)}>
                <p className={styles.sectionSubText}>
                    What I have done so far
                </p>
                <h2 className={styles.sectionHeadText}>
                    Work Experience
                </h2>
            </motion.div>   

            <div className="mt-20 flex flex-col">
                <VerticalTimeline>
                    {
                        experiences.map((experience, index) => {
                            return <ExperienceCard key={index} experience={experience} />
                        })    
                    }
                </VerticalTimeline>
            </div>

        </>
    );
}
 
export default SectionWrapper(Experience, "experience");