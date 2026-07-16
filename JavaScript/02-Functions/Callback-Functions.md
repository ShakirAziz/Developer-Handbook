# Callback Functions

## 📌 Definition

Write a short and simple definition.

- A callback exists so one function can tell another function what code to run when a particular event or task happens.

---

## ❓ Why does this exist?

Why was this feature added to JavaScript?

- A callback solves the problem of running code at the right time, instead of immediately.

---

## 🎯 What problem does it solve?

What was difficult before this feature existed?

- A callback solves the problem of calling a function when a particular event or task happens.

## 🕒 When should I use it?

List the situations where this concept is useful.

I should use callbacks:

• Array methods
• DOM events
• Timers
• Promises (.then())
• fetch()

---

## ⚙️ How does it work internally?

Explain what JavaScript does behind the scenes.

1. A function is passed as an argument to another function.

2. That function can decide when to run it.

3. If a particular event or task happens, it executes that function.

---

## 👶 Explain it to a 10-year-old

Use a real-life analogy.

- Imagine you order food. You tell the delivery person, "When my food is ready, call me." You don't know when it will be ready, so you leave instructions to be carried out later.

---

## 💻 Syntax

```js
someFunction(______);

- The callback is the function you pass, not the one you call immediately.
```

Small syntax example.

.map(...)

button.addEventListener(...)

setTimeout(...)

---

## 💡 Example

```js
fetch(url)
  .then((response) => response.json())

  .then((jsonData) => console.log(jsonData));
```

Real-world example.

---

## 🏗 Build Something

Small project ideas.

- Project 1

- Project 2

---

## ⚠️ Common Beginner Mistakes

- Thinking callbacks are a special type of function.
- Calling the function instead of passing it.
- Forgetting that the receiving function decides when to execute it.

---

## 🧠 Memory Trick

Something easy to remember.

Callback = I give you the function, you decide when to use it.

---

## 🎤 Interview Question

Q:

A:

---

## 📚 Related Topics

- Functions

- Arrow Functions

- Promises

- async/await

- Event Listeners

- Array Methods (map, filter, reduce)

---

## ⭐ Key Takeaways

- A callback function is passed as an argument to another function.

- The receiving function decides when to execute the callback.

- Callbacks are commonly used in array methods, events, timers, and Promises.

## 💭 One-Sentence Summary

A callback is a function you hand to another function so it can decide when to run it.
