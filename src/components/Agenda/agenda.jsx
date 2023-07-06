import './agenda.css'
import eventPic1 from '../../assets/img/events/Event Shiatsu.jpg'
import eventPic2 from '../../assets/img/events/intelligence-spirituelle.jpg'
import eventPic3 from '../../assets/img/events/l_ame-une-force.jpg'

function Agenda () {
    return (
        <>
        <div name= "agenda" className="agenda__container">
            <h2>AGENDA</h2>
            <div className='event__container'>
                <img src={eventPic1} alt="event1" />
                <div className='event_details'>
                    <h3>Stage Automne</h3>
                    <h4>Vendredi 14/10/22 de 14h à 18h / Ch du Grand moulin, 69340 Francheville</h4>
                    <p>« L’intelligence spirituelle au travail«  réalisé par Valérie Seguin sortie en septembre 2022
                    Aujourd’hui, de plus en plus d’entreprises bousculent les codes et développent un nouveau modèle alliant plusieurs intelligences parmi lesquelles une méconnue : l’intelligence spirituelle.
                    Nous sommes allés à la rencontre de ces pionniers pour comprendre cette nouvelle intelligence et ce qu’elle apporte au monde du travail.</p>
                    <p>Projection de 58mn : « L’intelligence spirituelle au travail » suivie d’un échange sous forme de ciné action avec Sandra Octuvon, fondatrice de l’association Renais’sens.</p>
                </div>
            </div>

            <div className='event__container'>
                <img src={eventPic2} alt="event2" />
                <div className='event_details'>
                    <h3>L'intelligence Spirituelle au Travail</h3>
                    <h4>Lundi 20 Octobre 2022 à 19h45 et 20h45 – Hôtel Charlemagne – Lyon 69002</h4>
                    <p>3 Ateliers pluridisciplinaires et complémentaires pour se ressourcer et se réaligner :
                        – Shiatsu DO IN : agir sur ses tensions physiques et émotionnelles
                        – Kobido : massage facial ancestral japonais qui produit un réveil et un rajeunissement du visage en faisant apparaître la beauté intérieure! L’art du Kobido, réconcilie âme, corps et esprit et induit une détente exceptionnelle.
                        – Art thérapie : reconnexion à soi à travers le mouvement et le dessin.
                        Vendredi 14/10/22 de 14h à 18h / Ch du Grand moulin, 69340 Francheville
                        Infos et réservation : Scanner le QR CODE sur affiche</p>
                </div>
            </div>

            <div className='event__container'>
                <img src={eventPic3} alt="event3" />
                <div className='event_details'>
                    <h3> L’âme, une force dans sa vie</h3>
                    <h4>Lundi 13 Mars 2022 à 14H00 – Cinéma REX -Neuville sur Saône et à 18H00 au CGR Brignais</h4>
                    <p>« L’âme, une force dans sa vie » réalisé par Valérie Seguin sortie en septembre 2021
                    Depuis toujours, l’humanité s’interroge sur l’âme. Ce film poursuit cette réflexion en donnant la parole à des philosophes, des médecins, des thérapeutes, des écrivains qui essaient de comprendre ce qu’est l’âme et comment elle peut être une ressource et une force dans la vie de chacun.
                    Projection de 70mn + court métrage : « L’âme, une force dans sa vie » suivie d’un échange avec la réalisatrice Valérie Seguin et Sandra Octuvon, fondatrice de l’association Renais’sens.</p>
                </div>
            </div>
        </div>
        </>
    )
  }
  
  export default Agenda
  