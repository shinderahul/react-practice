import React from 'react';

class InputText extends React.Component {
   render() {
      return (
        <input type="text" value={this.props.value} placeholder={this.props.placeholder} className="form-control" />
      );
   }
}

export default InputText;
