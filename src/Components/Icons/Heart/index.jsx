import React from 'react';
import styles from '../styles.scss';
import IconHelper from '../IconHelper';

const helper = new IconHelper({ width: 42, height: 39 });

export default function Heart({ color = 'white' }) {
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
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <g
          transform="translate(-901.000000, -150.000000)"
          className={styles[`${color}Stroke`]}
        >
          <g transform="translate(902.000000, 151.000000)">
            <path
              d="M19.9562645,6.43724484 C19.9562645,6.43724484 16.9748365,0.333789474 10.5236694,0.333789474 C4.07250228,0.333789474 0.25902439,5.15750449 0.25902439,10.8669586 C0.25902439,16.5764128 1.23665777,22.7776049 19.3203479,36.7559939 C19.3203479,36.7559939 39.555438,24.647838 39.6524936,11.4574514 C39.6524936,5.74799725 34.96046,0.333789474 29.4859152,0.333789474 C24.0113705,0.333789474 19.9562645,6.43724484 19.9562645,6.43724484 Z"
              strokeWidth="2"
            />

            <path
              d="M6.38768371,17.1669056 C6.07528587,16.2129543 5.9307134,15.336378 5.86702064,14.497471"
              strokeWidth="1.4354"
            />

            <path
              d="M11.6489082,5.61055497 C9.00110904,6.09618436 7.15300788,7.84119228 6.31893597,10.1237522 C6.31893597,10.1237522 6.94272066,5.67673088 10.3123712,4.06509288 C10.3123712,4.06509288 10.9492988,3.97448278 11.439632,4.4682569 C11.9299652,4.96203102 11.6489082,5.61055497 11.6489082,5.61055497 Z"
              strokeWidth="1.4354"
              fillRule="nonzero"
            />
          </g>
        </g>
      </g>
    </svg>
  );
}
