import { NavLink } from 'react-router-dom'
import { useState } from 'react';
import './header.css'
import logo from '../../assets/img/renaissens-logo.png'
import Bars from '../../assets/img/bars.png'
import {FaFeatherAlt} from 'react-icons/fa'

function Header() {

  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);

  return (
  
    <header >

      <NavLink className="header__logo" to="/">
        <img src={logo} alt="logo" />
      </NavLink>
      {(menuOpened===false && mobile===true) ?
        (<div
              style={{ padding: '0.5rem', borderRadius:'5px'}}
              className= "bars-menu"
              onClick={()=>setMenuOpened(true)}
            >
                <img 
                src={Bars} alt= "" 
                style={{width:'2rem', lineHeight:'2rem'}}/></div>)
            : (
        <nav>
          <NavLink className="header__link" to="/" onClick={()=>setMenuOpened(false)}>Accueil</NavLink>
          <NavLink className="header__link" to="/prestations" onClick={()=>setMenuOpened(false)}>Prestations</NavLink>
          <NavLink className="header__link" to="/partenaires" onClick={()=>setMenuOpened(false)}>Partenaires</NavLink>
          <a href="mailto:association.renaissens@gmail.com" className="header__link-btn" onClick={()=>setMenuOpened(false)}><FaFeatherAlt size={15}/>Ecrire</a>
          <div className="close__link" onClick={()=>setMenuOpened(false)}>Fermer</div>
        </nav>
      )}

    </header>
  )
}

export default Header
