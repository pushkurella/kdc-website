import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const images = [
    { src: 'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80'},
    { src: 'https://images.unsplash.com/photo-1470341223622-1019832be824?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2288&q=80'},
    { src: 'https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2094&q=80'},
    { src: 'https://images.unsplash.com/photo-1534161308652-fdfcf10f62c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2174&q=80'},
  ];
  
  export default class NewSlider extends React.Component {
    state = {
        activeSlide: 0,
        activeSlide2: 0
    }

    render() {
      const settings = {
        // accessibility: true,
        adaptiveHeight: true,
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        // centerMode: true,
        // centerPadding: '50px',
        // infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        pauseOnHover: true,
        beforeChange: (current, next) => this.setState({ activeSlide: next }),
        afterChange: current => this.setState({ activeSlide2: current })
      };
      return (
        <div>
          <Slider {...settings}>
            {images.map((img) => (
              <div>
                <img src={img.src} />
              </div>
            ))}
          </Slider>
        </div>
      );
    }
  }