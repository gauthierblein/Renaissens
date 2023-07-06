import './banner.css'
import logo from '../../assets/img/renaissens-logo.png'
import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";


function BannerHome ({ image, title }) {
    return (
        <div className="bannerHome__container">
          <img src={image} alt="" className="bannerHome__img" />
          <img src={logo} alt="logo" className="bannerHome__logo" />
          <h1>Renais'sens</h1>
          <p>{title}</p>
          <div className='socialMedias'>
            <FaInstagram className='socialMedias-link' size={40} />
            <FaFacebook className='socialMedias-link' size={40} />
            <FaLinkedin className='socialMedias-link' size={40} />
          </div>
        </div>
      
    )
  }
  
  export default BannerHome
  