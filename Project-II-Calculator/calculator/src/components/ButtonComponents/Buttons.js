import React from "react";
import NumberButton from "./NumberButton";


const buttons = [ {
    number: 1

},

{
    number: 2

},

{
    number: 3

},

{
    number: 4

},

{
    number: 5

},

{
    number: 6

},

{
    number: 7

},

{
    number: 8,

},

{
    number: 9

},

{
    number: 0
},

{
    number: '/'
},

{
    number: '*'
},

{
    number: '+'
},

{
    number: '-'
}

];

const newButtonArray = buttons.map( (buttonsAttr, index) => {
    return <NumberButton text={buttonsAttr} />
});


function Buttons() {
    return (
        <div>
            {newButtonArray}
        </div>
    )

}

export default Buttons;