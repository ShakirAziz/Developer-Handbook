# REST API

## 📌 Definition

- REST stands for Representational State Transfer.
- REST is a standard way for designing web APIs.
- It defines how clients and servers communicate using HTTP.

---

## ❓ Why does this exist?

Why was this feature added to JavaScript?

- REST exist to provide, standard way for clients and servers to communicate over HTTP.

---

## 🎯 What problem does it solve?

What was difficult before this feature existed?

- REST solve the problem of having a consistent way to access and manipulate data on a server.

## 🕒 When should I use it?

I should use REST:

- To retrieve data
- TO create data
- TO update data
- TO delete data

between a client and a server.

## ⚙️ How does it work internally?

Explain what JavaScript does behind the scenes.

1. The client sends HTTP request. /posts
2. The server processes the request.
3. The server returns the JSON to the client.
4. The client display the JSON data.

---

## 👶 Explain it to a 10-year-old

Use a real-life analogy.

- Suppose you are ordering a pizza. The waiter gives you a list of all the pizza flavors. You need to select one specific flavor from the list. After selecting a flavor your order is placed and the waiter deliver your order.

---

## 💻 Syntax

```js
baseURL = "https://jsonplaceholder.typicode.com/posts/1";
```

Small syntax example.

- GET /posts
- GET /posts/1
- POST /posts
- PUT /posts/1
- DELETE /posts/1

---

## 💡 Example

```js
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => response.json())
  .then((posts) => console.log(posts));
```

Real-world example.

---

## 🏗 Build Something

Small project ideas.

- Project 1
- Project 2

---

## ⚠️ Common Beginner Mistakes

- Thinking REST is all about URL.
- Forgetting HTTP method like GET, POST, PUT and Delete.
- Mixing the endpoints with resources

---

## 🧠 Memory Trick

Something easy to remember.

- REST = Rules for talking to a server

---

## 🎤 Interview Question

Q:

A:

---

## 📚 Related Topics

- HTTP methods
- URL parameters
- Query Strings

---

## ⭐ Key Takeaways

- REST provides a standard way for clients and servers to communicate.
- REST uses HTTP methods like GET, POST, PUT, and DELETE.
- Servers commonly return JSON data.
- Resources are identified by URLs.

## 🚀 What I Learned Today

- REST is not a JavaScript feature.
- REST is an architectural style.
- REST uses HTTP methods.
- APIs commonly follow REST principles.
