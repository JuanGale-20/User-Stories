let userName = prompt("Ingresa tu nombre:");
let userAge = prompt("Ingresa tu edad:");
userAge = Number(userAge);
if (isNaN(userAge)) {
  console.error(
    "Error: Por favor, ingresa una edad válida en números."
  );
} else {

  if (userAge < 18) {
    alert(
      `Hola ${userName}, eres menor de edad. ¡Sigue aprendiendo y disfrutando del código!`
    );
    console.log(
      `Hola ${userName}, eres menor de edad. ¡Sigue aprendiendo y disfrutando del código!`
    );
  } else {
    alert(
      `Hola ${userName}, eres mayor de edad. ¡Prepárate para grandes oportunidades en el mundo de la programación!`
    );

    console.log(
      `Hola ${userName}, eres mayor de edad. ¡Prepárate para grandes oportunidades en el mundo de la programación!`
    );
  }
}