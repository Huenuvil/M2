$( document ).ready(function() {
    console.log("inicio")
   });


function validar() {
    var Nombre, Primerapellido, Segundoapellido, Email, Domicilio, expresion; 
    Nombre = document.getElementById("Nombre").value.trim();
    Primerapellido = document.getElementById("Primerapellido").value.trim();
    Segundoapellido = document.getElementById("Segundoapellido").value.trim();
    Email = document.getElementById("Email").value.trim();
    Domicilio = document.getElementById("Domicilio").value.trim();
    Medicamentos = document.getElementById("Medicamentos").value.trim();

    expresion = /^[A-Z-a-z]{2,15}$/;
    
    if(Nombre === "" || Primerapellido === "" || Segundoapellido == "" || Email === "" || Domicilio === ""){
        alert("Todos los campos son obligatorios");
        return false;
        
    }
    else if(Nombre.length>15) {
        alert("El nombre es muy largo");
        return false;
    }
    
    else if(!expresion.test(Nombre)){
        alert("El Nombre no es válido");
        return false;
    }

    else if(Primerapellido.length>15) {
        alert("El apellido es muy largo");
        return false;
    }

    else if(!expresion.test(Primerapellido)){
        alert("El Apellido no es válido");
        return false;
    }

    else if(Segundoapellido.length>15) {
        alert("El apellido es muy largo");
        return false;
    }

    
    else if(!expresion.test(Segundoapellido)){
        alert("El Apellido no es válido");
        return false;
    }

}

document.querySelector("form").addEventListener("submit",function(e){
    e.preventDefault(); 
    return validar();
})

