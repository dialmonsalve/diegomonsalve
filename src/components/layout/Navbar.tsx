import { MenuButton, MainNavigation } from '../UI';
import Image from 'next/image';

export const Navbar = () => {
  return (
      <nav className="navigation">
        <div className='navigation__mobile' >
          <a href="/">
            <Image src="/icons/home.svg" width={30} height={30} alt="home" />
          </a>
        </div>
        <MenuButton />
        <MainNavigation />
      </nav>
  );
};
