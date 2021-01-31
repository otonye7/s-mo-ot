import styled from 'styled-components';


export const HeaderContainer = styled.div`
   width: 100%;
   display: flex;
   justify-content: space-between;
   background-color: black;

   .header-logo {
       color: red;
       width: 30%;
       display: flex;
       justify-content: space-around;
   }

   .nav-bars {
       width: 70%;
       display: flex;
       text-align: center;
       justify-content: center;
       padding-top: 1.5rem;
   }

   .link-con {
       margin-right: 10px;
       margin-left: 10px;
       text-decoration: none;
       color: white;

   }
`;