import React from 'react';

type RadioProps = React.InputHTMLAttributes<HTMLInputElement> & {
  children: any;
};

const Radio = ({ name, id, children, className, ...props }: RadioProps) => {
  return (
    <label className={`inline-flex items-center ${className}`} htmlFor={id}>
      <input {...props} type="radio" name={name} id={id} className="form-radio text-teal-600" />
      <span className="ml-2">{children}</span>
    </label>
  );
};

export default Radio;
