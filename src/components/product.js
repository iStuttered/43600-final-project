import React, { Component } from "react";

export default class Product extends Component {

    addToCard(event) {
        console.log("Added to cart!");
    }

    render() {
        
        console.log(this.props.name);
        console.log(this.props.price.toString());
        console.log(this.props.quantity.toString());

        return (
            <div className="product">
                <h3>{this.props.name}</h3>
                <p>Price: ${this.props.price.toString()}</p>
                <p>Quantity available: {this.props.quantity.toString()}</p>
                <img src={this.props.image_href} width="150" height="150" alt="Not present"/>
                <button className="product_buy_button" onClick={this.addToCard}>Add to Cart</button>
            </div>
        );
    }

}