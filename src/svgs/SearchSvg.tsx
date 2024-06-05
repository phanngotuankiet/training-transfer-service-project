import React from 'react';

const SearchSvg = ({ color = '#AAB9C5' }: { color?: string }) => {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.5 7.5C13.5 10.5376 11.0376 13 8 13C4.96243 13 2.5 10.5376 2.5 7.5C2.5 4.46243 4.96243 2 8 2C11.0376 2 13.5 4.46243 13.5 7.5ZM12.5491 13.4633C11.2873 14.4274 9.71054 15 8 15C3.85786 15 0.5 11.6421 0.5 7.5C0.5 3.35786 3.85786 0 8 0C12.1421 0 15.5 3.35786 15.5 7.5C15.5 9.21054 14.9274 10.7873 13.9633 12.0491L18.5711 16.6569C18.9616 17.0474 18.9616 17.6805 18.5711 18.0711C18.1805 18.4616 17.5474 18.4616 17.1569 18.0711L12.5491 13.4633Z"
        fill={color}
      />
    </svg>
  );
};

export default SearchSvg;
