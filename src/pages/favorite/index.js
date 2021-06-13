import Heroes from '../../components/heroes';
import restaurantCard from '../../components/restaurant/restaurantCard';
import RestaurantIdb from '../../services/restaurantIdb';

const Favorite = {
  async render() {
    new Heroes(document.querySelector('.heroes')).hide();

    return `<section id="restaurants" class="restaurants">
    <div class="tagline">
      <h2 tabindex="0">Favorite Restaurants</h2>
    </div>
    <div id="favorite" class="restaurants-list"></div>
  </section>`;
  },

  async afterRender() {
    const restaurants = await RestaurantIdb.getAll();
    const restaurantsList = document.querySelector(
      '.restaurants-list',
    );

    if (restaurants.length === 0) {
      restaurantsList.innerHTML = `<h3 class="no-favorite"> You do not have any favorite Restaurant Here.</h3>`;
    } else {
      restaurants.forEach((restaurant) =>
        restaurantCard(restaurantsList, restaurant),
      );
    }
  },
};

export default Favorite;
