import React, { Component } from "react";

export default class Product extends Component {
    constructor(props) {
        super(props);
    }

    addToCard(event) {
        console.log("Added to cart!");
    }

    render() {
        return (
            <div className="product">
                <h3>{this.props.name}</h3>
                <p>Price: ${this.props.price}</p>
                <p>Quantity available: {this.props.quantity}</p>
                <img src={this.props.image_href} width="150" height="150" alt="No image present"/>
                <button className="product_buy_button" onClick={this.addToCard}>Add to Cart</button>
            </div>
        );
    }

}