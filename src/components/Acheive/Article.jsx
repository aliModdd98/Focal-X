import React from 'react'
import "./AcheiveStyle.css"
const Article = ({isList,dateArticle,text, isLink,linkList,images}) => { return (
    <div className='ArticleX'>
     <div className="artUnder">
     {isList ? <>
     <ul>
       <li className='listCircle'>{dateArticle}</li> </ul></>
       : <div className='underDate'>{dateArticle}</div>}
     </div>
     <p className='articleText'>{text}</p>
     <div className="LinksArticle">
        {isLink? <>
           <span  className='linkAC'> Links</span> : {linkList.map((e,index)=>(<a key={index} className='linkArticle'>{e}</a>))}
        </> : ""}
     </div>
     <div className="articleImages">
        {images.map((e,index)=>(
            <img key={index} src={e} alt="Article-Images" />
        ))}
     </div>
    </div>
  )
}

export default Article
