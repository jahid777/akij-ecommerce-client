import './App.css';
import Home from './Component/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import CreateProduct from './Component/Admin/CreateProduct/CreateProduct';
import AllProductControl from './Component/Admin/AllProductColtrol/AllProductControl';


function App() {
  return (
    <Router>
       <Switch>
         <Route exact path="/">
           <Home></Home>
         </Route>
         <Route path="/createProduct">
           <CreateProduct></CreateProduct>
         </Route>
         <Route path="/allProductControl">
           <AllProductControl></AllProductControl>
         </Route>
       </Switch>
    </Router>
  );
}

export default App;
