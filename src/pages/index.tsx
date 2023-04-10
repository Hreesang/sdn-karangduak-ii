import { useMobile } from '@/lib/use-mobile';

import { Heading } from '@chakra-ui/react';
import Navbar from '@/components/Navbar';

export default function Home() {
  const isMobile = useMobile();
  return (
    <>
      <Navbar isMobile={isMobile} />
      <Heading h={'200vh'}>Hello World</Heading>
    </>
  );
}
