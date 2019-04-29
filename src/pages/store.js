import React, { Component } from "react";
import Product from "../components/product";
import database from '../components/firebase';

export default class Store extends Component {

    constructor(props) {
        super(props);

        const products = [];

        database.collection("products").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {

                var product = doc.data();

                products.push(product);
            })
        });

        this.state = { products };
    }

    render() {
        console.log(this.state.products);
        return (
            <div id="store">
                <h1>Store</h1>
                <div id="products-list">
                    {this.state.products.map((product) => (
                        <>
                        <Product name="Hello" price="39.00" quantity="10" image_href="" />
                        </>
                    ))}
                </div>
            </div>
        )
    }
}