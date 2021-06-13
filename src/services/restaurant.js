import API from '../global/api-endpoint';
import CONFIG from '../global/config';

class Restaurant {
  static async list() {
    const response = await (await fetch(API.list)).json();
    return response?.restaurants;
  }

  static async postReview(data) {
    const response = await fetch(API.review, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Auth-Token': CONFIG.API_KEY,
      },
      body: JSON.stringify(data),
    });
    return response;
  }

  static async detail(id) {
    const response = await fetch(API.detail(id));
    return response.json();
  }
}

export default Restaurant;
