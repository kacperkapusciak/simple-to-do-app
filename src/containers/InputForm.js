import React, {Component} from 'react';

class InputForm extends Component {
  state = {
    content: ''
  }

  render(){
    return (
      <div>
        <form>
          <input
            type='text'
            placeholder='What you have to do'
            value={this.state.content} />
        </form>
      </div>
    );
  }
}

export default InputForm;