import { Link } from "react-router-dom";
import { FaFacebook, FaInstagramSquare, FaMailBulk, FaMapMarkedAlt, FaPhoneAlt, FaPinterest, FaTwitterSquare, FaWhatsappSquare } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer p-10 bg-base-200 text-base-content">
         <div className="justify-center">
      <img src="https://designcontest.nyc3.digitaloceanspaces.com/data/contests/95925/entries/82b0c72379298b2c.jpg" className="ml-6" width='80' alt="" />
    <Link to='/' className="btn btn-ghost normal-case text-xl">Toys Hub</Link>
    </div>
    <div>
          <span className="footer-title">Contact Us</span> 
          <a className="link link-hover flex items-center"><span> <FaPhoneAlt></FaPhoneAlt> </span> <span> Phone: +088 496 485 788</span></a> 
          <a className="link link-hover flex items-center"><span> <FaMailBulk></FaMailBulk> </span> <span>   Mail: mail@gmail.com</span></a> 
          <a className="link link-hover flex items-center"><span> <FaWhatsappSquare></FaWhatsappSquare> </span> <span>   Whatsapp </span></a> 
        </div> 
        <div>
          <span className="footer-title">Fllow Us</span> 
          <a className="link link-hover flex items-center"><span> <FaFacebook></FaFacebook> </span> <span> FaceBook</span></a> 
          <a className="link link-hover flex items-center"><span> <FaInstagramSquare></FaInstagramSquare> </span> <span>   Instagram</span></a> 
          <a className="link link-hover flex items-center"><span> <FaTwitterSquare></FaTwitterSquare> </span> <span>   Twitter</span></a> 
          <a className="link link-hover flex items-center"><span> <FaPinterest></FaPinterest> </span> <span>   Pinterest</span></a> 
        </div> 
        <div>
          <span className="footer-title">Office Address</span> 
          <a className="link link-hover flex items-center"><span> <FaMapMarkedAlt></FaMapMarkedAlt> </span> <span>   Dhaka Gulshan 24/9, Road. </span></a> 
          
        </div>
      </footer>
    );
};

export default Footer;