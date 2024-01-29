import React from 'react'
import "./HostStyle.css"
import HostCard from './HostCard'
import n1 from "./../../assets/Ellipse1.png"
import n2 from "./../../assets/Ellipse2.png"
import n3 from "./../../assets/Ellipse13.png"
import n4 from "./../../assets/Ellipse3.png"
import n5 from "./../../assets/Ellipse10.png"
import n6 from "./../../assets/Ellipse9.png"
import n8 from "./../../assets/Ellipse8.png"
import n9 from "./../../assets/Ellipse12.png"
import n10 from "./../../assets/Ellipse4.png"
import n11 from "./../../assets/Ellipse7.png"
import n12 from "./../../assets/Ellipse11.png"
const Hosting = () => {
 const HostingList=[{
  id:0,
  title:"Basic",
  desc:"for very small businesses and freelancers.",
  price:"$2.5",
  discount:"",
  keysArray :['Disk Space', 'Bandwidth', 'SubDomains', 'Parked Domains', 'E-mail Accounts', 'Cpanel (control panel)', 'Money Back Guarantee'],
  valuesArray :['500 M.B', '500 G.B', 'Unlimited', 'Unlimited', 'Unlimited', 'Yes', '14 Days'], 
  btn:"You will have 1 Gift",
  color:"#FF8500",
  isAbsolute:true,
  img:n2,
 },{
  id:1,
  title:"Pro",
  desc:"for Individuals that need sharing vlogs or need huge portfolio.",
  price:"$5",
  discount:"",
  keysArray :['Disk Space', 'Bandwidth', 'SubDomains', 'Parked Domains', 'E-mail Accounts', 'Cpanel (control panel)', 'Money Back Guarantee'],
  valuesArray :['3000 M.B', '3 TERA', 'Unlimited', 'Unlimited', 'Unlimited', 'Yes', '14 Days'], 
  btn:"1 Gift per/mo for year",
  color:"#A513FF",  
  isAbsolute:false,
 
 },{
  id:2,
  title:"Business",
  desc:"for Team that need sharing and reporting.",
  price:"$8",
  discount:"5% discount during 2022",
  keysArray :['Disk Space', 'Bandwidth', 'SubDomains', 'Parked Domains', 'E-mail Accounts', 'Cpanel (control panel)', 'Money Back Guarantee'],
  valuesArray :['5000 M.B', '5 TERA', 'Unlimited', 'Unlimited', 'Unlimited', 'Yes', '14 Days'], 
  btn:"3 Gifts per/mo for year",
  color:"#71AA27",
  isAbsolute:false,

 },{
  id:3,
  title:"Enterprise",
  desc:"for large companies that need admins & security ",
  price:"$12",
  discount:"8% discount during 2022",
  keysArray :['Disk Space', 'Bandwidth', 'SubDomains', 'Parked Domains', 'E-mail Accounts', 'Cpanel (control panel)', 'Money Back Guarantee'],
  valuesArray :['10000 M.B', '10 TERA', 'Unlimited', 'Unlimited', 'Unlimited', 'Yes', '14 Days'], 
  btn:"Just Call Us",
 color:"#1D5EDD",
 isAbsolute:true,
 img:n12,
 }
]
 
  return (
    <section className='bgBlack'>

      <div className="bubbleImgs">
        <img src={n1} alt="" className='img1H' />
        <img src={n3} alt="" className='img3H' />
        <img src={n4} alt="" className='img4H'/>
        <img src={n5} alt="" className='img5H'/>
        <img src={n6} alt="" className='img6H'/>
        <img src={n8} alt="" className='img8h'/>
        <img src={n9} alt="" className='img9h'/>
        <img src={n10} alt="" className='img10H'/>
        <img src={n11} alt="" className='img11H'/>
      </div>
      <h1 className='hostHeadline'>Hosting Pricing</h1>
    <div className="HostingCard">
      { HostingList.map((e,index)=>(
      
     <HostCard key={index} id={e.id} title={e.title} desc={e.desc} price={e.price} discount={e.discount} color={e.color} keysArray={e.keysArray} valuesArray={e.valuesArray} btn={e.btn} isAbsolute={e.isAbsolute} img={e.img}/>
      ))
         
      }
    
    </div>
    <div className="hostFooter">
      <p className='footerHosting'>Support all the features of personal websites, corporate sites, news and commercial sites with 24 hours technical support. </p>
   <p className='footerHf'>Go Online, choose your plan and Contact us on: <span className='conHost'> contact@focal-x.com</span> | <span className='conHost'>+963 935 033 139</span></p>
    </div>
    </section>
  )
}

export default Hosting
