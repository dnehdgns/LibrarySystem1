import React, { useRef, useState } from 'react';

const dataList = [
    {id:1, name:'chk1', text: '연령( 만 14세 이상 ) 확인 ( 필수 )', isChk : false},
    {id:2, name:'chk2', text: '증권플러스 이용약관( 필수 )', isChk : false},
    {id:3, name:'chk3', text: '개인정보 수집및 이용에 대한동의( 필수 )', isChk : false},
    {id:4, name:'chk4', text: '이벤트 우대혜택 동의 안내( 선택 )', isChk : false}
]

const Test = () => {
    const [data, setData] = useState(dataList)
    const changeCheck = (e) => {
        const { name, checked } = e.target
        if(name === 'all'){
            setData(data.map(item => {
                return {
                    ...item,
                    isChk : checked
                }
            }))
        }else {
            setData(data.map(item => {
                if(item.name === name){
                    return {
                        ...item,
                        isChk : checked
                    }
                } else {
                    return item
                }
            }))
        }
    }
    return (
        <div style={{margin : 30}}>
            <p>
                <input type="checkbox" name='all' onChange={changeCheck} checked ={ data.filter(item => item.isChk !== true).length < 1}/>
                <label>전체동의</label>
            </p>
            <hr />
            {
                data.map(item => <p key={item.id}>
                    <input type="checkbox" name={item.name} checked={item.isChk} onChange={changeCheck} />
                    <label>{item.text}</label>
                </p>)
            }
        </div>
    );
};

export default Test;