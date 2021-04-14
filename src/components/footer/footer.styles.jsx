import styled from 'styled-components';


export const FooterContainer = styled.div`
  width: 100%;
  background-color: black;

  @media screen and (max-width: 800px) {
        width: 100%;
        height: 100%;
      }



  .text {
     text-align: center;
     font-size: 15px;
     line-height: 1.65;
     font-family: "Open Sans", sans-serif;
     color: white;
}
  }

  .message {
      display: flex;
      justify-content: center;
      color: white;
      font-family: "Raleway", san-serif;
    font-size: 16px;
    line-height: 1.65;
    color: white;

      @media screen and (max-width: 800px) {
        display: flex;
        flex-direction: column;
      }
  }

  .contacts {
      display: flex;
      justify-content: center;
      margin-left: 40px;

      @media screen and (max-width: 800px) {
        display: flex;
        flex-direction: column;
      }
  }

  .linkedin {
      width: 12.5%;
      cursor: pointer;
      height: auto;


       @media screen and (max-width: 800px) {
        width: 100%;
        margin-top: 30px;
      }
  }

  .twitter {
      width: 12.5%;
      cursor: pointer;
      height: auto;

      @media screen and (max-width: 800px) {
        width: 100%;
      }
  }

  img {
    width: 25%;
    height: auto;

    @media screen and (max-width: 800px) {
        
      }
}

`;