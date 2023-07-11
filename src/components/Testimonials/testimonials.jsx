import axios from 'axios'
import { useState, useEffect } from "react"

import  "./testimonials.css"


const Testimonials = () => {

    const PF = "http://localhost:4001/uploads/";
    const [Testimonials, setTestimonials] = useState(null);
  
    useEffect(() => {
        axios.get('http://localhost:4001/testimonials/').then((response) => {
            setTestimonials(response.data);
            console.log(response)
        });
        }, []);
        console.log(Testimonials)


    if (!Testimonials) {
    return null
    }

    return (
        <div className="testimonials">
            <div className="testimonials-title"><h2>Ils parlent de nous</h2></div>
            <div className='testimonials-container'>

            {Testimonials.map((post) => {
                return <div key={post._id} className='testimonial'>                 
                    <div className='testimonial-infos'>
                        <h3>{post.title}</h3>
                        <p className='testimonial-desription'>{post.description}</p>
                        <p className='italic'>{post.subDescription}</p>
                        <div className='testimonial-link'>{post.link}</div>
                    </div>
                    <div className='testimonial-img'>
                        <img src={PF + post.cover} className="testimonial-pic" alt='' />
                    </div>
                    
                </div>
            })}
            

            </div>

        

        </div>
    )

}

export default Testimonials