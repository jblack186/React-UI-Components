import React from 'react';
import './Button.css';



//     const ButtonZero = {
//         action: 'CLEAR'
//     };

//     const ButtonDiv = {
//         action: '/'
//     };


   


    

// function ActionButton() {
//     return (
//         <div>
//     <div className='action'>
//         <Actions actionButton={ButtonZero} />
//         <Actions actionButton={ButtonDiv} />

//         </div>
        
//     </div>
//     );
// }

// function Actions(props) {
//     return (
//         <div>
//         <div>
//             <button>{props.actionButton.action}</button>
//         </div>
        
//         </div>
//     );
// };

function ActionButton() {
    return (
    <div className="actionButton">
    <div className="a">
        <button className="actionButtonClear">CLEAR</button>
        <button className="actionButtonDiv">/</button>
       </div> 
    </div>
    );
};


export default ActionButton; 