import React, {Component} from 'react';

class InputForm extends Component {
  state = {
    content: ''
  }

  changeValueHandler = event => {
    this.setState({content: event.target.value})
  }
  
  render(){
    return (
      <div>
        <form>
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