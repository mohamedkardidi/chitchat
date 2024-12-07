import React from 'react';
import styles from './UserProfile.module.css';

export const UserProfile = ({ image, name }) => {
  return (
    <div className={styles.userProfile}>
      <img src={image} alt={`${name}'s profile`} className={styles.avatar} />
      <h2 className={styles.name}>{name}</h2>
    </div>
  );
};

export default UserProfile;
