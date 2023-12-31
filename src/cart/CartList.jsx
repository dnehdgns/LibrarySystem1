import React from 'react';
import CartItem from './CartItem';

const CartList = ({data, allDel,onDel ,onEdit}) => {
    return (
        <div className='con2'>
            <p>
                <button  className="btn" onClick={allDel} >전체삭제</button>
                <span className="total">
                    총금액 :  {
                        data.reduce( (acc,cur) => {
                            return acc + cur.total
                        },0)
                    }
                </span>
            </p>        
            <ul className="list">
               {
                    data.map(item => <CartItem key={item.id} item = {item} onDel={onDel} onEdit={onEdit} />)
               }
            </ul> 
        </div>
    );
};

export default CartList;