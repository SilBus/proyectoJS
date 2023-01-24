let nombre = prompt("Hola! Ingrese su nombre, por favor")
let apellido = prompt("Ahora ingrese su apellido")

if ((nombre != "") && (apellido != "")) {
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



const productos = [
    {nombre: "mamadera", precio: 900},
    {nombre: "chupetes", precio: 450},
    {nombre: "vasos", precio: 1200},
    {nombre: "platos", precio: 550}

]

let carrito = []

let seleccion = prompt("¿Desea comprar algun producto? ¿Si o No?")

while( seleccion != "si" && seleccion != "no"){
    alert("Por favor ingrese por SI o por NO")
    seleccion = prompt("¿Desea comprar algo?")
}

if(seleccion == "si"){
    alert("Seleccione los productos que desee agregar a su carrito")
    let todoslosProductos = productos.map((producto) => producto.nombre + " " + producto.precio + "$")
    alert(todoslosProductos.join(" - "))
}else if(seleccion == "no"){
    
}

while(seleccion != "no"){
    let producto = prompt("Agrega un producto a tu carrito")
    let precio = 0

    if(producto == "mamadera" || producto == "chupetes" || producto == "vasos" || producto == "platos"){
        switch(producto){
            case "mamadera":
            precio = 900
            break;

            case "chupetes":
            precio = 450
            break;

            case "vasos":
            precio = 1200
            break;

            case "platos":
            precio = 550
            break;

            default:
                break;
        }

        let unidades = parseInt(prompt("cuantas unidades quiere llevar"))

        carrito.push({producto, unidades, precio})
        console.log(carrito)
    }else {
        alert("No tenemos ese producto")
    }

    seleccion = prompt("¿Desea seguir comprando?")

    while(seleccion == "no"){
        
        carrito.forEach((carritoFinal) =>{
            console.log(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades}, total a pagar por producto ${carritoFinal.unidades * carritoFinal.precio}`)
        })
        break;
    }
}

const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0)
console.log(`El total a pagar es: ${total}`)

const iva = 1.21
console.log(`Total iva incluido ${total * iva}`)


let buscar = prompt("¿Desea buscar algun producto?")

const resultado = productos.find((producto) => producto.nombre === buscar)

console.log(resultado)


function saludo(agradecimiento) {
    alert(`MUCHAS GRACIAS POR CONFIAR EN NOSOTROS ${agradecimiento}`)
}
let valor = saludo (nombre + " " + apellido) 


