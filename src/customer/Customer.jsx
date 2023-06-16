import React, { useEffect, useRef, useState } from 'react';
import './style.scss'
import Adduser from './Adduser';
import EditUser from './EditUser';
import ListUser from './ListUser';
import Msesage from './Msesage';

const dataList = [
    {id:1, name:'유재석', addr:'서울'},
    {id:2, name:'강호동', addr:'인천'},
    {id:3, name:'노홍청', addr:'대전'},
    {id:4, name:'박명수', addr:'대구'},
    {id:5, name:'정형돈', addr:'부산'}
]

const Customer = () => {
    const [data, setData] = useState(
        () => JSON.parse(localStorage.getItem('data')) || dataList
    )
    const [msg, setMsg] = useState('') 
    const [isMsg, setIsMsg] = useState(false) 
    const no = useRef(data.length+1)
    const [isShow, setIsShow] = useState(false)
    const [current, setCurrent] = useState({})

    useEffect( () => {
        localStorage.setItem('data', JSON.stringify(data))
    },[data])

    const onUpdate = (user) => {
        setData(data.map(item => item.id === user.id ? user : item))
    }
    const onAdd = (username, addr) => {
        setData([
            ...data,
            {
                id : no.current++,
                name : username,
                addr : addr
            }
        ])
        setIsMsg(true)
        setMsg('추가했습니다.')
    }
    const onEdit = (user) => {
        setIsShow(true)
        setCurrent(user)
    }
    const onDel = (id) => {
        setData(data.filter(item => item.id !== id))
    }
    return (
        <div className='Customer'>
            <Msesage msg={msg} isMsg={isMsg} setIsMsg={setIsMsg}/>
            { isShow ? <EditUser onUpdate = {onUpdate} current = {current} setIsShow = {setIsShow}/> : <Adduser onAdd = {onAdd}/> }
            <ListUser data = {data} onEdit = {onEdit} onDel = {onDel} />
        </div>
    );
};

export default Customer;