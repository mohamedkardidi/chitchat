import React from 'react';
import styles from './NavigationMenu.module.css';

export const NavigationMenu = () => {
  const menuItems = [
    { id: 1, label: 'Messages', active: true },
    { id: 2, label: 'Contacts' },
    { id: 3, label: 'Settings' },
  ];

  return (
    <nav className={styles.nav}>
      <ul className={styles.menu}>
        {menuItems.map(item => (
          <li key={item.id} className={`${styles.menuItem} ${item.active ? styles.active : ''}`}>
            {item.label}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavigationMenu;
