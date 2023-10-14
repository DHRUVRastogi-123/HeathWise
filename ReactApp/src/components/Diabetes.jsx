import React, { useState, useEffect } from "react";

 function Diabetes() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const url =
        "https://medical-articles-live.p.rapidapi.com/journals/diabetes";
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "459a4722d3msh858b62cc9381878p1708fajsn8d8583c0c25e",
          "X-RapidAPI-Host": "medical-articles-live.p.rapidapi.com"
        }
      };

      try {
        const response = await fetch(url, options);
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
      <div className="overview">
        <h3>1 of 8 / OVERVIEW & TYPES</h3>
        <hr className="line" />
        <div className="container">
          <img src="https://img.wbmdstatic.com/vim/live/webmd/consumer_assets/site_images/article_thumbnails/hpt_toc_redesign/type_2_diabetes_hpt_toc_redesign/chapter_1_type_2_diabetes_hpt_toc_1386179298.jpg?resize=540px:*&output-quality=75" />
          <div className="info">
            <h2>What is Diabetes?</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad odio
              quas sint reiciendis velit quam harum rerum similique, eveniet
              explicabo. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Earum eligendi est iusto? Ut, exercitationem quia omnis
              repudiandae quibusdam, quo eaque recusandae, illum sapiente hic
              veniam ipsam quas suscipit accusantium voluptate id. Quae velit
              rem dolore, reiciendis odio nemo nesciunt a consectetur at
              doloribus amet id earum incidunt vero quam exercitationem officiis
              commodi dolorem soluta voluptate, nulla neque illo quidem cumque.
              Possimus officia inventore eum aspernatur voluptatem, quia
              accusamus. Doloremque modi iure saepe laborum consequuntur fugiat,
              expedita harum cum provident praesentium minus omnis quibusdam
              maxime explicabo, accusantium fuga enim rerum nesciunt adipisci
              quidem aut? Maxime fugit error, totam et officia sint? Lorem,
              ipsum dolor sit amet consectetur adipisicing elit. Expedita fugiat
              amet quibusdam ullam accusantium at consequatur nihil omnis quos
              sapiente blanditiis accusamus pariatur facere voluptatibus dolores
              iure, asperiores soluta aut exercitationem? Itaque vero vel
              aliquid provident suscipit natus quo libero. Sed ad officia ipsa
              id quam eum perspiciatis quaerat, a molestias modi rem quae aut
              quas necessitatibus repellat libero nam unde cumque ratione!
              Nostrum, cumque itaque. Omnis officiis, perspiciatis, nobis
              accusamus nesciunt dignissimos ex sit odit sapiente illum iure
              nam. Quasi laudantium veniam minus est aspernatur dolore
              exercitationem nostrum dignissimos expedita, qui quidem numquam
              eos? Voluptate ea sint tempora distinctio? Lorem ipsum dolor sit
              amet, consectetur adipisicing elit. Quam rerum fuga molestias
              sint, quae aperiam qui nihil dolorem hic impedit pariatur soluta
              quasi, quibusdam dolorum illo sequi aspernatur perspiciatis culpa
              voluptates ex voluptas provident sed incidunt explicabo! Pariatur
              expedita dolor facilis sunt exercitationem, enim reprehenderit, ex
              illum deleniti natus repellendus?
            </p>
          </div>
        </div>
      </div>
      <div className="overview">
        <h3>2 of 8 / SYMPTOMS & DIAGNOSIS</h3>
        <hr className="line" />
        <div className="container">
          <div className="info">
            <h2>Signs and Symptoms of Diabetes</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad odio
              quas sint reiciendis velit quam harum rerum similique, eveniet
              explicabo. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Earum eligendi est iusto? Ut, exercitationem quia omnis
              repudiandae quibusdam, quo eaque recusandae, illum sapiente hic
              veniam ipsam quas suscipit accusantium voluptate id. Quae velit
              rem dolore, reiciendis odio nemo nesciunt a consectetur at
              doloribus amet id earum incidunt vero quam exercitationem officiis
              commodi dolorem soluta voluptate, nulla neque illo quidem cumque.
              Possimus officia inventore eum aspernatur voluptatem, quia
              accusamus. Doloremque modi iure saepe laborum consequuntur fugiat,
              expedita harum cum provident praesentium minus omnis quibusdam
              maxime explicabo, accusantium fuga enim rerum nesciunt adipisci
              quidem aut? Maxime fugit error, totam et officia sint? Lorem,
              ipsum dolor sit amet consectetur adipisicing elit. Expedita fugiat
              amet quibusdam ullam accusantium at consequatur nihil omnis quos
              sapiente blanditiis accusamus pariatur facere voluptatibus dolores
              iure, asperiores soluta aut exercitationem? Itaque vero vel
              aliquid provident suscipit natus quo libero. Sed ad officia ipsa
              id quam eum perspiciatis quaerat, a molestias modi rem quae aut
              quas necessitatibus repellat libero nam unde cumque ratione!
              Nostrum, cumque itaque. Omnis officiis, perspiciatis, nobis
              accusamus nesciunt dignissimos ex sit odit sapiente illum iure
              nam. Quasi laudantium veniam minus est aspernatur dolore
              exercitationem nostrum dignissimos expedita, qui quidem numquam
              eos? Voluptate ea sint tempora distinctio? Lorem ipsum dolor sit
              amet, consectetur adipisicing elit. Quam rerum fuga molestias
              sint, quae aperiam qui nihil dolorem hic impedit pariatur soluta
              quasi, quibusdam dolorum illo sequi aspernatur perspiciatis culpa
              voluptates ex voluptas provident sed incidunt explicabo! Pariatur
              expedita dolor facilis sunt exercitationem, enim reprehenderit, ex
              illum deleniti natus repellendus?
            </p>
          </div>
          <img src="https://img.wbmdstatic.com/vim/live/webmd/consumer_assets/site_images/article_thumbnails/hpt_toc_redesign/type_2_diabetes_hpt_toc_redesign/chapter_2_type_2_diabetes_hpt_toc_961013588.jpg?resize=540px:*&output-quality=75" />
        </div>
      </div>
      <div className="overview">
        <h3>3 of 8 / TERATMENTS</h3>
        <hr className="line" />
        <div className="container">
          <img src="https://img.wbmdstatic.com/vim/live/webmd/consumer_assets/site_images/article_thumbnails/hpt_toc_redesign/type_2_diabetes_hpt_toc_redesign/chapter_4_type_2_diabetes_hpt_toc_1340288647.jpg?resize=540px:*&output-quality=75" />
          <div className="info">
            <h2>Treatments of Diabetes</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad odio
              quas sint reiciendis velit quam harum rerum similique, eveniet
              explicabo. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Earum eligendi est iusto? Ut, exercitationem quia omnis
              repudiandae quibusdam, quo eaque recusandae, illum sapiente hic
              veniam ipsam quas suscipit accusantium voluptate id. Quae velit
              rem dolore, reiciendis odio nemo nesciunt a consectetur at
              doloribus amet id earum incidunt vero quam exercitationem officiis
              commodi dolorem soluta voluptate, nulla neque illo quidem cumque.
              Possimus officia inventore eum aspernatur voluptatem, quia
              accusamus. Doloremque modi iure saepe laborum consequuntur fugiat,
              expedita harum cum provident praesentium minus omnis quibusdam
              maxime explicabo, accusantium fuga enim rerum nesciunt adipisci
              quidem aut? Maxime fugit error, totam et officia sint? Lorem,
              ipsum dolor sit amet consectetur adipisicing elit. Expedita fugiat
              amet quibusdam ullam accusantium at consequatur nihil omnis quos
              sapiente blanditiis accusamus pariatur facere voluptatibus dolores
              iure, asperiores soluta aut exercitationem? Itaque vero vel
              aliquid provident suscipit natus quo libero. Sed ad officia ipsa
              id quam eum perspiciatis quaerat, a molestias modi rem quae aut
              quas necessitatibus repellat libero nam unde cumque ratione!
              Nostrum, cumque itaque. Omnis officiis, perspiciatis, nobis
              accusamus nesciunt dignissimos ex sit odit sapiente illum iure
              nam. Quasi laudantium veniam minus est aspernatur dolore
              exercitationem nostrum dignissimos expedita, qui quidem numquam
              eos? Voluptate ea sint tempora distinctio? Lorem ipsum dolor sit
              amet, consectetur adipisicing elit. Quam rerum fuga molestias
              sint, quae aperiam qui nihil dolorem hic impedit pariatur soluta
              quasi, quibusdam dolorum illo sequi aspernatur perspiciatis culpa
              voluptates ex voluptas provident sed incidunt explicabo! Pariatur
              expedita dolor facilis sunt exercitationem, enim reprehenderit, ex
              illum deleniti natus repellendus?
            </p>
          </div>
        </div>
      </div>

      <div className="overview">
        <h3>Suggested reads about Diabetes</h3>
        <hr className="line" />
        <div className="container">
          <img src="https://img.wbmdstatic.com/vim/live/webmd/consumer_assets/site_images/article_thumbnails/hpt_toc_redesign/type_2_diabetes_hpt_toc_redesign/chapter_3_type_2_diabetes_hpt_toc_692872990.jpg?resize=540px:*&output-quality=75" />
          <div className="articles">
            {data.slice(0, 6).map((result, index) => (
              <div key={index}>
                <h3>
                  <a href={result.url} rel="noopener noreferrer">
                    {result.title}
                  </a>
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}


export default Diabetes;