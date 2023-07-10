import './Contact.css'

const Contact = () => {
  return (
    <div name="contact" className="contact">
      <div className="contact-container">
        <h2>Contact</h2>
        <h5 className='contact-intro'>Remplissez le formulaire ci-dessous pour nous contacter directement</h5>

        <div className="input-container">
          <form
            action="https://getform.io/f/92f632d9-5a30-4c37-b3e6-a4d033638ffe"
            method="POST"
          >
            <input type="text" name="name" placeholder="Votre nom"/>
            <input type="text" name="email" placeholder="Votre email"/>
            <textarea
              name="message"
              placeholder="Ecrivez votre message"
              rows="8"
            ></textarea>
            <div className="btn-container">
              <button className="sendButton">Ecrivez-nous</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
