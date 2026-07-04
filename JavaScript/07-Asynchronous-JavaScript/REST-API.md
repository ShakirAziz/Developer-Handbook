# REST API

## 📌 Definition

- REST stands for Represantational State Transfer.
- REST is a stander way for designing web APIs.
- It defines how clients and servers communicate using HTTP.

---

## ❓ Why does this exist?

Why was this feature added to JavaScript?

- REST exist to provide, stander way for clients and servers to communicate over HTTP.

---

## 🎯 What problem does it solve?

What was difficult before this feature existed?

- REST solve the problem of having a way to access and manupulate data on a server.

## 🕒 When should I use it?

I should use REST:

- To retrieve data
- TO create data
- TO update data
- TO delete data

between a client and a server.

## ⚙️ How does it work internally?

Explain what JavaScript does behind the scenes.

1. The client send HTTP request. /posts
2. The sever fulfill the request.
3. The sever returns the JSON to the client.

---

## 👶 Explain it to a 10-year-old

Use a real-life analogy.

- Suppose you are ordering a pizza. The waiter gives you a list of all the pizza flavors. You need to select one specific flavor from the list. After selecting a flavor your order is placed and the wait deliver your order.

---

## 💻 Syntax

```js
baseURL = "https://jsonplaceholder.typicode.com/posts/1";
```

Small syntax example.

- GET /posts/1
- POST /posts/1
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

REST API = Standard way for designing web APIs

---

## 🎤 Interview Question

Q:

A:

---

## 📚 Related Topics

- HTTP methods
- URL parameters
- JSON

---

## ⭐ Key Takeaways

- It provides consistent way to access and manupulate data on a server.
- It allow us to add resources after endpoint of HTTP request.
- ...
