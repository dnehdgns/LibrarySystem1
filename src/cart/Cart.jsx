import React, { useRef, useState } from 'react';
import CartForm from './CartForm';
import CartList from './CartList';
import './style.scss'

const Cart = () => {
    const [data, setData] = useState([])
    const [isEdit, setIsEdit] = useState(false)
    const [cart , setCart] = useState({
        text:'', price:'', amount:'' 
    })
    const no = useRef(1)
    const textRef = useRef('')

    const changeInput = (e) => {
        const {name, value} = e.target
        setCart({
            ...cart,
            [name] : value
        })
    }

    const onEdit = (id) => {
        setCart(data.find(item => item.id === id))
        setIsEdit(true)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        if(!cart.text && cart.amount < 1) return
        if(isEdit) {
            //수정
            cart.total = Number(cart.price * cart.amount)
            setData(data.map(item => item.id === cart.id ? cart : item))
            setCart({
                text:'', price:'', amount:''
            })
            setIsEdit(false)
            textRef.current.focus()
        }else {
            //추가
            data.id = no.current++
            cart.total = (Number(cart.price) * Number(cart.amount))
            setData([
                ...data, cart
            ])
            setCart({
                text:'', price:'', amount:''
            })
            textRef.current.focus()
        }
    }
    const onDel = (id) => {
        setData(data.filter(item => item.id !== id))
    }
    const allDel = () => {
        setData([])
        setCart([])
    }
    return (
        <>
            <div className="con-box">
                <CartForm cart={cart} onSubmit={onSubmit} changeInput={changeInput} isEdit={isEdit} no={no} textRef={textRef} />
                <CartList key={data.id} data={data} allDel={allDel} onDel={onDel} onEdit={onEdit}/>
            </div>
        </>
    );
};

export default Cart;