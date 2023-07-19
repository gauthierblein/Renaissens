import { useState, useRef, useEffect } from 'react'
import axios from 'axios';
import "./intDiaporama.css"











const peoples = [
    {
    "pic":"https://i.postimg.cc/bY774X4s/geraldine-rudy.jpg",
     "name" : "Geraldine NER"
    },
    {
    "pic" : "https://i.postimg.cc/Vk5HH0x4/alexandra.jpg",
    "name" : "Alexandra POCENZO"
    },
    {
        "pic" : "https://i.postimg.cc/Hnw3nx3y/Manga-a-BAR.jpg",
        "name" : "Mangaia BAR"
    }    
];

const delay = 4000;

function IntDiaporama() {
  const [index, setIndex] = useState(0);
  let [length, setLength] = useState(10)
  const [myIntervenants, setMyIntervenants] = useState(null);

  const timeoutRef = useRef(null);


  useEffect(() => {
    axios.get('http://localhost:4001/intervenants').then((response) => {
      setMyIntervenants(response.data);
      setLength(response.data.length);
    });
  }, []);

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
    
    
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {myIntervenants.map((_, index) => (
          <div className="slide" key={index}>
            <img src={myIntervenants[index].pictureURL} alt="" />
                <h4>{myIntervenants[index].title}</h4>
                <p>{myIntervenants[index].description}</p>
            </div>
        ))}
      </div>

      <div className="slideshowDots">
        {myIntervenants.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );

        
}

export default IntDiaporama