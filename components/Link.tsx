import React from 'react';

const Link = ({
  href,
  name,
  className,
}: { href?: string, name: string, className?: string }) => {
  return (
      <span
         className={`hover:underline text-gray-600 hover:text-gray-500 inline-flex items-center ${className}`.trimEnd()}>{name}</span>
  );
};

export default Link;