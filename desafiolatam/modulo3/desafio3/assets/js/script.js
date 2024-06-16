function pintar(event,color){
    event.target.style.backgroundColor = color;
}

const ele = document.getElementById("ele1")
ele.style.backgroundColor = 'green';

ele.addEventListener("click", function(event){
    pintar(event,'yellow')
});