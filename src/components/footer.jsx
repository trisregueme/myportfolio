import styled from 'styled-components';

const FooterSection = styled.footer`
   display: flex;
   flex-direction: space-between;
`;

export default function Footer() {
   return (
      <FooterSection>
         <h1>Hello i'm Footer</h1>
         <p>Nono i'm the real Footer !</p>
      </FooterSection>
   );
}
