const key = document.querySelector('#key');
key.style.cssText ='width : 200px; height:200px ; background-color:white; border:1px solid black';

const key2 = document.querySelector('#key2');
key2.style.cssText ='width : 200px; height:200px ; background-color:white; border:1px solid black';

let color;
let color2;


document.addEventListener('keydown', function (event) {
    if (event.key === 'a'){
        color = 'pink';
    } else if (event.key === 's') {
        color = 'orange';
    }else if(event.key === 'd'){
        color = 'skyblue';
    }
    key.style.backgroundColor = color;
})

document.addEventListener('keydown', function (event) {
    if (event.key === 'q'){
        color2 = 'purple';
    } else if (event.key === 'w') {
        color2 = 'gray';
    }else if(event.key === 'e'){
        color2 = 'brown';
    }
    key2.style.backgroundColor = color2;
})