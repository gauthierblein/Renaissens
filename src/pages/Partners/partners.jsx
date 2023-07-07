import { Link } from "react-scroll"
import Header from "../../components/Header/header"
import Intervenants from "../../components/IntervenantsDiapo/intervenantsDiapo"
import SlideShow from "../../components/SlideShow/slideShow"
import './partners.css'

// Images
import grandesTerresMain from '../../assets/img/lesGrandesTerres-main.jpg'

  function Partners () {

    const intervenants = [
      {
        "name": "Marc DE LA MENARDIERE",
        "description" : "Globetrotteur, Conférencier, Réalisateur du film documentaire En quête de sens et Co-fondateur de l’Espace Totem.",
        "subDescription" : "https://www.lakambrousse.org/",
        "pic": "https://i.postimg.cc/LskQbJkb/Marc-De-La-M-nardi-re.jpg"
      },
      {
        "name": "Arnaud RIOU",
        "description" : "Coach, écrivain et conférencier. Arnaud RIOU explore les différentes dimensions de l’être humain (physique, émotionnelle, relationnelle, spirituelle et créatrice) avant d’élaborer la voie de l’A.C.T.E.",
        "subDescription" : "Arnaud RIOU a mené pendant 20 ans une carrière au théâtre, au cinéma et pour la télévision en tant qu’acteur, metteur en scène et formateur d’acteurs. Il a joué dans une trentaine de pièces de théâtre, plus de 2000 représentations en France et à l’étranger. Arnaud étudie la sagesse tibétaine, amérindienne et celte et reçoit les enseignements sur la méditation et les yogas de maîtres et enseignants de différentes traditions : Lama Dudul Dorje, S.S. Kyabgön Chetsang Rinpoche, S.S. Drukchen Rinpoche, Lama Tenpa Gyatso, Garchen Rinpoche, Kyanchak Lama. Des rencontres déterminantes et éclectiques : d’autres rencontres influencent sa route : Arnaud Desjardins, Sudheer Roche, Anne Givaudan, Gilles Wurtz, le Docteur Dominique Bourdin, le Père Cyrille Pelard, le Chef Amérindien T8aminik Rankin. Il est l’auteur de : “Les Nouveaux Sages” aux éditions Solar, 2017 “Jouer le rôle de sa vie”  publié aux Editions de l’Homme, déjà dans 7 pays, “Méditation au quotidien”, Chez Hachette Pratique et de “Oser parler & Savoir dire”, publié aux Editions de l’Homme, sorti en Europe depuis avril 2012. www.arnaudriou.com/",
        "pic": "https://i.postimg.cc/fyGGm6f4/Arnaud-Riou-Chamane-jpg.webp"
      },
      {
        "name": "Frédéric LENOIR",
        "description" : "Philosophe et sociologue. Docteur de l’Ecole des Hautes Etudes en Sciences Sociales (EHESS).",
        "subDescription" : "Ecrivain. Auteur d’une cinquantaine d’ouvrages (essais, romans, contes, encyclopédies), traduits dans une vingtaine de langues et vendus à sept millions d’exemplaires dans le monde, il écrit aussi pour le théâtre, la télévision (documentaires) et la bande dessinée. Il a cofondé la Fondation SEVE, Savoir Être et Vivre Ensemble (sous l’égide de la Fondation de France) et il a créé l’association Ensemble pour les Animaux. Frédéric a travaillé sur la mise en place des cours de philosophie et de méditation dans les écoles pour apprendre aux enfants à s’interroger sur le monde et à développer leur sens critique.  Voir le film documentaire « Le cercle des petits philosophes » de Cécile Denjean.",
        "pic": "https://i.postimg.cc/HxWbznkH/frederic-lenoir.jpg"
      },
      {
        "name": "Mangaïa BAR",
        "description" : "Créatrice de joie de vivre, Coach, Formatrice.",
        "subDescription" : "Animatrice ateliers Yoga du rire – Chant intuitif – Ateliers Mandala – Soins énergétiques  Formation REIKI, agréé de Yoga du rire et Club du rire  Spécialisée interventions en entreprise : grands groupes, PME et associations",
        "pic": "https://i.postimg.cc/Hnw3nx3y/Manga-a-BAR.jpg"
      },
      {
        "name": "Morgane SCHUTZ",
        "description" : "Equicoach, Préparatrice mentale et Sophrologue",
        "subDescription" : "Formation professionnelle et certifiante de Coach Life & Business et Equicoaching Spécialisée en sophrologie et préparation mentale afin de proposer un accompagnement personnalisé et complet à chacun. « L’équicoaching en entreprise permet des prises de conscience immédiates. Dans des mises en situation seul ou en groupe, les participants sont amenés à développer un objectif précis émanant d’une problématique professionnelle (cohésion de groupe, management, leadership, gestion de conflits, communication, intégration…). Ils pourront utiliser plusieurs méthodes avec le cheval jusqu’à identifier celle à transposer dans leur quotidien. Le cheval authentique et sans jugement, est le meilleur allié pour une évolution professionnelle efficace et instantanée. »",
        "pic": "https://i.postimg.cc/MTyrMdpH/morgane.jpg"
      },
      {
        "name": "Virginie RASTELLO",
        "description" : "Coach, Formatrice et Thérapeute. Professionnelle de l’accompagnement, formée au coaching, à la thérapie, à la danse médecine, aux pratiques narratives et à intelligence collective.",
        "subDescription" : "Formation en Sciences Politiques / 3 ans d’intervention en tant que chef de missions humanitaires en Ex Yougoslavie et au Soudan. Plus de 10 ans d’expérience en tant que conseillère en création d’entreprise et conseillère en insertion professionnelle, dans le milieu associatif et au sein de collectivité territoriales. Chargée de mission et responsable d’association dans le milieu de l’économie sociale et solidaire. http://www.e-luminescences.fr/",
        "pic": "https://i.postimg.cc/tJGdPjMG/virginie-rastello.jpg"
      },
      {
        "name": "Alexandra MILAZZO",
        "description" : "Psychologue-Neuropsychologue-Conférencière-Sophrologue-Formatrice",
        "subDescription" : "Formée au CENATHO de Paris en sophrologie intégrative, Master 2 diplôme Europsy en neuropsychologie - Rédactrice blog c’est la vie – Le Huffpost  : http://www.huffingtonpost.fr/author/alexandra-milazzo/ - http://www.neuro-psychologue-cannes.fr",
        "pic": "https://i.postimg.cc/Vk5HH0x4/alexandra.jpg"
      },
      {
        "name": "Catherine ZABAY",
        "description" : "Spécialiste en Shiatsu formée aux écoles de Michel Sarre et de Marc Grimaud et adhérente à l’UFPST.",
        "subDescription" : "https://www.izenshiatsu.com/",
        "pic": "https://i.postimg.cc/Zq74CY00/catherine-zabay.jpg"
      },
      {
        "name": "Gauthier B Trainer",
        "description" : "Group Trainer et Personal Trainer - Spécialiste de la remise en forme et de la préparation physique",
        "subDescription" : "https://gbtrainer.eu»",
        "pic": "https://i.postimg.cc/pr4mcLgs/gb-Trainer.jpg"
      }
    ]

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
            <Intervenants props={intervenants} />
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
