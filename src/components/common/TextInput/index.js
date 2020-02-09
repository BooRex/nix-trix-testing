import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const TextInput = props => {
  const {
    type = 'text',
    placeholder = '',
    className = '',
    name,
    value,
    tabIndex,

    pattern = undefined,

    styles = {},

    disabled = false,
    isInvalid = false,

    onChange,
    onBlur
  } = props;

  const onChangeField = (name, value) => {
    if (pattern === undefined) {
      return onChange(name, value);
    }

    pattern.test(value)
      ? onChange(name, value)
      : console.log('-Not valid-', pattern.test(value));
  };

  return (
    <input
      tabIndex={ tabIndex }
      className={ `text-input ${ className } ${ isInvalid ? 'text-input--invalid' : '' }` }
      type={ type }
      name={ name }
      placeholder={ placeholder }
      value={ value }
      disabled={ disabled }
      onChange={ e => onChangeField(name, e.target.value) }
      style={ styles }
      onBlur={ () => onBlur ? onBlur() : false }
    />
  );
};

TextInput.propTypes = {
  name       : PropTypes.string,
  type       : PropTypes.string,
  className  : PropTypes.string,
  placeholder: PropTypes.string,

  tabIndex: PropTypes.number,
  fontSize: PropTypes.number,

  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  disabled : PropTypes.bool,
  isInvalid: PropTypes.bool,

  onChange: PropTypes.func,
  onBlur  : PropTypes.func,

  pattern: PropTypes.any
};

export default TextInput;
