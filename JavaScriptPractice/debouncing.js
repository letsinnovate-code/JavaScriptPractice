// login of debouncing

// remove past request => keep a reference of past request to remove past request and
// fire a new request

function pataNahi(fn, delay) {
  let delayTime = delay || 0;
  console.log(delayTime);

  console.log(arguments);

  let timeOutId;
  return function (...args) {
    console.log(args);

    clearTimeout(timeOutId);

    timeOutId = setTimeout(() => fn.apply(this, args), delayTime * 1000);
  };
}

function greet(name) {
  console.log(`Hello ${name}`);
}

let fun = pataNahi(() => greet("Anil"), 5);
fun();
fun();
fun();
fun();
fun();
