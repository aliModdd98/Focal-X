import React from 'react'

const HostCard = ({title,id, desc, price,discount,keysArray,valuesArray,btn,color,isAbsolute,img}) => {
    const cardStyle = {
         borderTop: `22px solid ${color}`,
         position: {isAbsolute} ? "relative" : "static",
        };
        const colorDiscount={
            color:`${color}`
        }
    const btnStyle={
        border:`1px solid ${color}`,
        color:`${color}`
    }
   
    return (
    <div className='hostCard' style={cardStyle}>
     <h1 className="titleH">
        
         {title}</h1>  
     <p className="descH">{desc}</p>
    <div className="priceInfo">
    <h1 className="PriceH">{price}/mo</h1>
    <p className="discountH" style={colorDiscount}>{discount}</p>
    </div>
        <ul className="hostList">
            {keysArray.map((key ,index)=>(
                 <li key={index} className="hostItem">
                 <span className='typeHost'>{key}:</span><span className="valueHOST"> {valuesArray[index]}</span>
               </li>
            ))}
        </ul>
   <button className='hostBtn' style={btnStyle}>{btn}</button>
{ isAbsolute ? <img src={img} alt={`s${id}`} className={`img${id +20}H`}/> :" "}
    </div>
  
  )
}

export default HostCard
