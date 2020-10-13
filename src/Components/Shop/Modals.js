import 'bootstrap/dist/css/bootstrap.css';
import {Button,Modal} from "react-bootstrap"
import React  from 'react'

class Modals extends React.Component {
    constructor()
    {
        super()
        this.state={
        show:false
        }
    }
    handleModal(){
        this.setState({show:!this.state.show})
    }
    
    render() {
        return (
        <div>
            <Button onClick={()=>{this.handleModal()}}>
                Comprar Ingredientes
            </Button>
            <Modal show={this.state.show}>
                <Modal.Header>
                Compra Exitosa
                </Modal.Header>
                <Modal.Body>
                Felicidades, realizaste tu compra con exito
                </Modal.Body>
                <Modal.Footer>
                <Button onClick={()=>{this.handleModal()}}>
                Cerrar
                </Button>
                </Modal.Footer>
            </Modal>
        </div>
        )
    }
}
export default Modals