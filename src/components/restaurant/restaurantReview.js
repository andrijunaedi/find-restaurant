const RestaurantReview = (element, { name, date, review }) => {
  const div = document.createElement('div');

  div.setAttribute('class', 'review_user');
  div.innerHTML = `
        <div class="name" tabindex="0">${name}</div>
        <div class="date" tabindex="0">${date}</div>
        <div class="review" tabindex="0">${review}</div>`;
  return element.appendChild(div);
};

export default RestaurantReview;
