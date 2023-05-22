import React from 'react';
import { Ratio } from 'react-bootstrap';

import '../../styles/Home.css';


//controls width="100%"

const src = "https://nanoscalesimulations.com/Gallery/BIG-MAP%20demo%201.1.mov";

const Video = () => {

    return (
        <div className='video-wrapper' style={{}}>
            <Ratio aspectRatio="16x9">
                <video src={src} type="video/mp4" autoPlay loop muted/>
            </Ratio>
        </div>
    )

}

export default Video;