import React from 'react';
import { Link } from 'react-router-dom';
import { cardStyle } from '../../../utils';
import Button from '../../../components/Button';
import './index.scss';

const Card = ({
  type = 'horizontal',
  category = 'Others',
  title = 'Article',
  bg,
  slug = null
}) => (
    <div className={type} style={cardStyle(`${bg || '/placeholder.png'}`)} >
      <p className="category">{category}</p>
      <div className="meta">
        <p className="title">{title}</p>
        <Link to={slug ? `/articles/${slug}` : '#'}>
          Read More
        </Link>
      </div>
    </div >
  );

const Showcase = ({ popular, latest }) => (
  <div className="showcase">
    <div className="latest">
      <h1>Latest Articles</h1>
      <div className="py-5 article-cards">
        <Card
          bg={latest[0] && latest[0].image}
          category={latest[0] && latest[0].category && latest[0].category.name}
          title={latest[0] && latest[0].title}
          slug={latest[0] && latest[0].slug}
        />
        <div className="vertical-group">
          <Card
            type="vertical"
            bg={latest[1] && latest[1].image}
            category={latest[1] && latest[1].category && latest[1].category.name}
            title={latest[1] && latest[1].title}
            slug={latest[1] && latest[1].slug}
          />
          <Card
            type="vertical"
            bg={latest[2] && latest[2].image}
            category={latest[2] && latest[2].category && latest[2].category.name}
            title={latest[2] && latest[2].title}
            slug={latest[2] && latest[2].slug}
          />
        </div>
      </div>
    </div>
    <div className="popular">
      <h1>Popular Articles</h1>
      <div className="py-5 article-cards">
        <div className="vertical-group">
          <Card
            type="vertical"
            bg={popular[0] && popular[0].image}
            category={popular[0] && popular[0].category && popular[0].category.name}
            title={popular[0] && popular[0].title}
            slug={popular[0] && popular[0].slug}
          />
          <Card
            type="vertical"
            bg={popular[1] && popular[1].image}
            category={popular[1] && popular[1].category && popular[1].category.name}
            title={popular[1] && popular[1].title}
            slug={popular[1] && popular[1].slug}
          />
        </div>
        <Card
          bg={popular[2] && popular[2].image}
          category={popular[2] && popular[2].category && popular[2].category.name}
          title={popular[2] && popular[2].title}
          slug={popular[2] && popular[2].slug}
        />
      </div>
    </div>
  </div>
);

export default Showcase;
