import nprogress from 'nprogress/nprogress';
import swal from 'sweetalert';

import Heroes from '../components/heroes';
import restaurantCard from '../components/restaurant/restaurantCard';
import { restaurantCardSkeleton } from '../components/skeleton/restaurantSkeleton';
import Restaurant from '../services/restaurant';

const Home = {
  async render() {
    const heroes = new Heroes(document.querySelector('.heroes'));
    heroes.render();
    heroes.show();

    nprogress.start();

    return `<section id="restaurants" class="restaurants">
    <div class="tagline">
      <h2 tabindex="0">Restaurants in top destinations</h2>
    </div>
    <div id="restaurant-skeleton" class="restaurant-skeleton restaurants-list">
    ${restaurantCardSkeleton(4)}
    </div>
    <div class="restaurants-list"></div>
  </section>`;
  },

  async afterRender() {
    try {
      const restaurants = await Restaurant.list();
      nprogress.done();
      document.querySelector('#restaurant-skeleton').remove();

      restaurants.forEach((restaurant) =>
        restaurantCard(
          document.querySelector('.restaurants-list'),
          restaurant,
        ),
      );
    } catch (error) {
      swal('Oops!', 'Something went wrong!', 'error');
    }
  },
};

export default Home;
