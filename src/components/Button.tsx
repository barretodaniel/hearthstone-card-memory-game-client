import React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: any;
};

const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className="font-serif transition-all duration-200 ease-in-out border-purple-600 border-b-2 active:border-purple-500 bg-purple-500 px-4 py-2 rounded text-white shadow active:shadow-inner focus:outline-none"
    >
      {children}
    </button>
  );
};

export default Button;
