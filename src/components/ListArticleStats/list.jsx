import React, { Fragment } from 'react';
import Stars from '../Rating';

const List = ({ articles }) => {
  const showArticles = articles.length ? articles.map(article => (
    <Fragment key={article.id}>
      <tr className="border-b">
        <td className="p-3 px-5">
          {article.title}
        </td>
        <td className="p-3 px-5 text-center">{article.upVote.length}</td>
        <td className="p-3 px-5 text-center">{article.downVote.length}</td>
        <td className="p-3 px-5 text-center flex items-center justify-center">
          <Stars rating={article.rating} />
        </td>
        <td className="p-3 px-5 text-center">{article.reads}</td>
      </tr>
    </Fragment>
  ))
    : (
      <tr className="text-center">
        <td className="p-3 px-5 text-center" />
        <td className="p-3 px-5 text-center" />
        <td className="p-3 px-5 text-center">NO Available stats</td>
        <td className="p-3 px-5 text-center" />
        <td className="p-3 px-5 text-center" />
      </tr>
    );
  return (
    showArticles
  );
};

export default List;
