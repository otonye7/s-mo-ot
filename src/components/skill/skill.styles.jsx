import styled from 'styled-components';


export const SkillContainer = styled.div`
  max-width: 1300px;
  width: 98%;
  height: 20rem;
  /* max-height: 30rem; */
  margin: 0 auto;
  background-color: #f2f2f2;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-content: center;
  padding-left: 10rem;

 @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
    height: 60rem;
    padding-left: 9rem;
}

.text {
  text-align: center;
} 

.first-container {
  width: 20%;
}

.second-image {
  width: 20%;
}

.third-image {
  width: 20%;
}

.fourth-image {
  width: 20%;
}

.fifth-image {
  width: 20%;
}

.sixth-image {
  width: 20%;
}


  img {
    width: 100%;
    height: auto;
}
  
`;