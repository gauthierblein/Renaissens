import { Link } from "react-scroll"
import Header from "../../components/Header/header"
import './prestations.css'

// Images
import seminairePic from '../../assets/img/pexels-mikael-blomkvist-6476780.jpg'
import insuffler from '../../assets/img/insuffler.webp'
import inspirer from '../../assets/img/inspirer.jpg'
import congruence from '../../assets/img/congruence.jpg'
import food from '../../assets/img/sharing_food.webp'
import hebergement1 from '../../assets/img/hebergement1.webp'
import hebergement2 from '../../assets/img/hebergement2.webp'
import hebergement3 from '../../assets/img/hebergement3.webp'
import breakfast from '../../assets/img/breakfast.jpeg'
import kidsactivies1 from '../../assets/img/kids_activities1.jpg'
import kidsactivies2 from '../../assets/img/kids_activities2.jpg'
import artThérapie from '../../assets/img/art-therapie.jpg'
import yogaRire from '../../assets/img/yoga-rire.jpg'
import sophro from '../../assets/img/sophro.jpg'
import equiThérapie from '../../assets/img/equitherapie.jpeg'
import permaculture from '../../assets/img/permaculture.jpeg'
import pleineConscience from '../../assets/img/pleine-conscience.jpeg'
import yoga from '../../assets/img/yoga.jpeg'
import shiatsu from '../../assets/img/shiatsu.jpg'


  function Prestations () {
    return (
    <div>
      <Header/>
      <div className="prestations-container"> 
        <div className="nav-prestations">
          <Link to ="seminaires" className="nav-prestations-link">Retraites et séminaires</Link>
          <Link to ="hebergements" className="nav-prestations-link">Hébergements et restauration</Link>
          <Link to ="education" className="nav-prestations-link">Intervertions en structures éducatives</Link>
          <Link to ="ateliers" className="nav-prestations-link">Ateliers</Link>
        </div>

        <div className="prestations">
          <div name="seminaires" className="prestation">
            <div className="prestation-text">
              <h2>Retraites et Séminaires</h2>
              <p>Afin que les actions engagées aient un réel impact structurant nous proposons une organisation des séminaires en 3 temps :</p>
              <br />
              <div><p>1/ Insufler et Incarner</p><p>2/ Inspirer et transmettre</p><p>3/ Congruence et Résilience</p></div>
              <br />
              <p className="italic">Chaque participant terminera le séminaire en définissant un objectif et des « micro-pratiques » à mettre en place dans sa vie professionnelle ayant un impact sociétal et/ou environnemental.</p>
              <br />
              <p className="italic">Des suivis seront réalisés avec des retours d’expérience et des témoignages.</p>
            </div>
            <div className="prestation-img">
              <img src={seminairePic} alt="" />
            </div>
          </div>
          <div className="seminaires">
            <div className="seminaires-type">
            <div className="seminaires-type-img">
                <img src={insuffler} alt="" />
              </div>
              <div className="seminaires-type-text1">
                <h3 className="seminaires-title">Insuffler et incarner</h3>
                <p>Pour les dirigeants, PDG, membres des Comités Exécutifs ou des Comités de Direction</p>
                <br />
                <p>« Organisation RSE et sagesse dans l’entreprise »</p>
              </div>
            </div>
            <div className="seminaires-type">
              <div className="seminaires-type-text2">
                <h3 className="seminaires-title">Inspirer et transmettre</h3>
                <p>Pour les managers de proximité</p>
                <br />
                <p>« Les méthodes alternatives de management »</p>
              </div>
              <div className="seminaires-type-img">
                <img src={inspirer} alt="" />
              </div>
            </div>
            <div className="seminaires-type">
            <div className="seminaires-type-img">
                <img src={congruence} alt="" />
              </div>
              <div className="seminaires-type-text1">
                <h3 className="seminaires-title">Congruence et Résilience</h3>
                <p>Pour les collaborateurs</p>
                <p>« Repenser sa position face au travail pour plus de bien-être, de sens et d’engagement »</p>
              </div> 
            </div>
          </div>

          <div name="hebergements" className="prestation">
            <div className="prestation-text">
              <h2>hébergement et restauration</h2>
              <p className="italic">« Une invitation au ressourcement et à la déconnexion« </p>
              <br />
              <div className="meals-title">A table : laissez-vous guider…</div>
              <strong>Nous proposons une alimentation saine, équilibrée et végétarienne dans le respect du vivant et privilégiant l’agriculture paysanne et locale.</strong>
              <br />
              <p>Aliments bio de qualité, fruits et légumes de saison, cuisinés « maison » avec amour et créativité !</p>
              <br />
              <p>Nos partenaires répondront à toutes vos en attentes en terme de diversité et qualité.</p>
            </div>
            <div className="prestation-img">
              <img src={food} alt="" />
            </div>
          </div>
          <div className="hebergements-gallery">
            <div className="hebergement"><img src={hebergement1} alt="" /></div>
            <div className="hebergement"><img src={hebergement2} alt="" /></div>
            <div className="hebergement"><img src={hebergement3} alt="" /></div>
            <div className="hebergement"><img src={breakfast} alt="" /></div>
          </div>

          <div name="education" className="prestation">
            <div className="prestation-text">
              <h2>Intervertions en structures éducatives</h2>
              <p>Parce que les jeunes générations sont le moteur de demain, il nous paraît tout autant important de favoriser l’éveil des consciences dès le plus jeune âge.</p>
              <br />
              <p>RENAIS’SENS apporte aux enfants / ados des outils qui leur permettront de faire face aux enjeux de demain, d’être résiliants et de transformer les futures organisations.</p>
              <br />
              <p>2023 : Appui au développement du projet « Classe en transition » de Nicolas Detrin, professeur au Centre Scolaire Saint-Marc – Lyon</p>
            </div>
            <div className="prestation-img">
              <img src={kidsactivies1} alt="" />
            </div>
          </div>
          <div className="kidsactivities">
            <div className="kidsactivities-img">
              <img src={kidsactivies2} alt="" />
            </div>
            <div className="kidsactivities-text">
              <p className="kidsactivities-title">Atelier Primaires :</p>
              <ul>
                <li>Apprendre à méditer et développer mon sens critique / Durée ½ journée</li>
              </ul>
              <br />
              <p className="kidsactivities-title">Ateliers Collège et Lycée (adaptés selon les âges) :</p>
              <ul>
                <li>Qu’est ce que l’Intériorité et comment la développer ?  2h</li>
                <li>Comment m’orienter en tenant compte de ce qui fait sens pour moi ? 2h</li>
                <li>Résilience et congruence, comment développer ces qualités ? 2h</li>
                <li>Cultiver la joie et l’émerveillement quand on grandit pour en faire une force. 2h</li>
              </ul>
              <br />
              <p className="italic">Ateliers : art thérapie, méditation, sophrologie, philosophie, yoga du rire, projection ciné-débats</p>
            </div>
          </div>

          <div name="ateliers" className="ateliers">
            <h2>Ateliers</h2>
            <div className="ateliers-type">
                <div className="ateliers-type-text">
                  <h3 className="ateliers-title">Art Thérapie</h3>
                  <p>L’art-thérapie est un axe spécifique de la psychologie appliquée qui est adaptée aux particularités de l’entreprise notamment dans le cadre de la qualité de vie au travail et de la prévention des risques psycho-sociaux.</p>
                  <p>L’art et la créativité permettent de stimuler cet élan créatif utile à la dynamique de l’entreprise. Cette pratique des enjeux touchant notamment à la qualité de vie et au bien-être psychologique, à la prise de décision, à la productivité et à l’efficacité, à la créativité et au changement, à la gestion des risques et des conflits.</p>
                </div>
                <div className="ateliers-type-img">
                  <img src={artThérapie} alt="" />
                </div>
            </div>
            <div className="ateliers-type">
                <div className="ateliers-type-img">
                  <img src={yogaRire} alt="" />
                </div>
                <div className="ateliers-type-text2">
                  <h3 className="ateliers-title">Yoga du rire</h3>
                  <p>Le Yoga du rire est un formidable outil de gestion du stress et bien-être au travail. Générateur d’énergie positive, il est une clé de l’épanouissement.</p>
                  <p>Il s’appuie sur les principes de la psychologie positive pour améliorer les conditions de travail, les relations inter-personnelles, ainsi que la performance individuelle et collective. Il permet de dynamiser les équipes et stimuler la performances en proposant une nouvelle approche de la sphère professionnelle, dans le cadre d’une discipline favorisant l’équilibre. À travers des ateliers visant à repousser les pensées négatives et le stress, des exercices ludiques et des techniques de respiration permettront de développer la confiance en soi et de travailler le développement personnel, tout en libérant les émotions les plus profondes. Dans une perspective de partage, les cours yoga du rire génèrent un vent de sérénité, créant une ambiance de travail propice aux échanges. Libérer les «hormones du bonheur» révéler son éclat, tout en se ressourçant !</p>
                </div>
            </div>
            <div className="ateliers-type">
                <div className="ateliers-type-text">
                  <h3 className="ateliers-title">Sophrologie</h3>
                  <p>La sophrologie intégrative propose un processus psychothérapeutique qui implique le corps, le coeur et l’esprit. C’est pourquoi elle invite la méditation et la sophrologie dynamique au coeur de l’espace thérapeutique.</p>
                  <p>Là où la sophro-relaxation apaise, la Sophro-Analyse Intégrative® accompagne l’individu au coeur de ses croyances qui nourrissent souffrances et symptômes que pour mieux les ressentir, les comprendre et à son rythme, les réinformer. Elle favorise la pacification du passé, un mieux-vivre avec un corps plus vivant, un esprit plus paisible et un coeur « mieux-aimant» pour soi-même et les autres.</p>
                </div>
                <div className="ateliers-type-img">
                  <img src={sophro} alt="" />
                </div>
            </div>
            <div className="ateliers-type">
                <div className="ateliers-type-img">
                  <img src={equiThérapie} alt="" />
                </div>
                <div className="ateliers-type-text2">
                  <h3 className="ateliers-title">Equithérapie</h3>
                  <p>Alors que les bienfaits de l’équithérapie ne sont plus à prouver, l’équicoaching a débuté son entrée dans le monde de l’entreprise. Le cheval ouvre de nouvelles perspectives de management qui passent par une meilleure connaissance de soi.</p>
                  <p>Le cheval permet de travailler sur trois axes : le psychique, le corporel et l’émotionnel. Il détecte ce qui se passe en nous. Par son hypersensibilité, il va réagir et révéler qui nous sommes. Dans notre société hyperactive, ce travail avec le cheval qui ne demande aucune notion d’équitation, permet de se reconnecter à la nature et à faire appel à son intuition. Nous travaillons sur la gestion émotionnelle, la communication non verbale, le leadership, la confiance en soi, le dépassement de soi et la gestion du stress.</p>
                </div>
            </div>
            <div className="ateliers-type">
                <div className="ateliers-type-text">
                  <h3 className="ateliers-title">Permaculture</h3>
                  <p>La permaculture est un guide pour se positionner dans la complexité d’un écosystème. Ce qui permet de trouver sa place en interrelation avec le vivant en optimisant ses ressources et en économisant celles de notre environnement. Petit à petit les principes : « prendre soin de l’homme, prendre soin de la terre et partager équitablement les ressources » participent à nos modes de fonctionnement et prennent de la raisonnance.</p>
                  <p>Que ce soit sur son balcon, dans un jardin, une ferme, une entreprise, un territoire, il s’agit d’écosystèmes qui nécessitent  : une vision à long terme,  une éthique, des modalités inter-relationnelles, de l’observation,  de l’organisation dans l’espace et le temps, une recherche d’efficacité en utilisant le moins d’énergie possible et la recherche de la responsabilité communautaire</p>
                </div>
                <div className="ateliers-type-img">
                  <img src={permaculture} alt="" />
                </div>
            </div>
            <div className="ateliers-type">
                <div className="ateliers-type-img">
                  <img src={pleineConscience} alt="" />
                </div>
                <div className="ateliers-type-text2">
                  <h3 className="ateliers-title">Pleine Conscience</h3>
                  <p>La pratique de la pleine conscience  (mindfulness) est une pratique entièrement laïque qui consiste,  par un entraînement de l’esprit,  à être le plus possible dans l’instant présent, intentionnellement et sans jugement. Elle est accueillie par un nombre croissant d’entreprises en France à une époque où la connexion permanente via les outils digitaux laisse de moins en moins de moments de répit et de retour à l’essentiel.</p>
                  <p>Ces pratiques sont encore trop souvent présentées aux dirigeants comme des outils pour être moins stressé, plus concentré et plus efficace. Sont alors oubliées plusieurs dimensions essentielles de ces pratiques, tout aussi riches pour l’entreprise et pour les hommes et femmes qui y travaillent: la possibilité de trouver plus de justesse dans la prise de décision, une connaissance de soi plus fine, et le développement de la capacité à mieux « prendre soin » des collègues et collaborateurs de façon bienveillante.</p>
                </div>
            </div>
            <div className="ateliers-type">
                <div className="ateliers-type-text">
                  <h3 className="ateliers-title">Yoga</h3>
                  <p>Le Yoga consiste en la pratique de postures, de techniques de respiration et de méditation, dans un cadre de relaxation et de concentration. Le Yoga promeut l’écoute de soi, une meilleure hygiène de vie, le respect des autres et de leur environnement.</p>
                  <ul>
                    <li>Bienfaits physiques sur les employés: flexibilité, mobilité, vitalité, meilleure santé</li>
                    <li>Traitement et prévention de troubles fonctionnels: mauvaise posture, mal de dos, tensions articulaires.</li>
                    <li>Bienfaits psychologiques: réduction du stress, meilleure concentration.</li>
                    <li>Bienfaits sociaux: entreprise qui prend soin de ses salariés, amélioration des relations intra et inter hiérarchiques, renforcement de la cohésion sociale, meilleure culture d’entreprise.</li>
                  </ul>
                </div>
                <div className="ateliers-type-img">
                  <img src={yoga} alt="" />
                </div>
            </div>
            <div className="ateliers-type">
                <div className="ateliers-type-img">
                  <img src={shiatsu} alt="" />
                </div>
                <div className="ateliers-type-text2">
                  <h3 className="ateliers-title">Shiatsu</h3>
                  <p>Le shiatsu s’adresse à tous les salariés, quel que soit leur âge pour maintenir ou développer leur état de santé et leur niveau de bien-être physique, psychique et émotionnel. Le but est de rééquilibrer l’énergie de la personne et de diminuer les tensions nerveuses et musculaires. Le shiatsu permet d’accompagner les collaborateurs vers un état de bien-être et de repérer les situations professionnelles en cause de leurs tensions musculaires ou nerveuses.</p>
                  <p>Des études scientifiques ont démontré que le shiatsu induit non seulement une relaxation, mais augmente la vigilance, la créativité et améliore sensiblement les performances intellectuelles. De plus, l’utilisation régulière de cette technique rapproche les hommes et les équipes et crée un sentiment d’appartenance à l’entreprise.</p>
                </div>
            </div>
          </div>

        </div>
      </div>
    </div>  

  )
}

export default Prestations
