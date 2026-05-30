const nombreInput = document.getElementById("nombreProducto");
const precioInput = document.getElementById("precioProducto");

const btnAgregar = document.getElementById("btnAgregar");
const btnSincronizar = document.getElementById("btnSincronizar");

const listaProductos = document.getElementById("listaProductos");

let productos = [];

const API_URL = "http://localhost:3000/productos";

const idsProductos = new Set();
const mapaProductos = new Map();

function guardarLocalStorage() {
    localStorage.setItem(
        "productos",
        JSON.stringify(productos)
    );
}

function renderizarProductos() {

    listaProductos.innerHTML = "";

    productos.forEach((producto) => {

        const li = document.createElement("li");

        li.textContent =
            `${producto.nombre} - $${producto.precio}`;

        const btnEditar =
            document.createElement("button");

        btnEditar.textContent = "Editar";
        btnEditar.classList.add("btn-editar");

        const btnEliminar =
            document.createElement("button");

        btnEliminar.textContent = "Eliminar";
        btnEliminar.classList.add("btn-eliminar");

        btnEditar.addEventListener(
            "click",
            () => editarProducto(producto)
        );

        btnEliminar.addEventListener(
            "click",
            () => eliminarProducto(producto.id)
        );

        li.appendChild(btnEditar);
        li.appendChild(btnEliminar);

        listaProductos.appendChild(li);
    });
}

function validarProducto(nombre, precio) {

    if (!nombre.trim()) {

        console.error(
            "El nombre es obligatorio"
        );

        return false;
    }

    if (
        isNaN(precio) ||
        precio <= 0
    ) {

        console.error(
            "El precio debe ser mayor que cero"
        );

        return false;
    }

    return true;
}

async function agregarProducto() {

    const nombre =
        nombreInput.value.trim();

    const precio =
        Number(precioInput.value);

    if (
        !validarProducto(
            nombre,
            precio
        )
    ) {
        return;
    }

    const nuevoProducto = {
        nombre,
        precio
    };

    try {

        const respuesta =
            await fetch(
                API_URL,
                {
                    method: "POST",
                    headers: {
                        "Content-Type":
                            "application/json"
                    },
                    body:
                        JSON.stringify(
                            nuevoProducto
                        )
                }
            );

        if (!respuesta.ok) {
            throw new Error(
                "Error al guardar producto"
            );
        }

        const data =
            await respuesta.json();

        productos.push(data);

        idsProductos.add(data.id);

        mapaProductos.set(
            data.id,
            data.nombre
        );

        guardarLocalStorage();

        renderizarProductos();

        console.log(
            "POST exitoso:",
            data
        );

        nombreInput.value = "";
        precioInput.value = "";

    } catch (error) {

        console.error(
            "Error POST:",
            error
        );

    }
}

async function obtenerProductos() {

    try {

        const respuesta =
            await fetch(API_URL);

        if (!respuesta.ok) {
            throw new Error(
                "Error al obtener productos"
            );
        }

        const data =
            await respuesta.json();

        productos = data;

        idsProductos.clear();
        mapaProductos.clear();

        productos.forEach(
            (producto) => {

                idsProductos.add(
                    producto.id
                );

                mapaProductos.set(
                    producto.id,
                    producto.nombre
                );

            }
        );

        guardarLocalStorage();

        renderizarProductos();

        console.log(
            "GET exitoso:",
            data
        );

    } catch (error) {

        console.error(
            "Error GET:",
            error
        );

    }
}

async function eliminarProducto(id) {

    try {

        const respuesta =
            await fetch(
                `${API_URL}/${id}`,
                {
                    method: "DELETE"
                }
            );

        if (!respuesta.ok) {
            throw new Error(
                "Error al eliminar producto"
            );
        }

        productos =
            productos.filter(
                (producto) =>
                    producto.id !== id
            );

        idsProductos.delete(id);

        mapaProductos.delete(id);

        guardarLocalStorage();

        renderizarProductos();

        console.log(
            "DELETE exitoso"
        );

    } catch (error) {

        console.error(
            "Error DELETE:",
            error
        );

    }
}

async function editarProducto(producto) {

    const nuevoNombre =
        prompt(
            "Nuevo nombre:",
            producto.nombre
        );

    if (
        nuevoNombre === null
    ) {
        return;
    }

    const nuevoPrecio =
        Number(
            prompt(
                "Nuevo precio:",
                producto.precio
            )
        );

    if (
        !validarProducto(
            nuevoNombre,
            nuevoPrecio
        )
    ) {
        return;
    }

    const productoActualizado = {
        ...producto,
        nombre: nuevoNombre,
        precio: nuevoPrecio
    };

    try {

        const respuesta =
            await fetch(
                `${API_URL}/${producto.id}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type":
                            "application/json"
                    },
                    body:
                        JSON.stringify(
                            productoActualizado
                        )
                }
            );

        if (!respuesta.ok) {
            throw new Error(
                "Error al actualizar producto"
            );
        }

        const data =
            await respuesta.json();

        const indice =
            productos.findIndex(
                (p) =>
                    p.id === producto.id
            );

        productos[indice] = data;

        mapaProductos.set(
            data.id,
            data.nombre
        );

        guardarLocalStorage();

        renderizarProductos();

        console.log(
            "PUT exitoso:",
            data
        );

    } catch (error) {

        console.error(
            "Error PUT:",
            error
        );

    }
}

btnAgregar.addEventListener(
    "click",
    agregarProducto
);

btnSincronizar.addEventListener(
    "click",
    obtenerProductos
);

obtenerProductos();

console.log(
    "Aplicación iniciada"
);