import {motion} from "framer-motion";
import {styles} from "../styles";
import SectionWrapper from "../hoc/SectionWrapper";
import {fadeIn, textVariant} from "../utils/motion"
import { testimonials } from "../constants";

const FeedbackCard = (props:any) => {
    return (
        <motion.div
            variants={fadeIn("right", "spring", props.index * 0.5, 0.75)}
            className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
        >
            <p className="text-white font-black text-[48px]">"</p>
            <p className="text-white tracking-wider text-[18px]">{props.testimonial}</p>
            
            <div className="mt-7 flex justify-between items-center gap-1">
                <div className="mt-7 flex justify-between items-center gap-1">
                    <div className="flex-1 flex flex-col">
                        <p className="text-white font-medium text-[16px]">
                            <span className="blue-text-gradient">@ </span>
                            {props.name}
                        </p>
                        <p className="mt-1 text-secondary text-[12px]">
                            {props.designation} of {props.company}
                        </p>
                    </div>
                </div>

                <img 
                        src={props.image}
                        alt={`feedback-by-${props.name}`}
                        className="w-10 h-10 rounded-full object-cover"
                />

            </div>
        </motion.div>
    )
}

const Feedbacks = () => {
    return (
    <motion.div  initial="hidden" whileInView="show" viewport={{once: true}}>
        <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
            <motion.div initial="hidden" whileInView="show" viewport={{once: true}} variants={textVariant(0)}>
                <p className={styles.sectionSubText}>What others say</p>
                <h2 className={styles.sectionHeadText}>Testimonial</h2>
            </motion.div>

            <div className={` mt-20 pb-14 flex flex-row flex-wrap gap-7`}>
                {
                    testimonials.map((testimonial, index) => (
                        <FeedbackCard 
                            key={testimonial.name}
                            index={index}
                            {...testimonial}
                        /> 
                    ))
                }
            </div>
        </div>
    </motion.div>
    )
}
 
export default SectionWrapper(Feedbacks, "feedbacks");