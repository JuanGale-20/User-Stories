# User Stories - JavaScript Module 3

## Description

This repository contains the development of four user stories completed during the JavaScript Module 3 training at Riwi. Each project focuses on different JavaScript concepts, progressing from basic user interaction to building a complete web application with Local Storage and API integration.

---

## Repository Structure

```text
HISTORIADEUSUARIO/
│
├── Semana1
│   ├── Index.html
│   └── sistema_interactivo.js
│
├── Semana2
│   ├── index.html
│   └── gestion_datos.js
│
├── Semana3
│   ├── manipulacion_dom.html
│   └── app.js
│
└── Semana4
    ├── index.html
    ├── app1.js
    └── db.json
```

---

# Week 1 - Interactive Message System

## Objective

Create an interactive JavaScript program that requests user information, validates the input, and displays personalized messages according to the user's age.

## Features

- User interaction with `prompt()`
- Age validation
- Conditional statements (`if`, `else if`, `else`)
- Error handling using `console.error()`
- Dynamic messages based on age
- Use of `let` and `const`

## Concepts Applied

- Variables and data types
- User input
- Validation
- Conditional logic
- Console methods

---

# Week 2 - Data Management with Objects, Sets, and Maps

## Objective

Apply advanced JavaScript data structures to organize, store, and manipulate information efficiently.

## Features

### Objects

Each product contains:

- ID
- Name
- Price

### Sets

- Remove duplicate values automatically
- Add new values
- Check if values exist
- Delete values
- Iterate using `for...of`

### Maps

- Associate product categories with product names
- Store key-value relationships

### Iteration Methods

- `for...in`
- `for...of`
- `forEach()`
- `Object.keys()`
- `Object.values()`
- `Object.entries()`

## Concepts Applied

- Objects
- Sets
- Maps
- Data validation
- Iteration methods

---

# Week 3 - Dynamic DOM Manipulation

## Objective

Develop a simple Notes Application that allows users to add and remove notes dynamically while persisting data with Local Storage.

## Features

- Add notes dynamically
- Delete notes dynamically
- Store notes in Local Storage
- Recover notes when reloading the page
- DOM manipulation using JavaScript

## DOM Methods Used

- `getElementById()`
- `querySelector()`
- `appendChild()`
- `removeChild()`
- `textContent`

## Concepts Applied

- DOM manipulation
- Events
- Local Storage
- Dynamic rendering
- Persistence

---

# Week 4 - Product Management Application with API Integration

## Objective

Build a complete web application integrating JavaScript fundamentals, Local Storage, and API communication using Fetch API.

## Features

### CRUD Operations

- Create products
- Read products
- Update products
- Delete products

### Local Storage

- Save products locally
- Load products automatically

### API Integration

Using JSON Server:

- GET
- POST
- PUT
- DELETE

### Additional Features

- Form validation
- Error handling
- Async/Await
- Dynamic DOM updates
- Set and Map implementation

## API Endpoint

```text
http://localhost:3000/productos
```

## Run JSON Server

```bash
json-server --watch db.json
```

## Concepts Applied

- Fetch API
- CRUD operations
- Local Storage
- Async/Await
- Error handling
- Data synchronization

---

# Technologies Used

- HTML5
- CSS3
- JavaScript 
- Local Storage
- Fetch API
- JSON Server
- Git
- GitHub
- Visual Studio Code

---

For Week 4, start JSON Server:

```bash
json-server --watch Semana4/db.json --port 3000
```

Open any HTML file in your browser to run the corresponding project.

---

# Learning Outcomes

Throughout these user stories, the following concepts were reinforced:

- Variables and constants
- Data types
- Conditional statements
- Arrays and objects
- Sets and Maps
- DOM manipulation
- Event handling
- Local Storage
- Fetch API
- CRUD operations
- Async/Await
- Input validation
- Error handling
- Code organization

---

# Author

**Juan Gale Muñoz**

Developed as part of the **Riwi JavaScript Module 3 Training Program**.