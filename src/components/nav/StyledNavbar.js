import styled from "styled-components";

const StyledNavbar = styled.nav`
 
    background-image: linear-gradient(45deg, #6930c3, #5e60ce);
    color: #fff;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: sticky;
    top: 0;
    left:0;
    right:0;
    z-index:2;
    flex-wrap: wrap;
    

    h2 {
      font-size: clamp(18px, 10vw, 22px);
    }

    div {
      display: flex;
      align-items: center;
      background-color: white;

      svg {
        display: block;

        color: black;
        height: 25px;
        font-size: 20px;
        cursor: pointer;
      }
    }

    input {
      border: none;
      height: 35px;
      width: clamp(150px, 30vw, 400px);
      cursor: pointer;

      &:focus {
        outline: none;
      }
    }

    section {
      display: flex;
      align-items: center;
      gap: 10px;
      

      svg {
        font-size: 25px;
        cursor: pointer;
       
       
      }

      img {
        border-radius: 50%;
        height: 55px;
        width: 55px;
        object-fit: cover;
      }
    }

    section:nth-of-type(3) {
      background-color: red;
      position: absolute;
      top:0;
    
      height: 100vh;
      width: 100%;
      display: flex;
      flex-direction: column;
     background-image: linear-gradient(45deg, #6930c3, #5e60ce);
     gap:40%;

      
     span:nth-of-type(1) {
         
         height: 70px;
         width:80%;
         justify-content: flex-end;
         display: flex;
         align-items: center;
         
         svg {
             font-size:40px;
         }
        
         
         
     }

     span:nth-of-type(2) {
         display: flex;
         flex-direction:  column;
         gap:10px;
             
         p {
             font-size:clamp(16px, 5vw, 40px);
             cursor:pointer;
             font-weight: 700;
             transition: all 1s linear;
             width: 80vw;
             height: 50px;
             
             text-align: center;
           
             @media (min-width:668px) {
                 &:hover {
                     transform:scale(1.5);

                 }
             }
         }
         
     }

   
      
    }
  }

  @media (min-width: 668px) {
    section {
      svg:nth-of-type(2) {
        display: none;
      }
    }
  }

  @media (max-width: 668px) {
   
      div {
        display: none;
      }

      span:not(.closebtn) {
        display: flex;
        align-items: center;
        input {
          height: 35px;
          width: clamp(250px, 60vw, 600px);
        }
        svg {
          height: 35px;
          background-color: #fff;
          color: black;
          cursor: pointer;
          font-size: 20px;
        }
      }
    
  
`;

export default StyledNavbar;
