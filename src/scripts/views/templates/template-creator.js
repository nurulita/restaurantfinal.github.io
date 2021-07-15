/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
<div class="restaurant-detail_container">
<h2 tabindex="0" class="restaurant-name">${restaurant.name}</h2>
<picture>
<source media="(max-width: 600px)" srcset="${CONFIG.BASE_SMALL_IMAGE_URL + restaurant.pictureId}">
  <img class="lazyload restaurant-pict" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
</picture>
</div>
  <div class="restaurant-info">
  <h3 tabindex="0">Information</h3>
    <h4 tabindex="0">City</h4>
    <p tabindex="0">${restaurant.city}</p>
    <h4 tabindex="0">Rating</h4>
    <p tabindex="0">${restaurant.rating}</p>
    <h4 tabindex="0">Address</h4>
    <p tabindex="0">${restaurant.address}</p>
    <h4 tabindex="0">Categories</h4>
    <ul tabindex="0">${restaurant.categories
    .map(
      (categories) => `
            <li>${categories.name}</li>
          `,
    ).join('')
}</ul>
  </div>
  <div class="restaurant-detail_desc">
    <h3 tabindex="0">Description</h3>
    <p tabindex="0">${restaurant.description}</p>
  </div>
  <div class="menu-foods">
    <h3 tabindex="0">Foods</h3>
    <ol tabindex="0">
    ${restaurant.menus.foods
    .map(
      (foods) => `
          <li>${foods.name}</li>
        `,
    ).join('')
}
  </ol>
 </div>
  <div class="menu-drink">
    <h3 tabindex="0">Drinks</h3>
    <ol tabindex="0">
    ${restaurant.menus.drinks
    .map(
      (drink) => `
          <li tabindex="0">${drink.name}</li>
        `,
    ).join('')
}
  </ol>
  </div>
`;

const createRestaurantReviewTemplate = (restaurant) => `
<div class="restaurant-review__visitor">
<h3 tabindex="0">Review Pengunjung</h3>
    <p tabindex="0">${restaurant.customerReviews
    .map(
      (customerReviews) => `
      <div class="customer-review">
            <p tabindex="0" class="review-name">${customerReviews.name}</p>
            <p tabindex="0" class="review-date">${customerReviews.date}</p>
            <p tabindex="0" class="review-desc">${customerReviews.review}</p>
      </div>
          `,
    ).join('')
}</p>
</div>
`;

const createRestaurantItemTemplate = (restaurant) => `
  <div class="restaurant-item">
    <div class="restaurant-header">
    <picture>
    <source media="(max-width: 600px)" srcset="${CONFIG.BASE_SMALL_IMAGE_URL + restaurant.pictureId}">
        <img class="lazyload restaurant-header_picture" alt="${restaurant.name}"
            src="${restaurant.pictureId ? CONFIG.BASE_IMAGE_URL + restaurant.pictureId : 'https://restaurant-api.dicoding.dev/images/medium/'}">
    </picture>
        <div class="restaurant-header_rating">
            <p tabindex="0">⭐️<span class="restaurant-header_rating_score">${restaurant.rating}</span></p>
        </div>
    </div>
    <div class="restaurant-item_content">
        <h3 tabindex="0"><a href="${`/#/detail/${restaurant.id}`}">${restaurant.name}</a></h3>
        <h5 tabindex="0" class="restaurant-city">
        <p tabindex="0">${restaurant.city}</p>
        </h5>
        <p tabindex="0" class="restaurant-description">${restaurant.description}</p>
        <br>
        <p class="restaurant-detail"><a tabindex="0" href="${`/#/detail/${restaurant.id}`}"><strong>See detail</strong>&#10230;
        </a></p>
    </div>
  </div>
  `;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createRestaurantReviewTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
