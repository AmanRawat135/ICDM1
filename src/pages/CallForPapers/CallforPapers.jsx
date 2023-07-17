import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
// import img1 from './assets/callforpapers.jpg';
import Footer from '../../components/Home/Footer';
const CallforPapers = () => {
  return (
    <div>
        <Navbar/>
        <div className="bg">
        <div class="heading">
        
      <h1 class="paper">Call for Papers</h1>
      <p class="content">
      
        The ICDM - 2021 invites high quality research papers in the areas of
        Design and Materials Engineering. The primary goal of the conference is
        to change the ideas in the existing areas, encourage academic and
        industry interaction to promote collaborative research activities
        involving scientists, engineers, professionals, researchers and
        students.
        <br />
        High quality research papers are invited on the following areas, but not
        limited to :
      </p>
    </div>
    <img className="bgimg" src="./images/callforpaper4.jpg" alt=""/>

    <div class="white-box">
        <h1 class="paper2">Materials Engineering (but not limited to)</h1>
        <li>Materials behavior</li>
        <li>Casting and solidification</li>
        <li>Surface, subsurface, and interface phenomena</li>
        <li>Coatings and surface engineering</li>
        <li>Composite materials</li>
        <li>Materials forming</li>
        <li>Machining</li>
        <li>Nanomaterials and nanomanufacturing</li>
        <li>Biomedical manufacturing</li>
        <li>Environmentally sustainable manufacturing processes and systems</li>
        <li>Manufacturing process planning and scheduling</li>
        <li>Meso/micro manufacturing equipment and processes</li>
        <li>Modeling, analysis, and simulation of manufacturing processes</li>
        <li>Computer-aided design, manufacturing, and engineering</li>
        <li>Semiconductor materials manufacturing</li>
        <li>Laser based manufacturing</li>
        <li>Precision molding processes</li>
        <li>Joining processes</li>
        <li>Rapid manufacturing technologies</li>
        <li>Nontraditional manufacturing</li>
        <li>Nanofabrication, nanometrology and applications</li>
    </div>
    <div class="white-box2">
      <h4 class="paper2">Industrial and Sustainable Design (but not limited to)</h4>
      <li>Design support tools and methods</li>
      <li>Industrial Design</li>
      <li>Design information and knowledge</li>
      <li>System Engineering Design</li>
      <li>Design Organization and Management</li>
      <li>Artificial Intelligence and Data-Driven Design</li>
      <li>Human Behavior in Design</li>
      <li>Design Theory and Research Methods</li>
      <li>Design Creativity</li>
      <li>Collaborative Design</li>
      <li>Engineering Design Practice</li>
      <li>Design for Healthcare</li>
      <li>Design for Sustainability</li>
    </div>
    </div>
    <Footer/>
    </div>
  );
}

export default CallforPapers;
