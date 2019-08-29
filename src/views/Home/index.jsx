import React from 'react';
import { connect } from 'react-redux';
import { getArticles } from '../../store/actions/home';
import Banner from './Banner';
import Showcase from './Showcase';
import More from './More';
import About from './About';
import Footer from './Footer';

const Home = (props) => {

  const [popular, setPopular] = React.useState({});
  const [latest, setLatest] = React.useState({});

  React.useEffect(() => {
    props.getArticles({ sort: 'reads' }).then((res) => {
      if (res) setPopular(res.articles);
    });
    props.getArticles({ sort: 'createdAt' }).then((res) => {
      if (res) setLatest(res.articles);
    });
  }, []);

  return popular && latest && (
    <div className="home">
      <Banner />
      <Showcase latest={latest} popular={popular} />
      <About />
      <More articles={popular} />
      <Footer />
    </div>
  );
};

export default connect(() => ({}), { getArticles })(Home);
