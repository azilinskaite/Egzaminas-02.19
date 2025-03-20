let tabs = document.getElementsByClassName("tab")
let buttons = document.getElementsByTagName("button")
buttons[0].classList.add("selected")

//

function showTab(event, name){

    for(var button of buttons){ 
        button.classList.remove("selected")
    }

    event.currentTarget.classList.add("selected")

for(let tab of tabs){ 
    tab.style.display = "none"
}
    document.getElementById(name).style.display = "block"
}

// add event listeners to all .canging-tab button
// onclick="showTab(event, 'register-btn')

//BURGER MENU

const burger = document.getElementById("burger")
const links = document.querySelector(".links")

burger.addEventListener("click", function(){ 
    burger.classList.toggle("rotate")
    links.classList.toggle("open")
})
