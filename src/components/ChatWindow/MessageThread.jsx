import React, { useRef, useEffect } from 'react';
import styles from './MessageThread.module.css';

export const MessageThread = ({ messages }) => {
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div 
      className={styles.messageThread}
      role="log"
      aria-label="Chat messages"
      aria-live="polite"
    >
      {messages.map((message, index) => {
        const isFirstOfDay = index === 0 || 
          new Date(message.timestamp).toDateString() !== 
          new Date(messages[index - 1].timestamp).toDateString();

        return (
          <React.Fragment key={message.id}>
            {isFirstOfDay && (
              <div className={styles.dateMarker}>
                {new Date(message.timestamp).toLocaleDateString()}
              </div>
            )}
            <div 
              className={`${styles.messageContainer} ${
                message.sender === 'user' ? styles.sent : styles.received
              }`}
            >
              {message.avatar && (
                <img 
                  src={message.avatar} 
                  alt="" 
                  className={styles.avatar}
                  role="presentation"
                />
              )}
              <div 
                className={styles.message}
                role="article"
                aria-label={`Message from ${message.sender === 'user' ? 'you' : 'them'}`}
              >
                <p className={styles.text}>{message.text}</p>
                <time className={styles.timestamp}>{message.timestamp}</time>
              </div>
            </div>
          </React.Fragment>
        );
      })}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default MessageThread;