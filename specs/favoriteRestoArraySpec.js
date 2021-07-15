/* eslint-disable linebreak-style */
/* eslint-disable no-return-assign */
/* eslint-disable no-const-assign */
/* eslint-disable no-prototype-builtins */
/* eslint-disable eqeqeq */
/* eslint-disable consistent-return */
/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
import { itActsAsFavoriteRestoModel } from './contract/favoriteRestoContract';

let favoriteResto = [];
const FavoriteRestoArray = {

  getResto(id) {
    if (!id) {
      return;
    }
    return favoriteResto.find((restaurant) => restaurant.id == id);
  },

  getAllResto() {
    return favoriteResto;
  },

  putResto(restaurant) {
    if (!restaurant.hasOwnProperty('id')) {
      return;
    }

    if (this.getResto(restaurant.id)) {
      return;
    }

    favoriteResto.push(restaurant);
  },

  deleteResto(id) {
    favoriteResto = favoriteResto.filter((restaurant) => restaurant.id != id);
  },
};

describe('Favorite Restaurant Array Contract Test Implementation', () => {
  afterEach(() => favoriteResto = []);

  itActsAsFavoriteRestoModel(FavoriteRestoArray);
});
