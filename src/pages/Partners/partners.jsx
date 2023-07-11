import { Link } from "react-scroll"
import Header from "../../components/Header/header"
import IntervenantsList from "../../components/IntervenantsList/intervenantsList"
import IntervenantsDiapoCopy from "../../components/IntervenantsDiapo/intervenantsDiapo"
import SlideShow from "../../components/SlideShow/slideShow"
import './partners.css'

// Images
import grandesTerresMain from '../../assets/img/lesGrandesTerres-main.jpg'

  function Partners () {

    const facility = [
			"https://i.postimg.cc/C5YdJ80R/les-Grandes-Terres-main.jpg",
      "https://i.postimg.cc/qRGpJ5f7/hebergement1.webp",
      "https://i.postimg.cc/tR575g7f/img-4690.webp",
      "https://i.postimg.cc/rFwsYLrp/nd54572.webp",
      "https://i.postimg.cc/65b3k1rf/nd54579.webp"
    ];

    return (
    <div>
      <Header/>
      <div className="partners-container"> 
        <div className="nav-prestations">
          <Link to ="intervenants" className="nav-partners-link">Intervenants</Link>
          <Link to ="structures" className="nav-partners-link">Structures</Link>
        </div>

        <div name="intervenants" className="partners">
          <div name="intervenants" className="partner">
            <h2>Intervenants</h2>
            <IntervenantsDiapoCopy />
            <IntervenantsList />
          </div>

          <div  name="structures"className="partner">
            <h2>Structures</h2>
            <div className="facilities">
              <div className="facilities-text">
                <h3>Les grandes terres - Francheville</h3>
                <p>Un lieu calme, convivial et ouvert à tous, pour cultiver le corps et l’esprit.. </p>
                <p>Situé chemin du Grand Moulin, 69340 Francheville</p>
                <br />
                <p>Association loi 1901 à but non lucratif, l’objet des Grandes Terres est l’étude des sciences du corps et de l’esprit sur la base des enseignements du Bouddha. Nous sommes rattachés spirituellement à Dhagpo Kagyu Ling. Centre Européen de la ligné Karma Kagyu du bouddhisme tibétain.</p>
                <br />
                <a href="https://www.lesgrandesterres.org/">voir le site</a>
              </div>
              <div className="facilities-img">
                <img src={grandesTerresMain} alt="Les Grandes Terres à Francheville" />
              </div>
            </div>
            <SlideShow props={facility} />

          </div>     

        </div>
      </div>
    </div>  
  

  )
}

export default Partners
