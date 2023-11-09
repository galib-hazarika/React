import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; //Method of global styling
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className='container'>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
function Header() {
  //Adding some inline styling to individual componenet
  //const style = { color: "red", fontSize: "45px", textTransform: "uppercase" };
  //Above is a method for inline styling
  const style = {};
  return (
    <header className='header'>
      <h1 style={style}>Gracia Italiano</h1>
    </header>
  );
}
function Menu() {
  return (
    <main className='menu'>
      <h2>Our Menu</h2>
      {/* Sending props to child componenet */}
      <Pizza />
    </main>
  );
}
//Reciving props from parent componenet
function Pizza(props) {
  return (
    <div className='pizza'>
      <div>
        <h3>Pizza</h3>
        <p></p>
        <span></span>
      </div>
    </div>
  );
}
function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isopen = hour >= openHour && hour <= closeHour;

  return (
    <footer className='footer'>
      {new Date().toLocaleTimeString()} We're currently open
    </footer>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
