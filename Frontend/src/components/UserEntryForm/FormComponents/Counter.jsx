import React, { useState } from 'react';

const CounterInput = () => {
    const [value, setValue] = useState(0);

    const decrement = () => {
        setValue(prevValue => Math.max(0, prevValue - 1));
    };

    const increment = () => {
        setValue(prevValue => prevValue + 1);
    };

    return (
        <div className="h-full w-40">
            <label htmlFor="custom-input-number" className="w-full text-gray-700 text-sm font-semibold">
                Number Of Meals:    
            </label>
            <div className="flex flex-row h-10 w-full justify-center rounded-lg bg-transparent mt-1">
                <button
                    onClick={decrement}
                    className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full basis-1/3 rounded-l cursor-pointer outline-none"
                >
                    <span className="m-auto text-2xl font-thin">−</span>
                </button>
                <input
                    type="number"
                    className="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black basis-1/3 md:text-base cursor-default flex items-center text-gray-700"
                    name="custom-input-number"
                    value={value}
                    readOnly
                />
                <button
                    onClick={increment}
                    className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full basis-1/3 rounded-r cursor-pointer"
                >
                    <span className="m-auto text-2xl font-thin">+</span>
                </button>
            </div>
        </div>
    );
};

export default CounterInput;
