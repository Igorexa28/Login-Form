import React from 'react';

const Label = (props) => {
    return (
        <label htmlFor={props.forHtml} className={props.className}>
            {props.text}
        </label>
    );
};

export default Label;