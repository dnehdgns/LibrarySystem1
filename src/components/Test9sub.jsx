import React, { useEffect } from 'react';

const Test9sub = ({msg, isShow, setIsShow}) => {
    //화면에그려지고 난후 

    useEffect( () =>{
       const timer = setTimeout( () => {
            setIsShow(!isShow)
       },3000)

       return() => {
            clearTimeout(timer)
       }
    },[])
    return (
        <>
        {
            isShow && <div style={ { margin:30 , padding:20, border:'1px solid #000', fontSize: '25px' }}>
            <h2>메세지 출력 : {msg} </h2>
            </div>
        }
        <p>3초후 사라지기</p>
        </>
    );
};

export default Test9sub;