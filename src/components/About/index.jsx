import gbPic from '../../assets/img/gbPic.jpg'
import sandraPic from '../../assets/img/sandra-pic.png'
import './about.css'


const team = [
  {
    picture: sandraPic,
    nom: 'Sandra O',
    body: 'Fondateur et gérant de la société en 2020.',
  },
  {
    picture: gbPic,
    nom: 'Gauthier B',
    body: 'Developpeur et gestionnaire du site depuis 2023',
    link: 'https://bleingauthierdev.com/'
  }
]

  function About () {
    return (
    <div>
      <div name ="about" className="about-container">
        <h2>Nous connaître</h2>
        <h3>L'équipe</h3>
        {team.map((teamInfos, index) => {
          return <a href={teamInfos.link} className="teamInfos" key={index}>
              <img src={teamInfos.picture} alt="" />
              <div className="teamInfos-text">
                <h4>{teamInfos.nom}</h4>
                <p href={teamInfos.link}>{teamInfos.body}</p>
            </div>
          </a>
        })}
        <br />
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
