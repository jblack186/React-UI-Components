import React from "react";
import NumberButton from "./NumberButton";
import ActionButton from "./ActionButton";


// const buttons = [ {
//     number: 7

// },

// {
//     number: 8

// },

// {
//     number: 9

// },

// {
//     number: '*'
// },


// ]

// const midButtons = [ 
// {
//     number: 4

// },

// {
//     number: 5

// },

// {
//     number: 6

// },

// {
//     number: '-'
// }
// ]

// const bottomButtons = [ 

// {
//     number: 1

// },

// {
//     number: 2

// },

// {
//     number: 3

// },

// {
//     number: '+'

// }


// ]



// const zero = [
//     {
//         number: 0
//     },

//     {
//         number: '='
//     }
// ]

// const topButtonArray = buttons.map( (buttonsAttr, index) => {
//     return <NumberButton text={buttonsAttr} />
// });

// const midButtonArray = midButtons.map( (buttonsAttr, index) => {
//     return <NumberButton text={buttonsAttr} />
// });

// const bottomButtonArray = bottomButtons.map( (buttonsAttr, index) => {
//     return <NumberButton text={buttonsAttr} />
// });

// const zeroButtonArray = zero.map( (buttonsAttr, index) => {
//     return <NumberButton text={buttonsAttr} />
// });


function Buttons() {
    return (
        <div>
        <div className="topButtons">
        <button className="button">7</button>
        <button className="button">8</button>
        <button className="button">9</button>
        <button className="button">*</button>
        </div>
        <div className="midButtons">
            <button className="button">4</button>
            <button className="button">5</button>
            <button className="button">6</button>
            <button className="button">-</button>
        </div>
        <div className= "bottomButtons">
        <button className="button">1</button>
        <button className="button">2</button>
        <button className="button">3</button>
        <button className="button">+</button>
        </div>
        <div className="lastButtons">
            <button className="buttonZero">0</button>
            <button className="buttonEqual">=</button>
            
        </div>
        </div>    

       
       
    )
}
// function Buttons() {
//     return (
       
//          <div className="container"> 
//         <div className="top">
//             {topButtonArray}
            
//         </div>
//         <div className="mid">
//             {midButtonArray}
//         </div>
//         <div className="bottom">
//             {bottomButtonArray}
//         </div>

//         <div className="zero">
//             {zeroButtonArray}
//             </div>
//         </div>
        
        
       
//     )

// }

{console.log()}
export default Buttons;