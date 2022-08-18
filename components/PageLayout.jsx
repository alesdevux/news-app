import Head from "next/head";

export default function PageLayout({ 
  children,
  title = "NewsApp",
}) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="newsapp - the best app to read news" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        📰 NewsApp
      </header>
      <main>
        {children}
      </main>

      <style jsx>{`
        header {
          background: #fafafa;
          padding: 20px;
          border-bottom: 1px solid #dcdcdc;
        }
      `}</style>
    </>
  )
}