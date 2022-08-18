import Head from "next/head";
import Link from "next/link";

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
        <Link href="/">📰 NewsApp</Link>
        <nav>
          <Link href="/about">About</Link>
        </nav>
      </header>
      <main>
        {children}
      </main>

      <style jsx>{`
        header {
          background: #fafafa;
          padding: 20px;
          border-bottom: 1px solid #dcdcdc;
          display: flex;
          justify-content: space-between;
        }
      `}</style>
    </>
  )
}