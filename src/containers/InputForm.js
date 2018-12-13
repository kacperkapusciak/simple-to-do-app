import React, {Component} from 'react';
import Input from '../styles/Input';

class InputForm extends Component {
  state = {
    content: ''
  }

  changeValueHandler = event => {
    this.setState({content: event.target.value})
  }

  addValueHandler = event => {
    event.preventDefault();
    this.props.submitValue(this.state);
    this.setState({content: ''});
  }

  render(){
    return (
      <div>
        <form onSubmit={this.addValueHandler}>
          <Input
            type='text'
            placeholder='What you have to do'
            value={this.state.content} 
            onChange={this.changeValueHandler}/>
        </form>
      </div>
    );
  }
}

export default InputForm;