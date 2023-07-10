import axios from 'axios'
import { useState, useEffect } from "react"
import { Button, Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import './myPosts.css'



function MyPosts() {
    const PF = "http://localhost:4001/uploads/";

    const [myPosts, setMyPosts] = useState(null);
    const [updatedPost, setUpdatedPost] = useState(
        {   
            title:"" ,
            description: "",
            subDescription:"" ,
            link: ""
        });

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        axios.get('http://localhost:4001/posts').then((response) => {
          setMyPosts(response.data);
        });
      }, []);

      const deletePost = (id) => {
        console.log(id)
        axios.delete(`http://localhost:4001/deletepost/${id}`)
            .then((res) => console.log(res))
            .catch((err) => console.log(err))
        window.location.reload()
      }

      const updatePost = (_id, title, description, subDescription, link) => {
        setUpdatedPost((prev) => {
            return {
                ...prev,
                id: _id,
                title: title,
                description: description,
                subDescription: subDescription, 
                link: link,       
            }
        })
        handleShow();
      }

      const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdatedPost((prev) => {
          return {
            ...prev,
            [name]: value,
          };
        });
      };

      const saveUpdatedPost = () => {
        axios.put(`http://localhost:4001/updatepost/${updatedPost.id}`, updatedPost)
            .then((res) => console.log(res))
            .catch((err) => console.log(err))
        handleClose();
        console.log(updatedPost)
        window.location.reload()
      
    }
            
      if (!myPosts) return ("pas d annonce créée");
    
      let userPosts = myPosts
      return (
        <div className='myPosts-container'>

            <Modal className="modal-container" show={show} onHide={handleClose}>
                <Modal.Header className="modal-header" closeButton>
                    <Modal.Title className='modal-title'>Modify post</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Control
                        placeholder="title"
                        name="title"
                        onChange={handleChange}
                        value={updatedPost.title ? updatedPost.title : ""}
                    />
                    <Form.Control
                        placeholder="description"
                        name="description"
                        onChange={handleChange}
                        value={updatedPost.description ? updatedPost.description : ""}
                    />
                    <Form.Control
                        placeholder="sous-description"
                        name="subDescription"
                        onChange={handleChange}
                        value={updatedPost.subDescription ? updatedPost.subDescription : ""}
                    />
                    <Form.Control
                        placeholder="lien"
                        name="link"
                        onChange={handleChange}
                        value={updatedPost.link ? updatedPost.link : ""}
                    />
                </Modal.Body>
                <Modal.Footer className='modal-footer'>
                    <Button className ='modal-btn' variant="secondary" onClick={handleClose}> Close</Button>
                    <Button className ='modal-btn' variant="primary" onClick={saveUpdatedPost}>Save Changes</Button>
                </Modal.Footer>
            </Modal>

          <div className='gallery-container'>
            <h1>Mes actualités</h1>
            {userPosts.map((post) => {

              return <div key={post._id} className='gallery-post' >
                        <div className='gallery-data'>
                          <div className='gallery-text'>
                            <h2>{post.title}</h2>
                            <p>{post.description}</p>
                            <p>{post.subDescription}</p>
                            <p>{post.link}</p>
                          </div>
                          <img src={PF + post.cover} className="gallery-pic" alt='' />
                        </div>
                        <div className='myPosts-btn-container'>
                          <button className="myPosts-buttons" onClick={() => updatePost(post._id, post.title, post.description, post.subDescription, post.link)} >Modifier</button>
                          <button className="myPosts-buttons" onClick={() => deletePost(post._id)}>Effacer</button>
                        </div>
                      </div>
            })}
            </div>

            
    
        </div>   
      )
    
}

export default MyPosts