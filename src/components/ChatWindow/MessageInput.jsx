import React, { useState } from 'react';
import styles from './MessageInput.module.css';

export const MessageInput = ({ onSendMessage }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <form 
      className={styles.messageForm}
      onSubmit={handleSubmit}
      role="form"
    >
      
      <input
        type="text"
        id="messageInput"
        className={styles.input}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your Message..."
        aria-label="Type your message"
      />
      <button 
        type="submit"
        className={styles.sendButton}
        aria-label="Send message"
        disabled={!message.trim()}
      >
        Send
      </button>
    </form>
  );
};

export default MessageInput;