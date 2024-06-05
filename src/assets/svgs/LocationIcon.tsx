import React from 'react';

const LocationIcon = ({
  color,
  size = 24,
}: {
  color: string;
  size?: number;
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 5C9.2416 5 7 7.33801 7 10.215C7 13.6381 11.1476 18.482 11.3221 18.685C11.4966 18.8881 11.7449 19 12 19C12.255 19 12.5033 18.8881 12.6778 18.685C13.1208 18.1741 17 13.561 17 10.215C17 7.33801 14.7584 5 12 5ZM9.90602 10.215C9.90602 9.01101 10.8456 8.03101 12 8.03101C13.1543 8.03101 14.0939 9.01101 14.0939 10.215C14.0939 11.419 13.1543 12.399 12 12.399C10.8456 12.399 9.90602 11.419 9.90602 10.215Z"
        fill={color}
      />
    </svg>
  );
};

export default LocationIcon;
