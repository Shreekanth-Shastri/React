import { ChangeEvent, FormEvent, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { redirect } from "react-router-dom";

export function NewProduct() {

    interface ProductDetails {
        productName: string;
        noOfItemsInStock: number;
        price: number;
        category: string;
    };

    const [productDetails, setProductDetails] = useState<ProductDetails>({ productName: "null", noOfItemsInStock: 0, price: 0, category: "Misc" });

    function handleOnChange(event: ChangeEvent<HTMLInputElement>): void {
        const name = event.target.name;
        const value = event.target.value;
        setProductDetails(productDetails => ({ ...productDetails, [name]: value }));
    }

    function handleOnChangeSelect(event: ChangeEvent<HTMLSelectElement>): void {
        const name = event.target.name;
        const value = event.target.value;
        setProductDetails(productDetails => ({ ...productDetails, [name]: value }));
    }

    function handleSubmit(event: FormEvent<HTMLFormElement>): void {
        event.preventDefault();
        const reqHeaders = new Headers();
        reqHeaders.append("Content-Type", "application/json");
        reqHeaders.append("Authorization", "Bearer qwertyuiopasdfghjklzxcvbnm");
        const payload = JSON.stringify(productDetails);
        var requestOptions = {
            method: "POST",
            headers: reqHeaders,
            body: payload
        }
        const URL = "https://some-domain.com/endpoint";
        fetch(URL, requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log("error", error));
        alert("send jsonValue to api using fetch: " + payload);
    }

    return (
        <>
            <h1>New Product</h1>
            <form onSubmit={handleSubmit}>
                <Row>
                    <Col>
                        <label>Product Name:</label>
                    </Col>
                    <Col>
                        <input type="text" name="productName" value={productDetails.productName} onChange={handleOnChange} />
                    </Col>
                    <Col>&nbsp;</Col>
                    <Col>&nbsp;</Col>
                </Row>
                <Row>
                    <Col>
                        <label>No of items in stock: </label>
                    </Col>
                    <Col>
                        <input type="text" name="noOfItemsInStock" value={productDetails.noOfItemsInStock} onChange={handleOnChange} />
                    </Col>
                    <Col>&nbsp;</Col>
                    <Col>&nbsp;</Col>
                </Row>
                <Row>
                    <Col>
                        <label>Price:</label>
                    </Col>
                    <Col>
                        <input type="text" name="price" value={productDetails.price} onChange={handleOnChange} />
                    </Col>
                    <Col>&nbsp;</Col>
                    <Col>&nbsp;</Col>
                </Row>
                <Row>
                    <Col>
                        <label>Category:</label>
                    </Col>
                    <Col>
                        <select name="category" value={productDetails.category} onChange={handleOnChangeSelect}>
                            <option value="Electronics">Electronics</option>
                            <option value="Furniture">Furniture</option>
                            <option value="Misc">Misc</option>
                        </select>
                    </Col>
                    <Col>&nbsp;</Col>
                    <Col>&nbsp;</Col>
                </Row>
                <Row>
                    <Col>
                        <label>Img:</label>
                    </Col>
                    <Col>
                        <input type="file" onChange={handleOnChange} />
                    </Col>
                    <Col>&nbsp;</Col>
                    <Col>&nbsp;</Col>
                </Row>
                <Row>
                    <Col>&nbsp;</Col>
                    <Col>
                        <input type="submit" value="Submit"></input>
                    </Col>
                    <Col>&nbsp;</Col>
                    <Col>&nbsp;</Col>
                </Row>

            </form>
        </>
    )
}