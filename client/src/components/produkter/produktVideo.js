import React from 'react';
import { Ratio } from 'react-bootstrap';

import '../../styles/Produkter.css';


//controls width="100%"

const src = "https://nanoscalesimulations.com/Gallery/BIG-MAP%20demo%201.1.mov";

const HeroVideo = () => {

    return (
        <div className='video-wrapper' style={{}}>
            <Ratio aspectRatio="21x9">
                <video src={src} type="video/mp4" controls width="100%" autoPlay loop/>
            </Ratio>
        </div>
    )

}

export default HeroVideo;