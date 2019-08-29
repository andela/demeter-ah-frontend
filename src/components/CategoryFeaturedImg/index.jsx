import React from 'react';
import { ImageStyle } from '../../utils';

export const CategoryFeaturedImg = ({ selectedCategory, categories, selectCategory }) => (
  <div className="banner-con">
    <div
      className="banner"
      style={ImageStyle(selectedCategory.image || '/placeholder.png')}
    >
      <h1>{selectedCategory.name}</h1>
      <p>{selectedCategory.description}</p>
    </div>
    <select
      onChange={
        e => selectCategory(e.target.value)
      }
    >
      {categories.map((e, index) => <option value={index} key={e.id}>{e.name}</option>)}
    </select>
  </div>
);

export default CategoryFeaturedImg;
