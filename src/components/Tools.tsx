import React from "react";
import {BallCanvas} from "./Canvas";
import { tools } from "../constants";
import SectionWrapper from "../hoc/SectionWrapper";

const Tech = () => {
    return (
        <div className="flex flex-row flex-wrap justify-center gap-10">
            {tools.map((tool) => (
                <div className="w-28 h-28" key={tool.name}>
                    <BallCanvas icon={tool.icon}/>
                </div>
            ))}
        </div>
    );
}
 
export default SectionWrapper(Tech, "tech");