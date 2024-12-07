import React from 'react';
import styles from './Sidebar.module.css';
import { Logo } from './Logo';
import { UserProfile } from './UserProfile';
import { NavigationMenu } from './NavigationMenu';

export const Sidebar = () => {
  return (
    <aside className={styles.sidebar} role="complementary" aria-label="Chat navigation">
      <Logo />
      <UserProfile 
        image="https://cdn.builder.io/api/v1/image/assets/TEMP/271744b998695d8019877e81840c43c0ca784ccf807bd302c8db7f0a332f0840?apiKey=3d2cdc80435c4ee7ad35ad90a21e1694&"
        name="Arrul lin"
      />
      <NavigationMenu />
    </aside>
  );
};

export default Sidebar;