import React from 'react';

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
                    <input type='button' onClick={this.clicked} value='Increment'/>
                    <input type='button' onClick={this.clicked} value='Decrement'/>
                </div>
            </div>
            
            
        )
    } 
}