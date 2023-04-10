import { useEffect, useState } from 'react';
import navItems, { type INavItem } from '@/config/nav-items';

import {
  Box,
  Flex,
  HStack,
  VStack,
  Heading,
  IconButton,
  Icon,
  InputGroup,
  Input,
  InputLeftElement,
  BoxProps,
  Image,
  Collapse,
} from '@chakra-ui/react';
import Link from '@/components/Link';

import { GiHamburgerMenu } from 'react-icons/gi';
import { BiSearch } from 'react-icons/bi';
import { BsInstagram, BsYoutube } from 'react-icons/bs';

export default function NavbarDesktop() {
  const [curNavItem, setCurNavItem] = useState(
    undefined as INavItem | undefined
  );

  const onNavItemChange = (navItem: INavItem) => {
    if (navItem === curNavItem) {
      setCurNavItem(undefined);
    } else {
      setCurNavItem(navItem);
    }
  };

  return (
    <Box h={'20vh'} position={'relative'}>
      <VStack
        w={'fit-content'}
        h={'fit-content'}
        position={'fixed'}
        top={'0'}
        left={'0'}
        right={'0'}
        spacing={'0'}
        boxShadow={
          'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px'
        }
      >
        <Flex
          w={'100vw'}
          h={'20vh'}
          justifyContent={'center'}
          alignItems={'center'}
          bgColor={'white'}
        >
          <HStack justifyContent={'space-between'} w={'85%'} spacing={'1rem'}>
            <Flex w={'20%'} justifyContent={'center'}>
              <Logo />
            </Flex>
            <Flex w={'75%'} justifyContent={'space-between'}>
              <VStack
                w={'100%'}
                justifyContent={'space-between'}
                spacing={'1.5rem'}
              >
                <SocialLinks />
                <MenuItems
                  currentItem={curNavItem}
                  onItemChange={onNavItemChange}
                />
              </VStack>
            </Flex>
            <Flex w={'5%'} justifyContent={'center'}>
              <MenuDrawer />
            </Flex>
          </HStack>
        </Flex>
        <Collapse in={curNavItem !== undefined} animateOpacity>
          <Box w={'100vw'} bgColor={'black'}>
            Test
          </Box>
        </Collapse>
      </VStack>
    </Box>
  );
}

function Logo() {
  return (
    <Image
      src={'https://bowvalleycollege.ca/-/media/bvc/home/menu/logo.ashx'}
      alt={'SDN Karangduak II'}
    />
  );
}

const socialLinks = [
  {
    name: 'Instagram',
    icon: BsInstagram,
    href: 'https://instagram.com/km5_sdnkarangduak2?igshid=YmMyMTA2M2Y=',
  },
  {
    name: 'Youtube',
    icon: BsYoutube,
    href: 'https://youtube.com/@km5_sdnkarangduak2',
  },
];

function SocialLinks() {
  return (
    <HStack
      w={'100%'}
      justifyContent={'flex-end'}
      alignItems={'center'}
      spacing={'3%'}
    >
      {socialLinks.map((socialLink) => (
        <HStack
          as={Link}
          href={socialLink.href}
          key={socialLink.name}
          isExternal
          _hover={{ textDecor: '0', color: 'brand' }}
        >
          {socialLink.icon && <Icon as={socialLink.icon} boxSize={'15%'} />}
          <Heading fontSize={'sm'} fontWeight={'medium'}>
            {socialLink.name}
          </Heading>
        </HStack>
      ))}
    </HStack>
  );
}

interface IMenuItems {
  currentItem?: INavItem;
  onItemChange: (navItem: INavItem) => void;
}

function MenuItems(props: IMenuItems) {
  const { currentItem, onItemChange } = props;
  return (
    <HStack
      w={'100%'}
      justifyContent={'space-between'}
      alignItems={'center'}
      spacing={'0'}
    >
      <Box w={'30%'}>
        <InputGroup w={'90%'}>
          <InputLeftElement pointerEvents={'none'}>
            <Icon as={BiSearch} />
          </InputLeftElement>
          <Input
            type={'search'}
            placeholder={'Cari...'}
            border={0}
            _hover={{ border: 0 }}
            _focus={{ outline: 0, border: 0, boxShadow: 0 }}
          />
        </InputGroup>
      </Box>
      <Flex w={'60%'} justifyContent={'space-between'}>
        {navItems.map((navItem) => (
          <VStack
            key={navItem.label}
            w={'fit-content'}
            spacing={'0.3rem'}
            pos={'relative'}
          >
            <Heading
              fontSize={'lg'}
              as={'button'}
              onClick={() => onItemChange(navItem)}
              transition={'all 75ms ease-out'}
              _hover={{ color: navItem.focusColor }}
              color={navItem === currentItem ? navItem.focusColor : 'inherit'}
            >
              {navItem.label}
            </Heading>
            <Box
              pos={'absolute'}
              top={'5'}
              left={'0'}
              w={navItem === currentItem ? '100%' : '0%'}
              transition={'width 150ms ease-in'}
              bgColor={navItem.focusColor}
              h={'2.5px'}
            />
          </VStack>
        ))}
      </Flex>
    </HStack>
  );
}

function MenuDrawer(props: BoxProps) {
  return (
    <Box display={'flex'} justifyContent={'center'} {...props}>
      <IconButton
        aria-label={'Menu Drawer'}
        icon={<GiHamburgerMenu />}
        size={'lg'}
        variant={'ghost'}
        _hover={{ background: 0 }}
        _focus={{ background: 0, border: 0 }}
      />
    </Box>
  );
}
