import {
  IconButton,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import { BiSearch } from 'react-icons/bi';

interface ISearchButtonProps {
  onClick: () => void;
}

export function SearchButton(props: ISearchButtonProps) {
  const { onClick } = props;
  return (
    <IconButton
      aria-label={'Search'}
      icon={<Icon as={BiSearch} boxSize={'6'} />}
      variant={'ghost'}
      size={'lg'}
      _hover={{ background: 0 }}
      onClick={onClick}
    />
  );
}

interface ISearchInputProps {
  focus: boolean;
}

export function SearchInput(props: ISearchInputProps) {
  const { focus } = props;

  return (
    <InputGroup w={'100%'}>
      <InputLeftElement pointerEvents={'none'}>
        <Icon as={BiSearch} />
      </InputLeftElement>
      <Input
        type={'search'}
        placeholder={'Cari...'}
        border={0}
        autoFocus={focus}
        _hover={{ border: 0 }}
        _focus={{ outline: 0, border: 0, boxShadow: 0 }}
      />
    </InputGroup>
  );
}
