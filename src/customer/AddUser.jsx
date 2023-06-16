import React, { useRef, useState } from 'react';

const Adduser = ({onAdd}) => {
    const [user, setUser] = useState([
        {name:'', addr:''}
    ])
    const nameRef = useRef()
    const {name, addr} = user
    const changeInput = (e) => {
        const {name, value} = e.target
        setUser({
            ...user,
            [name] : value
        })
    }
    const onClear = (e) => {
        e.preventDefault()
        if(name !== '' && addr !== '') {
            onAdd(name, addr)
            setUser({
                name : '',
                addr : ''
            })
            nameRef.current.focus()
        } else {
            alert('공백없이 입력해주십시오')
        }
    }
    return (
        <form onSubmit={onClear}>
            <h2>고객명단추가</h2>
            <p>
                <label>이름</label>
                <input type="text" value={name} onChange={changeInput} name='name' ref={nameRef} />
            </p>
            <p>
                <label>주소</label>
                <input type="text" value={addr} onChange={changeInput} name='addr'/>
            </p>
            <button type='submit'>추가</button>
        </form>
    );
};

export default Adduser;