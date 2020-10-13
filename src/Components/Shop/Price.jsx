import React, { Component } from 'react'; 
import {Button,Modal} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';

class Price extends Component {
  handleModal(){
    this.setState({show:!this.state.show})
}
  constructor(props) {
    super(props);
    this.state = {
      show:false
    }
  }
  render() {
    return (
            <div>
                <Button className="btn btn-success" onClick={()=>{this.handleModal()}}>
                    Comprar Ingredientes:{this.props.total} {this.props.currency}
                </Button>
                <Modal show={this.state.show}>
                <Modal.Header>
                  Compra Exitosa
                </Modal.Header>
                <Modal.Body>
                  Felicidades, realizaste tu compra con exito
                </Modal.Body>
                <Modal.Footer>
                <Button className="btn btn-success" onClick={()=>{this.handleModal()}}>
                  Cerrar
                </Button>
                </Modal.Footer>
                </Modal>
            </div>
    );
  }
}
export default Price;