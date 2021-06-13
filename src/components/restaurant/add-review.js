import Restaurant from '../../services/restaurant';
import RestaurantReview from './restaurantReview';

class AddReview {
  constructor(formReview, id) {
    this.formReview = formReview;
    this.id = id;

    this.render();
    this._handleButton();
  }

  render() {
    this.formReview.innerHTML = `
    <form>
        <label>Name
            <br/>
            <input type="text" id="input-name" name="inputName" class="inputName" placeholder="Type your name" required>
        </label>
        <br/>
        <label>Review</br />
            <textarea name="inputReview" id="input-review" cols="30" rows="5"
            placeholder="The best Restaurant!" required></textarea>
        </label>
        <br />
        <button id="review-button">Add review</button>
    </form>`;
  }

  _handleButton() {
    document
      .querySelector('#review-button')
      .addEventListener('click', async (event) => {
        try {
          event.preventDefault();
          const inputName = document.querySelector('#input-name');
          const inputReview = document.querySelector('#input-review');
          const reviewList = document.querySelector('.review_list');

          const response = await Restaurant.postReview({
            id: this.id,
            name: inputName.value,
            review: inputReview.value,
          });
          const reviews = await response.json();

          reviewList.innerHTML = '';
          inputName.value = '';
          inputReview.value = '';

          reviews.customerReviews.forEach((review) => {
            RestaurantReview(
              document.querySelector('.review_list'),
              review,
            );
          });
        } catch (error) {
          document.querySelector('#input-name').value = '';
          document.querySelector('#input-review').value = '';
        }
      });
  }
}

export default AddReview;
