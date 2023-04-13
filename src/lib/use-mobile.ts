import { useMediaQuery } from '@chakra-ui/react';

export const useMobile = () => {
  const [isMobile] = useMediaQuery('(max-width: 800px)');

  return isMobile;
};
