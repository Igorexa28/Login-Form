import React from 'react';

const Input = (props) => {
    return (
        <input type={props.type} className={props.className} id={props.id} />
    );
};

export default Input;
