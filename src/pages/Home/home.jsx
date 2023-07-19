import { Link } from "react-scroll"

import Header from "../../components/Header/header"
import Banner from "../../components/Banner/banner"
import About from "../../components/About/about"
import Actu from "../../components/Actu/actu"
import Events from "../../components/Events/events"
import Testimonials from "../../components/Testimonials/testimonials"
import Contact from "../../components/Contact/Contact"

import './home.css'

import image from '../../assets/img/renaissens-banner.jpg'



function Home() {

  const slogan = "Prendre un temps de réflexion pour mettre plus de sens dans nos actions"

  return (
    <>
      <Header/>
      <Banner image={image} title={slogan}/>
      <div className="home-container">

        <div className="nav-home">
          <Link to ="actu" className="nav-home-link">Actualité</Link>
          <Link to ="agenda" className="nav-home-link">Agenda</Link>
          <Link to ="about" className="nav-home-link">Nous connaître</Link>
          <Link to ="testimonials" className="nav-home-link">Ils parlent de nous</Link>
          <Link to ="contact" className="nav-home-link">Contact</Link>
        </div>

        <Actu />
        <Events />
        <About />
        <Testimonials />
        <Contact/>

      </div>

    </>
  )
}

export default Home
