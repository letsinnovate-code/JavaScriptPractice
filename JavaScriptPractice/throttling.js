const ptaNahi = (fn, delay) => {
  let myId = null;

  return (...args) => {
    if (myId === null) {
      fn(...args);
      myId = setTimeout(() => (myId = null), delay * 1000);
    }
  };
};

function greet(name) {
  console.log(`Hello ${name}`);
}

let result = ptaNahi(() => greet("Anil"), 4);

result();
result();
result();
result();
