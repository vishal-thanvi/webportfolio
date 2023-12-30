import React from 'react';
import { FaEnvelope, FaComment, FaFacebook, FaTwitter, FaLinkedin, FaInstagram,FaGithub, FaReact } from 'react-icons/fa';
import './footer.css';
const Footer = () => {
  return (
    <section id="section5">
    <footer className="footer">
      <div className="email-chat-section">
        <div className="email">
          <FaEnvelope />
          <p>Email:vishalthanviphalodi.com</p>
        </div>
        <div className="chat">
          <FaComment />
          <p>WhatsApp</p>
        </div>
      </div>
      <div className="social-icons">
        <h4 className='f'>Follow me</h4>
        <div className="icons">
          <a><FaFacebook className='icon1'/></a>
          <a><FaTwitter className='icon1'/></a>
          <a><FaLinkedin className='icon1'/></a>
          <a><FaInstagram className='icon1'/></a>
          
          
        </div>
        <p className='copyright'>© 2023 Vishal Thanvi . All rights reserved.</p>
      </div>
    </footer>
    </section>
  );
};

export default Footer;
