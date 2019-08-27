import React from 'react';
import { connect } from 'react-redux';
import CategorySidebar from '../../components/CategorySidebar';
import CategoryFeaturedImg from '../../components/CategoryFeaturedImg';
import ArticleList from '../../components/ArticleList';
import NoItem from '../../components/NoItem';
import Paginator from '../../components/Paginator';
import * as bookmarkActions from '../../store/actions/bookmarkArticle';
import * as articleActions from '../../store/actions/articleListing';
import './index.scss';

export const ArticleListing = ({
  articleListing: { articleList, selectedCategory },
  getCategories, getArticles, auth, bookmarkArticle
}) => {
  const [category, setCategory] = React.useState(null);
  const [activePage, setActivePage] = React.useState(1);

  React.useEffect(() => {
    getCategories().then((res) => {
      const categoryData = res && res.categories;
      if (categoryData.length > 0) {
        getArticles({
          categoryName: categoryData[selectedCategory].name,
          selectedCategory,
          user: auth.user
        });
      }
      setCategory(categoryData);
    });
  }, []);

  const selectCategory = (index) => {
    getArticles({
      categoryName: category[index].name,
      selectedCategory: index,
      offset: 0,
      user: auth.user
    });
    setActivePage(1);
  };

  const changePage = (page) => {
    getArticles({
      categoryName: category[selectedCategory].name,
      selectedCategory,
      offset: page - 1,
      user: auth.user
    });
    setActivePage(page);
  };

  const handleBookmark = async (e) => {
    const { slug } = e.target.dataset;
    await bookmarkArticle(slug);
    await getArticles({
      categoryName: category[selectedCategory].name,
      selectedCategory,
      offset: activePage - 1,
      user: auth.user
    });
  };

  return (
    category && articleList && (
      <div className="article-listing">
        <div className="sidebar-con">
          <CategorySidebar
            categories={category}
            selectedCategory={category[selectedCategory]}
            selectCategory={selectCategory}
          />
        </div>
        <div className="main">
          <CategoryFeaturedImg
            categories={category}
            selectCategory={selectCategory}
            selectedCategory={category[selectedCategory]}
          />
          {
            articleList.articles.length > 0
              ? (
                <>
                  <ArticleList
                    auth={auth}
                    onBookmark={handleBookmark}
                    articles={articleList.articles}
                  />
                  <Paginator
                    rowPerPage={5}
                    totalRows={articleList.articlesCount}
                    handlePageChange={changePage}
                    activePage={activePage}
                  />
                </>
              )
              : (
                <NoItem font="text-2xl" message="No Articles" />
              )
          }
        </div>
      </div>
    )
  );
};

const mapStateToProps = state => ({
  articleListing: state.articleListing,
  auth: state.auth,
});

const mapDispatchToProps = {
  getCategories: articleActions.getCategories,
  getArticles: articleActions.getArticles,
  bookmarkArticle: bookmarkActions.bookmarkArticle,
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticleListing);
