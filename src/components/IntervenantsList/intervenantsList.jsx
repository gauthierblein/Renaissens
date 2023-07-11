import { useState, useRef, useEffect } from 'react'
import axios from 'axios'

import './intervenantsList.css'

function Intervenants(current) {
    
  const [myIntervenants, setMyIntervenants] = useState(null);
  useEffect(() => {
    axios.get('http://localhost:4001/intervenants').then((response) => {
      setMyIntervenants(response.data);
      console.log(myIntervenants)
    });
  }, []);

  let [index, setIndex] = useState(0)
  const length = current.length;
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
    
    if (!myIntervenants) return null

    return (
            <>
              <div className='intervenants__list'>
                {myIntervenants.map((partner, index) => {
              return <div  className="intervenant" key={index}>
              <div className="intervenant-pic">
                <img src={partner.pictureURL} alt="" />
              </div>
              <div className="intervenant-text">
                <h4>{partner.title}</h4>
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