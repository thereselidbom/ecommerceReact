import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/navigation/Navbar';
import Home from './views/Home';
import Products from './views/Products';
import Signin from './views/Signin';
import Details from './views/Details'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Route exact path="/" component={Home} />
      <div className="container mt-5">
        <Switch>
         
          <Route exact path="/products" component={Products} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/Details/:id" component={Details} />

          
         
        </Switch>
      </div>

    </BrowserRouter>
  );
}

export default App;