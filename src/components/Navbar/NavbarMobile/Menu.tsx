import { useState, useEffect } from 'react';
import { type INavbarMenu, navbarMenu } from '@/config/navbar';

import { SearchInput } from './Search';
import {
  Flex,
  Box,
  VStack,
  HStack,
  IconButton,
  Icon,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  Heading,
  Button,
  Collapse,
} from '@chakra-ui/react';
import Link from '@/components/Link';

import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io';
import { MdArrowForwardIos } from 'react-icons/md';
import { HiOutlineArrowLongLeft } from 'react-icons/hi2';

interface IMenuProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  searchFocus?: boolean;
}

export default function Menu(props: IMenuProps) {
  const { isOpen, onOpen, onClose } = props;
  const searchFocus = props.searchFocus ?? false;

  return (
    <>
      <MenuButton onOpen={onOpen} />
      <MenuDrawer isOpen={isOpen} onClose={onClose} searchFocus={searchFocus} />
    </>
  );
}

interface IMenuButtonProps {
  onOpen: () => void;
}

function MenuButton(props: IMenuButtonProps) {
  const { onOpen } = props;
  return (
    <Flex
      w={'3rem'}
      position={'relative'}
      justifyContent={'center'}
      alignItems={'center'}
      as={'button'}
      onClick={onOpen}
    >
      <IconButton
        aria-label={'Menu'}
        icon={<Icon as={GiHamburgerMenu} boxSize={'8'} />}
        variant={'ghost'}
        position={'absolute'}
        transition={'200ms ease-in'}
        _hover={{ marginRight: '1rem', border: '0', background: 'transparent' }}
        as={'div'}
      />
    </Flex>
  );
}

interface IMenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  searchFocus?: boolean;
}

function MenuDrawer(props: IMenuDrawerProps) {
  const { isOpen, onClose, searchFocus } = props;

  return (
    <Drawer isOpen={isOpen} onClose={onClose} size={'full'}>
      <DrawerOverlay />
      <DrawerContent>
        <VStack w={'100%'} pr={'2.5rem'} pl={'2rem'} spacing={'2rem'}>
          <MenuHeader searchFocus={searchFocus ?? false} onClose={onClose} />
          <MenuContent />
        </VStack>
      </DrawerContent>
    </Drawer>
  );
}

interface IMenuHeaderProps {
  onClose: () => void;
  searchFocus: boolean;
}

function MenuHeader(props: IMenuHeaderProps) {
  const { onClose, searchFocus } = props;
  return (
    <VStack w={'100%'} mt={'1.75rem'} align={'flex-starts'}>
      <Flex w={'100%'} justifyContent={'flex-end'}>
        <IconButton
          aria-label={'Menu Closer'}
          icon={<Icon as={IoMdClose} boxSize={'8'} color={'red'} />}
          variant={'ghost'}
          _hover={{ border: '0', background: 'transparent' }}
          onClick={onClose}
        />
      </Flex>
      <Flex w={'100%'} pl={'1rem'} pr={'0.5rem'}>
        <SearchInput focus={searchFocus} />
      </Flex>
    </VStack>
  );
}

function MenuContent() {
  const [currentMenu, setCurrentMenu] = useState('');

  const onSelectMenu = (menu: string): void => {
    setCurrentMenu(menu);
  };

  return (
    <>
      <Box w={'100%'} as={Collapse} in={!currentMenu} animateOpacity>
        <MenuHomeContent onSelectMenu={onSelectMenu} />
      </Box>
      {navbarMenu.map((menu) => (
        <Box
          key={menu.id}
          w={'100%'}
          as={Collapse}
          in={currentMenu === menu.label}
          animateOpacity
        >
          <MenuEachContent
            menu={menu}
            onMenuReturn={() => setCurrentMenu('')}
          />
        </Box>
      ))}
    </>
  );
}

interface IMenuHomeContent {
  onSelectMenu: (menu: string) => void;
}

function MenuHomeContent(props: IMenuHomeContent) {
  const { onSelectMenu } = props;
  const [hoveringMenuLabel, setHoveringMenuLabel] = useState('');

  const handleMouseEnterMenu = (menuLabel: string) => {
    setHoveringMenuLabel(menuLabel);
  };

  const handleMouseLeaveMenu = (menuLabel: string) => {
    if (hoveringMenuLabel === menuLabel) {
      setHoveringMenuLabel('');
    }
  };

  return (
    <VStack w={'100%'} spacing={'0.25rem'}>
      {navbarMenu.map((menu) => (
        <HStack
          key={menu.id}
          w={'100%'}
          justifyContent={'space-between'}
          as={Button}
          variant={'ghost'}
          _hover={{ background: '0' }}
          onMouseEnter={() => handleMouseEnterMenu(menu.label)}
          onMouseLeave={() => handleMouseLeaveMenu(menu.label)}
          onClick={() => onSelectMenu(menu.label)}
        >
          <Heading fontWeight={'semibold'} fontSize={'lg'}>
            {menu.label.toUpperCase()}
          </Heading>
          <Flex
            position={'relative'}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <Icon
              as={MdArrowForwardIos}
              color={menu.focusColor}
              position={'absolute'}
              transition={'100ms'}
              ml={hoveringMenuLabel === menu.label ? '0.75rem' : '0'}
            />
          </Flex>
        </HStack>
      ))}
    </VStack>
  );
}

interface IMenuEachContentProps {
  menu: INavbarMenu;
  onMenuReturn: () => void;
}

function MenuEachContent(props: IMenuEachContentProps) {
  const { menu, onMenuReturn } = props;
  return (
    <VStack w={'100%'} spacing={'1.5rem'}>
      {menu.categories.map((category) => (
        <VStack pl={'1rem'} key={category.id} w={'100%'} spacing={'0.5rem'}>
          <Heading fontWeight={'semibold'} fontSize={'xl'}>
            {category.label}
          </Heading>
          {category.items.map((item) => (
            <Heading key={item.id} fontWeight={'light'} fontSize={'lg'}>
              <Link href={item.href}>{item.label}</Link>
            </Heading>
          ))}
        </VStack>
      ))}
      <MenuContentReturnButton onClick={onMenuReturn} />
    </VStack>
  );
}

interface IMenuContentReturnButtonProps {
  onClick: () => void;
}

function MenuContentReturnButton(props: IMenuContentReturnButtonProps) {
  const { onClick } = props;
  return (
    <HStack w={'100%'} justifyContent={'flex-start'} alignItems={'center'}>
      <HStack
        as={Button}
        variant={'ghost'}
        _hover={{ background: '0' }}
        onClick={onClick}
        color={'red'}
      >
        <Icon as={HiOutlineArrowLongLeft} />
        <Heading fontWeight={'light'} fontSize={'sm'}>
          Back
        </Heading>
      </HStack>
    </HStack>
  );
}
