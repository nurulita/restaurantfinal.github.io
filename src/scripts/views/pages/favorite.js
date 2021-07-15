/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable no-shadow */
/* eslint-disable linebreak-style */

import FavoriteRestoIdb from '../../data/favoriteresto-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const FavoritePage = {
  async render() {
    return `
      <h2>Your Favorite Restaurants</h2>
        <div id="restaurants" class="restaurants">
 
        </div>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestoIdb.getAllResto();
    const restaurantContainer = document.querySelector('#restaurants');
    if (restaurants.length === 0) {
      restaurantContainer.innerHTML = `
      <div class="emptyText">
        <h3 tabindex="0">Tidak Ada Restoran Favorit</h3>
      </div>
      `;
    }
    restaurants.forEach((restaurants) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurants);
    });
  },
};

export default FavoritePage;
