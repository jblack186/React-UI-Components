import React from 'react';
import './Button.css';

function Actions(props) {
    return (
        <div>
            <button>{props.actionButton.action}</button>
        </div>
    );
};

export default Actions;