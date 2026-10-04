// === 1. VARIABLES Y TIPOS DE DATOS ===
let nombre = "Roberto7354"; // string
let edad = 35; // number
let esEstudiante = true; // boolean
let precio = 19.99; // number
console.log("--- 1. VARIABLES ---");
console.log("Nombre:", nombre, "| Edad:", edad, "| Estudiante:", esEstudiante);

// === 2. ARREGLOS Y OBJETOS ===
let colores = ["rojo", "azul", "verde", "amarillo"];
let persona = {
    nombre: nombre,
    curso: "WADE 1000L",
    edad: edad,
    coloresFavoritos: colores
};
console.log("--- 2. ARREGLOS Y OBJETOS ---");
console.log("Arreglo colores:", colores);
console.log("Objeto persona:", persona);

// === 3. ESTRUCTURAS DE CONTROL - IF ELSE ===
console.log("--- 3. IF / ELSE IF / ELSE ---");
if (edad >= 18) {
    console.log("Eres mayor de edad");
} else if (edad >= 16) {
    console.log("Casi mayor de edad");
} else {
    console.log("Eres menor");
}

// === 4. BUCLES - LOOPS ===
console.log("--- 4. BUCLES ---");
// for - para recorrer arreglos
for (let i = 0; i < colores.length; i++) {
    console.log("for - Color " + i + ": " + colores[i]);
}
// while
let contador = 0;
while (contador < 2) {
    console.log("while - contador: " + contador);
    contador++;
}
// do...while
let x = 0;
do {
    console.log("do...while - x: " + x);
    x++;
} while (x < 2);

// === 5. FUNCIONES ===
console.log("--- 5. FUNCIONES ---");
function saludar(nombreParam) {
    return "Hola " + nombreParam + " de WADE 1000L";
}
function sumar(a, b) {
    return a + b;
}
console.log(saludar("Roberto7354"));
console.log("Suma 5+3 =", sumar(5, 3));

function probarFunciones() {
    let mensaje = saludar(nombre);
    document.getElementById("resultado").innerHTML = mensaje;
    console.log("Botón presionado: " + mensaje);
}

// === 6. ALCANCE (SCOPE) ===
console.log("--- 6. ALCANCE ---");
let variableGlobal = "Yo soy GLOBAL - me ven todos";
function probarAlcance() {
    let variableLocal = "Yo soy LOCAL - solo existo dentro de esta funcion";
    console.log(variableGlobal); // SI se puede
    console.log(variableLocal); // SI se puede aquí
}
probarAlcance();
console.log(variableGlobal); // SI se puede

// === 7. CLAUSURAS (CLOSURES) ===
console.log("--- 7. CLAUSURAS ---");
function crearContador() {
    let cuenta = 0;
    return function() {
        cuenta++;
        return cuenta;
    };
}
let miContador = crearContador();
console.log("Contador llamado 1ra vez:", miContador());
console.log("Contador llamado 2da vez:", miContador());
console.log("Contador llamado 3ra vez:", miContador());

console.log("¡Práctica completa cargada correctamente!");
