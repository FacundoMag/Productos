import { Component } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios';
import './App.css'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categorias: [],
      productos: []
  }
}


  buscarCategorias(){
    const url = "https://productos.ctpoba.edu.ar/api/categorias"
    axios.get(url)
    .then((resp)=>{
    this.setState({categorias: resp.data.categorias})
    }
  )
}

  buscarProductos(){
    const url = "https://productos.ctpoba.edu.ar/api/productos"
    axios.get(url)
    .then((resp) =>{
      this.setState({productos: resp.data.productos})
    })
  }
  render() {
    return (
    <div className="App">
        <span>
          APP
        </span>
        <input
          type="text"
          value="Buscar"
          onClick={() => this.buscarCategorias()} />

          <select
          value={this.state.categoria_id}
          onChange={() => this.setState({categoria_id: e.target.value})}
          >
            {this.state.categorias.map((categoria, i) => 
              <option key={categoria.id} value={categoria.id}>
                {categoria.nombre}
              </option>
            )}
          </select>
          <button 
          className='Buscar' 
          onClick={() => this.buscarProductos()}
          >Buscar</button>
      </div>
    )
  }
}
