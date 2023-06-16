import React, { useEffect, useState } from 'react';

const Test8sub = () => {
    const [day , setDay] = useState(new Date())

    useEffect( () => {
        const timer = setInterval( () => {
            setDay(new Date())
        },1000)

        return() => {
            clearInterval(timer)
        }
    },[])
    return (
        <div>
            <h2>오늘날짜 : {day.toLocaleDateString()} </h2>
            <h2>오늘시간 : {day.toLocaleTimeString()}</h2>
        </div>
    );
};

export default Test8sub;