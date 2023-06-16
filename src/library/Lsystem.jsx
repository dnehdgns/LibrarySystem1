import React, { useRef, useState } from 'react';
import LsystemInput from './LsystemInput';
import LsystemList from './LsystemList';
import './style.scss'

const Lsystem = () => {
    const [data, setData] = useState([])
    const no = useRef(1)
    const [book, setBook] = useState([
        {type:'', author:'', bookcode:''}
    ])
    const bookRef = useRef()
    const [edit , setEdit] = useState(false)

    // const onAdd = (book) => {
    //     book.id = no.current++
    //     setData([
    //         ...data, book
    //     ])
    // }
    const onDel = (id) => {
        setData(data.filter(item => item.id !== id))
    } 
    const onClear = (e) => {
        e.preventDefault()
        if(edit) {
            setData(data.map(item => item.id === book.id ? book : item))
            setBook({
                type : '',
                author : '',
                bookcode : ''
            })
            bookRef.current.focus()
        } else {
            book.id = no.current++
            setData([
                ...data, book
            ])
            setBook({
                type : '',
                author : '',
                bookcode : ''
            })
        }
    }

    const onUpate = (id) => {
        setBook(data.find(item => item.id === id))
        setEdit(true)
        // bookRef.current.focus()
    }


    return (
        <div className='wrap'>
            <h1>북카페 도서 관리 시스템</h1>
            <div className='inner'>
                <LsystemInput no={no} book={book} setBook={setBook} bookRef={bookRef} edit={edit} onClear={onClear}/>
                <LsystemList onDel={onDel} data={data} onUpate={onUpate} />
            </div>
        </div>
    );
};

export default Lsystem;