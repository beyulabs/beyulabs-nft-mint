import Head from 'next/head';
import { APP_SEO_DESCRIPTION, APP_SEO_TITLE } from '@utils/index';

interface HtmlMetaProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

const HtmlMeta = ({
  title = APP_SEO_TITLE,
  description = APP_SEO_DESCRIPTION,
  image = '/preview.png',
  url = 'https://q.xyz/',
}: HtmlMetaProps) => (
  <Head>
    <title>{title ? `${title} | ${APP_SEO_TITLE}` : APP_SEO_TITLE}</title>
    <link rel="icon" type="image/svg+xml" href={'/favicon.ico'} />
    <link rel="icon" type="image/png" href={'/favicon.png'} />
    <meta name="description" content={description || APP_SEO_DESCRIPTION} />
    <meta property="og:site_name" content={APP_SEO_TITLE} />
    <meta property="og:title" content={title} key="title" />
    <meta
      property="og:description"
      content={description || APP_SEO_DESCRIPTION}
      key="ogdesc"
    />
    <meta property="og:url" content={url} />
    <meta property="og:image" content={image} key="image" />
    <meta property="og:image:secure_url" content={image} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="600" />
    <meta
      name="twitter:description"
      content={description || APP_SEO_DESCRIPTION}
    />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:image" content={image} />
    {/* <meta name="telegram:channel" content="@q.xyz" /> */}
  </Head>
);

export default HtmlMeta;
