import React, { Component } from 'react'

class Out extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div className="container-fluid">
        <div className="col-sm text-left">
        <h3 className="texto-item">Item: 
          <span className="contador-items">{this.props.items}</span>
        </h3>
        <div className="col-sm text-left">
          <span>Subtotal: </span>
          <div>{this.props.subtotal} {this.props.currency}</div>
        </div>
        <div className="col-sm text-left">
          <span>Gastos de envio: </span>
          < div>{this.props.gastosDeEnvio} {this.props.currency}</div>
        </div>
        <div className="col-sm text-left">
          <span>Total: </span>
          <div>{this.props.total} {this.props.currency}</div>
        </div>
        </div>
      </div>
    );
  }
}
export default Out;