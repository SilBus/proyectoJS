let nombre = prompt("Hola! Ingresa tu nombre, por favor")
let apellido = prompt("Ahora ingresa tu apellido")
const IVA = 1.21


if ((nombre != "") && (apellido != "")) {//
    alert("Bienvenido" + " " + nombre + " " + apellido)
} else{
    alert("Error: Ingresa tu nombre y apellido porfavor 🤨")
}

let usuario = prompt("Ingrese su nombre de usuario, por favor")
let contrasena = ""

do{
    contrasena = prompt("Ingrese su contraseña, por favor (no se la diremos a nadie 🤐)")
    if(contrasena == ""){
        alert("Ingrese su contraseña")
    }
} while (contrasena == "")

for(let producto=1; producto <= 5; producto++){
    let productoSelecionado = prompt("Seleccione 5 (cinco) productos del stock")
    
    if(productoSelecionado == ""){
        break;
    }else(
        alert("Seleccionaste" + " " + producto + " " + "productos")
    )
}


function multiplicar(monto , IVA) {
    let total = monto * IVA
    return total
    
}
let resultado = multiplicar(5,1.21)
console.log(`el valor total IVA incluido es de ${resultado} pesos`)



