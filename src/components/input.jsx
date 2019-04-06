import React from 'react';
// input onBlur onChange type className value label
const Input = props => <input type="text" className={props.className}
    onChange={props.onChange} onBlur={props.onBlur} value={props.value} />;

export default Input;