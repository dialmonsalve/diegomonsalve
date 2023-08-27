import Link from "next/link"
import { useRouter } from "next/router";

interface Props {
  href: string;
  children: string;
}

export const NavLink = ({ href, children }: Props) => {

  const { pathname } = useRouter();

  return (
    <li>
      {
        pathname === href
          ? <span
            className={`nav__menu--link ${pathname === href ? 'active' : ''}`}
          >
            {children}
          </span>

          : <Link
            className={`nav__menu--link ${pathname === href ? 'active' : ''}`}
            href={href}
          >
            {children}
          </Link>
      }
    </li>
  )
}
