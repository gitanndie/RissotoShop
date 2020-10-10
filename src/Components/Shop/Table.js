import React, { Component } from 'react'

export default class Table extends Component {
    render() {
        return (
            <div>
                <table class="table table-striped">
                <thead>
                    <tr>
                    <div class="form-group">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="gridCheck"/>
                            
                            </div>
                        </div>
                    <th scope="col">Foto</th>
                    <th scope="col">Articulo</th>
                    <th scope="col">Precio</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row"> 
                        <div class="form-group">
                            <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="gridCheck"/>
                            </div>
                        </div>
                    </th>
                    <td>Foto</td>
                    <td>Articulo</td>
                    <td>Precio</td>
                    </tr>
                    <tr>
                    <th scope="row">
                    <div class="form-group">
                            <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="gridCheck"/>
                            </div>
                        </div>
                    </th>
                    <td>Foto</td>
                    <td>Articulo</td>
                    <td>Precio</td>
                    </tr>
                    
                </tbody>
                </table>
            </div>
        )
    }
}
