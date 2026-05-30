const productos = [
  {
    id: 1,
    nombre: "Laptop",
    precio: 2500
  },
  {
    id: 2,
    nombre: "Mouse",
    precio: 80
  },
  {
    id: 3,
    nombre: "Teclado",
    precio: 150
  }
];

console.log("========== VALIDACIÓN DE PRODUCTOS ==========");

productos.forEach((producto) => {
  if (
    producto.id &&
    typeof producto.nombre === "string" &&
    producto.nombre.trim() !== "" &&
    typeof producto.precio === "number" &&
    producto.precio > 0
  ) {
    console.log(`Producto válido: ${producto.nombre}`);
  } else {
    console.error("Producto inválido:", producto);
  }
});

console.log("\n========== SET ==========");

const numeros = new Set([1, 2, 3, 4, 4, 5, 5, 6, 7, 7]);

console.log("Set inicial:");
console.log(numeros);

numeros.add(10);

console.log("\nNúmero 10 agregado:");
console.log(numeros);

console.log("\n¿Existe el número 3?");
console.log(numeros.has(3));

numeros.delete(4);

console.log("\nSet después de eliminar el número 4:");
console.log(numeros);

console.log("\nRecorrido del Set:");

for (const numero of numeros) {
  console.log(numero);
}

console.log("\n========== MAP ==========");

const categoriasProductos = new Map();

categoriasProductos.set("Tecnología", "Laptop");
categoriasProductos.set("Accesorios", "Mouse");
categoriasProductos.set("Periféricos", "Teclado");

console.log("\n========== OBJETOS ==========");

productos.forEach((producto) => {
  console.log(`\nProducto ID: ${producto.id}`);

  for (const propiedad in producto) {
    console.log(`${propiedad}: ${producto[propiedad]}`);
  }

  console.log("Keys:", Object.keys(producto));
  console.log("Values:", Object.values(producto));
  console.log("Entries:", Object.entries(producto));
});

console.log("\n========== SET CON FOR...OF ==========");

for (const numero of numeros) {
  console.log(numero);
}

console.log("\n========== MAP CON FOREACH ==========");

categoriasProductos.forEach((producto, categoria) => {
  console.log(`Categoría: ${categoria} -> Producto: ${producto}`);
});

console.log("\n========== LISTA COMPLETA DE PRODUCTOS ==========");

console.log(productos);

console.log("\n========== PRODUCTOS ÚNICOS (SET) ==========");

console.log([...numeros]);

console.log("\n========== CATEGORÍAS Y PRODUCTOS (MAP) ==========");

categoriasProductos.forEach((producto, categoria) => {
  console.log(`${categoria}: ${producto}`);
});

const contenedorProductos = document.getElementById("productos");
const contenedorSet = document.getElementById("set");
const contenedorMap = document.getElementById("map");

productos.forEach((producto) => {
  const div = document.createElement("div");

  div.classList.add("item");

  div.textContent = `ID: ${producto.id} | ${producto.nombre} | $${producto.precio}`;

  contenedorProductos.appendChild(div);
});

for (const numero of numeros) {
  const div = document.createElement("div");

  div.classList.add("item");

  div.textContent = numero;

  contenedorSet.appendChild(div);
}

categoriasProductos.forEach((producto, categoria) => {
  const div = document.createElement("div");

  div.classList.add("item");

  div.textContent = `${categoria}: ${producto}`;

  contenedorMap.appendChild(div);
});