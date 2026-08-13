"use client";

import {
  motion
} from "framer-motion";



const stats = [
  {
    number:"5+",
    label:"Years Engineering"
  },
  {
    number:"50+",
    label:"Products Built"
  },
  {
    number:"100+",
    label:" Clients"
  },
  {
    number:"99.9%",
    label:"System Reliability"
  }
];



export default function FounderStory(){


return (

<section

className="
relative
z-10
py-32
px-6
"

>



<div

className="
max-w-6xl
mx-auto
"

>




<motion.div

initial={{
opacity:0,
y:50
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}

transition={{
duration:.8
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

01 / OUR STORY

</p>





<h2

className="
mt-8
text-5xl
md:text-7xl
leading-tight
font-semibold
text-[#0F172A]
"

>

Born from curiosity.
Built through engineering.

</h2>




<p

className="
mt-10
max-w-3xl
text-[#334155]
text-xl
leading-relaxed
"

>


Our journey started with a simple belief:
technology should not only solve problems,
it should create possibilities.

We combine deep engineering principles
with creative thinking to build systems
that survive tomorrow's challenges.


</p>


</motion.div>








{/* BIG QUOTE */}



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
mt-24
rounded-3xl
border
border-[#E2E8F0]
bg-[#F8FAFC]
p-10
md:p-16
backdrop-blur-xl
"


>



<h3

className="
text-3xl
md:text-5xl
italic
leading-tight
text-[#0F172A]
"

>

"Great software is not written.
It is engineered with intention."


</h3>


<p

className="
mt-8
text-[#64748B]
"

>

— Founder Philosophy

</p>



</motion.div>









{/* STATS */}



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

stats.map(

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
rounded-2xl
border
border-[#E2E8F0]
bg-[#F8FAFC]
p-8
"

>


<h4

className="
text-4xl
font-semibold
text-[#1E3A8A]
"

>

{item.number}

</h4>


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





</div>


</section>


)

}