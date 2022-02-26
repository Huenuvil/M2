const datos =
    [{ "nombre": "Pedro", "apellido1": "Perez", "apellido2": "Cotapo", "edad": 30, "peso": 88, 
    "condicsalud": "sano", "alergias": "no", "medicamentos": "Penicilina"},
    { "nombre": "Hardy", "apellido1": "Cortés", "apellido2": "Ruiz", "edad": 40, "peso": 70, 
    "condicsalud": "enfermo", "alergias": "no", "medicamentos": "No" },
    { "nombre": "Juan", "apellido1": "Brawn", "apellido2": "Collio", "edad": 50, "peso": 99, 
    "condicsalud": "enfermo", "alergias": "si", "medicamentos": "Aspirina" },
    { "nombre": "Flor", "apellido1": "Durán", "apellido2": "Durán", "edad": 25, "peso": 68, 
    "condicsalud": "sano", "alergias": "no" , "medicamentos": "No"},
    { "nombre": "Sergio", "apellido1": "Fuentes", "apellido2": "García", "edad": 48, "peso": 89, 
    "condicsalud": "sano", "alergias": "no", "medicamentos": "No" },
    { "nombre": "Blanca", "apellido1": "Lewin", "apellido2": "Plot", "edad": 50, "peso": 88, 
    "condicsalud": "sano", "alergias": "no", "medicamentos": "No" },
    { "nombre": "Pablo", "apellido1": "Chamorro", "apellido2": "Crest", "edad": 22, "peso": 72, 
    "condicsalud": "sano", "alergias": "si", "medicamentos": "Penicilina" },
    { "nombre": "Guillermo", "apellido1": "Lee", "apellido2": "Allende", "edad": 36, "peso": 77, 
    "condicsalud": "sano", "alergias": "no", "medicamentos": "Paracetamol" },
    { "nombre": "Leonel", "apellido1": "Sánchez", "apellido2": "Roa", "edad": 39, "peso": 91, 
    "condicsalud": "sano", "alergias": "no", "medicamentos": "No" }];


function compare(a, b) {
    if (a.nombre < b.nombre) {

        return -1;
    }
    if (a.nombre > b.nombre) {
        return 1;
    }
    return 0;
}


document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
    return validar();
})

function validar() {
    var nombre, edad, peso, condicsalud, alergias;
    nombre = document.getElementById("nombre").value.trim();
    apellido1 = document.getElementById("apellido1").value.trim();
    apellido2 = document.getElementById("apellido2").value.trim();
    edad = document.getElementById("edad").value.trim();
    peso = document.getElementById("peso").value.trim();
    condicsalud = document.getElementById("condicsalud").value.trim();
    alergias = document.getElementById("alergias").value.trim();
    medicamentos = document.getElementById("medicamentos").value.trim();

    let persona = { "nombre": nombre, "apellido1": apellido1, "apellido2": apellido2,
     "edad": edad, "peso": peso, "condicsalud": condicsalud, "alergias": alergias, "medicamentos": medicamentos };
    datos.push(persona)

    var mayoriaedad = 0
var maspeso = 0
var promedioedad = 0


for (let i = 0; i < datos.length - 1; i++) {
    if (datos[i].edad >= 18) { mayoriaedad++ };
    if (datos[i].peso > 90) { maspeso++ };

        const sumaedad = datos.reduce((a, b) => a + b);

    const promedioedad = sumaedad / datos.length;


}


console.log("Lista desordenada", datos)

datos.sort(compare);

console.log("Lista ordenada", datos)
console.log("Mayores de edad", mayoriaedad)
console.log("Más de 90 Kilos", maspeso)
console.log("Promedio de edades", promedioedad)

var nombre, apellido1, apellido2, edad, condicsalud, alergias, medicamentos, expresion; 
nombre = document.getElementById("nombre").value.trim();
apellido1 = document.getElementById("apellido1").value.trim();
apellido2 = document.getElementById("apellido2").value.trim();
edad = document.getElementById("edad").value.trim();
condicsalud = document.getElementById("condicsalud").value.trim();
alergias = document.getElementById("alergias").value.trim();
medicamentos = document.getElementById("medicamentos").value.trim();

expresion = /^[A-Z-a-z]{1,15}$/;

if(nombre === "" || apellido1 === "" || apellido2 == "" || edad === "" || condicsalud === "" || 
    alergias === "" || medicamentos === ""){
    alert("Todos los campos son obligatorios");
    return false;
    
}
else if(nombre.length>15) {
    alert("El nombre es muy largo");
    return false;
}

else if(!expresion.test(nombre)){
    alert("El Nombre no es válido");
    return false;
}

else if(apellido1.length>15) {
    alert("El apellido es muy largo");
    return false;
}

else if(!expresion.test(apellido1)){
    alert("El Primer Apellido no es válido");
    return false;
}

else if(apellido2.length>15) {
    alert("El Segundo apellido es muy largo");
    return false;
}


else if(!expresion.test(apellido2)){
    alert("El Apellido no es válido");
    return false;
}

}





