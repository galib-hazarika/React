import { useState } from "react";
const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];

function Logo() {
  return <h1>🌴 Far Away 💼</h1>;
}
function Form() {
  const [description, setInput] = useState("");
  const [quantity, setQuantity] = useState(1);
  const handleSubmit = (e) => {
    e.preventDefault();
    const newQuantity = {
      id: Number(initialItems[initialItems.length - 1].id) + 1,
      description,
      quantity,
      packed: false,
    };
    console.log(newQuantity);
    setInput("");
    setQuantity(1);
  };
  return (
    <form className='add-form' onSubmit={(e) => handleSubmit(e)}>
      <h3>What do you need for you trip ❓</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type='text'
        placeholder='Item...'
        value={description}
        onChange={(e) => setInput(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
function PackingList() {
  return (
    <div className='list'>
      <ul>
        {initialItems.map((item) => (
          <Item item={item} />
        ))}
      </ul>
    </div>
  );
}
function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
    </li>
  );
}
function Stats() {
  return (
    <footer className='stats'>
      <em>You have X item in your list , you packed X (X%)</em>
    </footer>
  );
}
function App() {
  return (
    <div className='app'>
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

export default App;
