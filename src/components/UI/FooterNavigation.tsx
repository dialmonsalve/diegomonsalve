import Link from "next/link";

interface Props {
  href?: string;
  title?: string;
}

export const FooterNavigation = ({ href, title}:Props) => {
  return (
    <li className="footer__navigation--item">
      <Link href={href || ''} className="footer__navigation--link">
        {title}
      </Link>
    </li>
  );
}
