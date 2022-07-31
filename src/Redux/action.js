
const handleIncrement=() =>{
    return {type:"INCREMENT", payload:5};
};

const handleDecrement=() =>{
    return {type:"DECREMENT", payload:3};
};

export {handleIncrement, handleDecrement}