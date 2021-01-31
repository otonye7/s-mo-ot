import styled from 'styled-components';


export const HeroContainer = styled.div`
   width: 100%;
   
    .hero-container {
        position: relative;
    }

    .cover-photo {
        width: 100%;
        background-size: cover;
        background-repeat: no-repeat;
        overflow: hidden;
    }

   .hero-text {
        position: absolute;
        top: 0;
        left: 105px;
        margin-top: 80px;
   }

   .name-text {
      font-size: 45px;
   }

   .front-text {
      color: white;
   }

   .about-text {
       color: white;
   }

   .typewriter {
       color: Red;
       font-size: 25px;
   }

   .name-text {
       color: white;
   }

   .work-text {
       color: white;
   }
`;