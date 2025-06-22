import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [chatbotVisible, setChatbotVisible] = useState(false);
    const [userInput, setUserInput] = useState('');
    const [chatHistory, setChatHistory] = useState([]);

    const handleNavigation = (path) => {
        navigate(path);
    };

    const toggleChatbot = () => {
        setChatbotVisible((prev) => !prev);
    };

    const handleUserInputChange = (event) => {
        setUserInput(event.target.value);
    };

    const handleSendMessage = () => {
        if (userInput.trim() !== '') {
            // Add user message to chat history
            setChatHistory((prev) => [...prev, { text: userInput, sender: 'user' }]);
            
            // Here you can implement chatbot logic for responses
            // For now, we'll just echo the message back as a placeholder
            setChatHistory((prev) => [...prev, { text: `You asked about: ${userInput}`, sender: 'bot' }]);
            
            setUserInput(''); // Clear the input field
        }
    };

    return (
        <div className="sidebar-container">
            <div className="sidebar-heading">Categories</div>
            <div 
                className={`sidebar-item item-1 ${location.pathname === '/sports' ? 'active' : ''}`} 
                onClick={() => handleNavigation('/sports')}
            >
                Sports
            </div>
            <div 
                className={`sidebar-item item-2 ${location.pathname === '/business' ? 'active' : ''}`} 
                onClick={() => handleNavigation('/business')}
            >
                Business
            </div>
            <div 
                className={`sidebar-item item-3 ${location.pathname === '/technology' ? 'active' : ''}`} 
                onClick={() => handleNavigation('/technology')}
            >
                Technology
            </div>
            <div 
                className={`sidebar-item item-4 ${location.pathname === '/entertainment' ? 'active' : ''}`} 
                onClick={() => handleNavigation('/entertainment')}
            >
                Entertainment
            </div>
            <div 
                className={`sidebar-item item-5 ${location.pathname === '/education' ? 'active' : ''}`} 
                onClick={() => handleNavigation('/education')}
            >
                Education
            </div>
            <div 
                className={`sidebar-item item-6 ${location.pathname === '/crimes' ? 'active' : ''}`} 
                onClick={() => handleNavigation('/crimes')}
            >
                Crimes
            </div>
            <div 
                className={`sidebar-item item-7 ${location.pathname === '/travel' ? 'active' : ''}`} 
                onClick={() => handleNavigation('/travel')}
            >
                Travel
            </div>
            <div className="chatbot-icon" onClick={toggleChatbot}>
                <img src="https://i.pinimg.com/736x/09/39/7a/09397a780730df97649e4313ad132f34.jpg" alt="Chatbot" />
            </div>
            {chatbotVisible && (
                <div className="chatbot-popup">
                    <h3>Chatbot</h3>
                    <div className="chat-history">
                        {chatHistory.map((chat, index) => (
                            <div key={index} className={`chat-message ${chat.sender}`}>
                                {chat.sender === 'user' ? 'You: ' : 'Bot: '} {chat.text}
                            </div>
                        ))}
                    </div>
                    <input
                        type="text"
                        value={userInput}
                        onChange={handleUserInputChange}
                        placeholder="Type your message..."
                        onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    />
                    <button onClick={handleSendMessage}>Send</button>
                </div>
            )}
        </div>
    );
};

export default Sidebar;
