import styled from 'styled-components';
// import Hero from  '../../assets/headerimage.svg';


export const HeroContainer = styled.div`
max-width: 1300px;
/* position: relative; */
width: 98%;
height: 100%;
margin: 0 auto;


.hero-container {
   display: grid;
   grid-template-columns: 1fr 1fr;

   @media screen and (max-width: 800px) {
      display: grid;
      grid-template-columns: 1fr;
  }
}

.hero-text {
   width: 80%;
   margin: 0 auto;
   z-index: 1;
   @media screen and (max-width: 800px) {
      width: 100%;
  }
}

.name-text {
   font-size: 35px;
   display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    line-height: 1.65;
    font-family: 'Poppins';
    color: rgb(215, 64, 52);
}

.front-text {
   font-size:30px;
   display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    line-height: 1.65;
    font-family: 'Poppins';
    color: rgb(215, 64, 52);
}

.typewriter {
   font-size: 32px;
   display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    line-height: 1.65;
    font-family: 'Poppins';
    color: rgb(215, 64, 52);
}

img {
    width: 100%;
    height: auto;
}
`;