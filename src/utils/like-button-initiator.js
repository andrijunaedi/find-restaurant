import { LikeButton, UnlikeButton } from '../components/button';

const LikeButtonInitiator = {
  async init({ likeButtonContainer, RestaurantIdb, restaurant }) {
    this._likeButtonContainer = likeButtonContainer;
    this._restaurant = restaurant;
    this._restaurantIdb = RestaurantIdb;

    await this._renderButton();
  },

  async _renderButton() {
    if (await this._isRestaurantExist(this._restaurant.id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isRestaurantExist(id) {
    const restaurant = await this._restaurantIdb.get(id);
    return !!restaurant;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = LikeButton();
    document
      .querySelector('#like-button')
      .addEventListener('click', async () => {
        await this._restaurantIdb.put(this._restaurant);
        this._renderButton();
      });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = UnlikeButton();
    document
      .querySelector('#liked-button')
      .addEventListener('click', async () => {
        await this._restaurantIdb.delete(this._restaurant.id);
        this._renderButton();
      });
  },
};

export default LikeButtonInitiator;
