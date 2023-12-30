import React from 'react';
import projectImage from './project1.png';
import './Projectdetail.css';

const ProjectDetailBox = ({ projectName, liveLink, sourceCodeLink, imageUrl }) => {
  const styles = {
    container: {
      border: '1px solid #ccc',
      borderRadius: '8px', // Adjust this for other corners
      borderTopLeftRadius: '0', // Remove top border radius
      borderTopRightRadius: '0', // Remove top border radius
      padding: '17px',
      margin: '10px',
      width: '300px',
      boxShadow: '0 0 10px rgba(0, 0, 255, 0.5)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    projectImage: {
      
      width: '114%',
      height: 'auto',
      marginBottom: '15px',
      borderRadius: '0', 
      marginTop:'-18px',
    },
    projectDetails: {
      textAlign: 'center',
    },
    detail: {
      marginBottom: '10px',
      fontWeight: 'bold',
      borderBottom: '2px solid rgb(78 93 106)',
      display: 'inline-block',
      paddingBottom: '5px',
    },
    btnViewLive: {
      marginRight: '10px',
      padding: '3px 10px',
      backgroundColor: 'hsl(39, 100%, 50%)',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
    },
    btnSourceCode: {
      padding: '3px 10px',
      backgroundColor: 'hsl(0, 20%, 50%)',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
    },
  };

  return (
    <section id="section3">
      <div className='pro'>
        <h6 className='proline'>Projects</h6>
        <div className="global-styles projects">
          <div style={styles.container}>
            <img className="imgpro1" src={imageUrl || projectImage} alt="Project" style={styles.projectImage} />
            <div style={styles.projectDetails}>
              <div className='proname' style={styles.detail}>Blog page</div>
              <div className='tech'>
                <h1>html</h1>
                <h1>css</h1>
                <h1>java script</h1>
              </div>
              <button style={styles.btnViewLive} onClick={() => window.open(liveLink)}>View Live</button>
              <button style={styles.btnSourceCode} onClick={() => window.open(sourceCodeLink)}>Source Code</button>
            </div>
          </div>
          <div style={styles.container}>
          <img className="imgpro1" src={imageUrl || projectImage} alt="Project" style={styles.projectImage} />
          <div style={styles.projectDetails}>
            <div className='proname' style={styles.detail}>Phone book</div>
            <div className='tech'>
              <h1>html</h1>
              <h1>css</h1>
              <h1>java script</h1>
            </div>
            <button style={styles.btnViewLive} onClick={() => window.open(liveLink)}>View Live</button>
            <button style={styles.btnSourceCode} onClick={() => window.open(sourceCodeLink)}>Source Code</button>
          </div>
        </div>
        <div style={styles.container}>
        <img className="imgpro1" src={imageUrl || projectImage} alt="Project" style={styles.projectImage} />
        <div style={styles.projectDetails}>
          <div className='proname' style={styles.detail}>Ecommerce</div>
          <div className='tech'>
            <h1>html</h1>
            <h1>css</h1>
            <h1>java script</h1>
          </div>
          <button style={styles.btnViewLive} onClick={() => window.open(liveLink)}>View Live</button>
          <button style={styles.btnSourceCode} onClick={() => window.open(sourceCodeLink)}>Source Code</button>
        </div>
      </div>

          {/* Add similar code blocks for other projects */}
        </div>
      </div>
    </section>
  );
};

export default ProjectDetailBox;
