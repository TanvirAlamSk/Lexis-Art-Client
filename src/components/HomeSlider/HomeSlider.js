import React from 'react';
import sliderimg1 from "../../assets/slider-image/beige-carpet-home.jpg"
import sliderimg2 from "../../assets/slider-image/green-velvet-sofa.jpg"
import sliderimg3 from "../../assets/slider-image/plant-lamp-carpet-pillows.jpg"
import HomeSliderCard from './HomeSliderCard/HomeSliderCard';

const images = [
    {
        img: sliderimg1,
        id: 1,
        title: "Open The Door  to Better Kind  Of INTERIOR",
        description: "Don't hesitate to contact us with any inquiries."
    },
    {
        img: sliderimg2,
        id: 2,
        title: "Shiny on the outside, Beautiful on the inside",
        description: "Interior design consultancy firm that brings sensitivity to the design top offices, hotels & homes around the world."
    },
    {
        img: sliderimg3,
        id: 3,
        title: "Choose a name that inspires artistry.",
        description: "Interior design companies are inherently creative businesses. They turn houses into homes by helping clients select color palettes."
    }
]
const HomeSlider = () => {
    return (
        <div className="carousel w-full mb-10 md:mb-20">
            {
                images.map((image) => <HomeSliderCard key={image.id} image={image} ></HomeSliderCard>)
            }
        </div>
    );
};

export default HomeSlider;