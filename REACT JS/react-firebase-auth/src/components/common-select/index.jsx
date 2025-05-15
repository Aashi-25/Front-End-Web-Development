import React from 'react'

function CommonSelect( {value , onChange , options = [] , className , placeholder} ) {
    return (
        <select
            value={value}
            onChange={onChange}
            className={className || 'w-full block px-5 py-2 mt-2 text-black border rounded-lg'}
        >
            <option value="">
                {placeholder || 'Select an option'}
            </option>
            { options.map((option, index) => (
                <option key={index} value={option.value || option}>
                    {option.label || option}
                </option>))
            }

        </select>
    );
}

export default CommonSelect;