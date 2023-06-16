import React, { useEffect, useState } from 'react';

const Test5 = () => {
    const [count , setCount] = useState(1)

    //화면에 실행후
    useEffect( () => {
        const timer = setInterval( () => {
            setCount(x => {
               return x+1
            })
        }, 1000)

        return() => {
            clearInterval(timer)
        }
    },[])
    return (
        <div>
            <h1>카운트 : {count}</h1>
            <p>1초마다 계속 1씩 증가</p>
        </div>
    );
};

export default Test5;