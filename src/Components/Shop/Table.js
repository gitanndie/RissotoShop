import React, { Component } from 'react'
export default class Table extends Component {
    state= { 
        ingredients: [],   
    }   
    componentDidMount(){
        fetch('https://recipe-rissoto.now.sh/recipe')
        .then((response)=> response.json())
        .then((data)=> this.setState({ingredients:[...this.state.ingredients,data]}))
    } 

    render() {
        console.log(this.state.ingredients)
        return (
            <div>
                <table className="table table-striped">
                <thead>
                {this.state.ingredients.map(ingredient => (
                    <tr>
                    <div className="form-group">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="gridCheck"/>
                            </div>
                        </div>
                    <th scope="col"> </th>
                    <th scope="col">{ingredient.product} </th>
                    <th scope="col">{ingredient.price} </th>
                    </tr>
                    ))}
                </thead>
                <tbody>
                    <tr>
                    <th scope="row"> 
                        <div className="form-group">
                            <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="gridCheck"/>
                            </div>
                        </div>
                    </th>
                    <td>Foto</td>
                    <td>Articulo</td>
                    <td>Precio</td>
                    </tr>
                    <tr>
                    <th scope="row">
                    <div className="form-group">
                            <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="gridCheck"/>
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
