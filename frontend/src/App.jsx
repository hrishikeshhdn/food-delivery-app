import './App.css';

import Home from './screens/Home';
import Login from './screens/Login';
import { BrowserRouter as Router,Routes,  Route, } from "react-router-dom";
import Signup from './screens/Signup';
import { CartProvider } from './components/ContextReducer';

function App() {
  return (
    <CartProvider>
      <Router>
      <div>  
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/creatuser" element={<Signup />} /> {/* Corrected path */}
        </Routes>
      </div>
    </Router>
    </CartProvider>
  );
}

export default App;
