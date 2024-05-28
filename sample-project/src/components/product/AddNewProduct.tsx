import { ChangeEvent, FormEvent, useState } from "react";
import { Col, Row } from "react-bootstrap";

export function NewProduct() {

    interface ProductDetails {
        productName: string;
        noOfItemsInStock: number;
        price: number
    };

    const [productDetails, setProductDetails] = useState<ProductDetails>({ productName: "null", noOfItemsInStock: 0, price: 0 });

    function handleOnChange(event: ChangeEvent<HTMLInputElement>): void {
        const name = event.target.name;
        const value = event.target.value;
        setProductDetails(values => ({ ...values, [name]: value }))
    }

    function handleSubmit(event: FormEvent<HTMLFormElement>): void {
        event.preventDefault();
        alert(JSON.stringify(productDetails));
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
                        <input type="text" value={productDetails.productName} onChange={handleOnChange} />
                    </Col>
                    <Col>&nbsp;</Col>
                    <Col>&nbsp;</Col>
                </Row>
                <Row>
                    <Col>
                        <label>No of items in stock: </label>
                    </Col>
                    <Col>
                        <input type="text" value={productDetails.noOfItemsInStock} onChange={handleOnChange} />
                    </Col>
                    <Col>&nbsp;</Col>
                    <Col>&nbsp;</Col>
                </Row>
                <Row>
                    <Col>
                        <label>Price:</label>
                    </Col>
                    <Col>
                        <input type="text" value={productDetails.price} onChange={handleOnChange} />
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