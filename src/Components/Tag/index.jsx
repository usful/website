import React from 'react';
import {
  Tech,
  Heart,
  Education,
  Earth,
  People,
  Gift,
  House
} from '../Icons/index';
import styles from './styles.scss';

const tagMap = {
  Tech: Tech,
  Health: Heart,
  Environment: Earth,
  Education: Education,
  Community: People,
  Charity: Gift,
  House: House
};

export default function Tag({ tag, color }) {
  const Icon = tagMap[tag];

  return (
    <div className={styles.tag}>
      <Icon color={color} />
      <div className={styles.name}>
        <label>
          {tag}
        </label>
      </div>
    </div>
  );
}
