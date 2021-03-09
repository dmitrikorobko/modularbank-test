import React from 'react'

const TextArea = ({ label, name, innerRef, ...rest}) => (
    <React.Fragment> 
    <label className="label" for={name}>{label}</label>
    <textarea name={name} ref={innerRef} {...rest}></textarea>
    </React.Fragment> 
)


export default TextArea