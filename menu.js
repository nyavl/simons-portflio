// alert ("Hallo det virker seriøst godt")

const menuBtn = document.getElementById ("menu-btn")

const menuItems = document.getElementById ("menu-items") 

menuBtn.onclick = function () {

    if ( menuItems.style.display == "none" ) {
        
        menuItems.style.display = "block"
    }
    else {
        menuItems.style.display = "none"
    }

}