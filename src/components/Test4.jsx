import React, { useState } from 'react';
import Test4sub from './Test4sub';

const Test4 = () => {
    const [isShow , setIsShow] = useState(false)
    const onShow = () => {
        setIsShow(!isShow)
    }

    return (
        <div>
            <p><button onClick={onShow}>
                {isShow ? "숨기기" : "보이기"}
                </button>
            </p>
            <hr />
            <Test4sub />
        </div>
    );
};

export default Test4;