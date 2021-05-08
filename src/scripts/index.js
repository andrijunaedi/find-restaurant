import restaurantCard from '../components/restaurantCard';
import DATA from '../data/DATA.json';

import 'regenerator-runtime';

/* for async await transpile */
import(/* webpackPreload: true */ '../styles/main.scss');

window.addEventListener('load', async () => {
  /**
   * Toggle menu mobile
   */
  const toggleMenu = document.querySelector('#toggle-menu');
  toggleMenu.addEventListener('click', () => {
    document.querySelector('.nav-link').classList.toggle('d-none');
  });

  /**
   * Import DATA.json and render in DOM
   */
  const restaurantsList = document.querySelector('.restaurants-list');
  const { restaurants } = DATA;
  restaurants.forEach((restaurant) =>
    restaurantCard(restaurantsList, restaurant),
  );
});
