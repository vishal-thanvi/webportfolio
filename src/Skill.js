import React from 'react';

import './skills.css';

const Skill = () => {
  return (
    <section id="section4">
    <div className='skill'>
      <h6 >Skills</h6>
      <p class="skl">I've worked with multiple technologies as a developer to develop & maintain my projects.</p>
      <div className='firstrow'>
        <div className='java'>
          <h1>Java</h1>
          <p>I can code in java, i have basic knwoledge of j2ee and spring framwork.</p>
        </div>
        <div className='c++'>
          <h1>C++</h1>
          <p>I can code in C++. But I mainly use it for Hackerearth question.</p>
        </div>
        <div className='js'>
         <h1>Java script</h1>
          <p>Javascript
          I can code in javascript , do basic front-end stuff with it .</p>
        </div>
      </div>
      <div className='secondrow'>
        <div className='css'>
          <h1>CSS</h1>
          <p>I do write CSS for my front-end projects.</p>
        </div>
        <div className='git'>
       <h1 className='st'>git</h1>
          <p className='st'> I use GitHub for pushing my code.</p>
        </div>
        <div className='react'>
          <h1 className='st'>React</h1>
          <p className='st'>I work on front-end using React.</p>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Skill;
