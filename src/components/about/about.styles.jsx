import styled from 'styled-components';


export const AboutContainer = styled.div`
  width: 100%;
  margin-top: 80px;
  display: flex;
  justify-content: space-between;

  .about-photo {
      width: 40%;
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
  }

  .description-container {
     width: 50%;
  }

  img {
    width: 100%;
    height: auto;
}
`;