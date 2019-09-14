import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import OperatorButton from './OperatorButton'

class Calculator extends React.Component{
  state = { firstAlgarismo:0, secondAlgarismo:0, result:0, operator:"", showErrorMessageToChooseOperator:false }
  handleSubmit = (event) => {
      event.preventDefault();
      console.log(this.state.operator);
      if(this.state.operator === '+'){
          this.setState({
              result: parseInt(this.state.firstAlgarismo) + parseInt(this.state.secondAlgarismo)
          });
      }else if(this.state.operator === '-'){
          this.setState({
              result: parseInt(this.state.firstAlgarismo) - parseInt(this.state.secondAlgarismo)
          });
      } else if(this.state.operator === '*'){
          this.setState({
              result: parseInt(this.state.firstAlgarismo) * parseInt(this.state.secondAlgarismo)
          });
      } else if(this.state.operator === '/'){
          this.setState({
              result: parseInt(this.state.firstAlgarismo) / parseInt(this.state.secondAlgarismo)
          });
      }else{
          this.setState({
              showErrorMessageToChooseOperator: true
          });
      }
      
      console.log('result:' + this.state.result);
  };

  handleChanged = (event) => {
    this.setState({ operator: event.target.getAttribute('operator_choose')});
    this.setState({ showErrorMessageToChooseOperator:false });
  }
  render() {
      return (
          <div className="col-3" style={{border:1+ 'px solid', margin:5, borderRadius:10+'px', padding:20+'px'}}>
              <h2>Calculator in React</h2>
              <hr></hr>
              <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                      <label>First Number</label>
                      <input type="text"
                          className="form-control"
                          value={this.state.firstAlgarismo}
                          onChange={(event) => this.setState({ firstAlgarismo: event.target.value})}
                          placeholder="first algarismo" />
                  </div>
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
                  <div className="form-group">
                      <label>Second Number</label>
                      <input type="text"
                          className="form-control"
                          value={this.state.secondAlgarismo}
                          onChange={(event) => this.setState({ secondAlgarismo: event.target.value})}
                          placeholder="second algarismo" />
                  </div>

                  <div className="form-group">
                      <button className="btn btn-success form-control" type="submit">Calculate:</button>
                  </div>
                  <div className="form-group">
                      <input type="text"
                          disabled
                          className="form-control"
                          value={this.state.result}
                           />
                      </div>
                  
              </form>
          </div>
      );
  }
}

export default Calculator;
