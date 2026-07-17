# Asynchronous & Synchronous Js

## 📌 Definition

Write a short and simple definition.

- Synchronous Js will executes one statement at a time and must finish before moving to the next line.
- Asynchronous Js execute a task like fetching data and continue running other code while waiting for fetching task to finish.

---

## ❓ Why does this exist?

Why was this feature added to JavaScript?

- Synchronous exist to execute the Js in an order. Js will executes code one line at a time.
- Asynchronous exist to prevent Js from freezing while waiting for slow operation like fetching data, timers and file loading etc.

---

## 🎯 What problem does it solve?

What was difficult before this feature existed?

1- Synchronous Js:

- Without Asynchronous Js would stop executing the rest of the code until the data arrived.

2- Asynchronous Js:

- With Asynchronous Js will executes the other code while waiting for the fetching data to arrive.

---

## 🕒 When should I use it?

List the situations where this concept is useful.

1- Use synchronous code for:

- Simple calculations
- Variables
- Loops
- Arrays methods
- Functions

2- Use asynchronous code for:

- REST APIs
- Timers
- File loading

---

## ⚙️ How does it work internally?

Explain what JavaScript does behind the scenes.

---

## 👶 Explain it to a 10-year-old

Use a real-life analogy.

Imagine you're cooking pasta.

Synchronous:

- You stand there watching the water boil.

Asynchronous:

- You start boiling the water, then chop vegetables while waiting.

---

## 💻 Syntax

```js
Synchronous;

console.log("Hello!");

Asynchronous;

fetch(URL);
```

Small syntax example.

---

## 💡 Example

```js
Synchronous Example:
const store = ["item1", "item2", "item3"]
console.log(store)

Asynchronous Example:
setTimeout(function(){
    console.log(store)
}, 1500)
```

Real-world example.

---

## 🏗 Build Something

Small project ideas.

- Project 1
- Project 2

---

## ⚠️ Common Beginner Mistakes

- Never understand when to use synchronous and asynchronous Js.
- Mixing the concept of asynchronous with data types.

---

## 🧠 Memory Trick

Something easy to remember.

Sync = One thing at a time
Async = Keep working while waiting

---

## 🎤 Interview Question

Q:

A:

---

## 📚 Related Topics

- Topic 1
- Topic 2
- Topic 3

---

## ⭐ Key Takeaways

- JavaScript runs synchronously by default.
- Asynchronous programming prevents blocking during slow tasks.
- fetch(), timers, and file loading are asynchronous.
- async/await makes asynchronous code easier to read.
