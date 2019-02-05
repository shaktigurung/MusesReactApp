import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators
} from 'reactstrap';
import "./../../App.css";

const items = [
  {
    id: 1,
    testimonial: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    name: "Jennie Smith",
    designation: "CTO",
    company: "Google",
    src:"https://source.unsplash.com/random"
  },
  {
    id: 2,
    testimonial: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    name: "Angelina Jolie",
    designation: "Web Analyst",
    company: "Facebook",
    src:"https://source.unsplash.com/collection/190727/1600x900"
  },
  {
    id: 3,
    testimonial: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    name: "Jessica Alba",
    designation: "Web Consultant",
    company: "Youtube",
    src:"https://source.unsplash.com/collection/190727/1600x900"
  }
];


class HomeCarousel extends Component {
    constructor(props) {
      super(props);
      this.state = { activeIndex: 0 };
      this.next = this.next.bind(this);
      this.previous = this.previous.bind(this);
      this.goToIndex = this.goToIndex.bind(this);
      this.onExiting = this.onExiting.bind(this);
      this.onExited = this.onExited.bind(this);
    }
  
    onExiting() {
      this.animating = true;
    }
  
    onExited() {
      this.animating = false;
    }
  
    next() {
      if (this.animating) return;
      const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
      this.setState({ activeIndex: nextIndex });
    }
  
    previous() {
      if (this.animating) return;
      const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
      this.setState({ activeIndex: nextIndex });
    }
  
    goToIndex(newIndex) {
      if (this.animating) return;
      this.setState({ activeIndex: newIndex });
    }
  
    render() {
      const { activeIndex } = this.state;
  
      const slides = items.map((item) => {
        return (
          <CarouselItem
            className="custom-tag"
            tag="div"
            key={item.id}
            onExiting={this.onExiting}
            onExited={this.onExited}
          >
            <div className="testimonial"><h2 >Testimonials</h2></div>
            <div className="carousel">
                <div className="img-box">
                    <img src={item.src} alt={item.altText} className="effect"/>
                </div>
                <p className="testimonial">"{item.testimonial}"</p>
                <p className="overview"><b>{item.name}</b> <span>{item.designation}</span>  at <span>{item.company}</span>.</p>
            </div>
          </CarouselItem>
        );
      });
  
      return (
        <div>
          <style>
            {
              `.custom-tag {
                  max-width: 100%;
                  height: 100%;
                  background: #F8F9FA;	
                  
                }`
            }
          </style>
          <Carousel
            activeIndex={activeIndex}
            next={this.next}
            previous={this.previous}
            
          >
            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
            {slides}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
          </Carousel>
        </div>
      );
    }
  }
  
  export default HomeCarousel;
  