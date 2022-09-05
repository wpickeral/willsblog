import React from 'react';

type HeadingProps = {
  children: React.ReactNode
}

const Heading = ({children}: HeadingProps) => {
  return (
      <h1 className='pb-5 text-5xl leading-tight font-bold text-gray-600 dark:text-gray-100'>
        {children}
      </h1>
  );
};

export default Heading;