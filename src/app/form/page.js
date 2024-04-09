'use client';
import React, { useState } from 'react';

const MyForm = () => {

    const [inputs, setInputs] = useState({});

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`${inputs}`)
    }

    const handleChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        setInputs(values => ({ ...values, [name]: value }))
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Enter the name
                <input
                    type='text'
                    name='username'
                    value={inputs.username}
                    onChange={handleChange}
                />
            </label>
            <label>Enter age
                <input
                    type='number'
                    name='age'
                    value={inputs.age || ""}
                    onChange={handleChange}
                />
            </label>
            <input type='submit' />
        </form>
    );
}

export default MyForm