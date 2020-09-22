import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import HomeScreen from "./Screens/HomeScreen";
import ProductScreen from "./Screens/ProductScreen";
export class App extends Component {
  render() {

    const openMenu = () => {
      document.querySelector(".sidebar").classList.add("open");
    }
    const closeMenu = () => {
      document.querySelector(".sidebar").classList.remove("open");
    }

    return (

  <BrowserRouter>
      <div class="grid-container">
        
    <header class="header">
      <div class="brand">
        <button onClick={openMenu}>
          &#9776;
        </button>
        <a href="index.html">armazona</a>
      </div>
      <div class="header-links">
        <a href="cart.html">Cart</a>
        <a href="signin.html">Sign In</a>
      </div>
    </header>
    <aside class="sidebar">
      <h3>Shopping Categories</h3>
      <button class="sidebar-close-button" onClick={closeMenu}>x</button>
      <ul>
        <li>
          <a href="index.html">Pants</a>
        </li>

        <li>
          <a href="index.html">Shirts</a>
        </li>

      </ul>
    </aside>
    <main class="main">
      <div class="content">
        <Route path="/product/:id" component={ProductScreen} />
      
        <Route path="/" exact ={true} component= {HomeScreen}/>
       
      </div>

    </main>
    <footer class="footer">
      All right reserved.
    </footer>
  </div>
  </BrowserRouter>
    )
    
  }
}

export default App
