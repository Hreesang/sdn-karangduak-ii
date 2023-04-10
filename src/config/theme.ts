import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      '::placeholder': {
        fontFamily: `'Poppins', sans-serif`,
      },
    },
  },
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Bitter', sans-serif`,
  },
});

export default theme;
