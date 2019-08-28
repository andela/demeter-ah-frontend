import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Star from '../../assets/svgs/starblank';
import Starcolor from '../../assets/svgs/star';
import { viewArticleAction } from '../../store/actions/viewArticle';
import { getRate, rateCleanUp, postRate } from '../../store/actions/rateArticle';

export const RateArticle = ({
  rate,
  article,
  slug,
  isAuthenticated,
  getRateAction,
  user,
  postRateAction,
  text,
  classes,
  viewArticleAction,
}) => {
  const [newUserRate, setselectStar] = useState(false);
  const [userRate, setuserRate] = useState(0);


  useEffect(() => {
    if (isAuthenticated) {
      getRateAction(slug);
    }
    return () => {
      rateCleanUp();
    };
  }, []);

  useEffect(() => {
    if (rate && rate.stars) {
      setuserRate(rate.stars);
    }
  }, [rate]);

  const updateRate = async () => {
    await postRateAction(slug, newUserRate);
    viewArticleAction(slug);
  };

  useEffect(() => {
    if (newUserRate) {
      setuserRate(newUserRate);
      updateRate();
    }
    return () => {
      rateCleanUp();
    };
  }, [newUserRate]);

  const loadStar = () => {
    const rater = userRate ? Math.floor(userRate) : 0;
    const stars = [];
    for (let i = 0; i < 5; i += 1) {
      if (i < rater) {
        stars.push(<Starcolor selected="selected" clicked={() => setselectStar(i + 1)} key={i} />);
      } else {
        stars.push(<Star selected="selected" clicked={() => setselectStar(i + 1)} key={i} />);
      }
    }
    return stars;
  };

  return !isAuthenticated || user.id === (article && article.authorId)
    ? ''
    : (
      <>
        <p>{ text }</p>
        <div className={classes}>{loadStar()}</div>
        { userRate }
        {' '}
        out of 5
      </>
    );
};
const mapStateToProps = state => ({
  user: state.auth.user,
  article: state.viewArticle.article,
  isAuthenticated: state.auth.isAuthenticated,
  rate: state.rate.rate,
  rateError: state.rate.error,
});

const mapDispatchToProps = {
  getRateAction: getRate,
  postRateAction: postRate,
  viewArticleAction,
  rateCleanUp,
};

export default connect(mapStateToProps, mapDispatchToProps)(RateArticle);
