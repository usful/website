import React from 'react';
import styles from './styles.scss';

export default function MainMenu(props) {
  const items = props.items || [];

  return (
    <menu className={styles.mainMenu}>
      {items.map(item =>
        <a href={item.slug} key={item.id}>
          {item.name}
        </a>
      )}
    </menu>
  );
}
