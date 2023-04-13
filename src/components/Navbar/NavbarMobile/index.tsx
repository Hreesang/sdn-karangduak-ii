import { Flex, HStack } from '@chakra-ui/react';
import Logo from './Logo';
import Search from './Search';
import Menu from './Menu';

export default function NavbarMobile() {
  return (
    <Flex
      w={'100vw'}
      justifyContent={'space-between'}
      alignItems={'center'}
      p={'1.5rem 2.5rem'}
      boxShadow={
        'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px'
      }
    >
      <Logo />
      <HStack spacing={'1rem'}>
        <Search />
        <Menu />
      </HStack>
    </Flex>
  );
}
