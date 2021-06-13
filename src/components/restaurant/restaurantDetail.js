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
      <div class="container-information">
        <div class="image">
        <img
            tabindex="0"
            src="${CONFIG.BASE_IMAGE_URL_M}/${pictureId}"
            alt="${name}"
            loading="lazy"
        />
        </div>
        <div class="information">
            <h1 class="name" tabindex="0">${name}</h1>
            <div class="rating" tabindex="0">Rating : ${rating}</div>
            <div class="category" tabindex="0">Category : ${categories
              .map((category) => category.name)
              .join(', ')}</div>
            <div class="address" tabindex="0">Address : ${address}, ${city}</div>
        </div>
      </div>  
        <div class="description">
            <h2 class="name" tabindex="0">Restaurant Details</h2>
            <p tabindex="0">${description}</p>
        </div>
        <div class="menus">
            <h2 class="name" tabindex="0">Menus</h2>
            <div class="category-container">
              <div class="category">
                <h3 class="category_name" tabindex="0">Foods</h3>
                <ul>
                    ${menus.foods
                      .map(
                        (food) =>
                          `<li tabindex="0">${food.name}</li>`,
                      )
                      .join('')}
                </ul>
              </div>
              <div class="category">
              <h3 class="category_name" tabindex="0">Drinks</h3>
              <ul>
                  ${menus.drinks
                    .map(
                      (drink) =>
                        `<li tabindex="0">${drink.name}</li>`,
                    )
                    .join('')}
              </ul>
              </div>
            </div>
        </div>`;
  return element.appendChild(div);
};

export default restaurantDetail;
