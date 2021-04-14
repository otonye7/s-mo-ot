import styled from 'styled-components';
import Hero from  '../../assets/dark.jpg';


export const HeroContainer = styled.div`
   width: 1350px;
    position: relative;

 height: 35rem;
 background-color: #F2F2F2;
 display: flex;
 justify-content: center;
 margin: 0 auto;
 @media screen and (max-width: 769px){
      height: 100%;
      width: 100%;
}

.hero-container {
    width:100%;
    height: 35rem;
}
 .image {
    position: relative;
    width: 100%;
    height: 100%;
    background-image: url(${Hero});
    background-position: center;
    background-size: cover;
    @media screen and (max-width: 767px){
      width: 100%;
      height: 35rem;
}
   }
   
    .hero-container {
        position: relative;
    }


   .hero-text {
        position: absolute;
        top: 0;
        left: 105px;
        margin-top: 80px;

@media screen and (max-width: 767px){
      left: 20px;
}
   }

   .name-text {
    font-size: 46px;
    font-weight: 900;
    color: #fff;
    font-family: "Raleway", san-serif;

}
   }

   .front-text {
      color: white;
    font-size: 25px;
    font-weight: 500;

     @media screen and (max-width: 800px) {
        font-size: 20px;
       font-weight: 500;
      }
   }

   .about-text {
       color: white;
   }

   .typewriter {
      color: white;
    font-size: 25px;
    font-weight: 500;

     @media screen and (max-width: 800px) {
        font-size: 20px;
       font-weight: 500;
      }
   }

   .name-text {
       color: white;
   }

   .work-text {
       color: white;
   }

`;