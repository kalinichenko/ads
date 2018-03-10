import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './Header';
import Ads from './Ads';
import Footer from './Footer';
import './global.css';
import styles from './App.css';


const App = () => (
  <React.Fragment>
    <div className={styles.pageContent}>
      <Header />
      <Switch>
        <Route
          path="/:id"
          component={Ads}
        />
        <Route
          path="/"
          component={Ads}
        />
      </Switch>
    </div>
    <Footer />
  </React.Fragment>
);

export default App;
