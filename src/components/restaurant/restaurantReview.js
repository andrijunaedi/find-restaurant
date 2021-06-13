const RestaurantReview = (element, { name, date, review }) => {
  const div = document.createElement('div');

  div.setAttribute('class', 'review_user');
  div.setAttribute('tabindex', '0');
  div.innerHTML = `
        <div class="name">${name}</div>
        <div class="date">${date}</div>
        <p class="review">${review}</p>`;
  return element.appendChild(div);
};

export default RestaurantReview;
