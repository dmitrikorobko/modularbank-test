import React from 'react'

const Input = ({ label, name, innerRef, ...rest}) => (
    <React.Fragment> 
    <label className="label" for={name}>{label}</label>
    <input className="input" name={name} ref={innerRef} {...rest}></input>
    </React.Fragment> 
)


export default Input