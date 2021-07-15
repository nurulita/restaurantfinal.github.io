/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantSource {
  static async listOfRestaurant() {
    const response = await fetch(API_ENDPOINT.RESTAURANTS);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const data = await response.json();
    return data.restaurant;
  }
}

export default RestaurantSource;
