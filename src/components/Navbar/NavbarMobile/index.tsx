import { useState } from 'react';

import { useDisclosure, HStack, Box } from '@chakra-ui/react';
import Logo from './Logo';
import { SearchButton } from './Search';
import Menu from './Menu';

export default function NavbarMobile() {
  // Doubles the Navbar so it'll look sticky but won't remove the top
  return (
    <>
      <Box mt={'6rem'} />
      <Navbar />
    </>
  );
}

function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [searchFocus, setSearchFocus] = useState(false);

  return (
    <HStack
      w={'100vw'}
      justifyContent={'space-between'}
      alignItems={'center'}
      pt={'0.5rem'}
      pb={'0.5rem'}
      pl={['0.5rem', '1rem']}
      pr={['0.5rem', '1rem']}
      boxShadow={
        'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px'
      }
      position={'fixed'}
      top={'0'}
      left={'0'}
      right={'0'}
      bgColor={'white'}
      spacing={'1rem'}
    >
      <Logo />
      <HStack spacing={['0', '1rem']}>
        <SearchButton
          onClick={() => {
            setSearchFocus(true);
            onOpen();
          }}
        />
        <Menu
          isOpen={isOpen}
          onOpen={onOpen}
          onClose={() => {
            onClose();
            setSearchFocus(false);
          }}
          searchFocus={searchFocus}
        />
      </HStack>
    </HStack>
  );
}
