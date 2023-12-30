import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import React from 'react';
import Front from './Front';
import Navbar from './Navbar';
import ProjectDetailBox from './ProjectDetailBox';
import Skill from './Skill';
import Footer from './Footer';

function App() {
  return (
    <div>
    <Navbar />
    <Front />
    <ProjectDetailBox/>
    <Skill/>
    <Footer />
    </div>
  );
}

export default App;
