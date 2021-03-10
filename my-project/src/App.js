import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register/register';
import Roommap from './pages/RoomMap/index'; 
import Booking from './pages/Booking/index';
import ListBooking from './pages/Listbooking/index';
export default function App() {
  return (
    <Router>
      
        <Switch>
        <Route path="/listbooking">
            <ListBooking />
          </Route>

        <Route path="/booking">
            <Booking />
          </Route>

        <Route path="/login">
            <Login />
          </Route>
          
          <Route path="/register">
            <Register />
          </Route>

          <Route path="/Roommap">
            <Roommap />
          </Route>
         
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  );
}