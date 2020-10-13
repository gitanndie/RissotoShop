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
            Modal Head
            </Modal.Header>
            <Modal.Body>
            Hi,React modal is here
            </Modal.Body>
            <Modal.Footer>
            <Button onClick={()=>{this.handleModal()}}>
            close modal
            </Button>
            </Modal.Footer>
        </Modal>
        </div>
        )
    }
}
export default Modals