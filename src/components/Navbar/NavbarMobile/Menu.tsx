import { useState } from 'react';
import { navbarMenu } from '@/config/navbar';

import {
  useDisclosure,
  Flex,
  VStack,
  HStack,
  IconButton,
  Icon,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  Heading,
  Button,
} from '@chakra-ui/react';
import Link from '@/components/Link';

import { GiHamburgerMenu } from 'react-icons/gi';
import { GrClose } from 'react-icons/gr';
import { MdArrowForwardIos } from 'react-icons/md';

export default function Menu() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <MenuButton onOpen={onOpen} />
      <MenuDrawer isOpen={isOpen} onClose={onClose} />
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
}

function MenuDrawer(props: IMenuDrawerProps) {
  const { isOpen, onClose } = props;
  const [currentMenu, setCurrentMenu] = useState('');

  return (
    <Drawer isOpen={isOpen} onClose={onClose} size={'full'}>
      <DrawerOverlay />
      <DrawerContent>
        <VStack w={'100%'} pr={'2.5rem'} pl={'1rem'}>
          <MenuHeader onClose={onClose} />
          <MenuContent currentMenu={currentMenu} />
        </VStack>
      </DrawerContent>
    </Drawer>
  );
}

interface IMenuHeaderProps {
  onClose: () => void;
}

function MenuHeader(props: IMenuHeaderProps) {
  const { onClose } = props;
  return (
    <Flex w={'100%'} justifyContent={'flex-end'} mt={'1.75rem'}>
      <IconButton
        aria-label={'Menu Closer'}
        icon={<Icon as={GrClose} boxSize={'7'} />}
        variant={'ghost'}
        _hover={{ border: '0', background: 'transparent' }}
        onClick={onClose}
      />
    </Flex>
  );
}

interface IMenuContentProps {
  currentMenu: string;
}

function MenuContent(props: IMenuContentProps) {
  const { currentMenu } = props;
  const [hoveringMenuLabel, setHoveringMenuLabel] = useState('');

  const handleMouseEnterMenu = (menuLabel: string) => {
    setHoveringMenuLabel(menuLabel);
  };

  const handleMouseLeaveMenu = (menuLabel: string) => {
    if (hoveringMenuLabel === menuLabel) {
      setHoveringMenuLabel('');
    }
  };

  if (!currentMenu) {
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

  return <></>;
}
