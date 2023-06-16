import React from 'react';
import LsystemItem from './LsystemItem';

const LsystemList = ({onDel, data, onUpate}) => {
    return (
        <div className='list'>
            <table className='book-table'>
                <colgroup>
                        <col className="title" />  
                        <col className="author" />  
                        <col className="bookcode"/>
                        <col className="del" />  
                </colgroup>
                <thead>
                    <tr>
                        <th>장르</th>
                        <th>저자</th>
                        <th>코드</th>
                        <th>관리</th>
                    </tr>                        
                </thead>
                <tbody className='book-tbody'>
                    {
                        data.map(item => <LsystemItem key={item.id} item={item} onDel={onDel} onUpate={onUpate} />)
                    }
                </tbody>
            </table>   
        </div>
    );
};

export default LsystemList;