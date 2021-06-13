import CONFIG from '../../global/config';

/**

class RestaurantDetail {
  constructor(
    element,
    {
      id,
      name,
      city,
      address,
      rating,
      categories,
      pictureId,
      description,
      menus,
    },
  ) {
    this.element = element;
    this.name = name;
    this.city = city;
    this.address = address;
    this.rating = rating;
    this.categories = categories;
    this.pictureId = pictureId;
    this.description = description;
    this.menus = menus;

    this.render();
  }

  render() {}
}
 
 */

const restaurantDetail = (
  element,
  {
    name,
    city,
    address,
    rating,
    categories,
    pictureId,
    description,
    menus,
  },
) => {
  const div = document.createElement('div');

  div.setAttribute('class', 'restaurant_detail');
  div.setAttribute('tabindex', '0');
  div.innerHTML = `
        <div class="restaurant_detail">
        <img
            tabindex="0"
            src="${CONFIG.BASE_IMAGE_URL_M}/${pictureId}"
            alt="${name}"
            loading="lazy"
        />
        <div class="information">
            <h1>${name}</h1>
            <div class="rating">Rating ${rating}</div>
            <div class="category">${categories
              .map((category) => category.name)
              .join(', ')}</div>
            <div class="address">${address}, ${city}</div>
        </div>
        <div class="description">
            <h2>Restaurant Details</h2>
            <p>${description}</p>
        </div>
        <div class="menus">
            <h2>Menus</h2>
            <h3>Foods</h3>
            <ul>
                ${menus.foods
                  .map((food) => `<li>${food.name}</li>`)
                  .join('')}
            </ul>
            <h3>Drinks</h3>
            <ul>
                ${menus.drinks
                  .map((drink) => `<li>${drink.name}</li>`)
                  .join('')}
            </ul>
        </div>
        </div>`;
  return element.appendChild(div);
};

export default restaurantDetail;
