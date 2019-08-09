require('dotenv').config;

const app = process.env.APP_URL;
module.exports = {
  'Render Home Page': (browser) => {
    browser
      .url(app)
      .waitForElementVisible('.home')
      .assert.elementPresent('.section-one')
      .assert.elementPresent('.s1-left-e2e')
      .assert.elementPresent('.s1-left-e2e .welcome')
      .assert.containsText('.s1-left-e2e h1.welcome', 'Welcome to Authors Haven')
      .assert.containsText('.s1-left-e2e p.caption', 'A platform to share your amazing ideas and articles with the rest of the world')
      .assert.elementPresent('.s1-right-e2e')
      .assert.visible('img.r-img-e2e')
      .assert.elementPresent('.section-two')
      .assert.elementPresent('.latest-articles')
      .assert.elementPresent('.latest-articles .left-heading-e2e')
      .assert.elementPresent('.latest-articles .article-cards')
      .assert.elementPresent('.latest-articles .article-cards .card-1-img-e2e')
      .assert.elementPresent('.latest-articles .article-cards .card-1-img-e2e .category-1-e2e')
      .assert.elementPresent('.latest-articles .article-cards .card-1-img-e2e .title-1-e2e')
      .assert.elementPresent('.latest-articles .article-cards .card-1-img-e2e .card-1-btn-e2e')
      .assert.elementPresent('.latest-articles .article-cards .card-2-img-e2e')
      .assert.elementPresent('.latest-articles .article-cards .card-2-img-e2e .category-2-e2e')
      .assert.elementPresent('.latest-articles .article-cards .card-2-img-e2e .title-2-e2e')
      .assert.elementPresent('.latest-articles .article-cards .card-2-img-e2e .card-2-btn-e2e')
      .assert.elementPresent('.latest-articles .article-cards .card-3-img-e2e')
      .assert.elementPresent('.latest-articles .article-cards .card-3-img-e2e .category-3-e2e')
      .assert.elementPresent('.latest-articles .article-cards .card-3-img-e2e .title-3-e2e')
      .assert.elementPresent('.latest-articles .article-cards .card-3-img-e2e .card-3-btn-e2e')
      .assert.elementPresent('.popular-articles')
      .assert.elementPresent('.popular-articles .right-heading-e2e')
      .assert.elementPresent('.popular-articles .article-cards')
      .assert.elementPresent('.popular-articles .article-cards .card-4-img-e2e')
      .assert.elementPresent('.popular-articles .article-cards .card-4-img-e2e .category-4-e2e')
      .assert.elementPresent('.popular-articles .article-cards .card-4-img-e2e .title-4-e2e')
      .assert.elementPresent('.popular-articles .article-cards .card-4-img-e2e .card-4-btn-e2e')
      .assert.elementPresent('.popular-articles .article-cards .card-5-img-e2e')
      .assert.elementPresent('.popular-articles .article-cards .card-5-img-e2e .category-5-e2e')
      .assert.elementPresent('.popular-articles .article-cards .card-5-img-e2e .title-5-e2e')
      .assert.elementPresent('.popular-articles .article-cards .card-5-img-e2e .card-5-btn-e2e')
      .assert.elementPresent('.popular-articles .article-cards .card-6-img-e2e')
      .assert.elementPresent('.popular-articles .article-cards .card-6-img-e2e .category-6-e2e')
      .assert.elementPresent('.popular-articles .article-cards .card-6-img-e2e .title-6-e2e')
      .assert.elementPresent('.popular-articles .article-cards .card-6-img-e2e .card-6-btn-e2e')
      .assert.elementPresent('.section-three')
      .assert.containsText('p.s3-heading-e2e', 'About Us')
      .assert.elementPresent('.s3-left-e2e')
      .assert.visible('img.img-r-e2e')
      .assert.elementPresent('.s3-right-e2e')
      .assert.containsText('h1.s3-right-head-e2e', 'Be Outstanding')
      .assert.containsText('p.s3-right-body-e2e', 'Reach out to over 1 million readers from the comfort of your home')
      .assert.elementPresent('.section-four')
      .assert.elementPresent('.s4-left-e2e')
      .assert.containsText('h1.s4-heading-e2e', 'Share Ideas')
      .assert.containsText('p.s4-left-body-e2e', 'Share your knowledge with other writers and get opinions')
      .assert.elementPresent('.s4-right-e2e')
      .assert.visible('.s4-right-e2e img.img-r-e2e')
      .assert.elementPresent('.section-five')
      .assert.elementPresent('.s5-heading-e2e')
      .assert.containsText('p.s5-heading-e2e', 'More Articles')
      .assert.elementPresent('.s5-left-article')
      .assert.visible('img.s6Image')
      .assert.elementPresent('.s5-left-article-title')
      .assert.elementPresent('.s5-left-article-caption')
      .assert.elementPresent('.s5-right-article')
      .assert.elementPresent('.s5-right-article-title')
      .assert.elementPresent('.s5-right-article-caption')
      .assert.visible('.explore-btn-e2e')
      .assert.elementPresent('p.join-e2e')
      .assert.visible('.get-started-e2e')
      .assert.elementPresent('.copyright-e2e')
      .assert.elementPresent('.connect-e2e')
      .assert.elementPresent('.social-icon-e2e')
      .assert.elementPresent('.footer-menu-e2e')
      .pause(500)
      .end();
  },
};
