import React, { useState } from 'react';
import styles from './ChatWindow.module.css';
import ChatHeader from './ChatHeader';
import { MessageThread } from './MessageThread';
import { MessageInput } from './MessageInput';

export const ChatWindow = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'user',
      text: 'Hey, How are you?',
      timestamp: '14:22',
      avatar: 'https://cdn.builder.io/api/v1/image/assets/TEMP/cd00b0001ca2437f14e75836f48e9f53183d75617f0390374e0a718c864b5a19?apiKey=3d2cdc80435c4ee7ad35ad90a21e1694&'
    },
    {
      id: 2,
      sender: 'user',
      text: 'I was asking for your New Year Plans, as we are going to host a party.',
      timestamp: '14:23',
      avatar: 'https://cdn.builder.io/api/v1/image/assets/TEMP/ca046a62429c37a5d23bb1958ac42ad182f0ee37fd489e5948612e413e1fc012?apiKey=3d2cdc80435c4ee7ad35ad90a21e1694&'
    },
    {
      id: 3,
      sender: 'other',
      text: 'I am fine, How about you?',
      timestamp: '14:24'
    },
    {
      id: 4,
      sender: 'other',
      text: 'Yayy, Great I would love to join the party!',
      timestamp: '14:25'
    },
    {
      id: 5,
      sender: 'user',
      text: "Great! Let's meet in the party!",
      timestamp: '14:26',
      avatar: 'https://cdn.builder.io/api/v1/image/assets/TEMP/cd00b0001ca2437f14e75836f48e9f53183d75617f0390374e0a718c864b5a19?apiKey=3d2cdc80435c4ee7ad35ad90a21e1694&'
    },
    {
      id: 6,
      sender: 'other',
      text: 'Hey, I am here!',
      timestamp: '14:27'
    },
    {
      id: 7,
      sender: 'user',
      text: 'Where are you, exactly!',
      timestamp: '14:28',
      avatar: 'https://cdn.builder.io/api/v1/image/assets/TEMP/cd00b0001ca2437f14e75836f48e9f53183d75617f0390374e0a718c864b5a19?apiKey=3d2cdc80435c4ee7ad35ad90a21e1694&'
    },
    {
      id: 8,
      sender: 'other',
      text: 'In front of the Bar, about which we had a call!',
      timestamp: '14:29'
    }
  ]);

  const handleSendMessage = (text) => {
    setMessages(prev => [...prev, {
      id: prev.length + 1,
      sender: 'user',
      text,
      timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
      avatar: 'https://cdn.builder.io/api/v1/image/assets/TEMP/cd00b0001ca2437f14e75836f48e9f53183d75617f0390374e0a718c864b5a19?apiKey=3d2cdc80435c4ee7ad35ad90a21e1694&'
    }]);
  };

  return (
    <main className={styles.chatWindow} role="main" aria-label="Chat conversation">
      <ChatHeader 
        avatar="https://cdn.builder.io/api/v1/image/assets/TEMP/c8eace5ea2d6243a5ad97192253262cb926f73e9247aa5e9bd875cfa157adfe9?apiKey=3d2cdc80435c4ee7ad35ad90a21e1694&"
        name="Christopher Campbell"
        lastSeen="Last seen 02:55 pm"
      />
      <MessageThread messages={messages} />
      <MessageInput onSendMessage={handleSendMessage} />
    </main>
  );
};

export default ChatWindow;