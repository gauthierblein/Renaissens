import { FaLinkedin } from "react-icons/fa";

import './about.css'

import gbPic from '../../assets/img/gbPic.jpg'
import sandraPic from '../../assets/img/sandra-pic.png'



const team = [
  {
    picture: sandraPic,
    nom: 'Sandra OCTUVON',
    body: 'Fondatrice de l association en 2019.',
    linkedIn: "https://www.linkedin.com/in/sandra-octuvon-b3865161/"
  },
  {
    picture: gbPic,
    nom: 'Gauthier BLEIN',
    body: 'Developpeur et gestionnaire du site depuis 2023',
    linkedIn: 'https://www.linkedin.com/in/gauthier-blein-98a16b279/'
  }
]

  function About () {
    return (
    <div>
      <div name ="about" className="about-container">
        <h2>Nous connaître</h2>
        <h3>L'équipe</h3>
        {team.map((teamInfos, index) => {
          return <div className="teamInfos" key={index}>
              <img src={teamInfos.picture} alt="" />
              <div className="teamInfos-text">
                <h4>{teamInfos.nom}</h4>
                <p href={teamInfos.link}>{teamInfos.body}</p>
              </div>
              <a href={teamInfos.linkedIn}><FaLinkedin className='socialMedias-link' size={30} /></a>
            </div>
        })}
        <br />
        <div className="sandra">
          <h3>Qui est Sandra ?</h3>
          <div className="sandra-box">
            <div className="sandra-box-text">
              <p>Sandra commence sa carrière dans le secteur bancaire. Diplômée d’un Programme Grande École et certifiée en gestion de projet, elle s’oriente ensuite dans les métiers du conseil en ingénierie, un secteur en pleine croissance, stimulant mais qui connaît aussi quelques difficultés qu’elle tente de transformer.</p>
              <p>Guidée par des questionnements sur le sens, par l’impact des actions et par l’énergie collective Sandra a développé un engagement sociétal fort.</p>
              <br />
              <p>En 2017, elle vit une expérience professionnelle particulière qui déclenche une prise de conscience, la repositionne et lui permet d’identifier comment mettre à profit son énergie au service du collectif. Consciente des limites du coaching en management tel qu’il est pratiqué en interne au sein des entreprises, elle décide d’apporter des réponses à ses questionnements en expérimentant et découvrant d’autres méthodes de travail et de connaissance de soi.</p>
              <br />
              <p>Celles que l’école classique ne nous apporte pas encore.</p>
              <br />
            </div>
            <div className="sandra-box-img">
              <img src={sandraPic} alt="Sandra Octuvon" />
              <p className="italic">Sandra OCTUVON, Fondatrice de l’association RENAIS’SENS</p>
            </div>
          </div>
          <p>Elle rencontre Marc de la Ménardière, réalisateur, expérimente un stage sur la quête de sens. Elle comprend que l’énergie d’un groupe et la puissance d’un lieu favorisant la reconnexion à la nature et à soi, permet de libérer ses potentiels et de mieux s’ouvrir aux autres.</p>
          <p>Elle intègre l’importance du « lâcher prise » puis de la « libération de l’égo » et acquiert des outils permettant de mieux se connaître, d’enclencher une dynamique de groupe et surtout de la transmettre.</p>
          <p>Elle se forme en art thérapie et fonde l’association Renais’sens pour aider la transition sociale en s’appuyant sur deux leviers les organisations et la formation des jeunes.</p>
          <br />
          <p>En 2019, Sandra quitte son employeur avec l’envie d’entreprendre différemment.</p>
          <p>Elle s’associe avec les fondateurs d’une société de conseil engagée qui devient ensuite certifiée Bcorp*, pour incarner, faire vivre et partager ses valeurs en tant que dirigeante :</p>
          <br />
          <p className="italic">« Il me paraissait important de me sentir alignée et inspirée pour mener à bien ces deux projets sur lesquels il y a de nombreuses synergies à créer.</p>
          <br />
          <p className="italic">Je me préoccupe du monde dans lequel les générations à venir vont grandir, de ce qu’on leur transmet et de ce qu’on va leur laisser.</p>
          <br />
          <p className="italic">Comment aider les jeunes à appréhender le monde du travail ? Comment les organisations peuvent-elles adapter leur management face aux écarts générationnels et à l’urgence climatique qui gronde ?</p>
          <br />
          <p className="italic">J’oeuvre en démontrant qu’une croissance raisonnée et raisonnable est possible : nous avons fondé une structure fin 2019 juste avant le premier confinement, 3 ans après, nous avons plus d’une cinquantaine de collaborateurs avec une stratégie engagée, consciente et des initiatives concrètes.</p>
          <br />
          <p className="italic">Les organisations qui (re)définissent leur raison d’être aujourd’hui seront celles qui se développeront le mieux demain.</p>
          <br />
          <p className="italic">Il m’a semblé important de recentrer mes actions avec résilience et congruence pour les mettre au service d’une entreprise qui s’inscrit dans cette démarche mais surtout de les partager au plus grand nombre afin de contribuer à l’émergence d’un monde meilleur. ».</p>
          <br />
          <p>NB : RENAIS’SENS propose des projections/débats de films inspirants sous format « ciné-action » pour faire émerger des prises de conscience et aider chacun à se mettre en lien et en mouvement (rubrique contact pour organiser une projection) :</p>
          <ul>
            <li>En Quête de Sens – <span className="italic">Marc De La Ménardiere & Nathanaël Coste 2015</span></li>
            <li>Les Artistes de La Vie – <span className="italic">Pierre Westelynck 2019</span></li>
            <li>Le Cercle des Petits Philosophes – <span className="italic">Cecile Denjean & Frédéric Lenoir 2018</span></li>
            <li>L’Ecole de la Vie – <span className="italic"> Julien Peron 2018</span></li>
            <li>L’Ame – <span className="italic">Valerie Seguin 2021</span></li>
            <li>L’Intelligence Intuitive et Spirituelle au travail – <span className="italic">Valerie Seguin 2022</span></li>
          </ul>
          <br />
          <p>Sandra a eu l’honneur de participer à la réalisation de ce dernier film en tant qu’intervenante.</p>
          <br />
          <p className="italic">Voir dates des projections onglet « événements ».</p>
          <br />
          <br />
          <p>*Bcorp : Certification et communauté internationale rassemblant les meilleurs entreprises pour le monde. Elles ont la mission de s’engager en faveur du « bien commun »</p>
          </div>

          <h3>Valeurs</h3>
            <p>L’association RENAIS’SENS vous propose de vivre une expérience unique pour donner du sens à nos actions,  améliorer notre rapport au travail, repenser nos organisations et compléter la formation des jeunes.</p>
          <br />
          <strong>Nos missions :</strong>
          <ul>
            <li>Renforcer la responsabilité écologique et sociale dans les organisations et auprès des jeunes.</li>
            <li>Développer l’engagement par l’action et le sens sous 3 angles : individuel, collectif et sociétal.</li>
            <li>Participer activement à la transition sociale, soutenir les initiatives déjà en place et booster l’intelligence collective.</li>
          </ul>
          <br />
          <p>Pour faire émerger cette conscience et la mettre en mouvement, nous créons des espaces pour inviter chacun à titre personnel et/ou professionnel à prendre un temps de réflexion et à se ressourcer dans un lieu inspirant en pleine nature le temps d’un stage, d’un séminaire ou d’une retraite.</p>
          <br />
          <p>Nombreux d’entre nous se questionnent sur la société dans laquelle nous évoluons. Ces questions sur l’environnement, l’éducation, l’alimentation, l’économie etc… sont devenues fondamentales pour notre transition et prennent encore plus de sens au regard des crises que nous traversons.</p>
          <p>Nous les aborderons avec recul, sagesse et humilité pour repenser ensemble notre vision de l’entreprise, du travail et aider les jeunes générations à se préparer aux enjeux de demain.</p>
          <br />
          <strong>Pourquoi agir auprès des jeunes ?</strong>
          <br />
          <p>Nous allons à la rencontre des jeunes pour éveiller leur conscience écologique et les aider à développer leur sens critique, leur intériorité et leur résilience. De précieuses capacités sur lesquelles ils pourront s’appuyer dans leur carrière professionnelle.
Les jeunes représentent le futur et ont besoin de s’armer d’outils complémentaires à leur formation.
Nous les aidons à developper, écoute active, optimisme, altruisme, créativité et intuition.</p>
          <p>Et enfin nous agissons auprès des jeunes parce que nous sommes convaincus que nous le leur devons.</p>
          <br />
          <strong>Pourquoi agir auprès des entreprises ?</strong>
          <br />
          <p>Passant la plus grande partie du temps au travail, il est parfois difficile de parvenir à équilibrer nos vies personnelles et professionnelles. Pour cause, le quotidien se laisse rapidement envahir par la surconsommation qui génère insatisfactions, frustrations ET l’hyper-connectivité qui amène à la surinformation constituant un véritable cercle vicieux qu’il nous faut apprendre à maîtriser.</p>
          <p>Cette problématique freine l’épanouissement individuel, la stabilité des entreprises et surtout l’évolution de notre société.</p>
          <p>Les burnout, boreout ne cessent d’augmenter : pression, épuisement, ennui, dysfonctionnements… les conséquences sur le long terme sont lourdes tant pour les collaborateurs que pour l’avenir des organisations. Leur enjeu ?
Réussir à faire évoluer leur stratégie devenue inadaptée car persistante au travers d’une transition sociale qui s’opère déjà depuis quelques années.</p>
          <p>Comment rééquilibrer nos esprits, retrouver stabilité et sérénité dans un environnement en constance mouvance ?</p>
          <p>Comment améliorer sa productivité en travaillant différemment ?</p>
          <p>Comment faire évoluer notre société sans s’attaquer à ce gros chantier qu’est le monde du travail ?</p>
          <br />
          <strong>Et s’il était temps de ralentir ? Prendre un temps de réflexion nous permettant de nous préserver tout en allant vers une croissance consciente et raisonnée.</strong>
          <br />
          <div>Pour insuffler le changement,  nous avons besoin de<strong> mener des actions collectives, impactantes et locales.</strong></div>
          <br />
          <p>Nos séminaires sont créés avec une approche novatrice et pluridisciplinaire qui permet d’expérimenter des outils, de co-créer, de partager et de diffuser une énergie créatrice pour mener ces actions dans la durée.</p>
          <p>Les ateliers sont réalisés par des professionnels qualifiés et des intervenants inspirants : conférenciers, auteurs, réalisateurs, scientifiques…</p>
          <p>RENAIS’SENS vous accueille chez son partenaire aux Grandes Terres à Francheville (69), dans un lieu ressourçant qui dispose d’un cadre favorisant la déconnexion et la reconnexion à la nature.</p>
          <p>Une invitation à expérimenter un travail de connaissance de soi construit autour de travaux de recherches favorisant la force d’action</p>
          <br />
          <div className='values'>
            <div>
              <strong>Nous renforçons :</strong>
              <ul className='values-list'>
                <li>L’état d’esprit positif, l’engagement, la productivité, le sens</li>
                <li>La gestion du stress et des difficultés</li>
                <li>Les softskills</li>
                <li>La confiance en soi, la maîtrise de soi</li>
                <li>La capacité d’attention et de concentration</li>
                <li>La fidélisation des parties prenantes des organisations</li>
                <li>La découverte et le développement des outils de « l’intelligence spirituelle » adaptés à l’entreprise pour repenser nos modèles économiques et de gouvernance ; et aux jeunes</li>
              </ul>
            </div>
            <div>
              <strong>Nous réduisons :</strong>
              <ul className='values-list'>
                <li>Le turn-over et l’absentéisme</li>
                <li>Le décrochage scolaire</li>
                <li>Le désengagement, la perte de sens</li>
                <li>Les difficultés de compréhension relationnelles</li>
              </ul>
            </div>
          </div>
          <br />
          <div className='values-future'>
            <p>L’association RENAIS’SENS est engagée et ambitieuse :</p>
            <br />
            <p>A plus long terme et avec les fonds nécessaires, l’association pourra intervenir auprès de personnes en situation de handicap ou atteintes d’autisme en adaptant les séminaires en fonction des participants et des structures accueillies.</p>
          </div>


      </div>
    </div>
  )
}

export default About
