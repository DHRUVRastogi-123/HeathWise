import React, { useState, useEffect } from "react";

function DrugsNews() {
  const apiKey = "d187c2ada39a45bdb725656d521ef92b";
  const apiUrl = "https://newsapi.org/v2/everything?q=drugs&apiKey=" + apiKey;

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        const result = await response.json();
        setData(result);
        setLoading(false);
        console.log(result);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="latest-drug-news">
      <div className="heading">
        <h2>Latest Drug News</h2>
      </div>

      <div className="drugs-articles">
        <div className="drugs-article-left">
          <ul>
          {data.articles &&
              data.articles.slice(0, 3).map((article, index) => (
                <li key={index}>
                  <a href={article.url}>{article.title}</a>
                  <p>HealthWise</p>
                </li>
              ))}
          </ul>
        </div>
        <div className="drugs-article-right">
          <ul>
            {data.articles &&
              data.articles.slice(3, 6).map((article, index) => (
                <li key={index}>
                  <a href={article.url}>{article.title}</a>
                  <p>HealthWise</p>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DrugsNews;
