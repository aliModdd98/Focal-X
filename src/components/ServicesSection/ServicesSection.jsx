import React from 'react'
import "./ServicesStyle.css"
import { ServicesCard } from '../ServicesCard.jsx/ServicesCard'
import img1 from "./../../assets/orange.png"
import img2 from "./../../assets/v6.png"
import img3 from "./../../assets/vector7.png"
import img4 from "./../../assets/blue.png"
import x2 from "./../../assets/layer3.png"
import x1 from "./../../assets/layer1.png"
import x3 from "./../../assets/layer2.png"
import v1 from "./../../assets/v2.png"
import v3 from "./../../assets/v4.png"
import v2 from "./../../assets/v1.png"
import v4 from "./../../assets/v3.png"
export const ServicesSection = () => {
 
  const arr=[{
    id:0,
    mainImg:v1,
    img:img1,
    title:"Branding"
    ,desc:"The brand is hope,It is also the source of inspiration for everything you do when you deal with your customers and that is the important and emotional thing. Your Brand and Visual identity represents an intrinsic Value to your company."
    ,subTitle:"In focal X agency, we provide:"
    ,list:["Visual identity design.","Define Brand Identity.","Define Brand personality.","Building Your brand strategy.","Market research and competitors study."],
    phrase:"We walk with you from A to Z."
  },
  {
    id:1,
    mainImg:v2,
    title:"Marketing",
    desc:"Talk to your customers and tell them about you and your company's story through us the way you want.Let us plan the content that will bring your audience closer to you.",
   subTitle:"In our marketing agency, we provide:",
   list:["E-mail marketing.","Affiliate marketing.","Influencer marketing.","Copy & content writing.","Market research and Analysis.","App store optimization ( ASO ).","Search engine Marketing ( SEM ).","Search engine optimization ( SEO ).","Social media marketing & campaigns."],
  phrase:"",
   img:img2,
    logo:x1,
  },{
    id:2,
    mainImg:v3,
    title:"Web/App Development",
    desc:"Your website or app is the same as your digital company built from graphics and software.",
  subTitle:"In focal X agency, we provide:", 
  list:["Case Study.","UX research.","Ui/Ux design.","Usability Testing.","Hosting Services.","App Development.","Web development.","Research & Prototyping.","consumer behavior study.","Conversion Rate Optimization."],  
  phrase:"",
  img:img3,
    logo:x2,
  },{id:3,
    mainImg:v4,
    title:"B2B & Partnerships",
    desc:"We believe that a successful business requires successful partners and successful partnerships, Based on our belief in work and sustainable development goal No. 17,",
   subTitle:"whether you:",
   list:["Huge company","Start-up company.","Creative design agency.","Digital marketing agency.","You have small or large company."],
   phrase:"We are here to empowered you, you are welcome you to join our Partner Program.",
   img:img4,
    logo:x3,
  }
]
const getColor = (index) => {
  const colorValues = [
   '#FF9800',
   '#A513FF',
   '#71AA28',
   '#1D5EDD',
 ];
 return colorValues[index % colorValues.length];
};
  const getBoxShadow = (index) => {
     const boxShadowValues = [
      '5 5 0 0 rgba(255, 87, 51, 0.5)',
      '5 5 0 0 rgba(255, 87, 51, 0.5)',
      '5 5 0 0 rgba(255, 87, 51, 0.5)',
      '5 5 0 0 rgba(255, 87, 51, 0.5)',
    ];
    return boxShadowValues[index % boxShadowValues.length];
  };
  const getRadius = (index) => {
    console.log("nn")
    return index % 2 === 0 ? '0px 44px 44px 0px' : '44px 0px 0px 44px';
  };
  return (
    <>
    <center>
    <h2 className='headline'>Our Services</h2>
    </center>
   <section className='myContainer'>
   
      {
      arr.map((e)=>(
       <ServicesCard key={e.id} color={getColor(e.id)} radius={getRadius(e.id)} boxShadow={getBoxShadow(e.id)} title={e.title} desc={e.desc} subTitle={e.subTitle} list={e.list} phrase={e.phrase} img={e.img} logo={e.logo} mainImg={e.mainImg} id={e.id}/>
      ))
     }
   
   </section></>
  )
}
