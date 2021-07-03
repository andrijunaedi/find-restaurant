const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty Liked Restaurant', ({ I }) => {
  I.seeElement('.no-favorite');
  I.see(
    'You do not have any favorite Restaurant Here.',
    '.no-favorite',
  );
});

Scenario('Liking one of Restaurant', async ({ I }) => {
  I.see(
    'You do not have any favorite Restaurant Here.',
    '.no-favorite',
  );
  I.amOnPage('/');
  I.seeElement('.card-detail a');

  const firstCardRestaurant = locate('.card-detail a').first();
  const firstCardRestaurantTitle = await I.grabTextFrom(
    firstCardRestaurant,
  );
  I.click(firstCardRestaurant);
  I.seeElement('#like-button');
  I.click('#like-button');

  I.amOnPage('/#/favorite');
  I.seeElement('#favorite');
  const likedFilmTitle = await I.grabTextFrom('.restaurants-name');

  assert.strictEqual(firstCardRestaurantTitle, likedFilmTitle);
});
