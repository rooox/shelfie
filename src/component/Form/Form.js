import React from 'react';

export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imgUrl: '',
            name: '',
            price: 0
        }
        this.createNewProduct = this.createNewProduct.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }
    handleInput(event){
        this.setState({ 
          [event.target.name]: event.target.value
        })
      }
    createNewProduct(){
        var newProduct = {name: this.state.name, price: this.state.price, imgurl: this.state.imagurl}

        // axios.post('/api/newProduct', newProduct)
        // .then((res) => this.setState({inventory: res.data}))

    }
    
    createName(){

    }
    createPrice(){

    }
    addImage(){

    }

   render() {
       return(
    <div className='Form'>
              <div>Form</div>
        {/* //    <img>{this.state.image} <img/> */}
         <h3>Image URL</h3>
          <input type="text" onChange={(e)=> this.setState({imgUrl : e.target.value})}/>
          <h3>Name</h3>
           <input type="text" onChange={(e)=> this.setState({name : e.target.value})}/>
           <h3>Price</h3>
          <input type="text" onChange={(e)=> this.setState({price : e.target.value})}/>
          
           
          <button onClick={this.createNewProduct}> Cancel </button>
          <button onClick={this.createNewProduct}> Add to Inventory </button>
    </div>
       )
   }
}