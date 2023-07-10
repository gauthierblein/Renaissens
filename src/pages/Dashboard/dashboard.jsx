import { Link } from "react-scroll"
import { NavLink } from 'react-router-dom'

import CreatePost from '../../components/CreatePost/createPost'
import MyPosts from '../../components/MyPosts/myPosts'
import CreateEvent from "../../components/CreateEvent/createEvent"
import MyEvents from "../../components/MyEvents/myEvents"

import './dashboard.css'



const Dashboard = () => {

    return (
        <div className="dashboard-container">
            <div className='dashboard-nav'>
                <Link to ="createPost" className="nav-dashboard-link">Créer une actu</Link>
                <Link to ="editPost" className="nav-dashboard-link">Mes actus</Link>
                <Link to ="createEvent" className="nav-dashboard-link">Créer un évènement</Link>
                <Link to ="editEvent" className="nav-dashboard-link">Mes évènements</Link>
                <Link to ="createPost" className="nav-dashboard-link">Créer un témoignages</Link>
                <Link to ="editPost" className="nav-dashboard-link">Mes témoignages</Link>
                <Link to ="createPost" className="nav-dashboard-link">Créer un intervenant</Link>
                <Link to ="editPost" className="nav-dashboard-link">Mes intervenants</Link>
            </div>
            <NavLink to ="/" className="close-session-btn">Fermer session</NavLink>
            <div name="createPost"><CreatePost /></div>
            <div name="editPost"><MyPosts /></div>
            <div name="createEvent"><CreateEvent /></div>
            <div name="editEvent"><MyEvents /></div>

        </div>
    )

}

export default Dashboard