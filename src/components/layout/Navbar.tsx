import { MenuButton, MainNavigation } from '../UI';
import { UIProvider } from '@/context/UIProvider';

export const Navbar = () => {
  return (
    <UIProvider>
      <nav className="navigation">
        <MenuButton />
        <MainNavigation />
      </nav>
    </UIProvider>
  );
};
