import { useEffect } from 'react';

import NavbarMobile from './NavbarMobile';
import NavbarDesktop from './NavbarDesktop';

interface INavbarProps {
  isMobile: boolean;
}

export default function Navbar(props: INavbarProps) {
  const { isMobile } = props;

  return isMobile ? <NavbarMobile /> : <NavbarDesktop />;
}
