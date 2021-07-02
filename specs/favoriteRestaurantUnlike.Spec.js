import RestaurantIdb from '../src/services/restaurantIdb';
import {
  createLikeButtonPresenterWithRestaurant,
  addLikeButtonContainer,
} from './helpers/TestFactories';

describe('Unliking A restaurant', () => {
  beforeEach(async () => {
    addLikeButtonContainer();
    await RestaurantIdb.put({ id: 1 });
  });

  afterEach(async () => {
    await RestaurantIdb.delete(1);
  });

  it('should display unlike widget when the restaurant has been liked', async () => {
    await createLikeButtonPresenterWithRestaurant({
      id: 1,
    });

    expect(
      document.querySelector('[aria-label="unlike this restaurant"]'),
    ).toBeTruthy();
  });

  it('should not display like widget when the restaurant has been liked', async () => {
    await createLikeButtonPresenterWithRestaurant({
      id: 1,
    });

    expect(
      document.querySelector('[aria-label="like this restaurant"]'),
    ).toBeFalsy();
  });

  it('should be able to remove liked restaurant from the list', async () => {
    await createLikeButtonPresenterWithRestaurant({
      id: 1,
    });

    document
      .querySelector('[aria-label="unlike this restaurant"]')
      .dispatchEvent(new Event('click'));

    expect(await RestaurantIdb.getAll()).toEqual([]);
  });

  it('should not throw error if the unliked restaurant is not in the list', async () => {
    await createLikeButtonPresenterWithRestaurant({
      id: 1,
    });
    await RestaurantIdb.delete(1);

    document
      .querySelector('[aria-label="unlike this restaurant"]')
      .dispatchEvent(new Event('click'));

    expect(await RestaurantIdb.getAll()).toEqual([]);
  });
});
