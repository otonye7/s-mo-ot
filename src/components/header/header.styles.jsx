import styled from 'styled-components';


export const HeaderContainer = styled.div`
   width: 100%;
   display: flex;
   justify-content: space-between;
   background-color: black;

   .header-logo {
       color: red;
       width: 98%;
       margin: 0 auto;
       display: flex;   
       justify-content: space-between;
    }

    .nav-links {
        padding-top: 1.5rem;
    }


   .link-con {
       text-decoration: none;
       color: white;
       margin-top: 2rem;
       align-content: center;
   }
`;