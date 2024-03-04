import React, {useEffect, useState} from "react";
import { motion,useAnimate, useInView } from "framer-motion"
import {useNavigate} from "react-router-dom";

function NoNotes() {
    const navigate = useNavigate();
    return ( <>
        <div className="w-full  h-96 flex justify-center items-center">
            <motion.p 
                onClick={()=>navigate("/add-notes")}
                style={{}}
                animate={{ scale:[1,1.5,1] }}
                transition={{ ease: "linear", duration: 6, repeat: Infinity }}
                id="paragraph" >Write your first note
            </motion.p>
        </div>
    </> );
}

export default NoNotes;
