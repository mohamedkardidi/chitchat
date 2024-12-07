import React from 'react';
import styles from './MessageList.module.css';

export const MessageItem = ({ name, message, avatar }) => {
  return (
    <div className={styles.messageItem}>
      <div className={styles.messageContent}>
        <img
          loading="lazy"
          src={avatar}
          className={styles.avatar}
          alt={`Profile picture of ${name}`}
        />
        <div className={styles.messageText}>
          <div className={styles.userName}>{name}</div>
          {message && <div className={styles.userMessage}>{message}</div>}
        </div>
      </div>
    </div>
  );
};

export default MessageItem;