import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderContainer } from './header.styles';


const Header = () => (
    <HeaderContainer>
        <div className='header-logo'>
            <h2 className='header'>S^MO-OT.DEV</h2>

            <div className='nav-links'>
                <Link className='link-con'>
                    Contacts
                </Link>
            </div>
        </div>

    </HeaderContainer>
)
 


export default Header;