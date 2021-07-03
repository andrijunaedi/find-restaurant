const assert = require('assert');

Feature('User Review Restaurant');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('Add New Review', async ({ I }) => {
  I.seeElement('.card-detail a');
  I.click(locate('.card-detail a').first());
  I.seeElement('.form-review');

  const review = 'Restaurant ini keren.';
  I.fillField('#input-name', 'Andri Junaedi');
  I.fillField('#input-review', review);
  I.click('#review-button');

  const latestReview = locate('.review_user .review').first();
  const textLastestReview = await I.grabTextFrom(latestReview);

  assert.strictEqual(review, textLastestReview);
});
