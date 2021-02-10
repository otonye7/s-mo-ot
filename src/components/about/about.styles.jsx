import styled from 'styled-components';


export const AboutContainer = styled.div`
  width: 100%;
  margin-top: 80px;
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

  .contacts {
      width: 30%;
      display: flex;
      justify-content: space-between;

      @media screen and (max-width: 800px) {
        width: 100%;
        display: flex;
        justify-content: space-between;
      }
  }

  .linkedin {
      width: 10%;
      cursor: pointer;
      height: auto;


       @media screen and (max-width: 800px) {
        width: 10%;
        
      }
  }

  .twitter {
      width: 10%;
      cursor: pointer;
      height: auto;

      @media screen and (max-width: 800px) {
        width: 10%;
      }
  }

 
  img {
    width: 100%;
    height: auto;
}
`;