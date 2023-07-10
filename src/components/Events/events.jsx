import axios from 'axios'
import { useState, useEffect } from "react"

import  "../Actu/actu.css"


const Events = () => {

    const PF = "http://localhost:4001/uploads/";
    const [allPosts, setPosts] = useState(null);
  
    useEffect(() => {
        axios.get('http://localhost:4001/events/').then((response) => {
              setPosts(response.data);
              console.log(response)
        });
        }, []);
        console.log(allPosts)


    if (!allPosts) {
    return null
    }

    return (
        <div className="event-container">
            <div className="news-title"><h2>Agenda</h2></div>
            <div className='news-container'>

            {allPosts.map((post) => {
                return <div key={post._id} className='post'>                 
                    <div className='post-img'>
                        <img src={PF + post.cover} className="post-pic" alt='' />
                    </div>
                    <div className='event-infos'>
                        <h3>{post.title}</h3>
                        <p className='post-desription'>{post.date}</p>
                        <p className='post-desription'>{post.description}</p>
                        <p>{post.subDescription}</p>
                        <div className='post-link'>{post.link}</div>
                    </div>                   
                </div>
            })}
            

            </div>

        

        </div>
    )

}

export default Events