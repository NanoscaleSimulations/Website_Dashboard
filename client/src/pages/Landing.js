import React from 'react';
import Wrapper from '../assets/wrappers/LandingPage';
import main from '../assets/images/main.svg';
import { Logo } from '../components';
import { Link } from 'react-router-dom';


const Landing = () => {


    return (
        <Wrapper>
            <nav>
                <Logo />
            </nav>
            <div className='container page'>
                {/* INFO */}
                <div className='info'>
                    <h1>
                        Job <span>tracking</span> app
                    </h1>
                    <p>
                        Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum
                        Lorem ipsum  Lorem ipsum
                        Lorem ipsum  Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                        Lorem ipsum Lorem ipsum  Lorem ipsum Lorem ipsum
                    </p>
                    <Link to='/register' className='btn btn-hero'>Login/Register</Link>
                </div>
                <img src={main} alt="nanoscalebody" className='img main-img'/>
            </div>
        </Wrapper>
    );
};


export default Landing;
