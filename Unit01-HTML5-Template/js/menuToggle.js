//Hamburger Menu
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.clasName === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}