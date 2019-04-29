import React, { Component } from "react";
import database from '../components/firebase';

export default class Admin extends Component {
    
    submitItem(event) {
        var name = document.getElementById("product-name").value.trim();
        var quantity = parseInt(document.getElementById("product-quantity").value);
        var price = parseInt(document.getElementById("product-price").value);
        var image = document.getElementById("product-image".value) || "";
        image = image.trim();

        var products = database.collection("products").where("name", "==", name);

        if(products.length > 0) {
            alert(products);
        } else {
            database.collection("products").add({
                "name": name,
                "quantity": quantity,
                "price": price,
                "href": image
            });
        }
    }
    
    render() {
        return (
            <div id="admin">
                <h1>Administration</h1>
                <h3>Add or Edit Item</h3>
                <form>
                    <label id="error-messages"></label>
                    <label>
                        Product Name:
                        <input type="text" id="product-name" required></input>
                    </label>
                    <label>
                        Product Quantity:
                        <input type="number" id="product-quantity" min="0" required></input>
                    </label>
                    <label>
                        Product Price:
                        <input type="number" id="product-price" min="0" required></input>
                    </label>
                    <label>
                        Product Image:
                        <input type="text" id="product-image"></input>
                    </label>
                    <input type="submit" onClick={this.submitItem}/>
                </form>
            </div>
        )
    }
}