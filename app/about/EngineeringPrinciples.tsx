"use client";

import { motion } from "framer-motion";


interface Principle {

  title:string;
  description:string;
  icon:string;

}


export default function EngineeringPrinciples({

  principles

}:{

  principles:Principle[];

}) {


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

03 / ENGINEERING PRINCIPLES

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

How we think.
How we build.

</h2>



</motion.div>






<div

className="
mt-16
grid
md:grid-cols-2
lg:grid-cols-3
gap-6
"

>


{

principles.map(

(item,index)=>(


<motion.div


key={item.title}


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
delay:index*0.1
}}



whileHover={{
y:-8
}}



className="
group
rounded-3xl
border
border-[#E2E8F0]
bg-[#F8FAFC]
p-8
backdrop-blur-xl
"

>


<div

className="
text-4xl
text-[#1E3A8A]
"

>

{item.icon}

</div>



<h3

className="
mt-6
text-2xl
font-semibold
text-[#0F172A]
"

>

{item.title}

</h3>



<p

className="
mt-4
text-[#334155]
leading-relaxed
"

>

{item.description}

</p>



</motion.div>


)

)

}



</div>



</div>


</section>


);

}