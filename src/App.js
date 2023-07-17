import React from 'react';
import './App.css';
import Home from "./pages/HomePage/HomePage";
import CallforPapers from './pages/CallForPapers/CallforPapers';
import ImportantDates from './pages/ImportantDates/ImportantDates';
import Contact from './pages/Contact/Contact';
import { HashRouter, Switch ,Route} from "react-router-dom";
import Manuscript from "./pages/Manuscript/App"
import Registration from "./pages/Registration/App"
function App() {
  return (
    <div className="App">
      <HashRouter>
        <Switch>
        <Route path ='/call-for-papers'>
            <CallforPapers/>
          </Route>
          <Route path='/important-dates'>
            <ImportantDates/>
            </Route>
            <Route path='/venue'>
              <Contact/>
            </Route>
            <Route path='/manuscript-submission-and-guidlines'>
              <Manuscript/>
            </Route>
            <Route path='/registration-details'>
              <Registration/>
            </Route>
          <Route path ='/'>
            <Home/>
          </Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
