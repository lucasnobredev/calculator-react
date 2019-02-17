import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

class Calculator extends React.Component{
    state = { firstAlgarismo:0, secondAlgarismo:0, result:0, operator:"", showErrorMessageToChooseOperator:false }
    handleSubmit = (event) => {
        event.preventDefault();
        console.log('First:' + this.state.firstAlgarismo);
        console.log('Second:' + this.state.secondAlgarismo);
        console.log('operator:' + this.state.operator);

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
                            <div className="col-3">
                                <button style={{padding:0}} className={this.state.operator === '+' ? "btn btn-warning form-control" : "btn btn-info form-control"} type="button" onClick={(event) => { this.setState({ operator: "+"}); this.setState({ showErrorMessageToChooseOperator:false }) }}>
                                    <span style={{fontSize: 25 +'px', fontFamily: 'monospace'}}>
                                    +
                                    </span>
                                </button>
                            </div>
                            <div className="col-3">
                                <button style={{padding:0}} className={this.state.operator === '-' ? "btn btn-warning form-control" : "btn btn-info form-control"} type="button" onClick={(event) => { this.setState({ operator: "-"}); this.setState({ showErrorMessageToChooseOperator:false }) }}>
                                    <span style={{fontSize: 25 +'px', fontFamily: 'monospace'}}>
                                    -
                                    </span>
                                </button>
                            </div>
                            <div className="col-3">
                                <button style={{padding:0}} className={this.state.operator === '*' ? "btn btn-warning form-control" : "btn btn-info form-control"} type="button" onClick={(event) => { this.setState({ operator: "*"}); this.setState({ showErrorMessageToChooseOperator:false }) }}>
                                    <span style={{fontSize: 25 +'px', fontFamily: 'monospace'}}>
                                    *
                                    </span>
                                </button>
                            </div>
                            <div className="col-3">
                                <button style={{padding:0}} className={this.state.operator === '/' ? "btn btn-warning form-control" : "btn btn-info form-control"} type="button" onClick={(event) => { this.setState({ operator: "/"}); this.setState({ showErrorMessageToChooseOperator:false }) }}>
                                    <span style={{fontSize: 25 +'px', fontFamily: 'monospace'}}>
                                    /
                                    </span>
                                </button>
                            </div>
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

ReactDOM.render(<Calculator />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
