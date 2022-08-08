import '../styles/globals.css';
import '../styles/index.scss';
// import 'swiper/swiper.scss';

import type { AppProps } from 'next/app';

import { QueryClient, QueryClientProvider } from 'react-query';
import { Hydrate } from 'react-query/hydration';

import Layout from '../modules/Layout/layout';
// import { ThemeProvider } from 'next-themes';

const queryClient = new QueryClient();

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    // <ThemeProvider attribute="class">
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Layout>
          {/*@ts-ignore*/}
          <Component {...pageProps} />
        </Layout>
      </Hydrate>
    </QueryClientProvider>
    // </ThemeProvider>
  );
};

export default MyApp;
