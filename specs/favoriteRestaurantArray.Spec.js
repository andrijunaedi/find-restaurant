import itActsAsRestaurantModel from './contract/restaurantModelContract';

let favoriteRestaurants = [];

const FavoriteRestaurantArray = {
  get(id) {
    if (!id) return null;

    return favoriteRestaurants.find(
      (restaurant) => restaurant.id === id,
    );
  },

  getAll() {
    return favoriteRestaurants;
  },

  put(restaurant) {
    if (!Object.prototype.hasOwnProperty.call(restaurant, 'id')) {
      return null;
    }

    if (this.get(restaurant.id)) {
      return null;
    }

    return favoriteRestaurants.push(restaurant);
  },

  delete(id) {
    favoriteRestaurants = favoriteRestaurants.filter(
      (restaurant) => restaurant.id !== id,
    );
  },
};

describe('Favorite restaurant Array Contract Test Implementation', () => {
  afterEach(() => (favoriteRestaurants = []));

  itActsAsRestaurantModel(FavoriteRestaurantArray);
});
