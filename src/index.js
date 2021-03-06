import 'regenerator-runtime';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

import App from './_app';
import swRegister from './utils/sw-register';

import './components/app-bar';
import './components/skip-content';
import './components/footer';
import './styles/main.scss';

import(
  /* webpackPrefetch: true */
  /* webpackPreload: true */ './styles/nprogress/nprogress.css'
);

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
  swRegister();
});
