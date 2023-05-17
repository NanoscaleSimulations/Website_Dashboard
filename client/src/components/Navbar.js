
import React from 'react';
import Wrapper from '../assets/wrappers/Navbar';
import { FaAlignLeft, FaUserCircle, FaCaretDown } from 'react-icons/fa';
import { useAppContext } from '../context/appContext';
import Logo from './Logo';
import { useState } from 'react';

const Navbar = () => {

    const [ showLogout, setShowLogout ] = useState(false);

    const { toggleSidebar, logoutUser, user } = useAppContext();

    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;


    return (
        <Wrapper>
            <div className='nav-center'>
                <button type='button' className='toggle-btn' onClick={toggleSidebar} >
                    <FaAlignLeft />
                </button>
                <div>
                    <Logo />
                    <h3 className='logo-text'>dashboard</h3>
                    <p className='logo-text'>Current date: {date}</p>
                </div>

                <div className='btn-container'>
                    <button type='button' className='btn' onClick={() => setShowLogout(!showLogout)}>
                        <FaUserCircle />
                            {user?.name}
                        <FaCaretDown />
                    </button>
                    <div className={showLogout ? 'dropdown show-dropdown' : 'dropdown'} >
                        <button type='button' className='dropdown-btn' onClick={logoutUser} >
                            logout
                        </button>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
};

export default Navbar;