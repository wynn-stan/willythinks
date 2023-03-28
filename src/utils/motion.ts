export const textVariant = (delay:number) => {
    return {
        hidden: {
            y: -50,
            opacity: 0
        },
        show:{
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                duration: 1.25,
                delay: delay
            }
        }
    }
}

export const fadeIn = (direction: string, type: string, delay:number, duration:number) => {
    return {
        hidden: {
            x:  direction === "left" ? 100 : direction === "right" ? -100 : 0,
            y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
            opacity: 0
        },
        show: {
            x: 0,
            y: 0,
            opacity: 1,
            transition: {
                type,
                delay,
                duration,
                ease: "easeOut"
            }
        }
    }
}

export const staggerContainer = (staggerChildren:number, delayChildren:number) => {
    return {
        hidden: {},
        show:{
            transition: {
                staggerChildren,
                delayChildren: delayChildren || 0
            }
        }
    }
}

export const slideIn = (direction:string, type:string, delay:number, duration:number) => {
    return {
        hidden: {
            x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
            y: direction === "down" ? "100%" : direction === "up" ? "-100%" : 0
        },
        show: {
            x: 0,
            y: 0,
            transition: {
                type,
                delay,
                duration,
                ease: "easeOut"
            }
        }
    }
}