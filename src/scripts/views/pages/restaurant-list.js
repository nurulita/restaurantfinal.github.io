/* eslint-disable linebreak-style */
/* eslint-disable no-shadow */
/* eslint-disable linebreak-style */
/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable import/newline-after-import */
/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
import RestaurantSource from '../../data/restaurants-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const RestaurantList = {
  async render() {
    return `
            <div class="content">
              <h2 class="content-heading">Restaurant's List</h2>
              <div id="restaurants" class="restaurants">

              </div>
           </div>
          `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.listOfRestaurant();
    const restaurantContainer = document.querySelector('#restaurants');
    restaurants.forEach((restaurants) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurants);
    });
  },
};
export default RestaurantList;
