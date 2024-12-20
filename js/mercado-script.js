let bolsa =[];

window.addEventListener("onload", ()=>{
    bolsa= JSON.parse(localStorage.getItem("bolsa"))
})

//Funcion que: 
const addItem = (itemName, itemValue) => {
    //agregue items al carrito onclick de botom "agregar"
    bolsa.push( {itemName, itemValue} ); //Esto indica que se pushean los argumentos como un objeto   
    
    //invoco actualizador de counter
    counterUp();

    //alerte?
    alert(`Agregaste ${itemName} por un valor de ${itemValue} GP`);
}


const counterUp = ()=> {
      //actualice el counter de items
      document.getElementById("item-counter").textContent = bolsa.length; //(se utiliza length para q el contador tenga un int de refe preciso con el array)
}


//guardarlo en localstorage como json
window.addEventListener("beforeunload", ()=>{
    localStorage.setItem("bolsa",JSON.stringify(bolsa))
});
