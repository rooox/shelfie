import React from 'react';
import Product from '../Product/Product';

export default class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
   render() {
       return(
           <section className="dashboard">
            <div>Dashboard</div>
           <Product/>
           </section>
       )
   }
}