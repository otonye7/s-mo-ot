import styled from 'styled-components';


export const SkillContainer = styled.div`
  max-width: 1300px;
  width: 100%;

  .container {
    width: 98%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin: 0 auto;

    @media screen and (max-width: 800px) {
      grid-template-columns: 1fr;
   }
  }


  
.project-text {
     font-family: 'Poppins';
     color: black;
     text-align: center;
     font-size: 25px;
}

  .image {
    /* border: 2px solid red; */
    width: 40%;
    margin: 0 auto;

    @media screen and (max-width: 800px) {
      width: 100%;
   }
  }
/*   
  .first-container {
    border: 2px solid red;
    width: 30%;
  } */

  img {
    width: 100%;
    height: auto;
}
  
`;