import React, { useEffect, useState } from 'react';

const EditUser = ({onUpdate, current, setIsShow}) => {
    const [user, setUser] = useState(current)

    useEffect( () => {
        setUser(current)
    },[current])
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
        setIsShow(false)
        onUpdate(user)
        setUser({
            name : '',
            addr : ''
        })
    }
    return (
        <form onSubmit={onClear}>
            <h2>고객명단 수정</h2>
            <p>
                <label>이름</label>
                <input type="text" value={name} onChange={changeInput} name='name' />
            </p>
            <p>
                <label>주소</label>
                <input type="text" value={addr} onChange={changeInput} name='addr' />
            </p>
            <button type='submit'>확인</button>
            <button onClick={() => setIsShow(false)}>취소</button>
        </form>
    );
};

export default EditUser;