import React from 'react';

const Text = (props) => {
    return (
        <h2 className={props.className}>{props.text}</h2>
    );
};

export default Text;