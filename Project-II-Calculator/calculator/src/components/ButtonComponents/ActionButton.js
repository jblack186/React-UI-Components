import React from 'react';
import './Button.css';
import Actions from "./Actions";



    const ButtonZero = {
        action: 'CLEAR'
    };

    const ButtonClear = {

        action: 0
    };


function ActionButton() {
    return (
    <div>
        <Actions actionButton={ButtonZero} />
        <Actions actionButton={ButtonClear} />
    </div>
    );
}


export default ActionButton; 