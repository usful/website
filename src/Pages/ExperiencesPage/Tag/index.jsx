import React from 'react';
import { Heart, Education, Earth, People, Gift, House } from '../../../Components/Icons';
import styles from './styles.scss';

const tagMap = {
  'Poop': Heart,
  'Health': Heart,
  'Heart': Heart,
  'Earth': Earth,
  'Environment': Earth,
  'Stuff': Education,
  'Education': Education,
  'People': People,
  'Gift': Gift,
  'House': House,
};

export default function Tag({ tag, color }) {
  const Icon = tagMap[tag];

  return (
    <div className={styles.tag}>
      <Icon color={color}/>
      <div className={styles.name}>
        <label>{tag}</label>
      </div>
    </div>
  )
}