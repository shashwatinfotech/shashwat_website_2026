"use client";

import { motion } from "framer-motion";


const metrics = [

{
number:"250+",
label:"Projects Delivered"
},

{
number:"15M+",
label:"Users Impacted"
},

{
number:"99.99%",
label:"Platform Uptime"
},

{
number:"24/7",
label:"Engineering Support"
}

];



const systems = [

"Cloud Infrastructure",

"Distributed Systems",

"Artificial Intelligence",

"Cyber Security",

"Data Engineering",

"Automation"

];




export default function Infrastructure(){


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
max-w-7xl
mx-auto
"

>



<motion.div

initial={{
opacity:0,
y:40
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}

>


<p

className="
text-[#1E3A8A]
font-mono
tracking-[0.3em]
uppercase
text-sm
"

>

06 / INFRASTRUCTURE

</p>



<h2

className="
mt-8
text-5xl
md:text-7xl
font-semibold
text-[#0F172A]
"

>

Built for scale.
Designed for the future.

</h2>



<p

className="
mt-8
max-w-3xl
text-xl
text-[#334155]
"

>

Behind every product is a powerful
engineering foundation built with
modern architecture and reliable systems.

</p>



</motion.div>








{/* METRICS */}



<div

className="
mt-20
grid
grid-cols-2
md:grid-cols-4
gap-6
"

>


{

metrics.map(

(item,index)=>(


<motion.div


key={item.label}


initial={{
opacity:0,
y:40
}}


whileInView={{
opacity:1,
y:0
}}


viewport={{
once:true
}}


transition={{
delay:index*.1
}}


className="
rounded-3xl
border
border-[#E2E8F0]
bg-[#F8FAFC]
p-8
"

>


<h3

className="
text-5xl
font-semibold
text-[#1E3A8A]
"

>

{item.number}

</h3>



<p

className="
mt-3
text-[#334155]
"

>

{item.label}

</p>



</motion.div>


)

)

}



</div>








{/* SYSTEM BOX */}



<motion.div

initial={{
opacity:0,
scale:.95
}}

whileInView={{
opacity:1,
scale:1
}}

viewport={{
once:true
}}

className="
mt-20
rounded-3xl
border
border-[#E2E8F0]
bg-[#F8FAFC]
p-10
"

>


<div

className="
grid
md:grid-cols-3
gap-6
"

>


{

systems.map(

(system,index)=>(


<motion.div

key={system}

whileHover={{
scale:1.05
}}

className="
rounded-xl
border
border-[#E2E8F0]
px-6
py-5
font-mono
text-sm
text-[#334155]
"

>


<span className="text-[#1E3A8A]">

01

</span>


&nbsp; / &nbsp;


{system}



</motion.div>


)

)

}



</div>


</motion.div>





</div>


</section>


);


}