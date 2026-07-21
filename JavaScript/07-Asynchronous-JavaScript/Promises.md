# Topic Name

## 📌 Definition

Write a short and simple definition.

---

## ❓ Why does this exist?

Why was this feature added to JavaScript?

- Promises exist so JavaScript can continue executing other code while waiting for slow asynchronous operations to finish.

---

## 🎯 What problem does it solve?

What was difficult before this feature existed?

- The promise solves the problem of blocking JS code while waiting for slow operations like API requests or file loading.

---

## 🕒 When should I use it?

List the situations where this concept is useful.

I should use Promises:

- While fetching data from an API
- While reading a file
- Requesting data from database
- Waiting for timer(setTimeou())
- Any asynchronous operation

---

## ⚙️ How does it work internally?

Explain what JavaScript does behind the scenes.

---

## 👶 Explain it to a 10-year-old

Use a real-life analogy.

---

## 💻 Syntax

```js

```

Small syntax example.

---

## 💡 Example

```js
console.log("1");

fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => response.json())
  .then((data) => console.log(data.title));

console.log("2");
```

Start Program

↓

console.log("1")

↓

fetch()

↓

Promise (Pending)

↓

Don't wait!

↓

console.log("2")

↓

Server responds

↓

Promise becomes Fulfilled

↓

.then() executes

↓

console.log(title)

Real-world example.

---

## 🏗 Build Something

Small project ideas.

- Project 1
- Project 2

---

## ⚠️ Common Beginner Mistakes

- Mistake 1
- Mistake 2

---

## 🧠 Memory Trick

Something easy to remember.

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

- ...
- ...
- ...

## Why does fetch() return a Promise instead of returning the data immediately?

fetch() returns a Promise because fetching data is an asynchronous operation that takes time to complete. Instead of blocking JavaScript while waiting for the server's response, it immediately returns a Promise, allowing JavaScript to continue executing other code. When the data arrives, the Promise is fulfilled (or rejected if an error occurs).

## My previous version

1. The promise exists so JS will execute the other lines of code while waiting for slow operations like fetching data, database requests, file loading, and timers, etc.

2. The promise solves the problem of blocking JS code while waiting for slow operations.

3. I should use Promises:

- While fetching data from an API.
- While reading a file
- Requesting data from the database

4. Promises have three states:

- Pending:
  Waiting for a task to be fulfilled.
  Example:
  Imagine you ordered a pizza at a restaurant. The chef starts making your pizza in the kitchen. Your order is pending.
- Fulfilled:
  The task is finished and gets results.
  Example:
  When your order is ready. It will be delivered to you, and your order is completed.
- Rejected:
  The task is not finished due to an issue.
  Example:
  Your order is cancelled because the oven is broken and you didn't get the order.
