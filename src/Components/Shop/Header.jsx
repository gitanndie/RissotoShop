import React, { Component } from 'react';
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div className="container">
        <h2 className="text-left">
          Ingredientes
        </h2>
        <h1 className="text-left">
          { this.props.name }
        </h1>
        <div className="row">
          <div className="col-md-12">
            <p className="text-left">  
            <a href="">Seleccionar todo</a> | <a href="">Deseleccionar todo</a> </p>
          </div>
        </div>
        <hr/>
      </div>
    );
  }
}
export default Header;