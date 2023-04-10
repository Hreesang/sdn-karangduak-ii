import Head from 'next/head';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';

import '@/config/fonts';
import theme from '@/config/theme';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>SDN Karangduak II</title>
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
