import { Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { Home } from './home/Home';
import { ManageProducts } from './manage/ManageProducts';
import { NewProduct } from './product/AddNewProduct';
import { MyAppNavBar } from './NavBar';

function App() {
  return (
    <>
      <MyAppNavBar></MyAppNavBar>
      <Container className='mb-1'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/newproduct" element={<NewProduct />} />
          <Route path="/manageproducts" element={<ManageProducts />} />
        </Routes>
      </Container>
    </>
  )
}

export default App;
