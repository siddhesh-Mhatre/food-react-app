import './App.css';
import Navbar from './Navbar';
import {Switch, Route ,Redirect} from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import Gift from './Gift';
import Login from './Login';
import Cart from './Cart';
function App() {
  return (
    <>
         <Navbar/>
    
<Switch>
<Route  exact path="/" component={Home} />
<Route exact path="/contact" component={Contact} />
<Route exact path="/gift" component={Gift} />
<Route  exact path="/log" component={Login} />
<Route  exact path="/cart" component={Cart} />
<Redirect to="/" />
</Switch>

    </>
  );
}

export default App;
