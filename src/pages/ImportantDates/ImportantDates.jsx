import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import "./ImportantDates.css"
import Footer from '../../components/Home/Footer';
const ImportantDates = () => {
  return (
    <div>
        <Navbar/>
        <div className="section-header">
        <h2>IMPORTANT DATES</h2>
      </div>

      <div className="event-container">
        <h3 className="year">ROUND 1 (EARLY BIRD ROUND)</h3>

        <div className="event">
          <div className="event-left">
            <div className="event-date">
              <div className="date">15</div>
              <div className="month">July 2021</div>
            </div>
          </div>

          <div className="event-right">
            <h3 className="event-title">Manuscript Submission Ends</h3>
            <div className="event-description">
              Submission Deadlines for Full Length Papers At max of 10 pages
            </div>
          </div>
        </div>
        <div className="event">
          <div className="event-left">
            <div className="event-date">
              <div className="date">25</div>
              <div className="month">July 2021</div>
            </div>
          </div>

          <div className="event-right">
            <h3 className="event-title">Reviews/ Comments to Authors </h3>
            <div className="event-description">
              Submission Deadlines for Full Length Papers At max of 10 pages
            </div>
          </div>
        </div>
        <div className="event">
          <div className="event-left">
            <div className="event-date">
              <div className="date">31</div>
              <div className="month">July 2021</div>
            </div>
          </div>

          <div className="event-right">
            <h3 className="event-title">Revised Manuscript  to be submitted	 </h3>
            <div className="event-description">
              Submission Deadlines for Full Length Papers At max of 10 pages
            </div>
          </div>
        </div>

      </div>
      <div className="event-container">
        <h3 className="year">ROUND 2 (REGULAR ROUND)</h3>

        <div className="event">
          <div className="event-left">
            <div className="event-date">
              <div className="date">30</div>
              <div className="month">September 2021</div>
            </div>
          </div>

          <div className="event-right">
            <h3 className="event-title">Manuscript Submission Ends</h3>
            <div className="event-description">
              Submission Deadlines for Full Length Papers At max of 10 pages
            </div>
          </div>
        </div>
        <div className="event">
          <div className="event-left">
            <div className="event-date">
              <div className="date">30</div>
              <div className="month">October 2021</div>
            </div>
          </div>

          <div className="event-right">
            <h3 className="event-title">Reviews/ Comments to Authors </h3>
            <div className="event-description">
              Submission Deadlines for Full Length Papers At max of 10 pages
            </div>
          </div>
        </div>
        <div className="event">
          <div className="event-left">
            <div className="event-date">
              <div className="date">15</div>
              <div className="month">November 2021</div>
            </div>
          </div>

          <div className="event-right">
            <h3 className="event-title">Revised Manuscript  to be submitted	 </h3>
            <div className="event-description">
              Submission Deadlines for Full Length Papers At max of 10 pages
            </div>
          </div>
        </div>

      </div>
      <div className="event-container">
        <h3 className="year">ROUND 3 (LATE ROUND)</h3>

        <div className="event">
          <div className="event-left">
            <div className="event-date">
              <div className="date">20</div>
              <div className="month">December 2021</div>
            </div>
          </div>

          <div className="event-right">
            <h3 className="event-title">Manuscript Submission Ends</h3>
            <div className="event-description">
              Submission Deadlines for Full Length Papers At max of 10 pages
            </div>
          </div>
        </div>
        <div className="event">
          <div className="event-left">
            <div className="event-date">
              <div className="date">10</div>
              <div className="month">Janaury 2022</div>
            </div>
          </div>

          <div className="event-right">
            <h3 className="event-title">Reviews/ Comments to Authors </h3>
            <div className="event-description">
              Submission Deadlines for Full Length Papers At max of 10 pages
            </div>
          </div>
        </div>
        <div className="event">
          <div className="event-left">
            <div className="event-date">
              <div className="date">20</div>
              <div className="month">January 2022</div>
            </div>
          </div>

          <div className="event-right">
            <h3 className="event-title">Revised Manuscript  to be submitted	 </h3>
            <div className="event-description">
              Submission Deadlines for Full Length Papers At max of 10 pages
            </div>
          </div>
        </div>

      </div>
      <Footer/>
    </div>
  );
}

export default ImportantDates;
