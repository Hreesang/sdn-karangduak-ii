import {
  navbarMenu,
  type INavbarMenu,
  type INavbarCategory,
} from '@/config/navbar';

import {
  HStack,
  VStack,
  Box,
  Flex,
  InputGroup,
  Input,
  InputLeftElement,
  Icon,
  Heading,
  Collapse,
} from '@chakra-ui/react';
import Link from '@/components/Link';

import { BiSearch } from 'react-icons/bi';

export interface IMenuProps {
  currentFocusMenu?: INavbarMenu;
  onFocusMenuChange: (focusMenu: INavbarMenu) => void;
}

export function Menu(props: IMenuProps) {
  const { currentFocusMenu, onFocusMenuChange } = props;

  return (
    <HStack
      w={'100%'}
      justifyContent={'space-between'}
      alignItems={'center'}
      spacing={'0'}
    >
      <Box w={'50%'} pr={'5rem'}>
        <InputGroup w={'100%'}>
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
      <Box w={'65%'}>
        <Flex justifyContent={'space-between'} flexGrow={'1'}>
          {navbarMenu.map((menu) => (
            <VStack
              key={menu.label}
              w={'fit-content'}
              spacing={'0.3rem'}
              pos={'relative'}
            >
              <Heading
                fontSize={'lg'}
                as={'button'}
                onClick={() => onFocusMenuChange(menu)}
                whiteSpace={'nowrap'}
                transition={'all 75ms ease-out'}
                _hover={{ color: menu.focusColor }}
                color={menu === currentFocusMenu ? menu.focusColor : 'inherit'}
              >
                {menu.label}
              </Heading>
              <Box
                pos={'absolute'}
                top={'5'}
                left={'0'}
                w={menu === currentFocusMenu ? '100%' : '0%'}
                transition={'width 150ms ease-in'}
                bgColor={menu.focusColor}
                h={'2.5px'}
              />
            </VStack>
          ))}
        </Flex>
      </Box>
    </HStack>
  );
}

export interface IMenuContentProps {
  currentFocusMenu?: INavbarMenu;
}

export function MenuContent(props: IMenuContentProps) {
  const { currentFocusMenu } = props;
  return (
    <Box w={'100%'}>
      {navbarMenu.map((menu) => (
        <Collapse key={menu.id} in={currentFocusMenu === menu} animateOpacity>
          <HStack
            justifyContent={'center'}
            alignItems={'center'}
            bgColor={'white'}
            spacing={'2.5rem'}
            pt={'0.5rem'}
            pb={'1.5rem'}
          >
            {menu.categories.map((category) => (
              <MenuContentCategory key={category.id} category={category} />
            ))}
          </HStack>
        </Collapse>
      ))}
    </Box>
  );
}

interface IMenuContentCategoryProps {
  category: INavbarCategory;
}

function MenuContentCategory(props: IMenuContentCategoryProps) {
  const { category } = props;

  return (
    <VStack display={'block'} justifyContent={'flex-start'} spacing={'0.75rem'}>
      <Heading fontWeight={'medium'} fontSize={'md'}>
        {category.label}
      </Heading>
      {category.items.map((item) => (
        <Heading key={item.id} fontWeight={'light'} fontSize={'sm'}>
          <Link href={item.href}>{item.label}</Link>
        </Heading>
      ))}
    </VStack>
  );
}
