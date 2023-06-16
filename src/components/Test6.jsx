import React, { useEffect, useState } from 'react';

const Test6 = () => {
    const [count , setCount] = useState(1)
    const [step , setStep] = useState(1)
    const changeInput = (e) => {
        const {value} = e.target
        setStep(Number(value))
    }

    useEffect( () => {
        const timer = setInterval(() => {
            setCount( x => x+step)
        }, 1000);
        return() => {
            clearInterval(timer)
        }
    }, [step])
    return (
        <div>
            <h1>카운트 : {count} </h1>
            <input type="text" onChange={changeInput} value={step} />
            <p>1초마다 input의 {step}만큼 증가</p>
        </div>
    );
};

export default Test6;