import React, { Component } from "react";
import Product from "../components/product";

export default class Store extends Component {
    render() {
        return (
            <div id="store">
                <h1>Store</h1>
                <div id="products-list">
                    <Product name="Product1" price="99.99" quantity="100" image_href=""/>
                    <Product name="Product1" price="33.99" quantity="0" image_href=""/>
                    <Product name="Product1" price="33.99" quantity="0" image_href=""/>
                    <Product name="Product1" price="33.99" quantity="0" image_href=""/>
                    <Product name="Product1" price="33.99" quantity="0" image_href=""/>
                    <Product name="Product1" price="33.99" quantity="0" image_href=""/>
                </div>
            </div>
        )
    }
}