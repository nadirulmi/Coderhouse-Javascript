let opcion = Number(prompt("Bienvenido a AlmaKira seleccione lo que está buscando y conocé las ofertas! \n 1. Pantalones \n 2. Remeras \n 3. Sueters \n 4. Salir"));
switch(opcion){
    case 1: 
        alert("Solo por hoy comprando 2 o más pantalones recibirás un regalo sorpresa de nuestra parte!")
    break;

    case 2: 
        alert("Solo por hoy 15% de descuento en remeras abonando con transferencia")
    break;
    
    case 3: 
        alert("Solo por hoy con la compra de un sueter la segunda unidad te queda con un 30% de descuento!")
    break;

    case 4:
        alert("Muchas gracias por visitar AlmaKira!")
    break;

    default:
        if (opcion !== Number){
            alert("Debe escribir un número")
        }
    }


