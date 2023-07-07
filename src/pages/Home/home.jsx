import { Link } from "react-scroll"

import Header from "../../components/Header/header"
import Banner from "../../components/Banner/banner"
import Agenda from "../../components/Agenda/agenda"
import About from "../../components/About/index"
import Contact from "../../components/Contact/Contact"
import image from '../../assets/img/renaissens-banner.jpg'
import './home.css'


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

        <div name="actu" className="actu-container">
          <h2>Actualité</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde inventore molestiae expedita, commodi incidunt, quae cum quibusdam, voluptatem quasi vero at adipisci quos dolore? Itaque nobis ipsum voluptatem eveniet temporibus.</p>
          <br />
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere facilis iste labore tempore consequuntur inventore voluptatibus eaque, cumque, mollitia autem, omnis provident temporibus repellendus amet dolor similique reprehenderit doloribus rerum?</p>
            <br />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde inventore molestiae expedita, commodi incidunt, quae cum quibusdam, voluptatem quasi vero at adipisci quos dolore? Itaque nobis ipsum voluptatem eveniet temporibus.</p>
          <br />
        </div>

        <Agenda/>
        <About/>

        <div name="testimonials" className="actu-container">
          <h2>Ils parlent de nous</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde inventore molestiae expedita, commodi incidunt, quae cum quibusdam, voluptatem quasi vero at adipisci quos dolore? Itaque nobis ipsum voluptatem eveniet temporibus.</p>
          <br />
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere facilis iste labore tempore consequuntur inventore voluptatibus eaque, cumque, mollitia autem, omnis provident temporibus repellendus amet dolor similique reprehenderit doloribus rerum?</p>
            <br />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde inventore molestiae expedita, commodi incidunt, quae cum quibusdam, voluptatem quasi vero at adipisci quos dolore? Itaque nobis ipsum voluptatem eveniet temporibus.</p>
          <br />
        </div>

        <Contact/>

      </div>

    </>
  )
}

export default Home
