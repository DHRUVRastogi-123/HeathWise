import React, { useState ,useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

function Landing() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [userInput, setUserInput] = useState([]);
  const [botsContainerVisible, setBotsContainerVisible] = useState(true);
  const [botsContainerVisible2, setBotsContainerVisible2] = useState(false);

  const chatWindowRef = useRef(null);

  const [currentBot, setCurrentBot] = useState(5000);
  let url = `http://localhost:${currentBot}/webhook`;
  const handleBotClick = (bot) => {
    // clickedBot = bot;
    if (bot == "DietBot") {
      setCurrentBot(5001);
      setBotsContainerVisible(false);
      setBotsContainerVisible2(true);
    } else if (bot == "YogaBot") {
      setCurrentBot(5003);
      setBotsContainerVisible(false);
      setBotsContainerVisible2(true);
    } else if (bot == "DiseaseBot") {
      setCurrentBot(5000);
      setBotsContainerVisible(false);
      setBotsContainerVisible2(true);
    }
    url = `http://localhost:${currentBot}/webhook`;
    console.log(url);
    console.log(bot, currentBot);
  };

  useEffect(() => {
    // Scroll to the bottom of the chat window when new messages are added
    if (chatWindowRef.current) {
      chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
    }
  }, [messages]);

  const sendMessage = async () => {
    setMessages([...messages, { message: input, user: true }]);
    setUserInput((prev) => [...prev, input]);
    try {
      const response = await Axios.post(url, {
        message: input,
      });
      const list = response.data.message.split(/[&*]/);

      setMessages((prevValue) => {
        const newMessages = [...prevValue];
        list.forEach((item) => {
          newMessages.push({ message: item, user: false });
        });
        return newMessages;
      });
    } catch (error) {
      console.error("Error sending message:", error);
    }
    setInput("");
  };

  return (
    <div>
      <div className="land-top-container">
        <nav>
          <h1>
            Health<span>Wise</span>
          </h1>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>Sign in</li>
            <li>Sign Up</li>
          </ul>
        </nav>
        <div className="txt-img">
          <div className="top-text">
            <img
              width="150"
              height="150"
              src="https://img.icons8.com/3d-fluency/94/chatbot.png"
              alt="chatbot"
            />
            <h1>
              Your Health Detective: <br />
              <span>Symptoms to Solutions</span>
            </h1>
            <p>
              Experience the future of healthcare with our AI chatbot, your
              personal symptom interpreter. Simply describe your symptoms, and
              it'll provide you with instant, accurate health insights to guide
              your wellness journey.
            </p>
            <a href="#chatbox">
              <button>Start Chat</button>
            </a>
          </div>
          <img className="top-bot-img" src="https://img.freepik.com/free-vector/artificial-intelligence-isometric-ai-robot-mobile-phone-screen-chatbot-app_39422-767.jpg?size=626&ext=jpg&ga=GA1.1.454830158.1697270875&semt=ais"></img>
        </div>
      </div>
      <div className="cards-container">
        <div class="cards">
          <div class="work">
            <img src="https://img.freepik.com/free-vector/online-doctor-innovative-idea_23-2148509774.jpg?size=626&ext=jpg&uid=R102669586&ga=GA1.2.463734978.1676742094&semt=ais" />
            <div class="layer">
              <h2>Symptoms Checker</h2>
              <p>
                Our chatbot analyzes the symptoms you describe and provides you
                with insights on potential health conditions.
              </p>
            </div>
          </div>

          <div class="work">
            <img src="https://img.freepik.com/free-vector/online-doctor-concept-flat-design_23-2148528746.jpg?size=626&ext=jpg&uid=R102669586&ga=GA1.2.463734978.1676742094&semt=ais" />
            <div class="layer">
              <h2>Health Insights</h2>
              <p>
                {" "}
                Instantly access valuable information about a wide range of
                medical conditions and diseases.
              </p>
            </div>
          </div>

          <div class="work">
            <img src="https://img.freepik.com/free-vector/blue-circular-arrow_1010-528.jpg?size=626&ext=jpg&uid=R102669586&ga=GA1.2.463734978.1676742094&semt=ais" />
            <div class="layer">
              <h2>24/7 Availability</h2>
              <p>
                Our chatbot is available around the clock, ensuring you have
                access to health information when you need it.
              </p>
            </div>
          </div>
          <div class="work">
            <img src="https://img.freepik.com/free-vector/doctors-smartphone-with-app-medicine-online_24877-63674.jpg?size=626&ext=jpg&uid=R102669586&ga=GA1.2.463734978.1676742094&semt=ais" />
            <div class="layer">
              <h2>Personalized Recommendations</h2>
              <p>
                {" "}
                Receive tailored advice and suggestions based on the symptoms
                and information you provide. Our chatbot can offer guidance on
                self-care, lifestyle adjustments, and potential next steps to
                consider.
              </p>
            </div>
          </div>
          <div class="work">
            <img src="https://img.freepik.com/free-vector/man-with-laptop-smartphone-website-report_24877-53531.jpg?size=626&ext=jpg&uid=R102669586&ga=GA1.2.463734978.1676742094&semt=ais" />
            <div class="layer">
              <h2>User-Friendly Interface</h2>
              <p>
                {" "}
                You don't need to be a medical expert to use our chatbot. It's
                designed with simplicity in mind.
              </p>
            </div>
          </div>
          <div class="work">
            <img src="https://img.freepik.com/free-photo/doctor-using-tablet-thinking_23-2147896140.jpg?size=626&ext=jpg&uid=R102669586&ga=GA1.2.463734978.1676742094&semt=ais" />
            <div class="layer">
              <h2>Discover Informative Articles</h2>
              <p>
                Access a library of articles covering diverse health, disease,
                and medication topics. Expand your understanding, stay updated,
                and make informed choices with our informative articles.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="chatbox">
        <div className="chat-container">
          <div className="bot-img">
            <img src="https://img.icons8.com/3d-fluency/94/chatbot.png"></img>
          </div>
          <div className="brief-info">
            <p className="welc-txt">Welcome to our Health bot</p>
            <p>
              Your symptom diagnosis assistant! Describe your symptoms, and
              we'll suggest potential conditions and remedies. Remember, our
              suggestions aren't a replacement for professional medical advice.
              If it's serious, consult a healthcare provider
            </p>
          </div>
          {botsContainerVisible && (
            <div className="bots">
              <div className="bots-txt">
                <h2>Chat With Different Bots</h2>
              </div>

              <div className="diff-bots-container">
                <div
                  className="diet-bot"
                  onClick={() => handleBotClick("DietBot")}
                >
                  <h3>Diet Bot</h3>
                  <p>
                    Get personalized diet recommendations and nutritional
                    guidance
                  </p>
                </div>
                <div
                  className="disease-bot"
                  onClick={() => handleBotClick("DiseaseBot")}
                >
                  <h3>Disease Bot</h3>
                  <p>
                    Identify health issues based on symptoms, receive likely
                    condition suggestions
                  </p>
                </div>
                <div
                  className="yoga-bot"
                  onClick={() => handleBotClick("YogaBot")}
                >
                  <h3>Yoga Bot</h3>
                  <p>
                    Access personalized yoga routines and relaxation techniques
                  </p>
                </div>
              </div>
            </div>
          )}

          <div className="chat-window" ref={chatWindowRef}>
            {messages.map((msg, index) => (
              <ul>
                <li
                  key={index}
                  className={`message ${msg.user ? "user" : "bot"}`}
                >
                  {msg.user ? (
                    <img className="userImg" src="https://th.bing.com/th?q=Default+User+Avatar&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.5&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247" alt="User Avatar" />
                  ) : (
                    <h3></h3>
                  )}
                  {msg.message}
                </li>
              </ul>
            ))}
          </div>
          <div className="input-container">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") sendMessage();
              }}
            />
            <button onClick={sendMessage}>Send</button>
          </div>

          {botsContainerVisible2 && (
            <div className="bots-2">
              <div className="bots-txt-2">
                <h2>Chat With Different Bots</h2>
              </div>

              <div className="diff-bots-container-2">
                <div
                  className="diet-bot-2"
                  onClick={() => handleBotClick("DietBot")}
                >
                  <h3>Diet Bot</h3>
                  <p>
                    Get personalized diet recommendations and nutritional
                    guidance
                  </p>
                </div>
                <div
                  className="disease-bot-2"
                  onClick={() => handleBotClick("DiseaseBot")}
                >
                  <h3>Disease Bot</h3>
                  <p>
                    Identify health issues based on symptoms, receive likely
                    condition suggestions
                  </p>
                </div>
                <div
                  className="yoga-bot-2"
                  onClick={() => handleBotClick("YogaBot")}
                >
                  <h3>Yoga Bot</h3>
                  <p>
                    Access personalized yoga routines and relaxation techniques
                  </p>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

export default Landing;
