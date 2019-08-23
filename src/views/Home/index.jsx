import './index.scss';
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import s1Image from '../../assets/images/home/home-section-1.png';
import s3Image from '../../assets/images/home/home-section-3.png';
import s4Image from '../../assets/images/home/home-section-4.png';
import s2ArtcleCard1 from '../../assets/images/home/luis-villasmil.jpg';
import s2ArtcleCard2 from '../../assets/images/home/houcine-ncib.jpg';
import s2ArtcleCard3 from '../../assets/images/home/ravi-pinisetti.jpg';
import s2ArtcleCard4 from '../../assets/images/home/roksolana-zasiadko.jpg';
import s2ArtcleCard5 from '../../assets/images/home/victoria-shes.jpg';
import s2ArtcleCard6 from '../../assets/images/home/ayoola-salako.jpg';
import fb from '../../assets/images/home/facebook.png';
import tw from '../../assets/images/home/twitter.png';
import gp from '../../assets/images/home/google-plus.png';
import PlaceHolderImage from '../../assets/images/article/no-image.png';
import { featuredImgStyle, relatedArticleImg, cardStyle } from '../../utils';

const Home = () => {
  //  add functions
  return (
    <Fragment>
      <div className="home">
        {/* Section One */}
        <div className="flex section-one sm:max-w-86 md:max-w-xl lg:max-w-page mx-auto">
          <div className="flex sm:flex-col md:flex-row block md:py-20 lg:px-48 lg:py-24 m-auto s1-content">
            <div className="s1-left-e2e sm:w-1/1 sm:pt-4 md:w-1/2 self-center">
              <h1 className="welcome lg:pt-0 md:text-3xl antialiased">
                Welcome to Authors Haven
              </h1>
              <p className="caption font-thin pr-12">
                A platform to share your amazing ideas and articles
                with the rest of the world
              </p>
            </div>
            <div className="s1-right-e2e md:w-1/2 sm:s1-img">
              <img
                src={s1Image}
                className="r-img-e2e md:w-full md:s1-img lg:s1-img"
                alt="Authors Haven"
              />
            </div>
          </div>
        </div>
        {/* End Section One  */}

        {/* Section Two */}
      <div className="flex section-one sm:max-w-86 md:max-w-xl lg:max-w-page mx-auto">
        <div className="flex sm:flex-col md:flex-row block md:py-20 lg:px-48 lg:py-24 m-auto s1-content">
          <div className="block md:flex md:flex-col lg:flex lg:flex-col xl:flex xl:flex-row align-stretch">
            <div className="latest-articles">
              <h1 className="left-heading-e2e text-3xl s2-head py-2">
                Latest Articles
              </h1>
              <div className="py-5 article-cards">
                <div className="card-1-img-e2e sm:block sm:w-12/12 md:max-w-6xl md:h-64 md:max-h-full rounded-lg items-center justify-between shadow-lg" style={cardStyle(s2ArtcleCard1)}>
                  <p className="category-1-e2e sm:pl-6 sm:text-xs sm:pt-5 md:pl-12 md:pt-5 lg:text-lg text-white">ARCHITECHTURE</p>
                  <p className="title-1-e2e sm:ml-24 sm:text-md md:ml-xls3 md:mr-2  text-white lg:text-2xl">
                        The Brand New NASA
                        Office
                  </p>
                  <Button
                    type="submit"
                    name="Read More"
                    classes="card-1-btn-e2e sm:ml-xls1 sm:w-2/5 sm:mt-10 sm:text-xs relative bottom-0 left-0 pl-16 w-3/12 btn-white md:mb-0 mb-4 md:w-1/4 md:ml-xlx1 md:mt-20"
                  />
                </div>
                <div className="flex justify-between align-stretch">
                  <div className="card-2-img-e2e sm:w-3/6 sm:mt-4 sm:h-xlx1 md:mt-6 md:max-w-150 md:h-xlx2 rounded-lg items-center shadow-lg" style={cardStyle(s2ArtcleCard2)}>
                    <p className="category-2-e2e sm:pl-6 sm:text-xs sm:pt-5 md:pl-6 md:pt-5 lg:text-lg text-white">ART</p>
                    <p className="title-2-e2e sm:ml-8 sm:mr-2 sm:text-md md:w-56 lg:ml-8 pt-8  text-white md:text-2xl">
                          Lagos Art Week
                    </p>
                    <Button
                      type="submit"
                      name="Read More"
                      classes="card-2-btn-e2e sm:ml-lgx1 sm:w-3/5 sm:mt-lgx2 sm:text-xs relative bottom-0 left-0 pl-16 w-6/12 btn-white md:mb-0 mb-4 md:w-2/4 md:ml-24 md:mt-xls2"
                    />
                  </div>
                  <div className="card-3-img-e2e sm:w-3/6 sm:mt-4 sm:ml-2 sm:h-xlx1 md:mt-6 md:ml-6 md:max-w-150 md:h-xlx2 rounded-lg shadow-lg" style={cardStyle(s2ArtcleCard3)}>
                    <p className="category-3-e2e sm:pl-6 sm:text-xs sm:pt-5 md:pl-6 md:pt-5 lg:text-lg text-white">TRAVEL</p>
                    <p className="title-2-e2e sm:ml-8 sm:mr-2 sm:text-md md:w-56 lg:ml-8 pt-8 text-white md:text-2xl">
                    Lagos Art Week
                    </p>
                    <Button
                      type="submit"
                      name="Read More"
                      classes="card-3-btn-e2e sm:ml-lgx1 sm:w-3/5 sm:mt-lgx2 sm:text-xs relative bottom-0 left-0 pl-16 w-6/12 btn-white md:mb-0 mb-4 md:w-2/4 md:ml-24 md:mt-xls2"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="latest-articles md:pl-5">
              <h1 className="left-heading-e2e text-3xl s2-head py-2">
                Latest Articles
              </h1>
              <div className="py-5 article-cards">
                <div className="card-1-img-e2e sm:block sm:w-12/12 md:max-w-6xl md:h-64 md:max-h-full rounded-lg items-center justify-between shadow-lg" style={cardStyle(s2ArtcleCard1)}>
                  <p className="category-1-e2e sm:pl-6 sm:text-xs sm:pt-5 md:pl-12 md:pt-5 lg:text-lg text-white">ARCHITECHTURE</p>
                  <p className="title-1-e2e sm:ml-24 sm:text-md md:ml-xls3 md:mr-2 font-bold text-white lg:text-2xl">
                        The Brand New NASA
                        Office
                  </p>
                  <Button
                    type="submit"
                    name="Read More"
                    classes="card-1-btn-e2e sm:ml-xls1 sm:w-2/5 sm:mt-10 sm:text-xs relative bottom-0 left-0 pl-16 w-3/12 btn-white md:mb-0 mb-4 md:w-1/4 md:ml-xlx1 md:mt-20"
                  />
                </div>
                <div className="flex justify-between align-stretch">
                  <div className="card-2-img-e2e sm:w-3/6 sm:mt-4 sm:h-xlx1 md:mt-6 md:max-w-150 md:h-xlx2 rounded-lg items-center shadow-lg" style={cardStyle(s2ArtcleCard2)}>
                    <p className="category-2-e2e sm:pl-6 sm:text-xs sm:pt-5 md:pl-6 md:pt-5 lg:text-lg text-white">ART</p>
                    <p className="title-2-e2e sm:ml-8 sm:mr-2 sm:text-md md:w-56 lg:ml-8 pt-8  text-white md:text-2xl">
                          Lagos Art Week
                    </p>
                    <Button
                      type="submit"
                      name="Read More"
                      classes="card-2-btn-e2e sm:ml-lgx1 sm:w-3/5 sm:mt-lgx2 sm:text-xs relative bottom-0 left-0 pl-16 w-6/12 btn-white md:mb-0 mb-4 md:w-2/4 md:ml-24 md:mt-xls2"
                    />
                  </div>
                  <div className="card-3-img-e2e sm:w-3/6 sm:mt-4 sm:ml-2 sm:h-xlx1 md:mt-6 md:ml-6 md:max-w-150 md:h-xlx2 rounded-lg shadow-lg" style={cardStyle(s2ArtcleCard3)}>
                    <p className="category-3-e2e sm:pl-6 sm:text-xs sm:pt-5 md:pl-6 md:pt-5 lg:text-lg text-white">TRAVEL</p>
                    <p className="title-2-e2e sm:ml-8 sm:mr-2 sm:text-md md:w-56 lg:ml-8 pt-8 text-white md:text-2xl">
                    Lagos Art Week
                    </p>
                    <Button
                      type="submit"
                      name="Read More"
                      classes="card-3-btn-e2e sm:ml-lgx1 sm:w-3/5 sm:mt-lgx2 sm:text-xs relative bottom-0 left-0 pl-16 w-6/12 btn-white md:mb-0 mb-4 md:w-2/4 md:ml-24 md:mt-xls2"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
        {/* End Section Two */}

        {/* Section Three */}
        <div className="flex section-three sm:max-w-86 md:max-w-xl lg:max-w-page mx-auto">
          <div className="flex sm:flex-col md:flex-row block md:py-20 lg:px-48 lg:py-24 m-auto s1-content">
            <div className="s1-right-e2e md:w-1/2 sm:s1-img pr-12">
              <img
                src={s3Image}
                className="r-img-e2e md:w-full md:s1-img lg:s1-img"
                alt="Authors Haven"
              />
            </div>
            <div className="s1-left-e2e sm:w-1/1 sm:pt-4 md:w-1/2 self-center">
              <h1 className="welcome lg:pt-0 md:text-3xl antialiased">
                Be Outstanding
              </h1>
              <p className="caption font-thin">
                Reach out to over 1 million readers from the comfort
                of your home
              </p>
            </div>
            
          </div>
        </div>
        {/* End Section Three */}

        {/* Section Four */}
        <div className="flex section-four sm:max-w-86 md:max-w-xl lg:max-w-page mx-auto">
          <div className="flex sm:flex-col md:flex-row block md:py-20 lg:px-48 lg:py-24 m-auto s1-content">
            <div className="s1-left-e2e sm:w-1/1 sm:pt-4 md:w-1/2 self-center">
              <h1 className="welcome lg:pt-0 md:text-3xl antialiased">
              Share Ideas
              </h1>
              <p className="caption font-thin pr-12">
              Share your knowledge with other writers and
              get opinions
              </p>
            </div>
            <div className="s1-right-e2e md:w-1/2 sm:s1-img">
              <img
                src={s4Image}
                className="r-img-e2e md:w-full md:s1-img lg:s1-img"
                alt="Authors Haven"
              />
            </div>
          </div>
        </div>
        {/* End Section Four */}

        {/* Section Five */}
        <div className="flex flex-col section-five sm:max-w-86 md:max-w-xl lg:max-w-page mx-auto">
          <h1 className="self-center pt-12 font-light">More Articles</h1>
          <div className="flex sm:flex-col md:flex-row block md:py-10 lg:px-48 lg:py-12 m-auto s1-content">
            <div className="sm:w-1/1 md:w-6/12 md:rel related bg-white ml-5">
              <div className="cursor-pointer">
                <div className="flex-1 sm:flex-col" style={relatedArticleImg(PlaceHolderImage)} />
                <h2 className="title sm:min-w-full md:min-w-84 lg:min-w-102 sm:text-xs-2 md:text-xl lg:text-2xl">I want to test the redirect</h2>
              </div>
            </div>
            <div className="sm:w-1/1 md:w-6/12 md:rel related bg-white ml-5">
              <div className="cursor-pointer">
                <div className="flex-1" style={relatedArticleImg(PlaceHolderImage)} />
                <h2 className="title sm:min-w-12 md:min-w-84 lg:min-w-102 sm:text-xs-2 md:text-xl lg:text-2xl">I want to test the redirect</h2>
                
              </div>
            </div>
          </div>
          <h1 className="self-center pt-0 font-light">
            <Link to="/">
              <Button
                type="button"
                name="Explore"
                classes="explore-btn-e2e content-center cursor-pointer btn-white w-32 ml-2 text-purple-650 border md:inline border-solid border-purple-650"
              />
            </Link>
          </h1>
        </div>
        {/* End Section Five */}

        {/* Section Six */}
        <div className="flex flex-col section-five sm:max-w-86 md:max-w-xl lg:max-w-page mx-auto">
          <h1 className="self-center pt-4 join-e2e sm:pt-8 sm:px-8 font-thin mt-10 sm:text-4xl text-center md:text-6xl font-bold">Join Our Authors Today</h1>
          <h1 className="self-center pt-4 font-light">
            <Link to="/">
              <Button
                type="button"
                name="Get Started"
                classes="explore-btn-e2e content-center cursor-pointer btn-purple w-32 ml-2 text-purple-650 border md:inline border-solid border-purple-650"
              />
            </Link>
          </h1>
        </div>
        {/* End Section Six */}

        {/* Section Seven */}
        <div className="s7-border mt-5" />
        <div className="flex flex-col section-seven sm:max-w-86 md:max-w-xl lg:max-w-page mx-auto">
          <div className="flex sm:flex-col sm:py-4 sm:items-center md:flex-row block md:py-10 lg:px-48 lg:py-12 s1-content">
            <div className="sm:w-1/1 md:w-3/12 ml-5">
              <p className="copyright-e2e sm:text-1xl font-thin md:text-1xl">
                  &copy; Copyright 2019.
              </p>
            </div>
            <div className="flex sm:flex-col justify-center md:flex-row sm:w-1/1 md:w-6/12 ml-5">
              <p className="connect-e2e sm:pt-2 md:pt-0 text-center sm:text-1xl font-thin md:text-1xl">Connect with us</p>
              <div className="social-icon-e2e sm:py-0 sm:px-4 md:pt-0 md:pl-2 md:px-2 flex text-center ">
                <img
                  src={fb}
                  className="h-8 w-8"
                  alt="Facebook"
                />
                <img
                  src={tw}
                  className="h-8 w-8"
                  alt="Twitter"
                />
                <img
                  src={gp}
                  className="h-8 w-8"
                  alt="Google"
                />
              </div>
            </div>
            <div className="sm:w-1/1 md:w-3/12 ml-5">
              <p className="cursor-pointer font-thin sm:text-1xl md:pr-2 md:pl-6 md:text-1xl">
                FAQs &nbsp;
                Privacy
              </p>
            </div>
          </div>
        </div>
        {/* End Section Seven */}

      </div>
    </Fragment>
  );
};

export default Home;
