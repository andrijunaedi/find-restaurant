import LikeButtonInitiator from '../../src/utils/like-button-initiator';
import RestaurantIdb from '../../src/services/restaurantIdb';

const createLikeButtonPresenterWithRestaurant = async (
  restaurant,
) => {
  await LikeButtonInitiator.init({
    likeButtonContainer: document.querySelector(
      '#like-button-container',
    ),
    RestaurantIdb,
    restaurant,
  });
};

const addLikeButtonContainer = () => {
  document.body.innerHTML = '<div id="like-button-container"></div>';
};

export {
  createLikeButtonPresenterWithRestaurant,
  addLikeButtonContainer,
};
