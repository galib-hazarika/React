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
  const pizza_data = pizzaData;
  const no_of_pizza = pizza_data.length;
  return (
    <main className='menu'>
      <h2>Our Menu</h2>
      {/* Sending props to child componenet */}

      {no_of_pizza > 0 ? (
        //React fragment needed when have to display two element as separate without having a parent element
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our store oven , all organic , all delicious
          </p>
          <ul className='pizzas'>
            {pizzaData.map((pizza) => (
              <Pizza pizzaobj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>There's nothing to serve at this time come back later :)</p>
      )}
    </main>
  );
}
//Reciving props from parent componenet
function Pizza(props) {
  return (
    <li className={`pizza ${props.pizzaobj.soldOut ? "sold-out" : ""}`}>
      <img src={props.pizzaobj.photoName} alt={props.pizzaobj.name} />
      <div>
        <h3>{props.pizzaobj.name}</h3>
        <p>{props.pizzaobj.ingredients}</p>
        <span>
          {props.pizzaobj.soldOut ? "SOLD OUT" : props.pizzaobj.price}
        </span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isopen = hour >= openHour && hour <= closeHour - 1;

  return (
    <footer className='footer'>
      {isopen ? (
        <Open closeHour={closeHour} />
      ) : (
        <Close openHour={openHour} closeHour={closeHour} />
      )}
    </footer>
  );
}
//Destrucring props
function Close({ openHour, closeHour }) {
  return (
    <div className='order'>
      <p>
        We're happy to welcome you between {openHour}:00 and
        {closeHour}:00
      </p>
    </div>
  );
}
function Open({ closeHour }) {
  return (
    <div className='order'>
      <p>We're open until {closeHour}:00 .Come visit us or order online</p>
      <button className='btn'>Order</button>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
