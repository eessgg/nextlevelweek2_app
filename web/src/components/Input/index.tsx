import React, {SelectHTMLAttributes} from 'react';

import './styles.css'

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement>{
  label: string;
  name: string;
}

const Select: React.FC<SelectProps> = ({label, name, ...rest}) => {
  return (
    <div className="delect-block">
      <label htmlFor={name}>{label}</label>
    </div>
  );
}

export default Select;
