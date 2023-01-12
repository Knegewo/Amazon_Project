import './App.css';
import Header from "./header/Header";
import Home from './home/Home';
import {BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Login from './login/Login';
import Checkout from "./checkout/Checkout";
import Payment from './payments/Payment'
import { useStateValue } from './StateProvider';
import React, { useEffect, useState } from 'react';
import { auth } from './firebase';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './orders/Orders';
// import Orders from './orders/Orders';


// const promise = loadStripe('process.env.REACT_APP_PRIMARY_KEY')
const promise = loadStripe('pk_test_51MLhHJAA7PYsDXsaYgQp6nKMv8pzLibpsjsKs1v1IzCnIKpcNH9SIR9fU01yWqRKAKPbsDJaGkvymo5GGJagBcIc00Ljhflo0K');

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      //console.log("The user is >>>", authUser)
      if (authUser) {
        //was logged in or just logged in
        dispatch({
          type: 'SET_USER',
          user: authUser,
        });
      } else {

        dispatch ({
          type: 'SET_USER',
          user: null, 
        });
      }
    });
    
  }, []);

  return (
    <Router> 
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/payment" 
            element={
            <> 
            <Header />
            <Elements stripe={promise}> 
              <Payment />  
            </Elements>
          </>
          }
          />
          <Route path="/" element={<><Header /><Home/></>} />
          <Route path="/checkout" element={<><Header /><Checkout /></>} />
          <Route path="/orders" element={<><Header /><Orders /></>} />
          {/* <Route path="/orders" element={<><Header /><Orders /></>} /> */}
          <Route path="/" element={<Home />} />
      
        </Routes>
      </div>
    </Router>
  );
}

export default App;
