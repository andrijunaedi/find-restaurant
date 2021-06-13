import Home from '../pages';
import Favorite from '../pages/favorite';
import RestaurantDetail from '../pages/restaurant/detail';

const routes = {
  '/': Home, // default page
  '/home': Home,
  '/restaurants/:id': RestaurantDetail,
  '/favorite': Favorite,
};

export default routes;
