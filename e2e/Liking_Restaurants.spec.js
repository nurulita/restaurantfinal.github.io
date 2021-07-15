/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

const message = 'Tidak Ada Restoran Favorit';
Scenario('showing empty favorite restaurant', ({ I }) => {
  I.seeElement('#restaurants');
  I.see(message, '.emptyText');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see(message, '.emptyText');

  I.amOnPage('/');

  I.seeElement('.restaurant-item_content');

  const firstRestaurant = locate('.restaurant-item_content a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-item');
  const likedRestaurantTitle = await I.grabTextFrom('.restaurant-item_content a');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});

Scenario('unliking one restaurant', async ({ I }) => {
  I.see(message, '.emptyText');

  I.amOnPage('/');

  I.seeElement('.restaurant-item_content');
  const firstRestaurant = locate('.restaurant-item_content a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-item');
  const likedRestaurant = await I.grabTextFrom('.restaurant-item_content a');

  assert.strictEqual(firstRestaurantTitle, likedRestaurant);

  I.click(likedRestaurant);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('#restaurants');
  const EmptyRestaurantFavorite = await I.grabTextFrom('#restaurants');
  assert.strictEqual(EmptyRestaurantFavorite, message);
});
