import nprogress from 'nprogress/nprogress';

import Restaurant from '../../services/restaurant';
import RestaurantReview from './restaurantReview';

class AddReview {
  constructor(formReview, id) {
    this.formReview = formReview;
    this.id = id;
  }

  init() {
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
          nprogress.start();

          const inputName = document.querySelector('#input-name');
          const inputReview = document.querySelector('#input-review');
          const reviewList = document.querySelector('.review_list');

          if (inputName.value === '' || inputReview.value === '') {
            // eslint-disable-next-line no-alert
            alert('Kolom inputan tidak boleh kosong');
            inputName.value = '';
            inputName.value = '';
          } else {
            const response = await Restaurant.postReview({
              id: this.id,
              name: inputName.value,
              review: inputReview.value,
            });
            const reviews = await response.json();
            nprogress.done();

            reviewList.innerHTML = '<h2>Reviews</h2>';
            inputName.value = '';
            inputReview.value = '';

            reviews.customerReviews.reverse().forEach((review) => {
              RestaurantReview(
                document.querySelector('.review_list'),
                review,
              );
            });
          }
        } catch (error) {
          alert('Add review gagal!');
          document.querySelector('#input-name').value = '';
          document.querySelector('#input-review').value = '';
        }
      });
  }
}

export default AddReview;
