import React from 'react'
import "./AcheiveStyle.css"
import img1 from "./../../assets/img1.png"
import img2 from "./../../assets/img4.png"
import img3 from "./../../assets/img3.png"
import img4 from "./../../assets/img2.png"
import design from "./../../assets/design.png"
import Article from './Article'
const Acheive = () => {
    const articlesList= [
     {id:0,
          isList:true,
        date:"10 Mars 2022",
      article:"Inviting us to participate in the first international exhibition for security and safety SAS Expo,to display our special technology in surveillance systems through facial recognition,the use of artificial intelligence techniques and deep neural networks CNN, elicitation of facial patterns and features. Sponsored by the Ministry of Communications and Technology.",
    isLinks:true,
    linkList:["Articles" ,"Videos"],
    images:[img1,img2,img3,img4]}, 
    {id:1,
      isList:true,
    date:"27 Mars 2022",
    article:"officially invited as focal X agency to attend the EMBEDDED TECH CONVENTION 2022 in Las Vegas because of our progress in the field of User Interface Design to be the first Syrian company to be invited to such a conference.",
    isLinks:false,
    linkList:"",
    images:[]}, 
    {id:2,
      isList:true,
    date:"1 April 2022",
    article:"focal X agency announces its advertising sponsorship of the 3rd International Exhibition of Plastic Industries, PLASTex , also officially sponsored by the Ministry of Industry in the Syrian Arab Republic, with wide local and international participation.",
    isLinks:true,
    linkList:["Articles" ,"Videos"],
    images:[]},
     {id:3,
      isList:true,
    date:"3 April 2022",
    article:"focal X agency announces its advertising sponsorship of the International Exhibition of Chemical Industries, CHEM ex, also officially sponsored by the Ministry of Industry in the Syrian Arab Republic, with wide local and international participation.",
    isLinks:true,
    linkList:["Articles" ],
    images:[]}, 
    {id:4,
      isList:true,
    date:"10 April 2022",
    article:"Opening of the second free internship for university graduates in: Branding, Marketing, creative content writing and management specialists, Web/App Development, Business Administration, Public Relations and Human Resources Department.",
    isLinks:false,
    linkList:[],
    images:[]},
     {id:5,
      isList:false,
    date:"30 Aug 2022",
    article:"focal X Officially Registered as L.L.C in Three Countries. ",
    isLinks:false,
    linkList:[],
    images:[]},
     {id:6,
      isList:false,
    date:"1 Oct 2022",
    article:"Breast cancer early detection campaign, We sponsored Breast Cancer Awareness Month With the approval of the Governor of Lattakia.",
    isLinks:false,
    linkList:[],
    images:[]},
    {id:7,
      isList:false,
    date:"20 Jan 2023",
    article:"focal X Get Featured Among The Best Rebranding Examples by DesignRush for Al Haram Transfer Unofficial Redesign.",
    isLinks:false,
    linkList:[],
    images:[]}
      ]
    return (
    <div className='acheive'>
      <h1 className='achHeadline'> What We’ve achieved so far</h1>
      <div >
      { articlesList.map((e)=>(
            <Article key={e.id} isList={e.isList} dateArticle={e.date} text={e.article} isLink={e.isLinks} linkList={e.linkList} images={e.images}/>
        ))
      }
      </div>
      <div className="designAwards">
        <img src={design} alt="" />
      </div>
    </div>
  )
}

export default Acheive
