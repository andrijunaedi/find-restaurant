import RestaurantIdb from '../src/services/restaurantIdb';
import itActsAsRestaurantModel from './contract/restaurantModelContract';

describe('Favorite restaurant Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await RestaurantIdb.getAll()).forEach(async ({ id }) => {
      await RestaurantIdb.delete(id);
    });
  });

  itActsAsRestaurantModel(RestaurantIdb);
});
