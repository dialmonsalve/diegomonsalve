import Link from "next/link";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="footer" >

      <nav className="footer__navigation">
        <u className="footer__navigation--list">
          <li className="footer__navigation--item">
            <Link href="/company" className="footer__navigation--link">Compañía</Link>
          </li>
          <li className="footer__navigation--item">
            <Link href="/contact" className="footer__navigation--link">Contacto</Link>
          </li>
          <li className="footer__navigation--item">
            <Link href="/policy" className="footer__navigation--link">Política</Link>
          </li>
          <li className="footer__navigation--item">
            <Link href="/terms" className="footer__navigation--link">Términos</Link>
          </li>
        </u>
      </nav>

      <article className="footer__contacto">
        <p>Teléfono: +57-319-7839908</p>
        <p>Ciudad: Envigado - Antioquia</p>
        <p>Colombia</p>
      </article>

      <article className="footer__redes" >
        <Link href='https://www.instagram.com/dialmonsalve' target="_blank" >
        <Image width={40} height={40} src='/icons/instagram.svg'  alt="instagram" />
        </Link>
        <Link href='https://www.facebook.com/dialmonsalve' target="_blank" >
        <Image width={40} height={40} src='/icons/facebook.svg'  alt="facebook" />
        </Link>
        <Link href='https://github.com/dialmonsalve' target="_blank" >
        <Image width={40} height={40} src='/icons/github.svg'  alt="github" />
        </Link>
      </article>
    </footer>
  )
}
