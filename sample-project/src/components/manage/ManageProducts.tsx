import { Button, Col, Row } from "react-bootstrap"

const productList = [
    {
        "id": 329874,
        "name": "Book",
        "price": 49.99,
        "noOfItemInStock": 100,
        "imgUrl": "/images/Book.jpg"
    },
    {
        "id": 329875,
        "name": "Mobile Phone",
        "price": 999.99,
        "noOfItemInStock": 101,
        "imgUrl": "/images/Phone.jpg"
    },
    {
        "id": 329876,
        "name": "Laptop",
        "price": 1199.99,
        "noOfItemInStock": 102,
        "imgUrl": "/images/Laptop.jpg"
    },
    {
        "id": 329877,
        "name": "Table",
        "price": 99.99,
        "noOfItemInStock": 103,
        "imgUrl": "/images/Table.jpg"
    }
]

export function ManageProducts() {
    return (
        <>
            <h1>Manage Products</h1>
            <Row>
                <Col>Id</Col>
                <Col>name</Col>
                <Col>price</Col>
                <Col>No of Items In Stock</Col>
                <Col>img </Col>
                <Col>Delete</Col>
            </Row>
            {productList.map(item => (<Row>
                <Col>{item.id}</Col>
                <Col>{item.name}</Col>
                <Col>{item.price}</Col>
                <Col>{item.noOfItemInStock}</Col>
                <Col><img src={item.imgUrl} alt="" /></Col>
                <Col><Button>Delete Item</Button></Col>
            </Row>))}
        </>
    )
}