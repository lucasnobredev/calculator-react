import React, { Component } from 'react';

function NumberField({number, position, handleChanged}){
    let label = position === 1 ? 'First Number' : 'Second Number';
    return (
        <div className="form-group">
            <label>{label}</label>
            <input type="text"
                className="form-control"
                value={number}
                position={position} 
                onChange={handleChanged} />
        </div>
    )
}

export default NumberField;
