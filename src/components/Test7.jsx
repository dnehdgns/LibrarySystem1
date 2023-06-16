import React, { useEffect, useState } from 'react';

const Test7 = () => {
    const [count , setCount] = useState(0)
    const [isCount , setIsCount] = useState(true)
    const onToggle = () => {
        setIsCount(!isCount)
    }
    const onReset = () => {
        setIsCount(false)
        setCount(0)
    }
    useEffect( () => {
        let timer = null
        if (isCount) {
            timer= setInterval( () => {
                setCount(x => x+1)
            },1000)
        } else {
            clearInterval(timer)
        }

        return() => {
            clearInterval(timer)
        }
    },[isCount])
    return (
        <div>
            <h1>카운트 : {count}</h1>
            <p>
                <button onClick={onToggle}>시작/중지</button>
                <button onClick={onReset}>초기화/중지</button>
            </p>
        </div>
    );
};

export default Test7;