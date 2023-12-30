import React from 'react';
import myImage from './myImage.png';
import './FrontFont.css'
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const Front = () => {
  const sectionStyles = {
    backgroundColor: '#020810',
    padding: '20px',
    textAlign: 'left',
  };

  const buttonStyles = {
    borderRadius: '10%',
    background: 'linear-gradient(to right, #3129a7, #a92065)',
    color: 'white',
    padding: '6px 16px',
    cursor: 'pointer',
    boxShadow: '0 0 10px rgba(0, 0, 255, 0.5)',
    border: '1px solid rgb(0 8 14)',
  };

  const subtextStyles = {
    fontSize: '2rem', // Adjust the font size here
    fontWeight: 'bold', // Make the text bold
    color: 'white',
  };

  return (
    <section id="section2" style={sectionStyles}>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            
            <p className='subtext text-white' style={subtextStyles}>Hey there,</p>
            <p className='about text-white'>
              Hey, I am Vishal Thanvi. I am a software developer. Works on front-end and back-end.
            </p>
            <button className="btn" style={buttonStyles}>
              <h5>My Resume</h5>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Front;
