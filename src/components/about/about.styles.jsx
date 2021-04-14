import styled from 'styled-components';


export const AboutContainer = styled.div`
  width:  1300px;
  
  display: flex;
  justify-content: space-between;

  .about-photo {
      width: 40%;

      @media screen and (max-width: 800px) {
         width: 100%;
      }
  }

  .description {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px
    font-size: 16px;
    line-height: 1.65;
    font-family: "Open Sans", sans-serif;
     color: #222;
  }

  .overall-container {
      display: flex;
      justify-content: space-around;

      @media screen and (max-width: 800px) {
        display: flex;
        flex-direction: column;
      }
  }

  .description-container {
     width: 50%;

     @media screen and (max-width: 800px) {
        width: 100%;
        margin: 0 auto;
      }
  }

  .about-me-text {
    font-size: 32px;
    font-weight: 600;
    text-transform: uppercase;
    color: #222;
  }

  .contacts {
      width: 20%;
      display: flex;
      justify-content: space-between;

      @media screen and (max-width: 800px) {
        width: 40%;
        display: flex;
        justify-content: space-between;
      }
  }

  .linkedin {
      width: 20px;
      cursor: pointer;
      height: auto;


       @media screen and (max-width: 800px) {
        width: 20px;
        
      }
  }

  .twitter {
      width: 20px;
      cursor: pointer;
      height: auto;

      @media screen and (max-width: 800px) {
        width: 20px;
      }
  }

 
  img {
    width: 100%;
    height: auto;
}
`;