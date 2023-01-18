import React, { useState, useEffect } from 'react'

const App = () => {
  const [articles, setArticles] = useState([])
  const [term, setTerm] = useState('everything')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchArticles = async () => {
    try {
        const res = await fetch(
          `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${term}&api-key=${process.env.REACT_APP_ARTICLES_API_KEY}`)
        const articles = await res.json()
        console.log(articles);
      } catch (error) {
        console.error(error);
      }
    }

    fetchArticles()
}, [])

  return (
    <>
      <section>

      </section>
    </>
  );
}

export default App;
