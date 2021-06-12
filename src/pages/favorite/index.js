import restaurantCard from '../../components/restaurantCard';
import Restaurant from '../../service/restaurant';

const Favorite = {
  async render() {
    return `<section id="restaurants" class="restaurants">
    <div class="tagline">
      <h2 tabindex="0">Restaurants in top destinations</h2>
    </div>
    <div class="restaurants-list"></div>
  </section>`;
  },

  async afterRender() {
    /**
     * Import DATA.json and render in DOM
     */
    const restaurants = await Restaurant.list();
    console.log(restaurants);

    const restaurantsList = document.querySelector(
      '.restaurants-list',
    );
    restaurants.forEach((restaurant) =>
      restaurantCard(restaurantsList, restaurant),
    );
  },
};

export default Favorite;
