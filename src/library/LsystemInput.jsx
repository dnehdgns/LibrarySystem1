import React from 'react';

const LsystemInput = ({book, setBook, bookRef, edit, onClear}) => {
    const {type, author, bookcode} = book

    const changeInput = (e) => {
        const {name, value} = e.target
        setBook({
            ...book,
            [name] : value
        })
    }
    return (
        <form className='input' onSubmit={onClear}>
            <p>
                <label>장르</label>
                <input type="text" onChange={changeInput} value={type} name='type' ref={bookRef} />
            </p>
            <p>
                <label>저자</label>
                <input type="text" onChange={changeInput} value={author} name='author' />
            </p>
            <p>
                <label>책코드</label>
                <input type="text" onChange={changeInput} value={bookcode} name='bookcode' />
            </p>
            { edit ? <button type='submit'>확인</button> : <button type='submit'>추가</button> }
        </form>
    );
};

export default LsystemInput;