precio = 400000

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio

const btnMas = document.querySelector('#btn-mas'); 
const btnMenos = document.querySelector('#btn-menos'); 
const cantidadEtiqueta = document.querySelector('#cantidad');
const valorTotal = document.querySelector('#valor-total');
let cantidad = parseInt(document.querySelector('#cantidad').innerHTML);

btnMas.addEventListener('click',()=>{
    cantidad = cantidad +1;
    cantidadEtiqueta.innerHTML = cantidad;
    valorTotal.innerHTML = precio*cantidad;
});

btnMenos.addEventListener('click',()=>{
    if(cantidad > 0){
        cantidad = cantidad - 1;
        cantidadEtiqueta.innerHTML = cantidad;
        valorTotal.innerHTML = precio*cantidad;
    }
});