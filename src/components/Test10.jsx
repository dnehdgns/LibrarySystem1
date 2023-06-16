import React, { useEffect, useRef, useState } from 'react';

const Test10 = () => {
    const [data, setData] = useState(
        () => JSON.parse(localStorage.getItem('data')) || []
    )
    const [text, setText] = useState('')
    const [count, setCount] = useState(
        () => JSON.parse(localStorage.getItem('count')) || 0
    )
    const no = useRef(1)
    const changeInput = (e) => {
        const {value} = e.target
        setText(value)
    }
    const onUp = () => {
        setCount(count+1)
    }
    const onDown = () => {
        setCount(count-1)
    }
    const onAllDel = () => {
        localStorage.clear()
        setData([])
        setCount(0)
    }
    const onAdd = () => {
        if(text !== ''){ setData([...data, { id : no.current++, text}]) }
        setText('')
    }
    const onDel = (num) => {
        setData(data.filter(item => item.id !== num))
    }

    useEffect( () => {
        localStorage.setItem('count', JSON.stringify(count))
    },[count])

    useEffect( () => {
        localStorage.setItem('data', JSON.stringify(data))
    },[data])
    return (
        <div>
            <h2>localstorage : {count} </h2>
            <p>
                <button onClick={onUp}>증가</button>
                <button onClick={onDown}>감소</button>
                <button onClick={onAllDel}>메모리삭제</button>
            </p>
            <hr />
            <p>
                <input type="text" value={text} onChange={changeInput} />
                <button onClick={onAdd}>추가</button>
            </p>
            <ul>
                {
                    data.map(item => <li key={item.id}>
                        {item.text} <button onClick={() => onDel(item.id)}>삭제</button>
                    </li>)
                }
            </ul>
        </div>
    );
};

export default Test10;