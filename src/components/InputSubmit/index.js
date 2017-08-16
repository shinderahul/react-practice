import React from 'react';
import ReactDOM from 'react-dom';

class InputSubmit extends React.Component {
   render() {
      return (
        <input type="submit" value={this.props.value} className="btn btn-primary" />
      );
   }
}

export default InputSubmit;
