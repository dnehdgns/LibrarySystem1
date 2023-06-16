import React, { useState } from 'react';
import Test8sub from './Test8sub';

const Test8 = () => {
    const [isChk , setIsChk] = useState(true)
    const changeCheck = () => {
        setIsChk(!isChk)
    }
    return (
        <div>
            <p>
                <button onClick={changeCheck}>
                    { isChk ? "숨기기" : "보이기"}
                </button>
            </p>
            <hr />
            {
                isChk && <Test8sub />
            }
        </div>
    );
};

export default Test8;