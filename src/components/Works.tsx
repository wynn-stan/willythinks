import SectionWrapper from "../hoc/SectionWrapper";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { Tilt } from "react-tilt";

const ProjectCard = (props:any) => {
    return (
        <motion.div>
            <Tilt
                options={{
                    max:45,
                    scale:1,
                    speed:450,
                    axis: "x"
                }}
                className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
            >
                <div className="relative w-full h-[230px]">
                    <img 
                        src={props.image}
                        alt={props.name}
                        className="w-full h-full object-cover rounded-2xl"
                    />

                    <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
                        <div
                            onClick={() => window.open(props.source_code_link, "_blank")}
                            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                        >
                            <img 
                                src="/assets/github.png"
                                alt="github"
                                className="w-1/2 h-1/2 object-contain"
                            />
                        </div>
                    </div>
                </div>

                    <div className="mt-5">
                        <h3 className="text-white font-bold text-[24px]">
                            {props.name}
                        </h3>
                        <p className="mt-2 text-secondary text-[14px]">
                            {props.description}
                        </p>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2">
                        {props.tags.map((tag:{name:string, color:string}) => (
                            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                                #{tag.name}
                            </p>
                        ))}
                    </div>
            </Tilt>
        </motion.div>
    )
}

const Work = () => {
    return (
        <motion.div initial="hidden" whileInView="show" viewport={{once: true}}>
            <motion.div variants={textVariant(0)}>
                <p className={styles.sectionSubText}>
                    My work
                </p>
                <h2 className={styles.sectionHeadText}>
                    Projects
                </h2>
            </motion.div>

            <div className="w-full flex">
                <motion.p
                    variants={fadeIn("up","spring", 0.1, 1)}
                    className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
                >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum id nemo debitis culpa earum illo laboriosam necessitatibus perferendis aperiam exercitationem reiciendis neque sunt corrupti ratione molestiae cupiditate vel, natus in.
                </motion.p>
            </div>

            <div className="mt-20 flex flex-wrap justify-center gap-7">
                {projects.map((project,index) => (
                    <ProjectCard
                        key={`project-${index}`}
                        index={index}
                        {...project}
                    />
                ))}
            </div>
        </motion.div>
    )
}
 
export default SectionWrapper(Work,"work");