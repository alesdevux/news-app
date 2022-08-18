import Link from 'next/link'
import PageLayout from '../components/PageLayout'
import styles from '../styles/Home.module.css'

export default function Home({ articles }) {
  return (
    <PageLayout title="NewsApp - Home">
      <div className={styles.container}>
        {articles.length === 0 && <p>loading</p>}
        {articles.length > 0 && articles.map((article, index) => (
          <div key={index}>
            <h2>{article.title}</h2>
            <img src={article.urlToImage} alt={article.title} />
            <p>{article.description}</p>
            <Link href="/article/[id]" as={`/article/${article.id}`}>
              <a>Read more</a>
            </Link>
          </div>
        ))}
      </div>
    </PageLayout>
  )
}

export async function getServerSideProps() {
  const apiKey = process.env.NEXT_PUBLIC_NEWS_API_KEY
  const response = await fetch(`https://newsapi.org/v2/everything?q=vegan&pageSize=25&sortBy=publishedAt&apiKey=${apiKey}`)
  const data = await response.json()

  return {
    props: {
      articles: data.articles
    }
  }
}
