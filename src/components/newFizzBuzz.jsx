import React, { Component } from 'react';
import Input from "./components/input";
import fizzBuzzCounter from "./utilities/fizzBuzzList";
import './App.css';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fizzBuzzCounter: [],
            num: 0
        }
    }


    updateNum = event => this.setState({ num: event.target.value });

    render() {
        return (
            <div className="FizzBuzz">
                <header className="FizzBuzz-header">
                    <p>
                        <Input value={this.state.num} onChange={this.updateNum} />
                        <ol>
                            {fizzBuzzCounter(this.state.num).map((num, i) => <li key={num + i}>{num}</li>)}
                        </ol>
                    </p>
                </header>
            </div>
        );
    }
}

export default newFizzBuzz;