import { useState } from "react";
// let initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
// ];

function Logo() {
  return <h1>🌴 Far Away 💼</h1>;
}
function Form({ items, onAddItems }) {
  const [description, setInput] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newQuantity = {
      id: Date.now(),
      description,
      quantity,
      packed: false,
    };
    onAddItems(newQuantity);
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
function PackingList({ items, onDeleteItem, onTogglePacked, onClearList }) {
  //So select is now controlled element and its state should govern by useState hook
  const [sort, setSort] = useState("input");

  let sortedItems;

  if (sort === "input") sortedItems = items;
  if (sort === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sort === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className='list'>
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            onDeleteItem={onDeleteItem}
            onTogglePacked={onTogglePacked}
          />
        ))}
      </ul>
      <div className='actions'>
        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value='input'>Sort by Input</option>
          <option value='description'>Sort by Description</option>
          <option value='packed'>Sort by Packed Status</option>
        </select>
        <button onClick={onClearList}>Clear List</button>
      </div>
    </div>
  );
}
function Item({ item, onDeleteItem, onTogglePacked }) {
  return (
    <li>
      <input
        type='checkbox'
        value={item.packed}
        onClick={() => onTogglePacked(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
function Stats({ items }) {
  const currItemCount = items.length;
  const packedItemCount = items.filter((item) => item.packed).length;
  const packingPercent = Math.round((packedItemCount / currItemCount) * 100);
  if (!currItemCount) {
    return (
      <footer className='stats'>
        <em>Start adding some items to your packing list 🚀</em>
      </footer>
    );
  }
  return (
    <footer className='stats'>
      <em>
        {packingPercent === 100
          ? "Wohooo 👉 your packing is done 😜😜"
          : `You have ${currItemCount} item in your list , you packed
          ${packedItemCount} item and packing percentage is${packingPercent}%`}
      </em>
    </footer>
  );
}
function App() {
  //Lifiting state to nearest parent component
  const [items, setItem] = useState([]);
  const handleAddItem = (item) => {
    setItem((items) => [...items, item]);
  };
  const handleDeleteItem = (id) => {
    setItem((items) => items.filter((item) => item.id != id));
  };
  const handleToggleItemPacked = (id) => {
    setItem((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };
  const handleClearList = () => {
    let message = window.confirm("Going to clear the list");
    if (message) {
      setItem([]);
    } else {
      setItem(items);
    }
  };
  return (
    <div className='app'>
      <Logo />
      <Form items={items} onAddItems={handleAddItem} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onTogglePacked={handleToggleItemPacked}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
