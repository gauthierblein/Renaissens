import { useState, useRef, useEffect } from 'react'
import { BsFillPlayFill } from "react-icons/bs";
import { BsFillPauseFill } from "react-icons/bs";
import './intervenantsDiapo.css'

function Intervenants(current) {
    
    let [index, setIndex] = useState(0)
    const length = current.props.length;
    const timeoutRef = useRef(null);
    const delay = 5000;


    function resetTimeout() {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    }
  
    useEffect(() => {
      resetTimeout();
      timeoutRef.current = setTimeout(
        () =>
          setIndex((prevIndex) =>
            prevIndex === length - 1 ? 0 : prevIndex + 1
          ),
        delay
      );
      return () => {
        resetTimeout();
      };
    }, [index]);

    function pauseSlide () {
      return () => {resetTimeout()};
      
    }
     

    return (
            <>
              <div className='intervenants__container'>
                  <div className='intervenants__text'>
                    <h3>{current.props[index].name}</h3>
                    <p className='intervenants__description'>{current.props[index].description}</p>
                    <br />
                    <p className='intervenants__subDescription'>{current.props[index].subDescription}</p>
                  </div>
                  <img className='intervenants__img' src={current.props[index].pic} alt="imageSlider"/>
              </div>

              <div className='intervenants__list'>
                {current.props.map((partner, index) => {
              return <div  className="intervenant" key={index}>
              <div className="intervenant-pic">
                <img src={partner.pic} alt="" />
              </div>
              <div className="intervenant-text">
                <h4>{partner.name}</h4>
                <a href={partner.link}>{partner.link}</a>
                <h5>{partner.description}</h5>
                <p>{partner.subDescription}</p>
              </div>
              </div>
              })}
              </div>
            </>             
        )
    
}

export default Intervenants