import React, { Component } from 'react'

export default class Calculo extends Component {
    
    render() {
        return (
            <div className="container">
                <h3>Cuenta Total</h3>
                <table className="table table-striped">
                    <thead>
                        <td>Ingrediente: </td>
                        <td>Precio: </td>
                        <td>Cantidad: </td>
                    </thead>
                    <tbody>
                        <td><input type="text" placeholder="Ajo"
                        required></input></td>
                        <td><input type="number" placeholder="5.55"
                        required></input></td>
                        <td><input type="number" placeholder="2"
                        required></input></td>
                    </tbody>
                </table>
                    <button type="button" id="modal" className="btn btn-success" onClick={this.props.modals}></button>
            </div>
        )
    }
}
