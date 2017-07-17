import React from 'react';
import styles from '../styles.scss';
import IconHelper from '../IconHelper';

const helper = new IconHelper({ width: 37, height: 35 });

export default function Close({ color = 'white' }) {
  return (
    <svg
      className="icon"
      style={helper.style}
      viewBox={helper.viewBox}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
        strokeLinecap="square"
      >
        <g
          transform="translate(-1385.000000, -19.000000)"
          className={styles[`${color}Stroke`]}
          strokeWidth="0.8"
        >
          <g transform="translate(1386.000000, 19.000000)">
            <path d="M0.397727273,34.6022727 L34.7407345,0.259265451" />
            <path d="M0.397727273,1.19318182 L33.6977386,34.4931931" />
          </g>
        </g>
      </g>
    </svg>
  );
}
