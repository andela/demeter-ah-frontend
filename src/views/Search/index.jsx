import React, { Fragment, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import './index.scss';
import SearchIcon from '../../assets/svgs/searchIcon';
import Dropdown from '../../assets/svgs/dropdown';
import SearchArticleCard from '../../components/SearchArticleCard';
import Filter from '../../components/Filter';
import { searchAction, searchCleanUp } from '../../store/actions/search';
import Loader from '../../components/Loader';

const Search = (props) => {
  const { keyword, articles } = props;
  const initialParams = {
    title: keyword || '',
    tag: '',
    author: ''
  };

  const [params, setParams] = useState(initialParams);
  const [toggle, setToggle] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  let delay = null;
  const onChange = (e) => {
    e.persist();
    delay ? clearTimeout(delay) : '';
    setParams(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
    setIsLoading(true);
  };

  const handleFilterToggle = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    props.searchCleanUp();
    delay = setTimeout(async () => {
      if (params.title || params.tag || params.author) {
        await props.searchAction(params);
        setIsLoading(false);
      }
    }, 1000);
  }, [params]);

  const LoadArticles = articles.length ? articles.map((article) => {
    const {
      id,
      title,
      slug,
      readTime,
      image,
      createdAt,
      category,
      author: {
        firstName,
        lastName
      },
      tags
    } = article;
    const categoryName = category && category.name;
    const date = new Date(createdAt);
    const createdDate = date.toLocaleDateString('default', { month: 'short', day: 'numeric', year: 'numeric' });
    return (
      <SearchArticleCard
        key={id}
        image={image}
        category={categoryName}
        authorname={`${firstName} ${lastName}`}
        title={title}
        slug={slug}
        readTime={readTime}
        createdAt={createdDate}
        tags={tags}
      />
    );
  }) : (<h4>No Article was found for this search</h4>);

  return (
    <Fragment>
      <div className="search-pg h-screen">
        <div className="w-full md:w-2/3 mt-16 h-14 absolute">
          <SearchIcon width="20px" height="20px" fill="#835BD8" classes="searchIcon cursor-pointer absolute" />
          <input
            className="border border-solid border-purple-650 bg-white-100 rounded-t-xl h-14 w-full pl-16 text-1xl"
            placeholder="Search..."
            type="text"
            name="title"
            autoComplete="off"
            onChange={onChange}
            value={params.title}
          />
          <span
            className="cursor-pointer absolute right-0 w-auto md:w-40 bg-purple-650 h-full rounded-tr-xl"
          >
            <button className="h-full w-full pr-4" onClick={handleFilterToggle}>
              <div className="h-full w-full pl-4 pt-1">
                <Dropdown classes="mt-2 mb-4 mr-2 inline-block " width="14px" height="10px" fill="#ffffff" />
                <h3 className="inline-block px-1 text-1xl text-white mt-3">Filter By</h3>
              </div>
            </button>
            {
              toggle ? <Filter onChange={onChange} /> : ''
            }
          </span>
        </div>
        {
          isLoading
            ? (
              <div className="w-full md:w-2/3 bg-white absolute result">
                <Loader fixed size="w-12 h-12" />
              </div>
            ) : (
              <div className="w-full md:w-2/3 bg-white absolute result">
                <h2 className="border-b-2 border-gray-30 w-full pl-16 pb-4 mb-0 text-xl">
                  Search Result
                  {` (${articles.length})`}
                </h2>
                <div className="articles w-full px-12 py-4">
                  {LoadArticles}
                </div>
              </div>
            )
        }
      </div>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  articles: state.search.articles,
  keyword: state.search.keyword,
  error: state.search.error,
  isCompleted: state.search.isCompleted
});

export default connect(mapStateToProps, { searchAction, searchCleanUp })(Search);
