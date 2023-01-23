import '../styles/globals.css';
import '../styles/index.scss';

import { QueryClient, QueryClientProvider } from 'react-query';
import { Hydrate } from 'react-query/hydration';
import { ThemeProvider } from 'next-themes';
import NextNprogress from 'nextjs-progressbar';
import { wrapper } from '../utils/redux/store';

import Layout from '../modules/Layout/layout';

const queryClient = new QueryClient();

const MyApp = ({ Component, pageProps }: any) => (
  <QueryClientProvider client={queryClient}>
    <Hydrate state={pageProps.dehydratedState}>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        value={{
          light: 'light',
          dark: 'dark',
        }}
      >
        {/* @ts-ignore */}
        <Layout>
          {/* @ts-ignore */}
          <NextNprogress
            color="#6867FF"
            startPosition={0.3}
            stopDelayMs={250}
            height={5}
          />
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </Hydrate>
  </QueryClientProvider>
);

export default wrapper.withRedux(MyApp);
