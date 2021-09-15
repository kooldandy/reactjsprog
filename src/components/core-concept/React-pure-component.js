import React from 'react';

export class PureButton extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            value: props.value,
            clickCb: props.clickCb
        }
        
        this.buttonHandler = this.buttonHandler.bind(this);
    }

    buttonHandler(event){
        this.state.clickCb(event);
    }
    render(){
        return(
            <input type='button' onClick={this.buttonHandler} value={this.state.value}/>
        )
    };
}