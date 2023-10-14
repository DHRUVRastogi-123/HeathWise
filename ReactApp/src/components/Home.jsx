import Header from "./Header";
import React, { useState, useEffect } from "react";



function Home() {
  const apiKey = "d187c2ada39a45bdb725656d521ef92b"; 
const apiUrl = "https://newsapi.org/v2/top-headlines?country=in&apiKey=" + apiKey + "&pageSize=100&category=health";

const [data, setData] = useState([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch(apiUrl); // Use the apiUrl from the outer scope
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
    <div>
      <div className="top-container">
        <div className="cont-head">
          <h2>TODAY'S TOP STORIES</h2>
          <hr />
        </div>

        <div className="top-story">
          <div className="top-img">
            <img
              src="https://img.wbmdstatic.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/health_heroes_2023_other/1800x1200_2023_health_heroes_hannah_davis_main_other.jpg?resize=484px:*&output-quality=70"
              alt="Top Story"
            />
          </div>

          <div className="top-head">
            <h1>WebMD Health Hero Hannah Davis - Lifelong Advocate For Long-COVID</h1>
            <h2>
              Learn about how Hannah works with a team of research-savvy long-COVID
              patients to advocate, educate, and to one day hopefully cure the
              disease.
            </h2>
          </div>
        </div>
      </div>
      <div className="top-articles">
        <div className="top-article1">
          <div className="art-img">
          <img src="https://img.wbmdstatic.com/dtmcms/live/webmd/consumer_assets/site_images/articles/health_tools/hiv_aids_and_your_lungs_slideshow/1800ss_getty_rf_coughing_in_kitchen.jpg?resize=484px:*&output-quality=70" alt="Top Article" />
          </div>
          <h3>What is Long COVID?</h3>
        </div>
        <div className="top-article2">
          <div className="art-img">
          <img src="https://img.wbmdstatic.com/dtmcms/live/webmd/consumer_assets/site_images/articles/health_tools/managing_the_emotional_effects_of_lupus_slideshow/1800ss_getty_rf_woman_holding_chest.jpg?resize=484px:*&output-quality=70" alt="Top Article" />
          </div>
          <h3>What is Long COVID?</h3>
        </div>
        <div className="top-article3">
          <div className="art-img">
          <img src="https://img.wbmdstatic.com/dtmcms/live/webmd/consumer_assets/site_images/articles/health_tools/10_tips_to_help_your_child_with_adhd_get_a_good_nights_sleep/1800ss_getty_rf_tired_child.jpg?resize=484px:*&output-quality=70" alt="Top Article" />
          </div>
          <h3>What is Long COVID?</h3>
        </div>
        <div className="top-article1">
          <div className="art-img">
          <img src="https://img.wbmdstatic.com/dtmcms/live/webmd/consumer_assets/site_images/articles/health_tools/hiv_aids_and_your_lungs_slideshow/1800ss_getty_rf_coughing_in_kitchen.jpg?resize=484px:*&output-quality=70" alt="Top Article" />
          </div>
          <h3>What is Long COVID?</h3>
        </div>
        <div className="top-article2">
          <div className="art-img">
          <img src="https://img.wbmdstatic.com/dtmcms/live/webmd/consumer_assets/site_images/articles/health_tools/managing_the_emotional_effects_of_lupus_slideshow/1800ss_getty_rf_woman_holding_chest.jpg?resize=484px:*&output-quality=70" alt="Top Article" />
          </div>
          <h3>What is Long COVID?</h3>
        </div>
        <div className="top-article3">
          <div className="art-img">
          <img src="https://img.wbmdstatic.com/dtmcms/live/webmd/consumer_assets/site_images/articles/health_tools/10_tips_to_help_your_child_with_adhd_get_a_good_nights_sleep/1800ss_getty_rf_tired_child.jpg?resize=484px:*&output-quality=70" alt="Top Article" />
          </div>
          <h3>What is Long COVID?</h3>
        </div>
      </div>
      <div className="news-cont">
      <div className="news-cont-head">
          <h2>HEALTH NEWS</h2>
          <hr />
        </div>

{data.articles && data.articles.slice(1,2).map((news, index) => (
  <div className="top-news" key={index}>
    <div className="top-news-img">
      <img src={news.urlToImage} alt="Top Story" />
    </div>
    <div className="news-head">
      <h1>{news.title}</h1>
      <h2>{news.description}</h2>
    </div>
  </div>
))}

   <div className="other-news">
    {data.articles && data.articles.slice(3,9).map((news, index) => (
  <div className="other-news" key={index}>
    <div className="other-news-img">
      <img src={news.urlToImage} alt="Top Story" />
      <a href={news.url}><h1>{news.title}</h1></a>
    </div>
  </div>
))}
    </div>
      </div>  
    </div>
  );
}

export default Home;