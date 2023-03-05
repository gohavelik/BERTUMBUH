const menu = document.querySelector(".top-menu");
const arrow = document.querySelector(".menu-arrow")


const menuArrow = document
.querySelector(".menu-programs")
.addEventListener("click", function() {
    if (menu.id == "closed") {
       menu.style = "display:flex;"
       menu.id = "opened";
       arrow.classList.add("arrow-animation");

    } 
    else if (menu.id == "opened") {
        menu.style = "display:none";
        menu.id = "closed"
        arrow.classList.remove("arrow-animation");
    }
    
})