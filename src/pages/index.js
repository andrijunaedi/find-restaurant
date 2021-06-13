import Heroes from '../components/heroes';
import restaurantCard from '../components/restaurant/restaurantCard';
import Restaurant from '../services/restaurant';

const Home = {
  async render() {
    const heroes = new Heroes(document.querySelector('.heroes'));
    heroes.render();
    heroes.show();

    return `<section id="restaurants" class="restaurants">
    <div class="tagline">
      <h2 tabindex="0">Restaurants in top destinations</h2>
    </div>
    <div class="restaurants-list"></div>
  </section>`;
  },

  async afterRender() {
    const restaurants = await Restaurant.list();
    restaurants.forEach((restaurant) =>
      restaurantCard(
        document.querySelector('.restaurants-list'),
        restaurant,
      ),
    );
  },
};

export default Home;
