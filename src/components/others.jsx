import github from '../assets/github.webp';
import notion from '../assets/notion.webp';
import seo from '../assets/seo.webp';
import vercel from '../assets/vercel.webp';
import { SkillElement } from './frontend';

export default function Others() {
   return (
      <div>
         <h3>Others</h3>
         <ul>
            <SkillElement>
               <img src={github} />
               <p>GitHub</p>
            </SkillElement>
            <SkillElement>
               <img src={notion} />
               <p>Notion</p>
            </SkillElement>
            <SkillElement>
               <img src={seo} />
               <p>SEO</p>
            </SkillElement>
            <SkillElement>
               <img src={vercel} />
               <p>Vercel (beginner)</p>
            </SkillElement>
         </ul>
      </div>
   );
}
