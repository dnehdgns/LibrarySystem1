import React, { useEffect, useRef, useState } from 'react';

const Test3 = () => {
    const [text , setText] = useState('')
    const textRef = useRef()

    const changeInput = e => {
        setText(e.target.value)
    }

    useEffect( () => {
        textRef.current.focus()
    },[])
    return (
        <div>
            <h2>userEffect 형식2</h2>  
            <input type="text" ref={textRef} value={text} onChange={changeInput} />
        </div>
    );
};

export default Test3;