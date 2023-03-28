import {styles} from "../styles";
import {motion} from "framer-motion";
import {fadeIn, textVariant} from "../utils/motion";
import { services } from "../constants";
import {Tilt} from "react-tilt";
import SectionWrapper from "../hoc/SectionWrapper";

const ServiceCard = ({index, title, icon}:{index:number, title: string, icon: string}) => {
    return (
        <Tilt
            options={{
                max: 45,
                scale: 1,
                speed: 450,
                perspective: 500,
                axis: "x",
            }}
            className="xs:w-[250px] w-full"
        >
            <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{once: true, }}
                variants={fadeIn("right", "spring", 0.5 * index, 0.5)}
                className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
            >
                <div
                    className="flex justify-evenly items-center flex-col  bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px]"
                >
                    <img src={icon} alt={title} 
                        className="w-16 h-16 object-contain"
                    />
                    <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
                </div>
            </motion.div>
        </Tilt>
    )
}

const About = () => {
    return (
        <>
            <motion.div initial="hidden" whileInView="show" viewport={{once:true }} variants={textVariant(0.5)} className="">
                <p className={styles.sectionSubText}>Introduction</p>
                <h2 className={styles.sectionHeadText}>Overview</h2>
            </motion.div>

            <motion.p
                initial="hidden"
                whileInView="show"
                viewport={{once: true}}
                variants={fadeIn("right","spring",0.5,1)}
                className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
            >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore odio modi, facere eos sequi dolorem iure dolores. Fuga ea ipsam, magnam repellendus dolorem odit perspiciatis, natus a illo et ratione.
            </motion.p>

            <div className="mt-20 flex flex-wrap gap-10">
                {
                    services.map((service, index) => {
                        return <ServiceCard key={service.title} index={index} {...service} />
                    })
                }
            </div>
        </>
    )
}
 
export default SectionWrapper(About, "about");