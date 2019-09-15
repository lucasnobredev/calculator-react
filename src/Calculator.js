import React, { Component } from 'react';
import OperatorButton from './OperatorButton'
import NumberField from './NumberField'

class Calculator extends React.Component{
  state = { firstNumber:0, secondNumber:0, result:0, operator:"", showErrorMessageToChooseOperator:false }
  handleSubmit = (event) => {
      event.preventDefault();
      
      switch(this.state.operator)
      {
          case '+':
              this.setState({ result: parseInt(this.state.firstNumber) + parseInt(this.state.secondNumber) });
            break;
          case '-':
              this.setState({ result: parseInt(this.state.firstNumber) - parseInt(this.state.secondNumber) });
            break;
          case '*':
              this.setState({ result: parseInt(this.state.firstNumber) * parseInt(this.state.secondNumber) });
            break;
          case '/':
              this.setState({ result: parseInt(this.state.firstNumber) / parseInt(this.state.secondNumber) });
            break;
          default:
              this.setState({ showErrorMessageToChooseOperator: true });
      }      
  };

  handleChanged = (event) => {
    this.setState({ operator: event.target.getAttribute('operator_choose')});
    this.setState({ showErrorMessageToChooseOperator:false });
  }

  handleNumberFieldChanged = (event) => {
    if(event.target.getAttribute('position') === '1'){
      this.setState({ firstNumber: event.target.value});
    }
    else if(event.target.getAttribute('position') === '2'){
      this.setState({ secondNumber: event.target.value });
    }
    
    this.setState({ showErrorMessageToChooseOperator:false });
  }

  render() {
      return (
          <div className="col-3" style={{border:1+ 'px solid', margin:5, borderRadius:10+'px', padding:20+'px'}}>
              <h2>Calculator in React</h2>
              <hr></hr>
              <form onSubmit={this.handleSubmit}>
                  <NumberField number={this.state.firstNumber} position={1} handleChanged={this.handleNumberFieldChanged}/>
                  <div className="form-group">
                      <label>Choose operator:</label>
                      <div className={this.state.showErrorMessageToChooseOperator ? "alert alert-danger" : "d-none"}>
                          Choose any operator to calculate!
                      </div>
                      <div className="row">
                        <OperatorButton operator={this.state.operator} operatorChoose={'+'} handleChanged={this.handleChanged}/>
                        <OperatorButton operator={this.state.operator} operatorChoose={'-'} handleChanged={this.handleChanged}/>
                        <OperatorButton operator={this.state.operator} operatorChoose={'*'} handleChanged={this.handleChanged}/>
                        <OperatorButton operator={this.state.operator} operatorChoose={'/'} handleChanged={this.handleChanged}/>
                      </div>
                  </div>
                  <NumberField number={this.state.secondNumber} position={2} handleChanged={this.handleNumberFieldChanged} />

                  <div className="form-group">
                      <button className="btn btn-success form-control" type="submit">Calculate:</button>
                  </div>
                  <div className="form-group">
                      <input type="text" disabled className="form-control" value={this.state.result} />
                      </div>
                  
              </form>
          </div>
      );
  }
}

export default Calculator;
