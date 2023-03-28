import { Component, FunctionComponent } from "react";
import {motion} from "framer-motion";
import { styles } from "../styles";
import {staggerContainer} from "../utils/motion";


const SectionWrapper = (Component:FunctionComponent, ref:string) => {
    return function Wrapper(){
        return (
            <motion.section
                variants={staggerContainer(0,0)} 
                initial="hidden"
                whileInView="show"
                viewport={{once: true}}
                className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
            >
                <span className="hash-span" id={ref} />
                <Component />
            </motion.section>
        )
    };
}
 
export default SectionWrapper;