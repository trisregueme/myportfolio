import styled from 'styled-components';

const SocialImg = styled.img`
   filter: grayscale(100%) contrast(100%);
   transition:
      filter 0.5s,
      transform 0.5s;
   height: 5vh;
   width: auto;
   &:hover {
      filter: grayscale(0%) contrast(115%);
      transform: scale(1.2);
      cursor: pointer;
   }
`;

export default function Social({ logo, href }) {
   return (
      <a // eslint-disable-line react/jsx-no-target-blank
         href={href}
         target='_blank'
      >
         <SocialImg src={logo}></SocialImg>
      </a>
   );
}
