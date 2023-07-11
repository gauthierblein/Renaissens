import { useState, useRef, useEffect } from 'react'
import { BsFillPauseFill } from "react-icons/bs";
import axios from 'axios'

import './intervenantsDiapo.css'

function IntervenantsDiapoCopy(current) {
    
  const [myIntervenants, setMyIntervenants] = useState(null);
  let [length, setLength] = useState(9)
  useEffect(() => {
    axios.get('http://localhost:4001/intervenants').then((response) => {
      setMyIntervenants(response.data);
      setLength(response.data.length);
      console.log(myIntervenants)
      console.log(length)
    });
  }, []);

  let [index, setIndex] = useState(0)
  let [isplaying, setIsPlaying] = useState(true)
  const timeoutRef = useRef(null);
  const [delay, setDelay] = useState(5000);

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
        setIsPlaying(false) 
        setDelay(500000000)
    }
    
    
    if (!myIntervenants) return null

    return (
            <>
              <div className={isplaying===true ? 'intervenants__container' : 'intervenants-static'}>
                  <div className='intervenants__text'>
                    <h3>{myIntervenants[index].title}</h3>
                    <p className='intervenants__description'>{myIntervenants[index].description}</p>
                    <br />
                    <p className='intervenants__subDescription'>{myIntervenants[index].subDescription}</p>
                  </div>
                  <img className='intervenants__img' src={myIntervenants[index].pictureURL} alt="imageSlider"/>
                  <div className='diapo-btn'>
                    <BsFillPauseFill size={50} onClick={pauseSlide}/>
                  </div>
              </div>  
              
            </>             
        )
    
}

export default IntervenantsDiapoCopy