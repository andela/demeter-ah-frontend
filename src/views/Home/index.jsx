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
import { cardStyle } from '../../utils';

const Home = () => {
  //  add functions
  return (
    <Fragment>
      <div className="home">
        <div className="section-one sm:px-0 sm:py-2 md:px-24">
          <div className="block md:flex align-stretch">
            <div className="s1-left-e2e sm:py-12 sm:px-8 md:py-12 md:px-20 md:flex-1 md:justify-center lg:p-5 xl:p-24 flex flex-col">
              <h1 className="welcome sm:text-3xl md:text-5xl">
                Welcome to Authors Haven
              </h1>
              <p className="caption font-thin">
                A platform to share your amazing ideas and articles
                with the rest of the world
              </p>
            </div>
            <div className="s1-right-e2e sm:px-0 sm:mb-5 md:py-12 md:px-20 md:flex-1 md:justify-center lg:pt-5 xl:p-24 flex flex-col">
              <img
                src={s1Image}
                className="r-img-e2e sm:s1-img-sm md:w-full md:s1-img lg:s1-img"
                alt="Authors Haven"
              />
            </div>
          </div>
        </div>
        <div className="section-two md:h-screen sm:px-2  sm:mb-24 md:px-24 md:mb-24">
          <div className="block md:flex align-stretch">
            <div className="latest-articles">
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
                    <p className="title-2-e2e sm:ml-8 sm:mr-2 sm:text-md md:w-56 lg:ml-8 pt-8 font-bold text-white md:text-2xl">
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
                    <p className="title-3-e2e sm:ml-4 sm:text-md md:w-56 lg:ml-8 pt-8 font-bold text-white md:text-2xl">
                    A Trip Around the World
                    </p>
                    <Button
                      type="submit"
                      name="Read More"
                      classes="card-3-btn-e2e sm:ml-lgx1 sm:w-3/5 sm:mt-lgx2 sm:text-xs relative bottom-0 left-0 pl-16 w-6/12 btn-white md:mb-0 mb-4 md:w-2/4 md:ml-24 md:mt-xls2x"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="popular-articles sm:px-1 md:px-12">
              <h1 className="right-heading-e2e text-3xl s2-head py-2">
                Popular Articles
              </h1>
              <div className="py-5 article-cards">
                
                <div className="flex justify-between align-stretch">
                  <div className="card-4-img-e2e sm:w-3/6  sm:h-xlx1 md:max-w-150 md:h-xlx2 rounded-lg items-center shadow-lg" style={cardStyle(s2ArtcleCard4)}>
                    <p className="category-4-e2e sm:pl-6 sm:text-xs sm:pt-5 md:pl-6 md:pt-5 lg:text-lg text-white">LOVE</p>
                    <p className="title-4-e2e sm:ml-8 sm:mr-2 sm:text-md md:w-56 lg:ml-8 pt-8 font-bold text-white md:text-2xl">
                    The Love Secret
                    </p>
                    <Button
                      type="submit"
                      name="Read More"
                      classes="card-4-btn-e2e sm:ml-lgx1 sm:w-8/12 sm:mt-lgx2 sm:text-xs relative bottom-0 left-0 pl-16 w-6/12 btn-white md:mb-0 mb-4 md:w-2/4 md:ml-24 md:mt-xls2"
                    />
                  </div>
                  <div className="card-5-img-e2e sm:w-3/6 sm:ml-2 sm:h-xlx1 md:ml-6 md:max-w-150 md:h-xlx2 rounded-lg shadow-lg" style={cardStyle(s2ArtcleCard5)}>
                    <p className="category-5-e2e sm:pl-6 sm:text-xs sm:pt-5 md:pl-6 md:pt-5 lg:text-lg text-white">FOOD</p>
                    <p className="title-5-e2e sm:ml-4 sm:text-md md:w-56 lg:ml-8 pt-8 font-bold text-white md:text-2xl">
                    Baking Made Even Easier
                    </p>
                    <Button
                      type="submit"
                      name="Read More"
                      classes="card-5-btn-e2e sm:ml-lgx1 sm:w-8/12 sm:mt-lgx2 sm:text-xs relative bottom-0 left-0 pl-16 w-6/12 btn-white md:mb-0 mb-4 md:w-2/4 md:ml-24 md:mt-xls2x"
                    />
                  </div>
                </div>
                <div className="card-6-img-e2e sm:block sm:mt-4 md:mt-6 sm:w-12/12 md:max-w-6xl md:h-64 md:max-h-full rounded-lg items-center justify-between shadow-lg" style={cardStyle(s2ArtcleCard6)}>
                  <p className="category-6-e2e sm:pl-6 sm:text-xs sm:pt-5 md:pl-12 md:pt-5 lg:text-lg text-white">LIFESTYLE</p>
                  <p className="title-6-e2e sm:ml-24 sm:text-md md:ml-xls3 md:mr-2 font-bold text-white lg:text-2xl">
                     Making 'Hay' in Hot Lagos
                  </p>
                  <Button
                    type="submit"
                    name="Read More"
                    classes="card-6-btn-e2e sm:ml-xls1 sm:w-2/5 sm:mt-10 sm:text-xs relative bottom-0 left-0 pl-16 w-3/12 btn-white md:mb-0 mb-4 md:w-1/4 md:ml-xlx1 md:mt-20"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-three h-screen sm:px-0 sm:py-2 md:px-24">
          <p className="s3-heading-e2e font-thin sm:mb-8 sm:-mb-0 md:mt-6 md:-mb-24 sm:text-3xl text-center md:text-4xl">
                About Us
          </p>
          <div className=" block md:flex align-stretch">
            <div className="s3-left-e2e  md:py-8 md:px-20 md:flex-1 md:h-screen md:justify-center lg:pt-5 xl:p-24 flex flex-col">
              <img
                src={s3Image}
                className="img-r-e2e sm:h-56 w-full h-full s3-img"
                alt="Authors Haven"
              />
            </div>
            <div className="s3-right-e2e py-8 px-20 md:flex-1 md:h-screen md:justify-center lg:p-5 xl:p-24 flex flex-col">
              <h1 className="s3-right-head-e2e sm:text-3xl md:text-5xl">
                Be Outstanding
              </h1>
              <p className="s3-right-body-e2e font-thin">
                Reach out to over 1 million readers from the comfort
                of your home
              </p>
            </div>
          </div>
        </div>
        <div className="section-four sm:px-0 sm:py-2 md:px-24">
          <div className="block md:flex align-stretch">
            <div className="s4-left-e2e py-8 px-20 md:flex-1 md:h-screen md:justify-center lg:p-5 xl:p-24 flex flex-col">
              <h1 className="s4-heading-e2e sm:text-3xl md:text-5xl">
                  Share Ideas
              </h1>
              <p className="s4-left-body-e2e font-thin">
              Share your knowledge with other writers and
              get opinions
              </p>
            </div>
            <div className="s4-right-e2e md:py-8 md:px-20 md:flex-1 md:h-screen md:justify-center lg:pt-5 xl:p-24 flex flex-col">
              <img
                src={s4Image}
                className="img-r-e2e sm:h-56 w-full h-full s3-img"
                alt="Authors Haven"
              />
            </div>
          </div>
        </div>
        <div className="section-five h-screen items-center">
          <p className="s5-heading-e2e sm:mt-20 sm:m-0 font-thin mt-20 -mb-24 sm:text-3xl text-center md:text-4xl">
                More Articles
          </p>
          <div className="sm:block md:flex align-stretch">
            <div>
              <div className="s5-left-article py-8 px-8 md:flex-1 md:h-screen md:justify-center lg:p-5 xl:p-24 flex flex-col">
                <div classes="shadow-md w-12 h-8">
                  <img src={s2ArtcleCard6} alt="article-image" className="s6Image shadow-lg mb-4" />
                </div>
                <h1 className="s5-left-article-title sm:text-sm font-bold sm:text-1xl md:text-2xl">
              White printing paper with Marketing Strategy text
                </h1>
                <p className="s5-left-article-caption font-thin">
              It is a long established fact that a reader will be distracted by the
              readable content of a page when looking at its layout.
                </p>
              </div>
            </div>
            <div>
              <div className="s5-right-article py-8 px-8 md:flex-1 md:h-screen md:justify-center lg:p-5 xl:p-12 flex flex-col">
                <div classes="s5-right-article-img shadow-md w-12 h-8">
                  <img src={s2ArtcleCard1} alt="article-image" className="s6Image shadow-lg mb-4" />
                </div>
                <h1 className="s5-right-article-title sm:text-sm font-bold sm:text-1xl md:text-2xl">
              White printing paper with Marketing Strategy text
                </h1>
                <p className="s5-right-article-caption font-thin">
              It is a long established fact that a reader will be distracted by the
              readable content of a page when looking at its layout.
                </p>
              </div>
            </div>
            
          </div>
          <div className="sm:m-0 text-center sm:m-6 md:-m-24">
            <Link to="/">
              <Button
                type="button"
                name="Explore"
                classes="explore-btn-e2e content-center cursor-pointer btn-white w-32 ml-2 text-purple-650 border md:inline border-solid border-purple-650"
              />
            </Link>
            <div className="s:mt-0 md:s2-head md:mt-10">
              {/*  */}
            </div>
          </div>
        </div>
        <div className="section-six items-center">
          <p className="join-e2e sm:pt-108 sm:px-8 font-thin mt-20 sm:text-4xl text-center md:text-6xl font-bold">
                Join Our Authors today
          </p>
          <div className="sm:mt-24 text-center mb-24">
            <Link to="/signup">
              <Button
                type="button"
                name="Get Started"
                classes="get-started-e2e content-center cursor-pointer btn-purple w-32 ml-2 text-purple-650 border md:inline border-solid border-purple-650"
              />
            </Link>
          </div>
        </div>
        <div className="s2-head mb-5">
          {/*  */}
        </div>
        <div className="sm:flex-row md:flex md:mx-auto md:px-48">
          <div className="text-center sm:pb-4 md:px-10">
            <p className="copyright-e2e sm:text-1xl font-thin md:text-1xl">
                &copy; Copyright 2019.
            </p>
          </div>
          <div className="text-center md:px-10">
            <p className="connect-e2e sm:text-1xl font-thin md:text-1xl">
               Connect with us.
            </p>
          </div>
          <div className="social-icon-e2e sm:py-4 sm:px-8 md:pt-0 md:pl-0 md:pb-8 flex text-center ">
            <div className="text-center pt-0 sm:pl-8 md:pl-0 pr-8">
              <img
                src={fb}
                className="h-8 w-8"
                alt="Facebook"
              />
            </div>
            <div className="text-center pl-8 pr-8">
              <img
                src={tw}
                className="h-8 w-8"
                alt="Twitter"
              />
            </div>
            <div className="text-center pl-8 pr-8">
              <img
                src={gp}
                className="h-8 w-8"
                alt="Google"
              />
            </div>
          </div>
          <div className="footer-menu-e2e sm:py-4 sm:px-12 md:pt-0 md:pl-0 md:pb-8 flex text-center ">
          <div className="pt-0 sm:px-12 md:pl-0 pr-8">
            <p className="cursor-pointer font-thin sm:text-1xl md:pr-8 md:pl-12 md:text-1xl">
               FAQs
            </p>
          </div>
          <div className="text-center">
            <p className="cursor-pointer font-thin sm:text-1xl md:text-1xl">
               Privacy
            </p>
          </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
