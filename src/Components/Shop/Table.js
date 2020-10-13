import React, { Component } from 'react'
export default class Table extends Component {
    state= { 
        ingredients: [],   
    }   
    componentDidMount(){
        fetch('https://recipe-rissoto.now.sh/recipe')
        .then((response)=> response.json())
        .then((data)=> this.setState({ingredients:data.ingredients}))
    } 

    render() {
        console.log(this.state.ingredients)
        return (
            <div>
                <table className="table table-striped">
                <thead>
                    <td>Items: </td>
                    <td>Ingrediente: </td>
                    <td>Precio: </td>
                    <td>Cantidad: </td>
                </thead>
                <tbody>
                {this.state.ingredients.length > 0 && this.state.ingredients.map(ingredient=> (
                    <tr>
                    <div className="form-group">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="gridCheck"/>
                            </div>
                        </div>
                        <th scope="col">{ingredient.product}</th>
                        <th scope="col">{ingredient.price}</th>
                        <th scope="col">
                        <input type="number" name="quantityName" min="0.01" placeholder="01" required>
                        </input>
                        </th>
                    </tr>
                    ))}
                </tbody>
                </table>
            </div>
        )
    }
}