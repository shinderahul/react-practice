import React from 'react';

class InputSubmit extends React.Component {
   render() {
      return (
        <input type="submit" value={this.props.value} className="btn btn-primary" />
      );
   }
}

export default InputSubmit;
