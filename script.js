const theme = document.getElementById("theme")
const toggle = document.getElementById("toggle")

function dark_light(){
    if (theme.className == "light") {
        theme.className = "dark"
        toggle.className = "fa-solid fa-sun"
    }
    else {
        theme.className = "light"
        toggle.className = "fa-solid fa-moon"  
    }

}
