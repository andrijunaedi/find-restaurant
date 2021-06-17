import nprogress from 'nprogress/nprogress';
import swal from 'sweetalert';

import restaurantDetail from '../../components/restaurant/restaurantDetail';
import RestaurantReview from '../../components/restaurant/restaurantReview';
import UrlParser from '../../routes/url-parser';
import RestaurantIdb from '../../services/restaurantIdb';
import Restaurant from '../../services/restaurant';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import Heroes from '../../components/heroes';
import AddReview from '../../components/restaurant/add-review';

const RestaurantDetail = {
  async render() {
    const heroes = new Heroes(document.querySelector('.heroes'));
    heroes.hide();
    nprogress.start();

    return `<section id="restaurant" class="restaurant">
      <div class="restaurant_detail_card"></div>
      <div id="like-button-container"></div>
      <div class="reviews">
        <div class="review_list">
          <h2>Reviews</h2>
        </div>
        <div class="add_review"> 
          <h2 class="text-center my-70 secondary">Add review</h2>
          <div class="form-review my-20"></div>
        </div>
    </div>
  </section>`;
  },

  async afterRender() {
    try {
      const url = UrlParser.parseActiveUrlWithoutCombiner();
      const { restaurant } = await Restaurant.detail(url?.id);
      nprogress.done();

      restaurantDetail(
        document.querySelector('.restaurant_detail_card'),
        restaurant,
      );

      await LikeButtonInitiator.init({
        likeButtonContainer: document.querySelector(
          '#like-button-container',
        ),
        RestaurantIdb,
        restaurant,
      });

      restaurant.customerReviews
        .reverse()
        .map((review) =>
          RestaurantReview(
            document.querySelector('.review_list'),
            review,
          ),
        );

      const addReview = new AddReview(
        document.querySelector('.form-review'),
        url?.id,
      );
      addReview.init();
    } catch (error) {
      swal(
        'Oops!',
        'Something went wrong! \n Please check your internet access...',
        'error',
      );
    }
  },
};

export default RestaurantDetail;
