import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Home/Footer';
const App = () => {
  return (
    <div>
      <Navbar/>
      <div class="bg">
        <div class="white-boxcd">
            <h1 class="cd">Conference Dates</h1>
<div class="jan"><strong>January 28-29, 2022</strong></div>
        </div>
        <div class="white-boxv">
        <h1 class="v">Venue</h1>
<div class="dtu"><strong>Delhi Technological University, Delhi</strong></div>
    </div>
    <div class="white-boxrf">
       <h1 class="RF"> Registration fee (including Publication fee)</h1>
       <s><h3 class="round">ROUND 1 (EARLY BIRD ROUND): for papers submitted until 15.07.2021</h3></s><br></br>
       <div class="cont"><s>Foreign Delegates (Student/ Faculty/ Industry/ R&D) &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;USD 300</s><br></br>
       <s>Industry / R&D</s> &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;&nbsp;<s>INR 7,500/-</s><br></br>
       <s>Faculty</s>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;<s>INR 7,000/-</s><br></br>
       <s>Student (UG/ PG/ PhD)</s>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;&nbsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;<s>INR 6,500/-</s><br></br>
       <s>Participant (Without Paper)</s>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;<s>INR 3,000/-</s><br></br>
       <s>Industry / R&D</s>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<s>INR 7,500/-</s><br></br>
    </div>
    <s><h3 class="round">ROUND 2 (REGULAR ROUND): for papers submitted until 31.08.2021</h3></s><br></br>
<div class="cont"><s>Foreign Delegates (Student/ Faculty/ Industry/ R&D)&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;USD 350</s><br></br>
<s>Industry / R&D</s>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;&nbsp;<s>INR 8,500/-</s><br></br>
<s>Faculty</s>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;&nbsp;&nbsp;<s>INR 8,000/-</s><br></br>
<s>Student (UG/ PG/ PhD)</s>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;&emsp;&ensp;&emsp;&ensp;&nbsp;&ensp;&nbsp;<s>INR 7,500/-</s><br></br>
<s>Participant (Without Paper)</s>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;<s>INR 3,000/-</s><br></br>
</div>

<h3 class="round">ROUND 3 (LATE ROUND): for papers submitted until 20.12.2021 for MATERIALS TODAY: PROCEEDINGS</h3><br></br>
<div class="cont">Foreign Delegates (Student/ Faculty/ Industry/ R&D)&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;USD 400<br></br>
Industry / R&D&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;&nbsp;INR 9,500/-<br></br>
Faculty&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;INR 9,000/-<br></br>
Student (UG/ PG/ PhD)&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;&nbsp;&ensp;&nbsp;INR 8,500/-<br></br>
Participant (Without Paper)&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;&nbsp;&nbsp;&nbsp;&emsp;INR 3,000/-<br></br>
</div>

<h3 class="round">ROUND 3 (LATE ROUND): AIP CONFERENCE PROCEEDINGS (for papers submitted through easychair.org)</h3><br></br>
<div class="cont">Foreign Delegates (Student/ Faculty/ Industry/ R&D)&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;USD 400<br></br>
Industry / R&D&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;&nbsp;INR 11,500/-<br></br>
Faculty&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;INR 11,000/-<br></br>
Student (UG/ PG/ PhD)&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;&nbsp;INR 10,500/-<br></br>
Participant (Without Paper)&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;&ensp;&emsp;&nbsp;INR 3,000/-<br></br>
</div> 
    </div>
    </div>
    <Footer/>
    </div>
  );
}

export default App;
