import React, { useState } from 'react';
import Axios from 'axios';
import "./index.css"

function Chat() {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [userInput, setUserInput] = useState([]);

    const sendMessage = async () => {
        setMessages([...messages, { message: input, user: true }]);
        setUserInput((prev) => ([...prev,input]));
        try {
            const response = await Axios.post('http://localhost:5000/webhook', { message: input });
            // setMessages([...messages, { message: response.data.message, user: false }]);
            setMessages((prevValue)=>{
              return [...prevValue, { message: response.data.message, user: false }]
            })
            console.log(response);
        } catch (error) {
            console.error('Error sending message:', error);
        }
        setInput('');
    };
    return (
     <div className='container'>
      <div className="chat-container">
      <div className='bot-heading'>Assistant</div>
      <div className="chat-window">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.user ? 'user' : 'bot'}`}>
            {msg.message}
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') sendMessage();
          }}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
    </div>
  
    );
}

export default Chat;
