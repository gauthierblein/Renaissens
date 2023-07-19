import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import axios from "axios";
import '../../components/CreatePost/createPost.css'


export default function CreateIntervenant() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [subDescription, setSubDescription] = useState("");
  const [link, setLink] = useState("");
  const [pictureURL, setPictureURL] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      title,
      pictureURL,
      description,
      subDescription,
      link
    };

  try {
      const res = await axios.post('https://renaissens-back.adaptable.app/create/intervenants', newPost);
      alert("nouvel intervenant créé")
      navigate(`/dashboard/`)
      window.location.reload(true);
      } catch (err) {}
  };
  return (
    <>
      <h1 className="create-title">Créer Intervenant</h1>
      <div className="form-container">
        <form className="form" onSubmit={handleSubmit}>

            <input  type="text"
                    placeholder="Nom de l'intervenant"
                    autoFocus={true}
                    onChange={e=>setTitle(e.target.value)}
            />
            <input  type="text"
                    placeholder="URL de l'image"
                    autoFocus={true}
                    onChange={e=>setPictureURL(e.target.value)}
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
  
