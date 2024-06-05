const img_unica = document.querySelector('#img-unica');
let decoracion = true;
img_unica.addEventListener( 'click',function(){

if( decoracion ){
    img_unica.style = "border: 2px solid red;";
    decoracion = false;
}else{
    decoracion = true;
    img_unica.style = "border: none;";
}
   
});