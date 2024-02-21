import React, { useState} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Products from './components/ProductPage';
import Hairstyles from './components/HairstylesPage';
import Contact from './components/Contact';
import './App.css'

//building my API
function App() {
  const [hairstyles, setHairstyles] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
 
  return (
      <Router>
        <div className="app">
                <Header />
                <div className="content">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/shop" component={Shop} />
                        <Route path="/hairstyles" component={Hairstyles} />
                        <Route path="/contact" component={Contact} />
                    </Switch>
                </div>
            </div>      
      </Router>
  );
}

export default App;






