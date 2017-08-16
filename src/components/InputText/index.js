import React from 'react';
import ReactDOM from 'react-dom';

class InputText extends React.Component {
   render() {
      return (
        <input type="text" value="" placeholder={this.props.placeholder} className="form-control" />
      );
   }
}

export default InputText;
