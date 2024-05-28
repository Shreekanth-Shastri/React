import { Button, Container, Nav, Navbar } from "react-bootstrap"
import { NavLink } from "react-router-dom"

export function MyAppNavBar() {
    return (
        <Navbar className="bg-white shadow-sm mb-3">
            <Container>
                <Nav className="me-auto">
                    <Nav.Link to="/" as={NavLink}>Home</Nav.Link>
                    <Nav.Link to="/newproduct" as={NavLink}>New Product</Nav.Link>
                    <Nav.Link to="/manageproducts" as={NavLink}>Manage Products</Nav.Link>
                </Nav>
                <Button>User</Button>
            </Container>
        </Navbar>
    )
}