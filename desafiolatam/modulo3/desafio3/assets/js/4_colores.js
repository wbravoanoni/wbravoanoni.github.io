const box1 = document.querySelector("#box_1");
const box2 = document.querySelector("#box_2");
const box3 = document.querySelector("#box_3");
const box4 = document.querySelector("#box_4");

box1.style.cssText  =' width : 200px; height : 200px; background-color:blue';
box2.style.cssText  =' width : 200px; height : 200px; background-color:red';
box3.style.cssText  =' width : 200px; height : 200px; background-color:green';
box4.style.cssText  =' width : 200px; height : 200px; background-color:yellow';


box1.addEventListener('click', () => box1.style.backgroundColor = 'black')
box2.addEventListener('click', () => box2.style.backgroundColor = 'black')
box3.addEventListener('click', () => box3.style.backgroundColor = 'black')
box4.addEventListener('click', () => box4.style.backgroundColor = 'black')