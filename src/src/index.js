import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

class Calculator extends React.Component{
    state = { firstAlgarismo:0, secondAlgarismo:0 }
    handleSubmit = (event) => {
        event.preventDefault();
        console.log('First:' + this.state.firstAlgarismo);
        console.log('Second:' + this.state.secondAlgarismo);
    };
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
            <input type="text"
                value={this.state.firstAlgarismo}
                onChange={(event) => this.setState({ firstAlgarismo: event.target.value})}
                placeholder="first algarismo" />
            <input type="text"
                value={this.state.secondAlgarismo}
                onChange={(event) => this.setState({ secondAlgarismo: event.target.value})}
                placeholder="second algarismo" />
            <button type="submit">Go</button>
                </form>
        );
    }
}

ReactDOM.render(<Calculator />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
