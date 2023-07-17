import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
const App = () => {
  return (
    <div>
        <Navbar/>
        <div className="bg">
        <div class="heading">
        
      <div class="acc">Accepted and Presented Papers will be published in the</div>
<div class="mat">Materials Today: Proceedings, Scopus Indexed, Elsevier</div>
<div class="man">Manuscript Template: https://www.materialstoday.com/proceedings-template</div>
    </div>
    <img className="bgimg" src="./images/manuscript.jpg" alt=""/>
    <img className="bgimg2" src="./images/flow.png" alt=""/>
    <img className="bgimg3" src="./images/manu.png" alt=""/>
    <div className="container">
    <embed src="/assets/pdf/MATPR.pdf#toolbar=0" type="application/pdf" width="100%" height="500px"/>
    </div>

    <div className="white-boxAIP">
    <div className="acc">https://easychair.org/conferences/?conf=icdm20210</div>
    <div className="mat">b. AIP Conference Proceedings, Scopus Indexed, Elsevier</div>
    <div className="man">Manuscript Template (as per AIP Conference Proceedings format)</div>
</div>

    <div className="container2">
    <embed src="/assets/pdf/AIPCP.pdf#toolbar=0" type="application/pdf" width="100%" height="500px"/>
    </div>

    </div>
    </div>
  );
}

export default App;
