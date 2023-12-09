import styled from 'styled-components';

const FooterSection = styled.footer`
   display: flex;
   flex-direction: column;
   justify-content: end;
   align-items: center;
   height: 20rem;
   text-align: center;
   gap: 0.5rem;
   p:last-child {
      font-family: 'UdaraMalam';
      font-size: 3rem;
      margin-bottom: 1.5rem;
   }
`;

export default function Footer() {
   return (
      <FooterSection>
         <p>Portfolio Designed and built by</p>
         <p>Tristan.R</p>
      </FooterSection>
   );
}
