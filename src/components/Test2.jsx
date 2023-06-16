import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';

const Test2 = () => {
    const [count, setCount] = useState(1)
    const ref1 = useRef()
    const ref2 = useRef()
    const onColor = () => {
        setCount(count + 1)
        ref1.current.style.backgroundColor = 'pink'
        ref2.current.style.backgroundColor = 'hotpink'
    }

    useEffect( () => {
        console.log('useEffect')
        ref1.current.style.backgroundColor = 'yellow'
    })

    useLayoutEffect( () => {
        console.log('useLayoutEffect')
        ref2.current.style.backgroundColor = 'tomato'
    })
    return (
        <div>
            <h2>카운트 { count }</h2>
            <h2 ref={ref1}>useEffect</h2>
            <h2 ref={ref2}>useLayoutEffect</h2>
            <button onClick={onColor}>카운트 + 컬러</button>
        </div>
    );
};

export default Test2;