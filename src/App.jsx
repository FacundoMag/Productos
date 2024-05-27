import { Component } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios';
import './App.css'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categorias: []
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
  render() {
    return (
    <div>
      <span> 
      APP
      </span>
      <input
      type="text"
      value="Buscar"
      onClick={() => this.buscarCategorias}
      />
    </div>
    )
  }
}
