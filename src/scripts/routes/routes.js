/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
import RestaurantList from '../views/pages/restaurant-list';
import DetailPage from '../views/pages/detail';
import FavoritePage from '../views/pages/favorite';

const routes = {
  '/': RestaurantList, // default page
  '/restaurant-list': RestaurantList,
  '/detail/:id': DetailPage,
  '/favorite': FavoritePage,
};

export default routes;
