let palabraClave
do{
    palabraClave = prompt("Ingresa una palabra clave para retirar tu pedido.");
    if(palabraClave !== null){
        if (palabraClave.trim() !== ""){
            if (!isNaN(palabraClave)){
                alert("Tu palabra clave no puede ser un número.")
            }else if (palabraClave.length > 15){
                alert("Tu palabra clave debe tener menos de 15 caracteres.")
            } else if (palabraClave.length < 3){
                alert("Tu palabra clave debe tener más de 3 caracteres");
            } else{
                alert("Tu palabra clave es:" + " " + palabraClave + "\n¡No la olvides!");
                console.log(palabraClave);
                break;
            }
        }else {
            alert("Necesitas una palabra clave.");
        }
    } else {
        alert("Necesitas una palabra clave.")
    }
} while (palabraClave === "" || !isNaN(palabraClave) || (palabraClave.length < 3 || palabraClave.length > 15))


let opcion
const bananoRey = 2.50;
const fresaReina = 3.00;
const mixtaMonarca = 3.50;

const cafe = 1.00;
const capuchino = 1.50;
const frapuchino = 2.00;

const comboUno = 3.20;
const comboDos = 3.75;
const comboTres = 5.00;

const ofertaUno = 5.00;
const ofertaDos = 5.20;
const ofertaTres = 7.80;

let total = 0;
function sumaTotal(a){
    total += a
}
let salir = false

while (!salir){
    let menu = parseInt(prompt("Elige la opción que te interese de nuestro menú \n1. Comidas \n2. Bebidas \n3. Combos \n4. Ofertas \n5. Terminar compra"));
    switch (menu){
        case 1:
            do{
                opcion = prompt("¡Elige sin límite nuestras sabrosas comidas! \n1. Banano Rey ($2.50) \n2. Fresa reina ($3.00) \n3. Mixta Monarca ($3.50) \n4. Volver al menú \n5. Terminar compra");
                switch(opcion){
                    case "1":
                        sumaTotal(bananoRey)
                        console.log(bananoRey)
                        break;
                    case "2":
                        sumaTotal(fresaReina)
                        console.log(fresaReina)
                        break;
                    case "3":
                        sumaTotal(mixtaMonarca)
                        console.log(mixtaMonarca)
                        break;
                    case "5":
                        salir = true
                        alert("El total a pagar es: $" + total.toFixed(2));
                        break
                }
                if (opcion !== "4" && opcion !== "5"){
                    if (opcion !== null && opcion !== ""){
                        if (opcion < 1 || opcion > 5){
                            alert("Elige una de las opciones disponibles, por favor")
                        } else if (isNaN(opcion)) {
                            alert("Debes ingresar un número.")
                        } else{
                            opcion = prompt("¿Qué más quieres degustar hoy? \n1. Banano Rey ($2.50) \n2. Fresa reina ($3.00) \n3. Mixta Monarca ($3.50) \n4. Volver al menú \n5. Terminar compra")
                            switch(opcion){
                                case "1":
                                    sumaTotal(bananoRey)
                                    console.log(bananoRey)
                                    break;
                                case "2":
                                    sumaTotal(fresaReina)
                                    console.log(fresaReina)
                                    break;
                                case "3":
                                    sumaTotal(mixtaMonarca)
                                    console.log(mixtaMonarca)
                                    break;
                                case "5":
                                    salir = true
                                    alert("El total a pagar es: $" + total.toFixed(2));
                                    break;
                            }
                        }
                    } else{
                        alert("Elige una opción, por favor")
                    }
                }
            } while (opcion !== "4" && opcion !== "5")   
            if (opcion === "5"){
                salir = true;
            }
            break;
        case 2:
            do{
                opcion = prompt("¡Escoge de nuestras refrescantes bebidas! \n1. Café ($1.00) \n2. Capuchino ($1.50) \n3. Frapuchino ($2.00) \n4. Volver al menú \n5. Terminar compra")
                switch(opcion){
                    case "1":
                        sumaTotal(cafe)
                        console.log(cafe)
                        break;
                    case "2":
                        sumaTotal(capuchino)
                        console.log(capuchino)
                        break;
                    case "3":
                        sumaTotal(frapuchino)
                        console.log(frapuchino)
                        break;
                    case "5":
                        salir = true
                        alert("El total a pagar es: $" + total.toFixed(2));
                        break
                }
                if (opcion !== "4" && opcion !== "5"){
                    if (opcion !== null && opcion !== ""){
                        if (opcion < 1 || opcion > 5){
                            alert("Elige una de las opciones disponibles, por favor")
                        } else if (isNaN(opcion)) {
                            alert("Debes ingresar un número.")
                        } else{
                            opcion = prompt("¿Qué más quieres beber hoy? \n1. Café ($1.00) \n2. Capuchino ($1.50) \n3. Frapuchino ($2.00) \n4. Volver al menú \n5. Terminar compra")
                            switch(opcion){
                                case "1":
                                    sumaTotal(cafe)
                                    console.log(cafe)
                                    break;
                                case "2":
                                    sumaTotal(capuchino)
                                    console.log(capuchino)
                                    break;
                                case "3":
                                    sumaTotal(frapuchino)
                                    console.log(frapuchino)
                                    break;
                                case "5":
                                    salir = true
                                    alert("El total a pagar es: $" + total.toFixed(2));
                                    break
                            }
                        }
                    } else {
                        alert("Elige una opción, por favor")
                    }
                }
            } while (opcion !== "4" && opcion !== "5")
            if (opcion === "5"){
                salir = true;
            }
            break;
        case 3: 
            do{
                opcion = prompt("¡Disfruta de la explosión de sabores con nuestros combos! \n1. Café + Fresa reina ($3.20) \n2. Capuchino + Banano Rey ($3.75) \n3. Frapuchino + Mixta Monarca ($5.00) \n4. Volver al menú \n5. Terminar compra")
                switch(opcion){
                    case "1":
                        sumaTotal(comboUno)
                        console.log(comboUno)
                        break;
                    case "2":
                        sumaTotal(comboDos)
                        console.log(comboDos)
                        break;
                    case "3":
                        sumaTotal(comboTres)
                        console.log(comboTres)
                        break;
                    case "5":
                        salir = true
                        alert("El total a pagar es: $" + total.toFixed(2));
                        break
                }
                if (opcion !== "4" && opcion !== "5"){
                    if (opcion !== null && opcion !== ""){
                        if (opcion < 1 || opcion > 5){
                            alert("Elige una de las opciones disponibles, por favor")
                        } else if (isNaN(opcion)) {
                            alert("Debes ingresar un número.")
                        } else{
                            opcion = prompt("¿Qué más quieres degustar hoy? \n1. Capuchino + Banano Rey ($3.75) \n2. Café + Fresa reina ($3.20) \n3. Frapuchino + Mixta Monarca ($5.00) \n4. Volver al menú \n5. Terminar compra")
                            switch(opcion){
                                case "1":
                                    sumaTotal(comboUno)
                                    console.log(comboUno)
                                    break;
                                case "2":
                                    sumaTotal(comboDos)
                                    console.log(comboDos)
                                    break;
                                case "3":
                                    sumaTotal(comboTres)
                                    console.log(comboTres)
                                    break;
                                case "5":
                                    salir = true
                                    alert("El total a pagar es: $" + total.toFixed(2));
                                    break
                            }
                        }
                    } else{
                        alert("Elige una opción, por favor")
                    }
                }
            } while (opcion !== "4" && opcion !== "5")
            if (opcion === "5"){
                salir = true;
            }
            break;
        case 4:
            do{
                opcion = prompt("¡Las mejores ofertas para empezar tu día con el estómago feliz! \n1. Capuchino + 2 Banano Rey ($5.00) \n2. Café + 1 Banano rey + 1 Fresa reina ($5.20) \n3. Frapuchino + 2 Mixta Monarca ($7.80) \n4. Volver al menú \n5. Terminar compra")
                switch(opcion){
                    case "1":
                        sumaTotal(ofertaUno)
                        console.log(ofertaUno)
                        break;
                    case "2":
                        sumaTotal(ofertaDos)
                        console.log(ofertaDos)
                        break;
                    case "3":
                        sumaTotal(ofertaTres)
                        console.log(ofertaTres)
                        break;
                    case "5":
                        salir = true
                        alert("El total a pagar es: $" + total.toFixed(2));
                        break
                }
                if (opcion !== "4" && opcion !== "5"){
                    if (opcion !== null && opcion !== ""){
                        if (opcion < 1 || opcion > 5){
                            alert("Elige una de las opciones disponibles, por favor")
                        } else if (isNaN(opcion)) {
                            alert("Debes ingresar un número.")
                        } else{
                            opcion = prompt("¿Qué más quieres degustar hoy? \n1. Capuchino + 2 Banano Rey ($5.00) \n2. Café + 1 Banano rey + 1 Fresa reina ($5.20) \n3. Frapuchino + 2 Mixta Monarca ($7.80) \n4. Volver al menú \n5. Terminar compra")
                            switch(opcion){
                                case "1":
                                    sumaTotal(ofertaUno)
                                    console.log(ofertaUno)
                                    break;
                                case "2":
                                    sumaTotal(ofertaDos)
                                    console.log(ofertaDos)
                                    break;
                                case "3":
                                    sumaTotal(ofertaTres)
                                    console.log(ofertaTres)
                                    break;
                                case "5":
                                    salir = true
                                    alert("El total a pagar es: $" + total.toFixed(2));
                                    break
                            }
                        }
                    } else {
                        alert("Elige una opción, por favor")
                    }
                }
            } while (opcion !== "4" && opcion !== "5")
            if (opcion === "5"){
                salir = true;
            }
            break;
        case 5:
            if (menu === 5){
                salir = true
                alert("El total a pagar es: $" + total.toFixed(2));
                break
            }
        default:
            if (menu !== null && menu !== ""){
                if (menu < 1 || menu > 5){
                    alert("Elige una de las opciones disponibles, por favor")
                } else if (isNaN(menu)){
                    alert("Debes ingresar un número.")
                } else{
                    salir = true;
                }
            }
    }
}