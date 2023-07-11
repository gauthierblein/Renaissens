import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import axios from "axios";
import '../../components/CreatePost/createPost.css'


export default function CreateTestimonial() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [subDescription, setSubDescription] = useState("");
  const [link, setLink] = useState("");
  const [file, setFile] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      title,
      description,
      subDescription,
      link
    };
    if (file) {
      const data =new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.cover = filename;
      try {
        await axios.post('http://localhost:4001/upload', data);
      } catch (err) {}
    }
    try {
      const res = await axios.post('http://localhost:4001/create/testimonials', newPost);
      alert("nouveau témoignage créé")
      navigate(`/dashboard/`);
      window.location.reload(true);
    } catch (err) {}
  };
  return (
    <>
      <h1 className="create-title">Créer témoignage</h1>
      <div className="form-container">
        <form className="form" onSubmit={handleSubmit}>

            <label htmlFor="fileInput"></label>
            <input type="file" id="fileInput" onChange={(e) => setFile(e.target.files[0])}/>
            
            <input  type="text"
                    placeholder="Titre"
                    autoFocus={true}
                    onChange={e=>setTitle(e.target.value)}
            />
            <input  type="text"
                    placeholder="Description"
                    autoFocus={true}
                    onChange={e=>setDescription(e.target.value)}
            />
            <textarea  name="description"
                    placeholder="Sous-description"
                    rows={8} cols={40}
                    autoFocus={true}
                    onChange={e=>setSubDescription(e.target.value)}
            />
            <input  type="text"
                    placeholder="Lien"
                    autoFocus={true}
                    onChange={e=>setLink(e.target.value)}
            />

            <button className="writeSubmit" type="submit">Publier</button>
        </form>
      </div>
      </>
  );
}
  
