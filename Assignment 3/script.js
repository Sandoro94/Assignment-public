let toggleColourStatus = false;
const button = document.getElementsByClassName("button")

let toggleColour = function(){
    let getMenuBurger = document.querySelector("img");
    let getMenuUl = document.querySelector(".color-menu")
    let getMenuLi = document.querySelectorAll("li");

    if (toggleColourStatus===false) {
        getMenuUl.style.visibility="visible";
        getMenuLi.style.visibility="visible";


        }
        toggleColourStatus===true;
    }
button.addEventListener('click', toggleColour())

