import React from 'react';

const Button = ({ children, theme = 'primary' }) => {
  let themeColor: string;

  switch (theme) {
    case 'primary':
      themeColor = 'bg-yellow-500';
      break;
    case 'google':
      themeColor = 'bg-google text-white';
      break;
    case 'facebook':
      themeColor = 'bg-facebook text-white';
      break;
    case 'twitter':
      themeColor = 'bg-twitter text-white';
      break;
  }

  const classSet = [
    'py-4 px-10 inline-block rounded-full',
    themeColor,
    theme ? 'font-bold' : 'border',
  ]
    .filter(Boolean)
    .join(' ');
  return <div className={classSet}>{children}</div>;
};

export default Button;
