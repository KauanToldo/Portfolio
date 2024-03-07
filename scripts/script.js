var myVar;
const darkButton = document.querySelector(".fa-moon")
const lightButton = document.querySelector(".fa-sun")
const root = document.documentElement;

darkButton.addEventListener("click", () => {
    darkButton.style = "visibility: hidden !important"
    lightButton.style = "display: block !important; z-index: 1"
    root.style.setProperty('--background-light', '#0f0f0f')
    root.style.setProperty('--text-light', 'white')

})


lightButton.addEventListener("click", () => {
    darkButton.style = "visibility: 1 !important"
    lightButton.style = "display: none !important;"
    root.style.setProperty('--background-light', 'white')
    root.style.setProperty('--text-light', 'black')

})


function myFunction() { myVar = setTimeout(showPage, 500) }; // aumentei o tempo para ilustração }

function showPage() { document.getElementById("load").style.opacity = 0; 
document.getElementById("load").style.transition = "opacity 1s ease-out"; 
setTimeout(function() { document.getElementById("load").style.display = "none"; 
document.getElementById("page").style.opacity = 0; document.getElementById("page").style.display = "block"; 
setTimeout(function() { document.getElementById("page").style.opacity = 1; 
document.getElementById("page").style.transition = "opacity 2s ease-in-out"; }, 500); }, 550); }
