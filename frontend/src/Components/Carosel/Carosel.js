import React,{Component} from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import './Carosel.css'
import withAutoplay from 'react-awesome-slider/dist/autoplay';

const AutoplaySlider = withAutoplay(AwesomeSlider);

function Carosel() {
    return (
        <AutoplaySlider
            play={true}
            cancelOnInteraction={true} 
            interval={6000}
            infinite={true}
        >
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </AutoplaySlider>
      )
}

export { Carosel };