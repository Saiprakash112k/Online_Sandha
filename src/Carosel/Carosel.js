
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "./Carosel.css"
const Data = require('../Data/Data.json')

const DemoCarousel = () => {
        return (
           <div className='Company'>
           <div className='caroselBox'>
            <Carousel>
             {Data.CaroselImage.map((item) => {
                return (<div className='carosel'>
                  <img src={require(`../Images/${item.Image}.jpg`)} />
                  <p className="legend">{item.content}</p>
                </div>)
             })}
            </Carousel>
            </div>
<div className='Company-about'>
  <div className='pos-rel'>
  <h2>
    why we?
  </h2>
  <p>
  “We see our customers as invited guests to a party, and we are the hosts. It’s our job every day to make every important aspect of the customer experience a little bit better.” – Jeff Bezos, Founder of Amazon
  </p>
  <p className='about-para'>
    The E-Commerce site offers a wide range of fresh and high-quality products including fruits,vegetable,dairy product, and meat.Customers can conveniently shop for these items online,browse through various categories, and have their selections delivered to their doorstep,ensuring freshness and convenience.
  </p>
  </div>
 
</div>
            </div>
        );
}

export default DemoCarousel;