/* Open */
function openNav() {
    document.getElementById("myNav").style.width = "70vw";
    document.getElementById("open-btn").classList.add("hide");
}
  
/* Close */
function closeNav() {
    document.getElementById("myNav").style.width = "0vh";
    document.getElementById("open-btn").classList.remove("hide");
}