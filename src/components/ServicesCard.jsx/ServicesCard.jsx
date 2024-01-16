import React from 'react'
import "./ServicesCardStyle.css"

export const ServicesCard = ({id,radius,color,mainImg,position,boxShadow,title,desc,subTitle,list,phrase,img,logo}) => {
  return (  
<div className="card" >
    <img  src={mainImg} alt="Vector" className='img' />
<div className={`innerCard ${id % 2 === 0 ? 'leftX' : 'rightX'}`} style={{ boxShadow: boxShadow ,borderRadius: radius}} >
   <div className="Service">
   <h2 className='titleCard' style={{ '--lineColor': color }}>{title}</h2>
   <p className='description' >{desc} </p>
   <h4 className='sub'>{subTitle}</h4>
   <ul>
    {list.map((e)=>(<li className='Alist'>{e}</li>))}
   </ul>
   <h4  className='phrase'>{phrase}</h4>
   </div>
   <div className={`Xicon ${id % 2 === 0 ? 'leftX' : 'rightX'}`}>
    <img src={img} alt="X"  className='Ximg' style={position}/>
   <div className="XImg">
   <img src={logo} className='Xlogo'/>
   </div>
   </div>
</div>
</div>


  )
}
