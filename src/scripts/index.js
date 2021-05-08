/* for async await transpile */
import(/* webpackPreload: true */ 'regenerator-runtime');
import(/* webpackPreload: true */ '../styles/main.scss');

const toggleMenu = document.querySelector('#toggle-menu');

toggleMenu.addEventListener('click', () => {
  document.querySelector('.nav-link').classList.toggle('d-none');
});
