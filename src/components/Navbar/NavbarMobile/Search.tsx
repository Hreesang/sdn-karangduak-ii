import { IconButton, Icon } from '@chakra-ui/react';
import { BiSearch } from 'react-icons/bi';

export default function Search() {
  return (
    <IconButton
      aria-label={'Search'}
      icon={<Icon as={BiSearch} boxSize={'6'} />}
      variant={'ghost'}
      size={'lg'}
      _hover={{ background: 0 }}
    />
  );
}
