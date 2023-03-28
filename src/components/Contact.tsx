import {useState, useRef, FormEvent} from "react";
import {motion} from "framer-motion";
import { styles } from "../styles";
import {EarthCanvas} from "./Canvas";
import SectionWrapper from "../hoc/SectionWrapper";
import {slideIn} from "../utils/motion";

const Contact = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: ""
    })
    const [loading, setLoading] = useState(false)

    const handleChange = (e:FormEvent) => {}

    const handleSubmit = (e:FormEvent) => {}

    return (
        <motion.div initial="hidden" whileInView="show" viewport={{once:true}} className="xl:mt-12 flex flex-col-reverse xl:flex-row gap-10 overflow-hidden">
            <motion.div
                variants={slideIn("left", "tween", 0.2, 1)}
                className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
            >
                <p className={styles.sectionSubText}>Get in touch</p>
                <h3 className={styles.sectionHeadText}>Contact</h3>

                <form 
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="mt-12 flex flex-col gap-8"
                >
                    <label className="flex flex-col">
                        <span className="text-white font-medium mb-4">Your Name</span> 
                        <input 
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="What's your name?"
                            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-g outlined-none border-none font-medium"
                        />
                    </label>

                    <label className="flex flex-col">
                        <span className="text-white font-medium mb-4">Your Email</span> 
                        <input 
                            type="text"
                            name="name"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="What's your email?"
                            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-g outlined-none border-none font-medium"
                        />
                    </label>

                    <label className="flex flex-col">
                        <span className="text-white font-medium mb-4">Your Message</span> 
                        <textarea
                            rows={7} 
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            placeholder="What's your message?"
                            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-g outlined-none border-none font-medium"
                        />
                    </label>

                    <button
                        type="submit"
                        className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
                    >
                        {loading ? "Sending..." : "Send"}   
                    </button>
                </form>
            </motion.div>

            <motion.div
                variants={slideIn("right", "tween", 0.2, 1)}
                className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
            >
                <EarthCanvas />
            </motion.div>
        </motion.div>
    )
}
 
export default SectionWrapper(Contact, "contact");