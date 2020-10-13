import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from './Table';
import Calculo from './Calculo'
export default class Card extends Component {
    
    render() {
        return (
            <div className="container" id="card">
                <div className="card">
                <div className="card-header">
                    <p>Ingredientes</p>
                <h1>Risotto de setas (vegano)</h1>
                <a href="/">Seleccionar Todo</a> <span>|</span> <a href="/">Deseleccionar Todo</a>
                </div>
                <div>
            <Table/>
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
