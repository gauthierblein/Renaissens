import './banner.css'
import logo from '../../assets/img/renaissens-logo.png'
import { FaLinkedin, FaFacebook } from "react-icons/fa";


function BannerHome ({ image, title }) {
    return (
        <div className="bannerHome__container">
          <img src={image} alt="" className="bannerHome__img" />
          <img src={logo} alt="logo" className="bannerHome__logo" />
          <h1>Renais'sens</h1>
          <p>{title}</p>
          <div className='socialMedias'>
            <a href="https://www.facebook.com/Renaissons">
              <FaFacebook className='socialMedias-link' size={40} />
            </a>
            <a href="https://www.linkedin.com/in/sandra-octuvon-b3865161/">
              <FaLinkedin className='socialMedias-link' size={40} />
            </a>
          </div>
        </div>
      
    )
  }
  
  export default BannerHome
  