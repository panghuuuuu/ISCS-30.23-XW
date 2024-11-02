import React, { Component, createRef } from "react";
import header from "../assets/04 Merch/h.png";
import lanyard from "../assets/04 Merch/ly.png";
import shirt1 from "../assets/04 Merch/s1.png";
import shirt2 from "../assets/04 Merch/s2.png";
import shirt3 from "../assets/04 Merch/s3.png";
import shirt4 from "../assets/04 Merch/s4.png";
import shirt5 from "../assets/04 Merch/s5.png";
import stickera from "../assets/04 Merch/ssA.png";
import stickerb from "../assets/04 Merch/ssB.png";
import totebag from "../assets/04 Merch/tb.png";
import bundle1 from "../assets/04 Merch/b1.png";
import bundle2 from "../assets/04 Merch/b2.png";
import bundle3 from "../assets/04 Merch/b3.png";
import axiosInstance from "../axiosApi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";

const merchList = [
  { image: lanyard },
  { image: stickera },
  { image: stickerb },
  { image: totebag },
  { image: shirt1 },
  { image: shirt2 },
  { image: shirt3 },
  { image: shirt4 },
  { image: shirt5 },
];

const ImageSlider = ({ slides, sliderRef, slideWidth, handleScroll }) => {
  return (
    <section className="relative w-full overflow-hidden">
      <div
        className="overflow-x-auto whitespace-nowrap"
        ref={sliderRef}
        onScroll={handleScroll}
      >
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ width: `${slides.length * slideWidth}%` }}
        >
          {slides.map((slide, index) => (
            <div
              className="flex-none px-2 w-1/2 md:w-1/3"
              key={index}
              style={{ width: `${slideWidth}%` }}
            >
              <img
                src={slide.image}
                alt={`Solo ${index + 1}`}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const bundles = [
  {
    name: "Basic Bundle",
    price: "₱375",
    image: bundle1,
  },
  {
    name: "Ultimate Bundle",
    price: "₱500",
    image: bundle2,
  },
  {
    name: "Complete Package Bundle",
    price: "₱550",
    image: bundle3,
  },
];

class Merchandise extends Component {
  componentDidMount = () => {
    // using this syntax auto-binds 'this'
    window.scrollTo(0, 0);
  };

  constructor(props) {
    super(props);
    this.state = {
      merchandises: [],
      current: 0,
    };
    this.slidesToShow = 3;
    this.sliderRef = createRef();
  }

  getSlideWidth = () => {
    return window.innerWidth < 768 ? 20 : 100 / this.slidesToShow;
  };

  nextSlide = () => {
    this.setState((prevState) => {
      const nextIndex = Math.min(
        prevState.current + 1,
        merchList.length - this.slidesToShow
      );
      this.scrollToSlide(nextIndex);
      return { current: nextIndex };
    });
  };

  prevSlide = () => {
    this.setState((prevState) => {
      const prevIndex = Math.max(prevState.current - 1, 0);
      this.scrollToSlide(prevIndex);
      return { current: prevIndex };
    });
  };

  scrollToSlide = (index) => {
    if (this.sliderRef.current) {
      this.sliderRef.current.scrollLeft =
        index * (this.sliderRef.current.scrollWidth / merchList.length);
    }
  };

  handleScroll = () => {
    if (this.sliderRef.current) {
      const index = Math.floor(
        this.sliderRef.current.scrollLeft /
        (this.sliderRef.current.scrollWidth / merchList.length)
      );
      this.setState({ current: index });
    }
  };

  render() {
    const { current } = this.state;
    const slideWidth = this.getSlideWidth;

    return (
      <div className="Merch bg-[#FFFAED]">
        <div className="merch-container relative mt-[18%] md:mt-[7.5%] lg:mt-[3%]">
          <div className="header-container relative text-center">
            <img
              className="header-image w-full h-auto"
              src={header}
              alt="Header"
            />
            <div className="header-text absolute inset-x-0 top-[80%] mx-auto flex flex-col items-center justify-center animate-bounce">
              <p className="font-bold cursor-default md:mb-2 text-[8px] md:text-xl uppercase text-primaryPink">
                Shop Now
              </p>
              <FontAwesomeIcon
                icon={faAngleDown}
                className="md:mt-1 text-[8px] lg:text-xl text-primaryPink"
              />
            </div>
          </div>
          <div className="message-container flex flex-col text-center my-10 md:mt-16 md:mb-10 w-4/5 mx-auto">
            <h1 className="text-2xl md:text-5xl text-[#784DF3] mb-6 uppercase">
              OrSem Mithi Merch
            </h1>
            <p className="text-base md:text-lg mb-9 md:mb-12 leading-relaxed md:px-12 text-center max-w-4xl mx-auto">
              Hey Freshies & Transferees! It's time to show off your school
              spirit with our official OrSem Mithi merchandise! This is surely
              something you wouldn't want to miss out on.
            </p>
          </div>

          {/* Solo merch */}
          <div className="solo-merch-container md:flex items-center justify-between mb-8 px-4 md:px-24">
            <p className="text-2xl md:text-4xl font-bold text-center md:text-left uppercase text-primaryPink">
              Solo merch
            </p>
            <div className="button-container space-x-4 hidden md:flex">
              <button
                className="p-2 md:p-3 lg:p-4 rounded-2xl hover:bg-[#C5C6C7] text-primaryPink transition-all duration-300"
                disabled={current === 0}
                onClick={this.prevSlide}
              >
                <FontAwesomeIcon icon={faAngleLeft} />
              </button>
              <button
                className="p-2 md:p-3 lg:p-4 rounded-2xl hover:bg-[#C5C6C7] text-primaryPink transition-all duration-300"
                disabled={current >= merchList.length - this.slidesToShow}
                onClick={this.nextSlide}
              >
                <FontAwesomeIcon icon={faAngleRight} />
              </button>
            </div>
          </div>

          {/* Solo merch carousel */}
          <div className="solo-merch-slider px-10 md:px-8">
            <ImageSlider
              slides={merchList}
              sliderRef={this.sliderRef}
              slideWidth={slideWidth}
              handleScroll={this.handleScroll}
            />
          </div>

          {/* Merch bundles */}
          <section className="my-24">
            <h2 className="text-center md:text-left md:px-24 text-primaryOrange text-2xl md:text-4xl font-bold mb-6 uppercase">
              Merch Bundles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 px-10 md:px-8 gap-4">
              {bundles.map((bundle, index) => (
                <div key={index} className="w-full">
                  <img
                    src={bundle.image}
                    alt={bundle.name}
                    className="h-auto rounded-lg mb-4"
                  />
                  <h3 className="text-lg font-medium tracking-tight text-[#000000] text-opacity-80">
                    {bundle.name}
                  </h3>
                  <p className="text-base font-medium text-primaryPink">
                    {bundle.price}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <div className="order-merch flex flex-col items-center mt-8 mb-16 md:my-28">
            {/* pre-order merch */}
            <div className="order-message text-center w-3/4">
              <p className="title text-2xl md:text-4xl font-bold mb-4 sm:mb-6 text-center uppercase text-primaryViolet">
                Buy Merch Now
              </p>
              <p className="text-base md:text-lg mb-9 md:mb-12 md:px-20 leading-relaxed text-center md:max-w-5xl mx-auto">
                You can purchase our merch onsite from August 5-6! For any questions or concerns, kindly message our{" "}
                <a
                  href="https://www.facebook.com/OrSem2024"
                  className="text-primaryPink hover:text-[#d156ca]"
                >
                  official Facebook page
                </a>
                .
              </p>
            </div>
            {/* <div class="mt-10 sm:mt-12 flex items-center justify-center text-[#FFFFFF]">
              <a
                href="https://form.jotform.com/241641872211450"
                class="flex bg-primaryPink px-8 text-xl pt-3 pb-2 rounded-full font-medium items-center justify-center hover:bg-[#d156ca] hover:text-[#f4f4f4] hover:transition hover:ease-in-out"
              >
                Pre-Order Here
              </a>
            </div> */}

            {/* buy merch onsite! */}
            {/* <div className='order-message text-center w-3/4'>
              <p className='title text-2xl md:text-4xl font-bold mb-6 text-center uppercase text-primaryViolet'>
                Order Now
              </p>
              <p className='text-base md:text-lg mb-9 md:mb-12 md:px-8 leading-relaxed text-center md:max-w-5xl mx-auto'>
                You can purchase our merch onsite from August 5-6! <br />
                For any questions or concerns, kindly message our{' '}
                <a
                  href='https://www.facebook.com/OrSem2024'
                  className='underline hover:text-primaryPink'
                >
                  official Facebook page
                </a>
                . 
              </p>
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Merchandise;
