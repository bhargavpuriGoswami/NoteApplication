import React, {useEffect} from "react";
import { useAnimate, useInView } from "framer-motion"
import Wave from 'react-wavify'


function Footer(){
    return <>
        <div className="absolute w-full bottom-0">
        <div className="footer absolute w-full bottom-0 bg-orange-200">
          <Wave className="w-screen h-full" fill='#f79902'
          paused={false}
          style={{ display: 'flex' }}
          options={{
            height: 5,
            amplitude: 25,
            speed: 0.2,
            points: 2
          }}
          />
        </div>
        <div className="relative w-full flex justify-center z-1">
          <p>
            © Made by Bhargav Goswami
          </p>
        </div>

        </div>

    </>
}

export default Footer