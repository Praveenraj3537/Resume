import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Languages from './components/Languages';
import About from './components/About';
import Details from './components/Details';
import Copyrights from './components/Copyrights';
import Projects from './components/Projects';
import Education from './components/Education';

export const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="container app_container">
          <div className="row app_row">
            <div className="col-lg-4">
              <Sidebar />
            </div>
            <div className="col-lg-8 app_main-content">
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