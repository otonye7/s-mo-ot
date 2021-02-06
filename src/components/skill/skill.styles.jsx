import styled from 'styled-components';


export const SkillContainer = styled.div`
  width: 100%;
  margin-top: 30px;
  background-color: #f2f2f2;

  @media screen and (max-width: 800px) {
        margin: 0 auto;
      }
 

 .skill-title {
     display: flex;
     justify-content: center;
 }
 
  .skills {
      display: flex;
      justify-content: space-around;

      @media screen and (max-width: 800px) {
        display: flex;
        flex-direction: column;
        width: 100%;
        justify-content: center;
        text-align: center;
      }
      
  }

  .skillset {
      display: flex;
      justify-content: space-around;
      margin-top: 40px;
      width: 100%;
      justify-content: center;
      text-align: center;

      @media screen and (max-width: 800px) {
        display: flex;
        flex-direction: column;
        width: 100%;
      }
  }

  .html {
      width: 5%;
      height: auto;

      @media screen and (max-width: 800px) {
        width: 100%;
      }
      
  }

  .css {
      width: 5%;
      height: auto;

      @media screen and (max-width: 800px) {
        width: 100%;
      }
     
  }

  .javascript {
      width: 5%;
      height: auto;

      @media screen and (max-width: 800px) {
        width: 100%;
      }
  }

  .python {
      width: 5%;
      height: auto;

      @media screen and (max-width: 800px) {
        width: 100%;
      }
  }

  .react {
      width: 5%;
      height: auto;

      @media screen and (max-width: 800px) {
        width: 100%;
      }
  }

  .github {
      width: 5%;
      height: auto;

      @media screen and (max-width: 800px) {
        width: 100%;
      }
  }


  img {
    width: 40%;
    height: auto;
}
}
`;