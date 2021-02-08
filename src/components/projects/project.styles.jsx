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

    @media screen and (max-width: 800px) {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
}
}

.image-one {
    width: 25%;
    height: auto;
    cursor: pointer;

    @media screen and (max-width: 800px) {
       width: 100%;
       margin-top: 60px;
}
}

.image-two {
    width: 25%;
    height: auto;
    cursor: pointer;

    @media screen and (max-width: 800px) {
        width: 100%;
        margin-top: 60px;
}
}

.image-three {
    width: 25%;
    height: auto;
    cursor: pointer;

    @media screen and (max-width: 800px) {
        width: 100%;
        margin-top: 60px;
}
}

img {
    width: 100%;
    height: auto;

    @media screen and (max-width: 800px) {
        width: 40%;
}
}
  
`;