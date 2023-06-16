import React, { useEffect } from 'react';

const Msesage = ({msg, isMsg, setIsMsg}) => {
    useEffect( () => {
        const timer = setTimeout( () => {
            setIsMsg(false)
        },2000)

        return() => {
            clearTimeout(timer)
        }
    },[msg])
    return (
        <>
            <div className={`message ${isMsg ? "on": ""}`}>
                메세지 : {msg}
            </div>
        </>
    );
};

export default Msesage;