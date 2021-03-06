import nprogress from 'nprogress/nprogress';
import swal from 'sweetalert';

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

          if (inputName.value !== '' || inputReview.value !== '') {
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
              RestaurantReview(reviewList, review);
            });
          } else {
            swal(
              'Warning',
              'Field name or review required!',
              'warning',
            );
            nprogress.done();
            inputName.value = '';
            inputName.value = '';
          }
        } catch (error) {
          swal('Oops!', 'Add review failed!', 'error');
          document.querySelector('#input-name').value = '';
          document.querySelector('#input-review').value = '';
        }
      });
  }
}

export default AddReview;
