import styled from 'styled-components';
import { device } from '../style/breakpoints';

const Card = styled.a`
   display: flex;
   flex-direction: column;
   width: 31.5%;
   max-height: 33%;
   padding: 1.5rem;
   border: 2px inset #eeeeee60;
   background: linear-gradient(70deg, #0d0c0c, #191818, #0d0c0c);
   background-clip: padding-box;
   border-radius: 45px;
   transform: scale(1) rotate(0deg);
   transition: transform 0.2s ease-in-out;
   h3 {
      font-size: 1.5rem;
      margin-bottom: 1.25rem;
   }
   cursor: pointer;
   &:hover {
      transform: rotate(1.5deg);
   }
   @media ${device.tablet} {
      width: 80%;
      padding: 2rem 2.5rem;
   }
`;
const Tags = styled.div`
   display: flex;
   align-items: end;
   flex-wrap: wrap;
   align-items: flex-end;
   gap: 0.5rem;
   margin-top: 1rem;
   @media ${device.tablet} {
      margin-top: 1.5rem;
   }
`;
export const Tag = styled.p`
   padding: 0.15rem 0.6rem;
   background-color: #0d0c0c;
   border: 1px solid #eeeeeec7;
   border-radius: 15px;
   white-space: nowrap;
   text-align: center;
`;

const projects = [
   {
      title: 'ArgentBank 💰',
      content:
         'Web application project for a bank including a user connection system, developped using Redux.',
      tags: ['React', 'Styled components', 'Swagger', 'GitHub'],
      link: 'https://github.com/trisregueme/argentbank',
   },
   {
      title: 'Rental Agency 🏡',
      content:
         'Web application project for Kasa, a property rental agency offering a wide choice of accommodation.',
      tags: ['React', 'SASS', 'Figma', 'GitHub'],
      link: 'https://github.com/trisregueme/property-rental-agency',
   },
   {
      title: `Architect's portfolio  📐`,
      content:
         'Static website project for an interior architect including a user connection to manage the content.',
      tags: ['JavaScript', 'HTML5', 'SASS', 'Figma', 'GitHub'],
      link: 'https://github.com/trisregueme/portfolio-architect',
   },
];

export default function ProjectCard() {
   return (
      <>
         {projects.map((project, index) => (
            <Card
               key={index}
               href={project.link}
               target='_blank'
            >
               <h3>{project.title}</h3>
               <p>{project.content}</p>
               <Tags>
                  {project.tags.map((tag, tagIndex) => (
                     <Tag key={tagIndex}>{tag}</Tag>
                  ))}
               </Tags>
            </Card>
         ))}
      </>
   );
}
