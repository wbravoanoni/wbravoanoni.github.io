
const btn_verificar = document.querySelector('#btn-verificar');
const mensaje = document.querySelector('#mensaje');

btn_verificar.addEventListener('click', function (){
    let sticker1 = parseInt(document.querySelector('#sticker_1').value);
    let sticker2 = parseInt(document.querySelector('#sticker_2').value);
    let sticker3 = parseInt(document.querySelector('#sticker_3').value);

    if( (sticker1 + sticker2 + sticker3) > 10 ){
        mensaje.innerHTML  = 'Lleva demasiados stickers';
    }else{
        mensaje.innerHTML  = '';
    }
});