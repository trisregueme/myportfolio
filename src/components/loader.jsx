import styled from 'styled-components';

const LoaderWrapper = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   height: 100vh;
`;

const LoaderSpan = styled.span`
   width: 48px;
   height: 48px;
   background: #fff;
   display: inline-block;
   border-radius: 50%;
   box-sizing: border-box;
   animation: animloader 1s ease-in infinite;
`;

export default function Loader() {
   return (
      <LoaderWrapper>
         <LoaderSpan />
      </LoaderWrapper>
   );
}
