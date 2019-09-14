import React, { Component } from 'react';
import logo from './logo.svg';
import './OperatorButton.css';
import Calculator from './Calculator'

function OperatorButton({operator, operatorChoose, handleChanged}){
    return (
      <div className="col-3">
        <button style={{padding:0}} 
            className={operator === operatorChoose ? "btn btn-warning form-control" : "btn btn-info form-control"}
            type="button" operator_choose={operatorChoose} onClick={handleChanged}>

            <span style={{fontSize: 25 +'px', fontFamily: 'monospace'}}>
            {operatorChoose}
            </span>
        </button>
      </div>
    )
}

export default OperatorButton;
