import styled from 'styled-components';


export const HeaderContainer = styled.div`
   max-width: 1300px; 
   width: 98%;
   margin: 0 auto;
   display: flex;
   justify-content: space-between;
   background-color: white;
   

  

   .header-logo {
       font-family: 'Poppins';
       color: rgb(215, 64, 52);
       /* max-width: 1300px; */
       width: 98%;
       margin: auto 0;
       display: flex;   
       justify-content: space-between;
    }

    .header {
        font-size: 30px;
        font-weight: 600;
    }

    
  .border {
      border-bottom: 2px solid #D8D8DE;
      border: 2px solid red;
      /* opacity: 0.8; */
   @media screen and (max-width: 767px){
      /* padding-top: 0.5rem; */
   }
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