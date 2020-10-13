import React, { Component } from 'react'
import Header from './Header';
import Ingredient from './Ingredient';
import Price from './Price';
import Out from './Out';
import axios from 'axios';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredientsSeleccionados: [],
      gastosDeEnvio: 7
    };
  }
  componentDidMount() {
    axios.get(`https://recipe-rissoto.now.sh/recipe`)
      .then(res => {
        const data = res.data;
        this.setState({
          name: data.name,
          shippingCost: data['shipping-cost'],
          currency: data.currency,
          ingredients: data.ingredients,
        });
      })
  }
  seleccionarIngredientes = (ingredienteNombre) => {
    let ingredientes = this.state.ingredients;
    let newIngrediente = null;
    ingredientes.forEach((ingrediente) => {
      if (ingrediente.product === ingredienteNombre) {
        newIngrediente = ingrediente;
      }
    });
    let ingredientsSeleccionados = this.state.ingredientsSeleccionados;
    ingredientsSeleccionados.push(newIngrediente);
    this.setState(prevState => ({
      ingredientsSeleccionados: [...new Set(ingredientsSeleccionados.flat())]
    }));
    this.calcular();
  };
  quitarIngredientes = (ingredienteNombre) => {
    let ingredientesSeleccionados = this.state.ingredientsSeleccionados;
    ingredientesSeleccionados.forEach((ingrediente, index) => {
      if (ingrediente.product === ingredienteNombre) {
        ingredientesSeleccionados.splice(index, 1);
      }
    });
    this.setState(prevState => ({
      ingredientsSeleccionados: [...new Set(ingredientesSeleccionados.flat())]
    }));
    this.calcular();
  }
  calcular = () => {
    const precios = this.state.ingredientsSeleccionados.map((ingredient) => {
      return ingredient.price
    });
    let subtotal = null;
    if (precios.length > 0) {
      subtotal = precios.reduce((sum, x) => sum + x);
    } else {
      subtotal = 0;
    }
    const total = subtotal + this.state.gastosDeEnvio;
    this.setState({
      subtotal: subtotal,
      total: total
    });
  }
  render() {
    return (
      <div>
        <div className="container" id="card">
          <div className="card">
          <div className="card-header">
            <Header name={this.state.name} />
            {this.state.ingredients && this.state.ingredients.map((ingredient, i) =>
              <Ingredient
                key={i}
                product={ingredient.product}
                brand={ingredient.brand}
                items={ingredient.items}
                quantity={ingredient.quantity}
                price={ingredient.price}
                currency={this.state.currency}
                seleccionarIngredientes={this.seleccionarIngredientes}
                quitarIngredientes={this.quitarIngredientes} />
            )}
            <Out
              items={this.state.ingredientsSeleccionados.length}
              subtotal={this.state.subtotal}
              gastosDeEnvio={this.state.gastosDeEnvio}
              total={this.state.total}
              currency={this.state.currency} />
            <Price total={this.state.total}
              currency={this.state.currency} />
          </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Card;