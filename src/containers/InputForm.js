import React, {Component} from 'react';

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
          <input
            type='text'
            placeholder='What you have to do'
            value={this.state.content} 
            onClick={this.changeValueHandler}/>
        </form>
      </div>
    );
  }
}

export default InputForm;