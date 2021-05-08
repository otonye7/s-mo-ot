import styled from 'styled-components';


export const HeaderContainer = styled.div`
   width: 100%;
   display: flex;
   justify-content: space-between;
   background-color: white;
  

   .header-logo {
       font-family: 'Poppins';
       color: rgb(215, 64, 52);
       width: 98%;
       margin: 0 auto;
       display: flex;   
       justify-content: space-between;
    }

    .header {
        font-size: 30px;
        font-weight: 600;
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