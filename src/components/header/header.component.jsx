import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderContainer } from './header.styles';


const Header = () => (
    <HeaderContainer>
        <div className='header-logo'>
            <h2>S^MO-OT.DEV</h2>
        </div>

        <div className='nav-bars'>

            <div className='nav-links'>
                <Link className='link-con'>
                    Home
                </Link>
            </div>

            <div className='nav-links'>
                <Link className='link-con'>
                    About
                </Link>
            </div>

            <div className='nav-links'>
                <Link className='link-con'>
                    Skills
                </Link>
            </div>

            <div className='nav-links'>
                <Link className='link-con'>
                    Project
                </Link>
            </div>

            <div className='nav-links'>
                <Link className='link-con'>
                    Contacts
                </Link>
            </div>

        </div>
    </HeaderContainer>
)
 


export default Header;