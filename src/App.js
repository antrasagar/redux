import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './containers/header';
import ProductList from './containers/productList';
import ProductDetails from './containers/productdetails';
import { ActionTypes } from './redux/constants/actionType';

function App() {
  return (
    <div className="App">
      <switch>
      <Router>
      <Header/>
      <Route path = "/" exact component = {ProductList}/>
      <Route path = "/product/:id" exact component = {ProductDetails}/>
      </Router>
      </switch>
    </div>
  );
}

export default App;
