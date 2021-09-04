import styled from 'styled-components';


export const ProjectContainer = styled.div`
 max-width: 1350px;
width: 100%;
margin: 0 auto;


.card {
     display: grid;
    grid-template-columns: 1fr 1fr 1fr;

  @media screen and (max-width: 800px) {
    width: 100%;
      grid-template-columns: 1fr;
}
}

.project-text {
     font-family: 'Poppins';
     color: black;
     text-align: center;
     font-size: 25px;
}

.overall {
  @media screen and (max-width: 800px) {
     margin-top: 1rem;
}
} 
.projects-title {
    display: flex;
    justify-content: center;
    text-align: center;
}

.text {
     font-size: 19px;
     line-height: 1.65;
     font-family: "Open Sans", sans-serif;
     color: #222;
}

.span {
     font-size: 16px;
     font-weight: 400;
     line-height: 1.65;
     font-family: "Open Sans", sans-serif;
     color: #222;
}

img {
    width: 100%;
    height: auto;

    @media screen and (max-width: 800px) {
        width: 100%;
}
}
  
`;