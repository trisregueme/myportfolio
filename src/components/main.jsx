import styled from 'styled-components';

const MainSection = styled.main`
   display: flex;
   flex-direction: space-between;
`;

export default function Main() {
   return (
      <MainSection>
         <h1>Hello i'm Main</h1>
         <p>Nono i'm the real Main !</p>
      </MainSection>
   );
}
