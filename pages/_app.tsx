import "../styles/globals.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"

import type { AppProps } from "next/app";

import { QueryClient, QueryClientProvider } from "react-query";

import Layout from "../layouts/layout";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  );
}

export default MyApp;
