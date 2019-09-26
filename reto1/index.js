
const functionCaptureTexto = () => {
  //Aplicamos método getElementsByTagName ()devolviendo una colección de todos los elementos, como un objeto NodeList//
  const nodeListElementA = document.getElementsByTagName('a');
  //recorremos todos los elementos  mediante un for, para extraer la información que desee.//
  for (let i = 0; i < nodeListElementA.length; i++) {
    const idTextContentElement =  document.getElementById("textContent")
    //Mostrar en la pantalla el textContent mendiante un click//
    nodeListElementA[i].addEventListener("click", () => idTextContentElement.innerHTML = nodeListElementA[i].textContent)
  }
}

functionCaptureTexto()

