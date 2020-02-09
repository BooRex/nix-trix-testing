import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Button = props => {
  const {
    children,
    disabled = false,
    className = '',
    tabIndex = 1000,
    onClick = e => false
  } = props;

  return (
    <input
      className={`btn ${className ? className : ''}`}
      disabled={disabled}
      tabIndex={tabIndex}
      onClick={onClick}
    >{children}</input>
  );
};

Button.propTypes = {
  className: PropTypes.string,

  tabIndex: PropTypes.number,

  disabled: PropTypes.bool,

  onClick: PropTypes.func
};

export default Button;
