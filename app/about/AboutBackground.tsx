"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

import { useEffect, useMemo, useState } from "react";

const codeParticles = [
  "const future = await build();",
  "01010101",
  "<System />",
  "npm run deploy",
  "AI.initialize()",
  "git commit -m 'innovation'",
  "while(true){ evolve(); }",
  "interface Vision {}",
  "docker compose up",
  "cloud.scale()",
];


export default function AboutBackground() {

const [mounted, setMounted] = useState(false);

useEffect(() => {
  setMounted(true);
}, []);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);


  const smoothX = useSpring(
    mouseX,
    {
      stiffness: 80,
      damping: 25,
    }
  );


  const smoothY = useSpring(
    mouseY,
    {
      stiffness: 80,
      damping: 25,
    }
  );



  const spotlightX = useTransform(
    smoothX,
    (value) => `${value}px`
  );


  const spotlightY = useTransform(
    smoothY,
    (value) => `${value}px`
  );



  useEffect(() => {


    const move = (
      e: MouseEvent
    ) => {

      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

    };


    window.addEventListener(
      "mousemove",
      move
    );


    return () =>
      window.removeEventListener(
        "mousemove",
        move
      );


  }, [mouseX, mouseY]);





  const particles = useMemo(
    () =>
      Array.from(
        {
          length: 35,
        },
        (_, i) => i
      ),
    []
  );



  return (

    <div
      className="
      fixed
      inset-0
      z-0
      overflow-hidden
      pointer-events-none
      "
    >



      {/* ======================
          MOUSE SPOTLIGHT
      ======================= */}


      <motion.div

        style={{
          left: spotlightX,
          top: spotlightY,
        }}

        className="
        absolute
        -translate-x-1/2
        -translate-y-1/2
        h-[500px]
        w-[500px]
        rounded-full
        bg-[#1E3A8A]/10
        blur-[120px]
        "
      />





      {/* ======================
          AURORA LIGHT BLOBS
      ======================= */}



      <motion.div

        animate={{
          x:[
            "-20%",
            "20%",
            "-20%",
          ],

          y:[
            "-10%",
            "20%",
            "-10%",
          ],

        }}

        transition={{
          duration:18,
          repeat:Infinity,
          ease:"easeInOut",
        }}

        className="
        absolute
        top-[-20%]
        left-[20%]
        h-[600px]
        w-[600px]
        rounded-full
        bg-[#2563EB]/12
        blur-[150px]
        "
      />




      <motion.div

        animate={{
          x:[
            "20%",
            "-10%",
            "20%",
          ],

          y:[
            "10%",
            "-20%",
            "10%",
          ],
        }}

        transition={{
          duration:22,
          repeat:Infinity,
          ease:"easeInOut",
        }}

        className="
        absolute
        bottom-[-20%]
        right-[10%]
        h-[700px]
        w-[700px]
        rounded-full
        bg-[#1E3A8A]/10
        blur-[180px]
        "
      />







      {/* ======================
          DIGITAL GRID
      ======================= */}



      <div

        className="
        absolute
        inset-0

        bg-[linear-gradient(to_right,rgba(226,232,240,0.8)_1px,transparent_1px)]
        bg-[size:80px_80px]

        "

      />



      <div

        className="
        absolute
        inset-0

        bg-[linear-gradient(to_bottom,rgba(226,232,240,0.8)_1px,transparent_1px)]
        bg-[size:80px_80px]

        "

      />







      {/* ======================
          FLOATING CODE PARTICLES
      ======================= */}



    {
  mounted && particles.map(
    (particle)=>(


          <motion.div

            key={particle}

            initial={{
              opacity:0,
              y:"100vh",
            }}


            animate={{

              opacity:[
                0,
                1,
                0,
              ],

              y:[
                "100vh",
                "-20vh",
              ],

              x:[
                0,
                Math.random()*120-60,
              ],

            }}


            transition={{

              duration:
                12 +
                Math.random()*12,

              repeat:
                Infinity,

              delay:
                Math.random()*10,

              ease:
                "linear",

            }}


            className="
            absolute
            text-xs
            font-mono
            text-[#2563EB]/20
            "

            style={{

              left:
                `${Math.random()*100}%`,

            }}

          >

            {
              codeParticles[
                particle %
                codeParticles.length
              ]
            }


          </motion.div>


          )
        )
      }







      {/* ======================
          BINARY RAIN
      ======================= */}



      {
        Array.from(
          {
            length:15,
          }
        )
        .map(
          (_,index)=>(


          <motion.div

            key={index}


            animate={{

              y:[
                "-20vh",
                "120vh",
              ],

            }}


            transition={{

              duration:
                8 +
                index,

              repeat:
                Infinity,

              ease:
                "linear",

              delay:
                index*0.5,

            }}



            className="
            absolute
            text-[10px]
            font-mono
            text-[#64748B]/20
            "

            style={{

              left:
              `${index*7}%`

            }}

          >

            010101010101


          </motion.div>


          )
        )
      }







      {/* ======================
          DARK OVERLAY
      ======================= */}



      <div

        className="
        absolute
        inset-0
        bg-gradient-to-b
        from-white/30
        via-transparent
        to-white
        "

      />



    </div>


  );

}