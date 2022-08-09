import "../styles/globals.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import type { AppProps } from "next/app";

import { QueryClient, QueryClientProvider } from "react-query";

import Layout from "../layouts/layout";
import { ThemeProvider } from "next-themes"

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
    </ThemeProvider>
  );
}

export default MyApp;
