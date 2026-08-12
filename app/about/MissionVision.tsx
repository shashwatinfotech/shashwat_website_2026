"use client";

import { motion } from "framer-motion";


const cards = [

  {
    title: "Our Mission",
    text:
      "To create reliable, intelligent and scalable technology that empowers teams to build extraordinary products.",
    icon: "◎",
  },

  {
    title: "Our Vision",
    text:
      "To become the engineering force behind the next generation of digital experiences.",
    icon: "◈",
  },

];



export default function MissionVision() {


  return (

    <section

      className="
      relative
      z-10
      px-6
      py-32
      "

    >


      <div

        className="
        max-w-6xl
        mx-auto
        grid
        md:grid-cols-2
        gap-8
        "

      >


        {
          cards.map((card, index) => (

            <motion.div

              key={card.title}


              initial={{
                opacity: 0,
                y: 50,
              }}


              whileInView={{
                opacity: 1,
                y: 0,
              }}


              viewport={{
                once: true,
              }}


              transition={{
                delay: index * 0.15,
              }}


              whileHover={{
                y: -10,
              }}


              className="
              group
              relative
              overflow-hidden
              rounded-3xl
              border
              border-[#E2E8F0]
              bg-[#F8FAFC]
              p-10
              backdrop-blur-xl
              "

            >


              {/* Hover Glow */}

              <div

                className="
                absolute
                inset-0
                opacity-0
                group-hover:opacity-100
                transition
                bg-gradient-to-br
                from-[#1E3A8A]/10
                to-[#2563EB]/10
                "

              />



              {/* Content */}

              <div

                className="
                relative
                "

              >


                <p

                  className="
                  text-5xl
                  text-[#1E3A8A]
                  "

                >

                  {card.icon}

                </p>



                <h3

                  className="
                  mt-8
                  text-4xl
                  font-semibold
                  text-[#0F172A]
                  "

                >

                  {card.title}

                </h3>



                <p

                  className="
                  mt-6
                  text-[#334155]
                  text-lg
                  leading-relaxed
                  "

                >

                  {card.text}

                </p>


              </div>


            </motion.div>


          ))
        }


      </div>


    </section>


  );

}