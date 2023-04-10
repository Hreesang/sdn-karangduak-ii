import NextLink from 'next/link';
import { Link as ChakraLink, LinkProps } from '@chakra-ui/react';

export default function Link(props: LinkProps) {
  return <ChakraLink as={NextLink} {...props} />;
}
