import {motion} from "framer-motion";
//@ts-ignore
//import TypeWriterEffect from "react-typewriter-effect";
import ShibaCanvas from "./Canvas/Shiba";
import {styles} from "../styles";

const Hero = () => {
    return (
        <section className={`relative w-full h-screen mx-auto`}>
            <div
            className={`absolute inset-0 top-[120px] max-w-7xl max-h-[350px] mx-auto ${styles.paddingX} flex flex-row sm:flex-nowrap flex-wrap items-start gap-5`}
            >
                <div className="flex flex-row gap-5">
                <div className='flex flex-col justify-center items-center mt-5'>
                    <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
                    <div className='w-1 sm:h-80 h-40 violet-gradient' />
                </div>

                <div className="whitespace-normal">
                    <h1 className={`${styles.heroHeadText} text-white w-[250px]`}>
                        {/* <TypeWriterEffect 
                            startDelay={1000}
                            multiText={[
                                "Hi, Winston Here.",
                                "Portfolio for your eyes.",
                                "Design and code pro.",
                                "My work wows all."
                             ]}
                            typeSpeed={100}
                            multiTextLoop={true}
                        /> */}
                        <h3>Hi, Winston Here</h3>
                    </h1>
                </div>
                </div>

                <ShibaCanvas />
            </div>

            <div className="absolute xs:bottom-10 md:bottom-40 bottom-32 w-full flex justify-center items-center">
                    <a href="#about">
                        <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
                            <motion.div 
                                animate={{
                                    y:[0,24,0]
                                }}
                                transition={{
                                    duration:1.5,
                                    repeat: Infinity,
                                    repeatType: 'loop'
                                }}
                                className="w-3 h-3 rounded-full bg-secondary mb-1"
                            />
                        </div>
                    </a>
            </div>

        </section>


    )
}
 
export default Hero;