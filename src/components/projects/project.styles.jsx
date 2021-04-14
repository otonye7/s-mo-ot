import styled from 'styled-components';


export const ProjectContainer = styled.div`
width: 100%;

.projects-title {
    display: flex;
    justify-content: center;
    text-align: center;
}

.image-container {
    display: flex;
    justify-content: space-around;

    @media screen and (max-width: 767px) {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
}
}



.card {
  /* Add shadows to create the "card" effect */
  width: 30%;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  margin-left: 1rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  margin-right: 1rem;
  height: 20rem;
  border-radius: 5px;
  text-decoration: none;

@media screen and (max-width: 767px) {
        width: 100%;
        margin-left: 0rem;
        margin-top: 0rem;
        margin-bottom: 0rem;
        margin-right: 0rem;
}
}

.container {
  padding: 2px 16px;
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

    @media screen and (max-width: 767px) {
        width: 100%;
}
}
  
`;