import RestaurantIdb from '../src/services/restaurantIdb';
import {
  createLikeButtonPresenterWithRestaurant,
  addLikeButtonContainer,
} from './helpers/TestFactories';

describe('Liking A Restaurant', () => {
  beforeEach(() => {
    addLikeButtonContainer();
  });

  it('should show the like button when the restaurant has not been liked before', async () => {
    await createLikeButtonPresenterWithRestaurant({
      id: 1,
    });

    expect(
      document.querySelector('[aria-label="like this restaurant"]'),
    ).toBeTruthy();
  });

  it('should not show the unlike button when the restaurant has not been liked before', async () => {
    await createLikeButtonPresenterWithRestaurant({
      id: 1,
    });

    expect(
      document.querySelector('[aria-label="unlike this restaurant"]'),
    ).toBeFalsy();
  });

  it('should be able to like the restaurant', async () => {
    await createLikeButtonPresenterWithRestaurant({
      id: 1,
    });

    document
      .querySelector('#like-button')
      .dispatchEvent(new Event('click'));

    expect(await RestaurantIdb.get(1)).toEqual({ id: 1 });
    RestaurantIdb.delete(1);
  });

  it('should not add a restaurant again when its already liked', async () => {
    await createLikeButtonPresenterWithRestaurant({
      id: 1,
    });
    await RestaurantIdb.put({ id: 1 });

    document
      .querySelector('#like-button')
      .dispatchEvent(new Event('click'));

    expect(await RestaurantIdb.getAll()).toEqual([{ id: 1 }]);

    RestaurantIdb.delete(1);
  });

  it('should not add a restaurant when it has no id', async () => {
    await createLikeButtonPresenterWithRestaurant({});

    document
      .querySelector('#like-button')
      .dispatchEvent(new Event('click'));

    expect(await RestaurantIdb.getAll()).toEqual([]);
  });
});
