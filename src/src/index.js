import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

class Calculator extends React.Component{
    state = { firstAlgarismo:0, secondAlgarismo:0, result:0, operator:"" }
    handleSubmit = (event) => {
        event.preventDefault();
        console.log('First:' + this.state.firstAlgarismo);
        console.log('Second:' + this.state.secondAlgarismo);
        console.log('operator:' + this.state.operator);

        this.setState({
            result: parseInt(this.state.firstAlgarismo) + parseInt(this.state.secondAlgarismo)
        });
        
        console.log('result:' + this.state.result);
    };
    render() {
        return (
            <div className="col-3">
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
                        <div className="row">
                            <div className="col-3">
                                <button style={{padding:0}} className="btn btn-info form-control" type="button" onClick={(event) => this.setState({ operator: "somar"})}>
                                    <span style={{fontSize: 25 +'px', fontFamily: 'monospace'}}>
                                    +
                                    </span>
                                </button>
                            </div>
                            <div className="col-3">
                                <button style={{padding:0}} className="btn btn-info form-control" type="button" onClick={(event) => this.setState({ operator: "somar"})}>
                                    <span style={{fontSize: 25 +'px', fontFamily: 'monospace'}}>
                                    -
                                    </span>
                                </button>
                            </div>
                            <div className="col-3">
                                <button style={{padding:0}} className="btn btn-info form-control" type="button" onClick={(event) => this.setState({ operator: "somar"})}>
                                    <span style={{fontSize: 25 +'px', fontFamily: 'monospace'}}>
                                    *
                                    </span>
                                </button>
                            </div>
                            <div className="col-3">
                                <button style={{padding:0}} className="btn btn-info form-control" type="button" onClick={(event) => this.setState({ operator: "somar"})}>
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
