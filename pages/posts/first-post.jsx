import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

const FirstPost = () => {
  return (
    <>
      <Head>
        <title>First Post</title>
      </Head>
      
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a className="post__link">Back to home</a>
        </Link>
      </h2>
    </>
  );
};

export default FirstPost;
