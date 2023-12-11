import styled from 'styled-components';

const FooterSection = styled.footer`
   display: flex;
   flex-direction: column;
   align-items: center;
   margin-top: 10rem;
   text-align: center;
   border-top: 1px solid;
   p {
      margin-top: 1rem;
   }
   p:last-child {
      font-family: 'UdaraMalam';
      font-size: 3rem;
      margin-bottom: 1rem;
   }
`;

export default function Footer() {
   return (
      <FooterSection>
         <p>Portfolio designed and built by</p>
         <p>Tristan.R</p>
      </FooterSection>
   );
}
