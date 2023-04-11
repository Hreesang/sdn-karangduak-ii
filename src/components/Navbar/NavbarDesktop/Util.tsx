import { navbarUtils } from '@/config/navbar';

import { HStack, Icon, Heading } from '@chakra-ui/react';
import Link from '@/components/Link';

export default function Util() {
  return (
    <HStack
      w={'100%'}
      justifyContent={'flex-end'}
      alignItems={'center'}
      spacing={'3%'}
    >
      {navbarUtils.map((util) => (
        <HStack
          as={Link}
          href={util.href}
          key={util.label}
          isExternal
          _hover={{ textDecor: '0', color: 'brand' }}
        >
          {util.icon && <Icon as={util.icon} boxSize={'15%'} />}
          <Heading fontSize={'sm'} fontWeight={'medium'}>
            {util.label}
          </Heading>
        </HStack>
      ))}
    </HStack>
  );
}
