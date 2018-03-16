import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Header from './Header';
import Ads from './Ads';
import Footer from './Footer';
import './global.css';
import styles from './App.css';


const App = () => (
  <Route
    render={({ location }) => (
      <React.Fragment>
        <div className={styles.pageContent}>
          <Header />
          <section className={styles.adSection}>
            <TransitionGroup>
              <CSSTransition key={location.key} classNames="fade" timeout={300}>
                <Switch location={location}>
                  <Route
                    path="/:id"
                    component={Ads}
                  />
                  <Redirect to="/1"/>
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          </section>
        </div>
        <Footer />
      </React.Fragment>
    )}
  />
);

export default App;
