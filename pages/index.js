import Link from 'next/link'
import Image from 'next/image'
import PageLayout from '../components/PageLayout'
import styles from '../styles/Home.module.css'

export default function Home({ articles }) {
  return (
    <PageLayout title="NewsApp - Home">
      <div className={styles.container}>
        {articles.length === 0 && <p>loading</p>}
        {articles.length > 0 && articles.map((article, index) => (
          <div key={index} className='article'>
            <h2>{article.title}</h2>
            <div className='article-content'>
              <div>
                {article.urlToImage && (
                  <Image 
                    src={article.urlToImage} 
                    alt={article.title}
                    width={350}
                    height={200}
                    layout="responsive"
                    layoutOptions={{
                      cover: true,
                    }}
                  />
                )}
              </div>
              <div className='article-info'>
                <p>{article.description}</p>
                <Link href="/article/[id]" as={`/article/${article.id}`}>
                  <a>Read more</a>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .article {
          border-bottom: 1px solid #dcdcdc;
          padding: 20px;
        }
        .article-content {
          display: grid;
          grid-template-columns: 2fr 3fr;
          grid-gap: 20px;
          justify-content: space-between;
        }
        .article-info {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 10px;
        }
        .article-info a {
          color: #0366d6;
          text-decoration: none;
          align-self: flex-end;
          border: 1px solid #0366d6;
          padding: 5px 10px;
          border-radius: 5px;
        }
        .article-info a:hover {
          background: #0366d6;
          color: #fff;
        }
      `}</style>
    </PageLayout>
  )
}

export async function getStaticProps() {
  const apiKey = process.env.NEXT_PUBLIC_NEWS_API_KEY
  const response = await fetch(`https://newsapi.org/v2/everything?q=vegan&pageSize=25&sortBy=publishedAt&apiKey=${apiKey}`)
  const data = await response.json()

  return {
    props: {
      articles: data.articles
    }
  }
}

/* export async function getServerSideProps() {
  const apiKey = process.env.NEXT_PUBLIC_NEWS_API_KEY
  const response = await fetch(`https://newsapi.org/v2/everything?q=vegan&pageSize=25&sortBy=publishedAt&apiKey=${apiKey}`)
  const data = await response.json()

  return {
    props: {
      articles: data.articles
    }
  }
} */
