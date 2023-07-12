import { Link } from "react-scroll"
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from "react";

//Components
import CreatePost from '../../components/CreatePost/createPost'
import MyPosts from '../../components/MyPosts/myPosts'
import CreateEvent from "../../components/CreateEvent/createEvent"
import MyEvents from "../../components/MyEvents/myEvents"
import CreateTestimonial from "../../components/CreateTestimonial/createTestimonial"
import MyTestimonials from "../../components/MyTestimonials/myTestimonials"
import CreateIntervenant from "../../components/CreateIntervenant/createIntervenant"
import MyIntervenants from "../../components/MyIntervenants/myIntervenants"

import './dashboard.css'



const Dashboard = () => {

    const [isLoggedin, setIsLoggedin] = useState(false);
    useEffect(() => {
    const loggedInUser = localStorage.getItem("authenticated");
    if (loggedInUser) {
      setIsLoggedin(true);
    }
    }, []);

    const navigate = useNavigate();

    function logOut() {
        setIsLoggedin(false);
        localStorage.removeItem("authenticated");
        navigate(`/`);
    }

    if (isLoggedin===false) {
        return <div className="dashboard-unknown">
                    <p>Non authentifié</p>
                    <br />
                    <br />
                    <p>Accéder à la page d'identification</p>
                    <br />
                    <div><NavLink to ="/azertyuiop123456789">S'identifier</NavLink></div>
                </div>
    } else {

    return (
        <div className="dashboard-container">
            <div className='dashboard-nav'>
                <Link to ="createPost" className="nav-dashboard-link">Créer une actu</Link>
                <Link to ="editPost" className="nav-dashboard-link">Mes actus</Link>
                <Link to ="createEvent" className="nav-dashboard-link">Créer un évènement</Link>
                <Link to ="editEvent" className="nav-dashboard-link">Mes évènements</Link>
                <Link to ="createTestimonial" className="nav-dashboard-link">Créer un témoignages</Link>
                <Link to ="editTestimonial" className="nav-dashboard-link">Mes témoignages</Link>
                <Link to ="createIntervenant" className="nav-dashboard-link">Créer un intervenant</Link>
                <Link to ="editIntervenant" className="nav-dashboard-link">Mes intervenants</Link>
            </div>
            <button onClick={logOut} className="close-session-btn">Fermer session</button>
            <div name="createPost"><CreatePost /></div>
            <div name="editPost"><MyPosts /></div>
            <div name="createEvent"><CreateEvent /></div>
            <div name="editEvent"><MyEvents /></div>
            <div name="createTestimonial"><CreateTestimonial /></div>
            <div name="editTestimonial"><MyTestimonials /></div>
            <div name="createIntervenant"><CreateIntervenant /></div>
            <div name="editIntervenant"><MyIntervenants /></div>

        </div>
        )
    }
}

export default Dashboard