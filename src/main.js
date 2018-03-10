import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import BrowserRouter from 'react-router-dom/BrowserRouter';

import App from './app/App';


const render = (Component) => ReactDOM.render(
  <AppContainer>
    <BrowserRouter>
      <Component />
    </BrowserRouter>
  </AppContainer>
, document.getElementById('root'));

render(App);

if (module.hot) {
  module.hot.accept('./app/App.js', () => {
    const nextApp = require('./app/App.js').default;
    render(nextApp);
  });
}
