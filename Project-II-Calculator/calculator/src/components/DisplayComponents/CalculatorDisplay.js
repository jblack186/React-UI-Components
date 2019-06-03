import React from 'react';
import './Display.css';



const Display = {

    screen: 0
};

function CalculatorDisplay() {
    return(
        <div>
<Screen display={Display} />
        </div>
    );
};

function Screen(props) {
    return (
    <div className="display">
        <div>{props.display.screen}</div>
    </div>
    );
};

export default CalculatorDisplay;