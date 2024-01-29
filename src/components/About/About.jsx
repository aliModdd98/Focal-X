import React, { useEffect, useState } from 'react'
import "./AboutStyle.css"
import { useInView } from 'react-intersection-observer';


const CounterCell = ({ initialValue, inView }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (inView) {
      const timer = setInterval(() => {
        setCount((prevCount) => {
          if (prevCount < initialValue) {
            return prevCount + 1;
          } else {
            clearInterval(timer);
            return prevCount;
          }
        });
      }, 30);

      return () => {
        clearInterval(timer);
      };
    }
  }, [initialValue, inView]);

  return <span className="cell num">{count}</span>;
};
const About = ({title, description,subT,subSTit,descSub,cardsA}) => {
   const [ref, inView] = useInView({
    triggerOnce: true, 
  });
  return (
    <div className='aboutCont'>
     <div className="aboutS">
     <h1 className='titA'>{title}</h1>
      <p className='descAbout'>{description}</p>
      <h1 className='subAbo'>{subT}</h1>
     <div className="infoS">
     <p  >{subSTit}</p>
    <p >{descSub}</p>
     </div>
     </div>
     <div className="cardsA" ref={ref}>
        {cardsA.map((e) => (
          <div key={e.id} className="itemAbout">
            <h1 className="numA">{inView && <CounterCell initialValue={e.num} inView={inView} />}
</h1>   <p className="typeAb">{e.type}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default About
