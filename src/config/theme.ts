import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Bitter', sans-serif`,
  },
  colors: {
    brand: '#ff003a',
    text: '#031a62',
  },
  styles: {
    global: {
      '::placeholder': {
        fontFamily: `'Poppins', sans-serif`,
      },
      body: {
        color: 'text',
      },
    },
  },
});

export default theme;
