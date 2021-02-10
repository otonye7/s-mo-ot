import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import {FooterContainer } from './footer.styles';




const Footer = () => {

    useEffect(() => (
        Aos.init({duration: 2000})
    ), [])

    return(
    <FooterContainer>
        <div className='container'>
            <div className='message'>
                <h3>Coded by Amietubodie Collins Otonye © 2021</h3>
            </div>

            
        </div>
    </FooterContainer>  
    )   
}; 


export default Footer;