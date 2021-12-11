import React, { useState } from 'react';
import PropTypes from 'prop-types';


export const AddCategorys = ( {setCategories }) => {
    const [inputvalue, setInputValue] = useState('');

    const handdlerInputChange = (e) =>{
        setInputValue(e.target.value);
    }
    const handdlerSubmit = (e) =>{
        e.preventDefault();
        if (inputvalue.trim().length > 2) {
            setCategories(cats => [inputvalue, ...cats ]);
            setInputValue('');
        }
    }
    return (
        <>
        <form onSubmit={handdlerSubmit}>
            <input type="text" value={inputvalue} onChange={handdlerInputChange} />  
        </form>
        </>
    )
}

AddCategorys.propTypes = {
    setCategories: PropTypes.func.isRequired
}

