import { useState } from 'react';

import { useDisclosure, Flex, Box, HStack } from '@chakra-ui/react';
import Logo from './Logo';
import { SearchButton } from './Search';
import Menu from './Menu';

export default function NavbarMobile() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [searchFocus, setSearchFocus] = useState(false);

  return (
    <>
      <Box h={['4.5rem', '6.5rem']} />
      <Flex
        w={'100vw'}
        justifyContent={'space-between'}
        alignItems={'center'}
        p={'0.5rem 2.5rem'}
        boxShadow={
          'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px'
        }
        position={'fixed'}
        top={'0'}
        left={'0'}
        right={'0'}
        bgColor={'white'}
      >
        <Logo />
        <HStack spacing={'1rem'}>
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
      </Flex>
    </>
  );
}
