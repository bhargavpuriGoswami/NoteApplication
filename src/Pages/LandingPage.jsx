import React, {useEffect, useState} from "react";
import { motion,useAnimate, useInView } from "framer-motion"

function LandingPage(){
    const [scope, animate] = useAnimate()
    const isInView = useInView(scope)
  
    
    async function animation() {
        await animate("#paragraph",
        { x:"-30%",opacity:0},
        { duration:0.01}
        )
        await animate("#paragraph",
        { opacity:1},
        { duration:0.5}
        )
        await animate("#paragraph",
        { x:"-13%",opacity:1},
        { type: "spring", duration: 1.5 },
        )
        await animate("#title",
        { x:"-1%",opacity:1},
        { type: "spring", duration: 2 },
        )
    }
    useEffect(() => {
     if (isInView) {  
        animation()  
    }
    }, [isInView])

    return <>
    <div ref={scope} className="landing-page flex items-center">
        <div className="flex flex-col w-full h-1/2 justify-center text-center">
                <motion.p whileHover={{ scale: 1.10 }} id="paragraph" className="smallTitle mb-8 opacity-0 text-black">Dont forget,</motion.p>
                <motion.h1  id="title" className="title text-9xl opacity-0 text-black"> Take a note</motion.h1>
        </div>
    </div>
    </>
}
export default LandingPage
