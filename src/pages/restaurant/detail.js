import UrlParser from '../../routes/url-parser';
import Restaurant from '../../service/restaurant';

const RestaurantDetail = {
  async render() {
    return `<section id="restaurants" class="restaurants">
    <div class="tagline">
      <h2 tabindex="0">Restaurants Detail</h2>
    </div>
    <div class="restaurants-list"></div>
  </section>`;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();

    try {
      const data = await Restaurant.detail(url?.id);

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  },
};

export default RestaurantDetail;
