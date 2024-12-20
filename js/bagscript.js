//Recuperar Carrito
const bolsa = JSON.parse(localStorage.getItem("bolsa")) || []; //bolsa es el array recibido o un array vacio

//Muestra Productos guardados

const mostrarBolsa = () => {
    const lista = document.getElementById("bag-list"); //Buscamos la lista vacia
    lista.innerHTML = ""; //Dibujamos un html vacio

    if(bolsa.length===0){ //If carrito vacio
        lista.innerHTML = '<p>Tu bolsa parece estar vacía</p>';
        return;
    }
    //Else, cicla por el array creando los objetos
    bolsa.forEach((item,indice)=>{ //Ciclan la lista de productos y ejcutan la creacion de articles x indice cantidad de veces
        const producto = document.createElement("article");

        producto.classList.add("producto")
        producto.innerHTML=//Creando elementos HTML
        `
        <h3>${item.itemName}</h3>
        <h4 class="price-tag">${item.itemValue} GP </h4>

        <button onclick= "eliminarItem(${indice})"> Eliminar </button>
        `; //HASTA Aca solo se creo pero no se insertó en ningún lugar

        //Insertando en etiqueta vacia
        lista.appendChild(producto) //Agrega el articulo creado
    })

    actualizarResumen();
} 
const actualizarResumen = ()=>{
    const totalProductos = document.getElementById("total-productos");
    const importeTotal = document.getElementById("importe-total");

    const total = bolsa.reduce((acc, item) => acc + item.itemValue, 0);
    totalProductos.textContent = bolsa.length;
    importeTotal.textContent = total.toFixed(2);

    const botonCompra = document.querySelector("button[onclick='realizarCompra()']");
    const resumenCarrito = document.getElementById("resumen-carrito");
    resumenCarrito.appendChild(botonCompra);  
};
 //Funcion Eliminar elemento
 const eliminarItem = (indice)=>{
    bolsa.splice(indice,1); //Recortar una posicion desde la posicion indice
    localStorage.setItem("bolsa",JSON.stringify(bolsa)); //Lo guarda actualizado
    mostrarBolsa(); //Vuelve a ejecutar y pintar la lista
}


const realizarCompra = ()=>{
    alert("Gracias por su compra");
    localStorage.removeItem(bolsa);
    window.location.href=("../index.html");
}

//Inicializar al cargar pagina
mostrarBolsa();


