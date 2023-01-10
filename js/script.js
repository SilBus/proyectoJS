let nombre = prompt("Hola! Ingresa tu nombre, por favor")
let apellido = prompt("Ahora ingresa tu apellido")

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


let cantidad_producto = Number(prompt("ingrese cantidad de productos seleccionados (hasta 7)"))
let total = 0
const IVA = 1.21

for (let index = 1; index <= cantidad_producto; index++) {
    let nombre = prompt("ingrese nombre del producto")
    let monto = Number(prompt("ingrese el valor del producto seleccionado"))
total = monto * IVA
console.log(`producto ${index} con nombre ${nombre} y monto ${monto} El total de todo es ${total}`)
    
}















//for(let producto=1; producto <= 5; producto++){
//    let productoSelecionado = prompt("Seleccione 5 (cinco) productos del stock")
    
//    if(productoSelecionado == ""){
//        break;
//    }else(
//        alert("Seleccionaste" + " " + producto + " " + "productos")
//    )
//}


//function multiplicar(monto , IVA) {
//    let total = monto * IVA
//    return total
    
//}
//let resultado = multiplicar(5,1.21)
//console.log(`el valor total IVA incluido es de ${resultado} pesos`)



