import styled from 'styled-components';

const HeaderSection = styled.header`
   display: flex;
   justify-content: space-around;
   align-items: center;
   height: 8vh;
   width: 100%;
   border-bottom: 1px solid;
   p {
      font-family: 'UdaraMalam';
      font-size: 3rem;
      margin: 1.2rem 0 0.8rem;
   }
   a {
      font-family: 'JustusOld';
      font-size: 1rem;
      padding: 0.5rem;
      margin: 0.5rem;
      transition: transform 0.5s;
      &:hover {
         cursor: pointer;
         text-decoration: underline;
         transform: scale(1.2);
      }
   }
`;
const Nav = styled.nav`
   display: flex;
   gap: 1.5rem;
`;
const Contact = styled.button`
   color: white;
   border: 1px solid;
   border-radius: 5px;
   padding: 0.5rem 1rem;
   font-family: 'JustusOld';
   font-size: 1.2rem;
   transition:
      transform 0.5s,
      background-color 0.5s,
      font-weight 0.5s;
   &:hover {
      cursor: pointer;
      transform: scale(1.15);
      color: black;
      background-color: white;
      font-weight: bold;
   }
`;

export default function Header() {
   return (
      <HeaderSection>
         <p>Tristan.R</p>
         <Nav>
            <a>Home</a>
            <a>Selected Projects</a>
            <a>My Skills</a>
            <a>About Me</a>
         </Nav>
         <Contact>Contact</Contact>
      </HeaderSection>
   );
}
