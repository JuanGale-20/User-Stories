const inputNota = document.getElementById("inputNota");
const btnAgregar = document.querySelector("#btnAgregar");
const listaNotas = document.getElementById("listaNotas");

console.log(inputNota);
console.log(btnAgregar);
console.log(listaNotas);

let notas = JSON.parse(localStorage.getItem("notas")) || [];

function guardarNotas() {
  localStorage.setItem("notas", JSON.stringify(notas));
  console.log("Notas guardadas:", notas);
}

function crearNota(notaTexto) {
  const li = document.createElement("li");

  const texto = document.createElement("span");
  texto.textContent = notaTexto;

  const btnEliminar = document.createElement("button");
  btnEliminar.textContent = "Eliminar";

  btnEliminar.addEventListener("click", () => {
    listaNotas.removeChild(li);

    notas = notas.filter((nota) => nota !== notaTexto);

    guardarNotas();

    console.log("Nota eliminada:", notaTexto);
  });

  li.appendChild(texto);
  li.appendChild(btnEliminar);

  listaNotas.appendChild(li);
}

btnAgregar.addEventListener("click", () => {
  const notaTexto = inputNota.value.trim();

  if (notaTexto === "") {
    alert("Por favor ingresa una nota.");
    return;
  }

  notas.push(notaTexto);

  crearNota(notaTexto);

  guardarNotas();

  console.log("Nota agregada:", notaTexto);

  inputNota.value = "";
  inputNota.focus();
});

notas.forEach((nota) => {
  crearNota(nota);
});

console.log(`${notas.length} notas cargadas desde Local Storage.`);