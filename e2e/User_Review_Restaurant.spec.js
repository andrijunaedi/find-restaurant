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
  I.fillField('#input-name', 'TEST E2E');
  I.fillField('#input-review', review);
  I.click('#review-button');
  I.wait(1);
  I.click('#review-button');
  I.wait(5);

  const latestReview = await locate('.review_user .review').first();
  const textLatestReview = await I.grabTextFrom(latestReview);

  assert.strictEqual(review, textLatestReview);
});
