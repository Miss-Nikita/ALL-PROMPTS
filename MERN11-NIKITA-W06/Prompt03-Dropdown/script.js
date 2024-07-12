// let menu = document.querySelector(".menu")
// let nav = document.querySelector("nav")
let dropdown = document.querySelector(".dropdown")
// console.log(dropdown);

// menu.addEventListener("click", () =>{
//     dropdown.style.top = "0" ;
//     // dropdown.style.display = "flex" ;

// });

let flag= 0
document.querySelector("#menu").addEventListener("click",()=>{
    if(flag ===0 ){
        dropdown.style.top = "53%" ;
        flag=1
    }else{
        flag=0
        dropdown.style.top = "-45%" ;

    }
})