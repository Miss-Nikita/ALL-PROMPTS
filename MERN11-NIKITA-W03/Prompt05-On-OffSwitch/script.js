let container = document.querySelector(".container")
let onscreen = document.querySelector(".on-screen")
let offscreen = document.querySelector(".off-screen")
let btn = document.querySelector(".on-screen button")
let btnn = document.querySelector(".off-screen button")

btn.addEventListener("click" , () =>{
    offscreen.style.display = "initial"
    onscreen.style.display = "none" 
     btn.style.marginTop = "80%"
})

btnn.addEventListener("click" , () =>{
    offscreen.style.display = "none"
    onscreen.style.display = "initial" 
    btnn.style.marginTop = "80%"
    
})

