import React from 'react';
import { PureButton } from './React-pure-component';
export class Counter extends React.Component {
    constructor(){
        super();
        this.state = {
            counter: 0
        }
        this.clicked = this.clicked.bind(this);
    }

    clicked = (event) =>{
        const type = event.target.value
        let _count = this.state.counter;

        _count = (type === 'Decrement') ?
        this.state.counter - 1 :
        this.state.counter + 1

        this.setState({
            counter: _count
        });
    }

    render(){
        return (
            <div className="App-counter"> 
                Counter
                <p>
                    {this.state.counter}
                </p>
                <div>

                    <PureButton value='Increment' clickCb={this.clicked}></PureButton>
                    <PureButton value='Decrement' clickCb={this.clicked}></PureButton>
                    
                </div>
            </div>
            
            
        )
    } 
}