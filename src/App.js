import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './component/Dashboard/Dashboard';
import Form from './component/Form/Form';
import Header from './component/Header/Header';


class App extends Component {

  constructor(){
    super();
    this.state = {
      inventory: [],
      // imgUrl: this.props.imageUrl,
      // name: this.props.name,
      // price: this.props.price
    };

  }

componentDidMount(){

}
  // Method to Get Inventory from database
addNewProduct(body){
  axios.post('/api/product', {body})
  .then(res=>this.setState({inventory: res.data}))
}
  render() {
    // // let inventory = this.state.inventory.map((product => {
    // //   return <Product
    // //     imageUrl={product.imgUrl}
    // //     name={product.name}
    // //     image={product.price}
    // //    />
    // }))
    return (
      <div className="App">
      <Header/>
      <Dashboard/>
      <Form/>
      

      </div>
    );
  }
}

export default App;
