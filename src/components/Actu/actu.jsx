import axios from 'axios'
import { useState, useEffect } from "react"

import  "./actu.css"


const Actu = () => {

    const PF = "https://renaissens-back.adaptable.app/uploads/";
    const [allPosts, setPosts] = useState(null);
  
    useEffect(() => {
        axios.get('https://renaissens-back.adaptable.app/posts/').then((response) => {
              setPosts(response.data);
              console.log(response)
        });
        }, []);
        console.log(allPosts)


    if (!allPosts) {
    return null
    }

    return (
        <div className="actu-container">
            <div className="news-title"><h2>Actualités</h2></div>
            <div className='news-container'>

            {allPosts.map((post) => {
                return <div key={post._id} className='post'>                 
                    <div className='post-infos'>
                        <h3>{post.title}</h3>
                        <p className='post-desription'>{post.description}</p>
                        <p>{post.subDescription}</p>
                        <div className='post-link'>{post.link}</div>
                    </div>
                    <div className='post-img'>
                        <img src={PF + post.cover} className="post-pic" alt='' />
                    </div>
                    
                </div>
            })}
            

            </div>

        

        </div>
    )

}

export default Actu