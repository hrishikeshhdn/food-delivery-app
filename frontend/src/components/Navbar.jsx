// import React ,{ useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
// import Badge from 'react-bootstrap/Badge';
// import Modal from '../Modal';
// import { useCart } from './ContextReducer';
// import Cart from '../screens/Cart';

// export default function Navbar(props) {
//   const [cartView,setCartView] = useState(false);
//   localStorage.setItem('temp', "first")
//   let navigate = useNavigate();
  
//     const handleLogout = () => {
//     localStorage.removeItem('token');
//     navigate('/login');
//   };

//   const loadCart = () =>{
//     setCartView(true)
//   }

//   const items = useCart();
//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-success">
//       <div className="container-fluid">
//         <Link className="navbar-brand fs-1 fst-italic" to="/">
//           GoFood
//         </Link>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="/navbarNav"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav me-auto mb-2">
//             <li>
//               <Link className="nav-link active fs-5" aria-current="page" to="/">
//                 Home
//               </Link>
//             </li>
//             {localStorage.getItem('authToken') ? (
//               <li>
//                 <Link className="nav-link active fs-5" aria-current="page" to="/">
//                   My Orders
//                 </Link>
//               </li>
//             ) : (
//               ''
//             )}
//           </ul>
//           {!localStorage.getItem('authToken') ? (
//             <div className="d-flex">
//               <Link className="btn bg-white text-success mx-1" to="/login">
//                 Login
//               </Link>
//               <Link className="btn bg-white text-success mx-1" to="/creatuser">
//                 Signup
//               </Link>
//             </div>
//           ) : (
//             <div>
//               <div className="btn bg-white text-success mx-2 " onClick={()=>{setCartView(true)}}>
//                 <FontAwesomeIcon icon={faShoppingCart} /> {/* Display the cart icon */}
//                 {' '}
//                 <Badge pill bg="danger">
//                   0
//                 </Badge>
//               </div>
//               {cartView ? <Modal onClose={()=>setCartView(false)}><Cart /></Modal>:null}
//               <div className="btn bg-white text-danger mx-2" onClick={handleLogout}>
//                 Logout
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// }

// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
// import Badge from 'react-bootstrap/Badge';
// import Modal from '../Modal';
// import { useCart } from './ContextReducer';
// import Cart from '../screens/Cart';

// export default function Navbar(props) {
//   const [cartView, setCartView] = useState(false);
//   const navigate = useNavigate();
//   const cartItems = useCart();

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     navigate('/login');
//   };

//   const loadCart = () => {
//     setCartView(true);
//   };

//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-success">
//       <div className="container-fluid">
//         <Link className="navbar-brand fs-1 fst-italic" to="/">
//           GoFood
//         </Link>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="/navbarNav"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav me-auto mb-2">
//             <li>
//               <Link className="nav-link active fs-5" aria-current="page" to="/">
//                 Home
//               </Link>
//             </li>
//             {localStorage.getItem('authToken') ? (
//               <li>
//                 <Link className="nav-link active fs-5" aria-current="page" to="/">
//                   My Orders
//                 </Link>
//               </li>
//             ) : (
//               ''
//             )}
//           </ul>
//           {!localStorage.getItem('authToken') ? (
//             <div className="d-flex">
//               <Link className="btn bg-white text-success mx-1" to="/login">
//                 Login
//               </Link>
//               <Link className="btn bg-white text-success mx-1" to="/creatuser">
//                 Signup
//               </Link>
//             </div>
//           ) : (
//             <div>
//               <div className="btn bg-white text-success mx-2 " onClick={loadCart}>
//                 <FontAwesomeIcon icon={faShoppingCart} /> {/* Display the cart icon */}
//                 {' '}
//                 <Badge  pill bg="danger" className="position-absolute top-1 start-200 translate-upper p-2">
//                   {cartItems.length}
//                 </Badge>
//               </div>
//               {cartView ? <Modal onClose={() => setCartView(false)}><Cart /></Modal> : null}
//               <div className="btn bg-white text-danger mx-2" onClick={handleLogout}>
//                 Logout
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// }
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Badge from 'react-bootstrap/Badge';
import Modal from '../Modal';
import { useCart } from './ContextReducer';
import Cart from '../screens/Cart';

export default function Navbar(props) {
  const [cartView, setCartView] = useState(false);
  const navigate = useNavigate();
  const cartItems = useCart();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const loadCart = () => {
    setCartView(true);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <Link className="navbar-brand fs-1 fst-italic" to="/">
          GoFood
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="/navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2">
            <li>
              <Link className="nav-link active fs-5" aria-current="page" to="/">
                Home
              </Link>
            </li>
            {localStorage.getItem('authToken') ? (
              <li>
                <Link className="nav-link active fs-5" aria-current="page" to="/">
                  My Orders
                </Link>
              </li>
            ) : (
              ''
            )}
          </ul>
          {!localStorage.getItem('authToken') ? (
            <div className="d-flex">
              <Link className="btn bg-white text-success mx-1" to="/login">
                Login
              </Link>
              <Link className="btn bg-white text-success mx-1" to="/creatuser">
                Signup
              </Link>
            </div>
          ) : (
            <div>
              <div className="btn bg-white text-success mx-2  " onClick={loadCart}>
                <FontAwesomeIcon icon={faShoppingCart} /> {/* Display the cart icon */}
                {' '}
                <Badge  pill bg="danger" className="position-absolute top-0 start-200 translate-lower p-2">
                  {cartItems.length}
                </Badge>
              </div>
              {cartView ? <Modal onClose={() => setCartView(false)}><Cart /></Modal> : null}
              <div className="btn bg-white text-danger mx-2" onClick={handleLogout}>
                Logout
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
