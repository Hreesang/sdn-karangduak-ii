import { Box, Image } from '@chakra-ui/react';
import Link from '@/components/Link';

export default function Logo() {
  return (
    <Box as={Link} href={'/'}>
      <Image src={'/logo.svg'} alt={'SDN Karangduak II'} />
    </Box>
  );
}
