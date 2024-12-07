import React from 'react';
import styles from './ChatHeader.module.css';

export const ChatHeader = ({ avatar, name, lastSeen }) => {
  return (
    <header className={styles.header} role="banner">
      <div className={styles.profile}>
        <img 
          src={avatar} 
          alt={`${name}'s avatar`} 
          className={styles.avatar}
        />
        <div className={styles.info}>
          <h1 className={styles.name}>{name}</h1>
          <p className={styles.status} aria-live="polite">{lastSeen}</p>
        </div>
      </div>
      <div className={styles.actions}>
        <button 
          className={styles.actionButton} 
          aria-label="Start voice call"
        >
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/8e653c23359711634225cbb2ebf79c4c924e2408088838516dfca0c924786fa0?apiKey=3d2cdc80435c4ee7ad35ad90a21e1694&" alt="" />
        </button>
        <button 
          className={styles.actionButton} 
          aria-label="Start video call"
        >
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/a0c12d1c346a82c91bfbf28ef9e3c4598504ba44264a2836e72c4b0ed722fa37?apiKey=3d2cdc80435c4ee7ad35ad90a21e1694&" alt="" />
        </button>
        <button 
          className={styles.actionButton} 
          aria-label="Open chat options"
        >
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/ad7b4300b82e573520df5a4f51be346d7d7e31466f9d5e0812eca15832d9dbc1?apiKey=3d2cdc80435c4ee7ad35ad90a21e1694&" alt="" />
        </button>
      </div>
    </header>
  );
};


export default ChatHeader;