// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((res) => res.json())
//   .then((data) => console.log(data));
// console.log("Hello");

//With async await

async function call() {
  const rsp = await fetch("https://jsonplaceholder.typicode.com/todos");
  console.log(await rsp.json());
}
call();
console.log(3 + 5);
