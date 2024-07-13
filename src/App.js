import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Languages from './components/Languages/Languages';
import About from './components/About/About';
import Details from './components/Experience/Details';
import Copyrights from './components/Copyrights/Copyrights';
import Projects from './components/Projects/Projects';
import Education from './components/Education/Education';

export const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="container app_container">
          <div className="row app_row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <Sidebar />
            </div>
            <div className="col-lg-8 col-md-8 col-sm-12 app_main-content">
              <Navbar />
              <Switch>
                <Route exact path="/">
                  <About />
                </Route>
                <Route path="/copyrights">
                  <Copyrights />
                </Route>
                <Route path="/languages">
                  <Languages />
                </Route>
                <Route path="/professional">
                  <Details />
                </Route>
                <Route path="/education">
                  <Education />
                </Route>
                <Route path="/projects">
                  <Projects />
                </Route>
                <Route>
                  <Redirect to="/" />
                </Route>
              </Switch>

            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}