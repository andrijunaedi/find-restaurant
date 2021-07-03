const restaurantCardSkeleton = (count) => {
  let template = '';

  for (let i = 0; i < count; i += 1) {
    template += `
              <div tabindex="0" class="card">
              <div class="card-image">
                  <img src="./icons/placeholder.png""
                  alt="skeleton">
              </div>
              <div class="card-detail">
                  <a href="#" tabindex="0" class="restaurants-name skeleton h-35"></a>
                  <div class="ratings-skeleton skeleton h-25"></div>
              </div>
              </div>
          `;
  }
  return template;
};

const restaurantDetailSkeleton = `
<div class="restaurant_detail_card">
  <div class="restaurant_detail" tabindex="0">
    <div class="container-information">
      <div class="image">
        <img tabindex="0" src="icons/placeholder.png" alt="Skeleton">
      </div>
    <div class="information">
      <h1 class="name skeleton detail-name-skeleton" tabindex="0"></h1>
      <div class="rating skeleton detail-rating-skeleton" tabindex="0"></div>
      <div class="address skeleton address-name-skeleton" tabindex="0"></div>
    </div>
  </div>  
</div></div>`;

export { restaurantCardSkeleton, restaurantDetailSkeleton };
