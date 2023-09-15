import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Switch.css';

const SwitchComponent = ({ defaultValue, onToggle, rounded }) => {
  const [isChecked, setIsChecked] = useState(defaultValue);

  const handleToggle = () => {
    const newCheckedState = !isChecked;
    setIsChecked(newCheckedState);
    if (onToggle) {
      onToggle(newCheckedState);
    }
  };

  const switchStyle = isChecked ? (rounded ? 'rounded' : 'square') : (rounded ? 'square' : 'rounded');

  return (
    <label className="switch">
      <input 
        type="checkbox" 
        checked={isChecked} 
        onChange={handleToggle} 
      />
      <span className={`slider ${switchStyle}`}></span>
    </label>
  );
}

SwitchComponent.propTypes = {
  defaultValue: PropTypes.bool,
  onToggle: PropTypes.func,
  rounded: PropTypes.bool
};

SwitchComponent.defaultProps = {
  defaultValue: false,
  rounded: true
};

export default SwitchComponent;
