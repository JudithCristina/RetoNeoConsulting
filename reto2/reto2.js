
const productList = [
    { "name": "Ford", "model": "Fiesta", price: '12,500' },
    { "name": "BMW", "model": "320", price: '15,000' },
    { "name": "Fiat", "model": "panda", price: '10,000' },
    { "name": "Volvo", "model": "80", price: '20,000' }
]

let productImpression = []

//***** Funcion para enviar el contenido del arreglo productList en productImpression *****//
/*const functionSend = (a, b) => {
    for (let i = 0; i < a.length; i++) {
        for (let j = i + 1; j < a.length; j++) {
            if (b.length === 0) {
                //primer envio, mediante el metodo push enviamos los dos primeros productos del array//
                b.push(a[i], a[j])
            } else if (b.length === 2 && i === 2 && j === 3) {
                //segundo envio, mediante el metodo push enviamos los dos ultimos productos del array//
                b.push(a[i], a[j])
            }
        }
    }
    return b
}*/


//***** Función para trasladar(cambiar el lugar de una cosa) el contenido del arreglo productList en productImpression ******//

const functionSend = () => {
    if (productImpression.length === 0) {
        //trasladar los dos primeros productos de productList en productImpression[{},{}]//
        productImpression.splice(0, 0, productList[0], productList[1]);
        //los dos productos trasladados  son retirados de productList//
        productList.splice(0, 2)
    }
    if (productImpression.length === 2) {
        //trasladar los dos productos de productList en productImpression [{},{},{},{}]//
        productImpression.splice(2, 0, productList[0], productList[1]);
         //los dos unicos productos son retirados de productLis []//
        productList.splice(0, 2)
    }

    return  productImpression
}


functionSend()
console.log(productImpression)
console.log(productList)