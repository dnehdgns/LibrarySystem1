import React from 'react';

const LsystemItem = ({item, onDel, onUpate}) => {
    const {id,type, author, bookcode} = item
    return (
        <tr>
            <td>{type}</td>
            <td>{author}</td>
            <td>{bookcode}</td>
            <td>
                <button className="delete" onClick={() => onDel(id)}>X</button>
                <button onClick={() => onUpate(id)}>수정</button>
            </td>
        </tr>
    );
};

export default LsystemItem;