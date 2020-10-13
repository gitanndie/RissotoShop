import React, { Component } from 'react';

class Ingredient extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    }
  }
  handleClick = () => {
    this.setState({
      active: !this.state.active
    })
    if (!this.state.active) {
      this.props.seleccionarIngredientes(this.props.product);
    }
    if (this.state.active) {
      this.props.quitarIngredientes(this.props.product);
    }
  }
  render() {
    return (
      <div className="container-fluid">
            
        <div className="row">
          <div className="col-lg text-left">
            <input type="checkbox" checked={this.state.active} onClick={() => this.handleClick()} />
            <div>
              <h6 className="item">{this.props.items}</h6>
            </div>
            <div>
              <h5>{this.props.product}</h5>
              <h5>{this.props.brand}</h5>
              <h5>{this.props.quantity}</h5>            
            </div>        
          </div>
          <div className="col-lg text-right">
            <div>
              <h5>{this.props.price} {this.props.currency}</h5>
            </div>         
          </div> 
        </div>
        <hr/>
      </div>
    );
  }
}
export default Ingredient;