/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
/* eslint-disable import/newline-after-import */
/* eslint-disable linebreak-style */
/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurants-source';
import { createRestaurantDetailTemplate, createRestaurantReviewTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import FavoriteRestoIdb from '../../data/favoriteresto-idb';

const DetailPage = {
  async render() {
    return `
          <div id="restaurant" class="restaurant"></div>
          <div id="likeButtonContainer"></div>
          <div id="reviewCustomer" class="rreviewCustomer"></div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('#restaurant');
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

    const reviewCustomer = await RestaurantSource.detailRestaurant(url.id);
    const reviewContainer = document.querySelector('#reviewCustomer');
    reviewContainer.innerHTML = createRestaurantReviewTemplate(reviewCustomer);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteResto: FavoriteRestoIdb,
      resto: {
        pictureId: restaurant.pictureId,
        id: restaurant.id,
        city: restaurant.city,
        name: restaurant.name,
        description: restaurant.description,
        rating: restaurant.rating,
      },
    });
  },
};

export default DetailPage;
