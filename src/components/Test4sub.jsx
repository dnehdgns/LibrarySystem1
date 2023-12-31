import React, { useEffect, useState } from 'react';

const Test4sub = () => {
    const [x , setX] = useState(0)
    const [y , setY] = useState(0)

    const onMove = (e) => {
        console.log('onMove')
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect( () => {
        window.addEventListener('mousemove', onMove)
        //뒷정리

        return() => {
            window.removeEventListener('mousemove', onMove)
        }
    },[])
    return (
        <div>
            <h2>
                x : {x} / y : {y}
            </h2>
        </div>
    );
};

export default Test4sub;