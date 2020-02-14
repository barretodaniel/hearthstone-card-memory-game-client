import React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: any;
};

const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className="transition-all duration-200 ease-in-out border-teal-600 border-b-2 active:border-teal-500 bg-teal-500 px-4 py-2 rounded text-white shadow active:shadow-inner focus:outline-none"
    >
      {children}
    </button>
  );
};

export default Button;
