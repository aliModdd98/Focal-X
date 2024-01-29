import React from 'react'

import { ServicesSection } from '../components/ServicesSection/ServicesSection'
import Hosting from '../components/Hosting/Hosting'
import About from '../components/About/About'
import Intern from '../components/InternShip/Intern'
import Acheive from '../components/Acheive/Acheive'

export const LandingPage = () => {
  const aboutS=[
    {id:0,
    title:"Who are we ? Why Us ? ",
    desc:"WE are a family of worldwide 75 specialist s of storytellers and marketers brand builders, and designers, in addition to programmers and developers.",
    subT:"However, why choose us?",
    descSub:"If you still do not know the answer to that question, well, then let us tell you a story ....",
    subST:"Two people, who carry the same name set off focal X in 10/06/2021 Unfunded,we started with an asset of $50 only. However, within two weeks we reached 14,000 followers and potential customers, Two months later, our staff had over 70 creative people and 100 clients and partners in various countries around the world. Three months after, we took part in events and conferences with great achievements in hand,until we reached you, placing all our expertise at your service. "
   , cardsD:[{
    id:0,
    num:78,
    type:"Employees"

   },
   {
    id:1,
    num:102,
    type:"Interns"

   },{
    id:2,
    num:13,
    type:"Partners"

   },{
    id:3,
    num:150,
    type:"Clients"

   }]
  }]

  return (
    <>

       <ServicesSection/>
       <Hosting/>
       {aboutS.map((e)=>(
       <About key={e.id} title={e.title} description={e.desc} subT={e.subT} subSTit={e.descSub} descSub={e.subST} cardsA={e.cardsD}/>
    
       ))}
       <Intern />
       <Acheive/>
      
    
    </>
  )
}
