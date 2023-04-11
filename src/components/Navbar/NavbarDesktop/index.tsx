import { useState } from 'react';
import { type INavbarMenu } from '@/config/navbar';

import { VStack, HStack, Box } from '@chakra-ui/react';
import Logo from './Logo';
import Util from './Util';
import { Menu, MenuContent } from './Menu';

export default function NavbarDesktop() {
  const [currentFocusMenu, setCurrentFocusMenu] = useState(
    undefined as INavbarMenu | undefined
  );
  const onFocusMenuChange = (focusMenu: INavbarMenu) => {
    if (focusMenu === currentFocusMenu) {
      setCurrentFocusMenu(undefined);
    } else {
      setCurrentFocusMenu(focusMenu);
    }
  };

  return (
    <VStack
      position={'fixed'}
      w={'100vw'}
      bgColor={'white'}
      top={'0'}
      left={'0'}
      right={'0'}
      spacing={'1rem'}
      pt={'2rem'}
      pb={'1rem'}
      boxShadow={
        'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px'
      }
    >
      <HStack w={'100%'} justifyContent={'center'}>
        <Logo />
        <VStack w={'60%'} justifyContent={'space-between'} spacing={'1.5rem'}>
          <Util />
          <Menu
            currentFocusMenu={currentFocusMenu}
            onFocusMenuChange={onFocusMenuChange}
          />
        </VStack>
      </HStack>
      <Box w={'80%'}>
        <MenuContent currentFocusMenu={currentFocusMenu} />
      </Box>
    </VStack>
  );
}
