import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>My New Title</title>
        <meta name="description" content="This is a custom description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {/* Your page content */}
      </main>
    </>
  );
}
