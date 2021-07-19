import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import MainPage from './Pages/MainPage';
import ProductDetailPage from './Pages/ProductDetailPage';
import CreateProductPage from './Pages/CreateProductPage';
import Nav from 'react-bootstrap/Nav'
import NavBar from 'react-bootstrap/Navbar'
import { LinkContainer } from 'react-router-bootstrap'

function App() {
  return (
    <>
      <Router>
        <NavBar bg="dark" variant="dark" fixed="top">
          <Nav.Item>
            <LinkContainer to="/">
              <Nav.Link >Home</Nav.Link>
            </LinkContainer>
          </Nav.Item>
          <Nav.Item>
            <LinkContainer to="/products/new">
              <Nav.Link >Create</Nav.Link>
            </LinkContainer>
          </Nav.Item>
        </NavBar>
        <Switch>
          <Route path="/products/new">
            <CreateProductPage />
          </Route>
          <Route path="/products/:id">
            <ProductDetailPage />
          </Route>
          <Route path="/" exact>
            <MainPage />
          </Route>
        </Switch>
      </Router>

    </>
  );
}

export default App;
