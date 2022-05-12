let toggleColourStatus = false;
const body= document.getElementsByTagName('body')
const menuBox = document.getElementById('color-menu-box');
const button = document.getElementById('button');
const homeButton = document.getElementById('home-btn');
const redButton = document.getElementById('red-btn');
const greenButton = document.getElementById('green-btn');
const purpleButton = document.getElementById('purple-btn');
const orangeButton = document.getElementById('orange-btn');
const getMenuUl = document.getElementById('color-menu');
const getMenuLi = document.getElementsByClassName('list-item');
const backgroundText = document.querySelector(".text-background");

button.addEventListener('mouseover', function(){
    getMenuUl.style.visibility= "visible"
    }
);

 menuBox.addEventListener('mouseleave', function(){
     getMenuUl.style.visibility= "hidden"
 });
 
    
homeButton.addEventListener("click", function() {
    document.body.className = "standard-background";
    getMenuUl.style.visibility = "hidden";
    backgroundText.innerHTML = "Homepage"
    
});

redButton.addEventListener("click", function() {
    document.body.className = "red-background";
    getMenuUl.style.visibility = "hidden";
    backgroundText.innerHTML = "Red Background"
})

greenButton.addEventListener("click", function() {
    document.body.className = "green-background";
    getMenuUl.style.visibility = "hidden";
    backgroundText.innerHTML = "Green Background"
})

purpleButton.addEventListener("click", function() {
    document.body.className = "purple-background";
    getMenuUl.style.visibility = "hidden";
    backgroundText.innerHTML = "Purple Background"
})

orangeButton.addEventListener("click", function() {
    document.body.className = "orange-background";
    getMenuUl.style.visibility = "hidden";
    backgroundText.innerHTML = "Orange background"
})

