import React from 'react';
import { cardStyle } from '../../../utils';
import Button from '../../../components/Button';
import './index.scss';

const Card = ({
  type = 'horizontal', category, title, bg
}) => (
  <div className={type} style={cardStyle(bg)}>
    <p className="category">{category}</p>
    <div className="meta">
      <p className="title">{title}</p>
      <Button type="submit" name="Read More" classes="read-more" />
    </div>
  </div>
);

const Showcase = () => (
  <div className="showcase">
    <div className="latest">
      <h1>Latest Articles</h1>
      <div className="py-5 article-cards">
        <Card bg="/home/luis-villasmil.jpg" category="ARCHITECHTURE" title="The Brand New NASA Office" />
        <div className="vertical-group">
          <Card type="vertical" bg="/home/houcine-ncib.jpg" category="ART" title="Lagos Art Week" />
          <Card type="vertical" bg="/home/ravi-pinisetti.jpg" category="TRAVEL" title="Lagos Art Week" />
        </div>
      </div>
    </div>
    <div className="popular">
      <h1>Popular Articles</h1>
      <div className="py-5 article-cards">
        <div className="vertical-group">
          <Card type="vertical" bg="/home/roksolana-zasiadko.jpg" category="ART" title="Lagos Art Week" />
          <Card type="vertical" bg="/home/victoria-shes.jpg" category="TRAVEL" title="Lagos Art Week" />
        </div>
        <Card bg="/home/ayoola-salako.jpg" category="ARCHITECHTURE" title="The Brand New NASA Office" />
      </div>
    </div>
  </div>
);

export default Showcase;
