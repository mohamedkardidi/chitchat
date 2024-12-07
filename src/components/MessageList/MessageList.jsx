import React from 'react';
import { MessageItem } from './MessageItem';
import { messages } from '../../data/messages';
import styles from './MessageList.module.css';

export const MessagesList = () => {
  return (
    <main className={styles.messagesContainer} role="main">
      <h1 className={styles.messagesTitle}>Messages</h1>
      <section className={styles.messagesList} aria-label="Messages list">
        {messages.map((message) => (
          <MessageItem
            key={message.id}
            name={message.name}
            message={message.message}
            avatar={message.avatar}
          />
        ))}
      </section>
    </main>
  );
};

export default MessagesList;