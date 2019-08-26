import React, { Fragment } from 'react';
import List from './list';

const ListArticleStats = ({ articles }) => (
  <Fragment>
    <div className="py-4 flex justify-center">
      <table className="w-full text-xs bg-white shadow-md rounded mb-4 overflow-scroll">
        <tbody>
          <tr className="border-b bg-gray-10">
            <th className="text-left p-3 px-5">Articles</th>
            <th className="text-center p-3 px-5">Likes</th>
            <th className="text-center p-3 px-5">Dislikes</th>
            <th className="text-center p-3 px-5">Stars</th>
            <th className="text-center p-3 px-5">Read</th>
            <th />
          </tr>
          <List articles={articles} />
        </tbody>
      </table>
    </div>
  </Fragment>
);

export default ListArticleStats;
