import React, { useState } from 'react';
import '../css/ChatHelp.css';
import { VscRobot } from "react-icons/vsc";
import { responses, initialSuggestions } from '../assets/data/data_chat'

<response />;

<initialSuggestions />;


export const ChatHelp = () => {
    const [messages, setMessages] = useState([{ sender: 'bot', text: 'W czym mogę pomóc?' }]);
    const [userInput, setUserInput] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    const sendMessage = (message) => {
        const userMessage = { sender: 'user', text: message };
        const botResponse = responses[message] || "Przepraszam, nie rozumiem. Czy możesz zapytać o coś innego?";

        setMessages((prevMessages) => [...prevMessages, userMessage, { sender: 'bot', text: botResponse }]);
        setUserInput('');
    };

    const handleSuggestionClick = (suggestion) => {
        sendMessage(suggestion);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        sendMessage(userInput);
    };

    return (
        <div>
            <div className="btn-chat" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <button className="fas-1"><i className="fas fa-headset fa-lg fa-fw"></i></button> : <button className="fas-2"><i className="fas fa-headset fa-lg fa-fw"></i></button>}
            </div>
            {isOpen && (
                <div id="chat-box">
                    <div className="bot-question">
                        {messages.map((msg, index) => (
                            <div key={index} className={`message ${msg.sender}`}>
                                {msg.text}
                                {msg.sender === 'bot' && <p className="robot-icon"><VscRobot /></p>}
                            </div>
                        ))}
                    </div>
                    <div className="user-question">
                        {initialSuggestions.map((msg, index) => (
                            <div key={index} className="message bot suggestion" onClick={() => handleSuggestionClick(msg)}>
                                {msg}
                            </div>
                        ))}
                    </div>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            id="user-input"
                            value={userInput}
                            onChange={(e) => setUserInput(e.target.value)}
                            placeholder="Napisz wiadomość..."
                        />
                        <div className="d-flex btn-sent-chat">
                            <button type="submit" className="btn-sent-chat btn-new-size-1 btn btn-primary btn-block mb-4">Wyślij</button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
};


