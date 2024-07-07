import { useEffect, useState } from "react";
import "./App.css";
import News from "./News";

function App() {
  const [articles, setArticles] = useState([]);
  const [category, setCategory] = useState("manipur");

  useEffect(() => {
    const apiurl = `https://newsapi.org/v2/everything?q=${category} &from=2024-7-5 &apiKey=d582cdcdd01b4186812aac1676a23862`;
    fetch(apiurl)
      .then((response) => response.json())
      .then((news) => {
        setArticles(news.articles);
        console.log(news.articles);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [category]);

  return (
    <div className="App">
      <header className="header">
        <h1>News Update</h1>
        <input
          type="text"
          onChange={(event) => {
            if (event.target.value !== "") {
              setCategory(event.target.value);
            } else {
              setCategory("south korea");
            }
          }}
          placeholder="Search News"
        />
      </header>
      <section className="news-articles">
        {articles.length !== 0 ? (
          articles.map((article) => {
            return <News key="article" article={article} />;
          })
        ) : (
          <h3>No News Found for Search Text</h3>
        )}
      </section>
    </div>
  );
}

export default App;
