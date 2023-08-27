import { NavLink } from "../UI/NavLink";

export const Navbar = () => {

  return (
    <nav className="nav" >
      <ul className="nav__menu" >

        <NavLink href="/">
          HOME
        </NavLink>
        <NavLink href="/about">
          NOSOTROS
        </NavLink>
        <NavLink href="/services">
          SERVICIOS
        </NavLink>
        <NavLink href="/projects">
          PROYECTOS
        </NavLink>
        <NavLink href="/contact">
          CONTACTO
        </NavLink>
      </ul>
    </nav>
  )
}