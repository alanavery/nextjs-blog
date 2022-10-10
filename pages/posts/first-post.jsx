import Head from 'next/head';
import Script from 'next/script';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/layout';

const FirstPost = () => {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>

      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-FYJ4SB5KTJ"
        strategy="lazyOnload"
        onLoad={() => {
          console.log('Script loaded correctly: googletagmanager.com');
        }}
      />
      <Script
        src="/scripts/google-tag.js"
        strategy="lazyOnload"
        onLoad={() => {
          console.log('Script loaded correctly: google-tag.js');
        }}
      />

      <h1>First Post</h1>
    </Layout>
  );
};

export default FirstPost;
