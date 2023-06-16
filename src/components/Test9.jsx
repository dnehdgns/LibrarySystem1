import React, { useState } from 'react';
import Test9sub from './Test9sub';

const Test9 = () => {
    const [msg, setMsg] = useState('안녕하세요')
    const [isShow, setIsShow] = useState(true)
    const onMsg1 = () => {
        const result = window.confirm('메세지를 확인하시겠습니까?')
        if(result) {
            setMsg('메세지1 확인합니다.')
            setIsShow(true)
        }else {
            return
        }
    }
    const onMsg2 = () => {
        const result = window.confirm('메세지를 확인하시겠습니까?')
        if(result) {
            setMsg('메세지2 확인합니다.')
            setIsShow(true)
        }else {
            return
        }
    }
    return (
        <div>
            <button onClick={onMsg1}>메시지1</button>
            <button onClick={onMsg2}>메시지2</button>
            <hr />
            { isShow && <Test9sub msg={msg} isShow={isShow} setIsShow={setIsShow}/> }
        </div>
    );
};

export default Test9;