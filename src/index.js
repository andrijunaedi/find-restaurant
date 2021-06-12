import 'regenerator-runtime';
import App from './_app';

import './components/app-bar';
import './components/skip-content';
import './components/footer';
import './components/heroes';

/* for async await transpile */
import(/* webpackPreload: true */ './styles/main.scss');

const app = new App({
  button: document.querySelector('#toggle-menu'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#main-content'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});