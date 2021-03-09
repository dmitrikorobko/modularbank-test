import React from 'react'

const Checkbox = ({ label, name, innerRef, ...rest}) => (
    <React.Fragment> 
    
    <label className="checkbox">
        <input type="checkbox" name={name} ref={innerRef} {...rest}/>
        <span>{label}</span>
    </label>
            
    </React.Fragment> 
)


export default Checkbox