export default function Social({ logo, href }) {
   return (
      <a // eslint-disable-line react/jsx-no-target-blank
         href={href}
         target='_blank'
      >
         <img src={logo}></img>
      </a>
   );
}
