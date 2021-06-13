import RestaurantDbSource from '../data/food-map-source';
import Restaurant from '../services/restaurant';

const postReviewHandler = (url, name, review) => {
  Restaurant.postReview({
    id: url.id,
    name,
    review,
  });

  const reviewContainer = document.querySelector('.review');
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const date = new Date().toLocaleDateString('id-ID', options);
  const newReview = `
    <div class="my-20 mb-20 flexbox">
            <img src="./icons/user.png" alt="${name}">
            <div class="user ml-20">
                <p class="reviewName">${name}</p>
                <p class="reviewTime">${date}</p>
                <p class="reviewMessage">${review}</p>
            </div>
    </div>
    `;
  reviewContainer.innerHTML += newReview;
};

export default postReviewHandler;
