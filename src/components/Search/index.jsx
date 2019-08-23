import React, { useState } from 'react';
import { connect } from 'react-redux';
import SearchIcon from '../../assets/svgs/searchIcon';
import './index.scss';
import { searchAction, searchCleanUp } from '../../store/actions/search';

const search = (props) => {
  const { history } = props;
  const [params, setParams] = useState({ title: '' });

  const handleClick = async (e) => {
    /* istanbul ignore next */
    e.preventDefault();
    /* istanbul ignore next */
    await props.searchAction(params);
    /* istanbul ignore next */
    history.push('/search');
  };

  const onChange = (e) => {
    /* istanbul ignore next */
    e.persist();
    /* istanbul ignore next */
    setParams({ title: e.target.value });
  };

  return (
    <div className="search relative flex items-center justify-center p-0 mr-6">
      <input
        className="border hidden md:inline-flex border-solid border-gray-350 bg-gray-20 rounded-4xl h-9 w-64 pr-2 pl-4"
        placeholder="Search..."
        type="text"
        name="title"
        onChange={onChange}
        autoComplete="off"
      />
      <SearchIcon classes="searchIcon cursor-pointer absolute right-0" onClick={handleClick} />
    </div>
  );
};

const mapStateToProps = state => ({
  isCompleted: state.search.isCompleted
});
export default connect(mapStateToProps, { searchAction, searchCleanUp })(search);
