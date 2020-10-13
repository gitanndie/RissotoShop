import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from './Table';
import Modal from './Modals';

export default class Card extends Component {
    /* state= { 
        ingredients: [],   
    }   
    componentDidMount(){
        fetch('https://recipe-rissoto.now.sh/recipe')
        .then((response)=> response.json())
        .then((data)=> this.setState({ingredients:[...this.state.ingredients,data]}))
    }  */
    render() {
        return (
            <div className="container" id="card">
                <div className="card">
                <div className="card-header">
                    <p>Ingredientes</p>
                <h1>Risotto de setas (vegano)</h1>
                <a href="">Seleccionar Todo |</a> <a href=""> Deseleccionar Todo </a>
                </div>
                <div>
            <Table/>
            </div>
            
            <div>
                <div>
                    <h6>Items:</h6>
                    <h6>Subtotal:</h6>
                    <h6>Gastos de Envio:</h6>
                    <h6>Total:</h6>
                </div>
            <button type="button" id="modal" class="btn btn-success" onClick={this.props.modal}>Comprar Ingredientes</button>
            </div>

            <div className="modal" tabindex="-1" id="modal">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Modal title</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <p>Modal body text goes here.</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
        )
    }
}
