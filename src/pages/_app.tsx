import '../styles/globals.css';
import '../styles/index.scss';

import { QueryClient, QueryClientProvider } from 'react-query';
import { Hydrate } from 'react-query/hydration';
import { ThemeProvider } from 'next-themes';

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
        <Layout>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </Hydrate>
  </QueryClientProvider>
);

export default MyApp;
