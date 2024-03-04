import React, {useEffect, useState} from "react";
import { motion,useAnimate, useInView } from "framer-motion"
import LoadingImage from "../images/LoadingImage-2.gif"

function LoadingPage() {
    return ( 
        <>
            <div className="w-full flex justify-center">
                <img className="" src={LoadingImage} />
            </div>
            
        </>
     );
}

export default LoadingPage;