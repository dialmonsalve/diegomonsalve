import { FOOTER_NAVIGATION, SOCIAL_NAVIGATION } from '@/constants/constant';
import { FooterNavigation,  SocialNavigation } from '../UI';

export const Footer = () => {
  return (
    <footer className="footer">
      <nav className="footer__navigation">
        <ul className="footer__navigation--list">
          {FOOTER_NAVIGATION.map((item) => (
            <FooterNavigation key={item.id} href={item.href} title={item.title} />
          ))}
        </ul>
      </nav>

      <article className="footer__contacto">
        <p>Teléfono: +57-319-7839908</p>
        <p>Ciudad: Envigado - Antioquia</p>
        <p>Colombia</p>
      </article>

      <article className="footer__redes">
        {SOCIAL_NAVIGATION.map((item) => (
          <SocialNavigation
            key={item.id}
            alt={item.alt}
            href={item.href}
            src={item.src}
          />
        ))}
      </article>
      <p className="footer__redes--copyright">
        &#169; Todas las imágenes de este sitio web son gratuitas y de dominio
        público según: https://creativecommons.org/
      </p>
    </footer>
  );
};
