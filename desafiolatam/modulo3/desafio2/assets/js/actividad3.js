const btn_ingresar = document.querySelector('#btn-ingresar');
const texto_respuesta = document.querySelector('#texto_respuesta');

btn_ingresar.addEventListener('click',function(){
    let select_1 = parseInt(document.querySelector('#select_1').value);
    let select_2 = parseInt(document.querySelector('#select_2').value);
    let select_3 = parseInt(document.querySelector('#select_3').value);

    if( select_1 == 9 && select_2 == 1 && select_3 == 1 ){
        texto_respuesta.innerHTML = 'password 1 correcto';
    }else if(select_1 == 7 && select_2 == 1 && select_3 == 4){
        texto_respuesta.innerHTML = 'password 2 correcto';
    }else{ 
        texto_respuesta.innerHTML = 'password incorrecto';
    }    
});
