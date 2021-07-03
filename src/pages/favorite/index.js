import nprogress from 'nprogress/nprogress';
import swal from 'sweetalert';

import Heroes from '../../components/heroes';
import restaurantCard from '../../components/restaurant/restaurantCard';
import { restaurantCardSkeleton } from '../../components/skeleton/restaurantSkeleton';
import RestaurantIdb from '../../services/restaurantIdb';

const Favorite = {
  async render() {
    new Heroes(document.querySelector('.heroes')).hide();
    nprogress.start();

    return `<section id="restaurants" class="restaurants">
    <div class="tagline">
      <h1 tabindex="0">Favorite Restaurants</h1>
    </div>
    <div id="restaurant-skeleton" class="restaurant-skeleton restaurants-list">
    ${restaurantCardSkeleton(4)}
    </div>
    <div id="favorite" class="restaurants-list"></div>
  </section>`;
  },

  async afterRender() {
    try {
      const restaurants = await RestaurantIdb.getAll();
      nprogress.done();
      document.querySelector('#restaurant-skeleton').remove();

      const restaurantsList = document.querySelector(
        '.restaurants-list',
      );

      if (restaurants.length === 0) {
        restaurantsList.innerHTML = `<span class="no-favorite"> You do not have any favorite Restaurant Here.</span>`;
      } else {
        restaurants.forEach((restaurant) =>
          restaurantCard(restaurantsList, restaurant),
        );
      }
    } catch (error) {
      swal(
        'Oops!',
        'Something went wrong! \n Please check your internet access...',
        'error',
      );
    }
  },
};

export default Favorite;
