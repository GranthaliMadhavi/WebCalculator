let display = document.getElementById("display");
let buttons = document.querySelectorAll("button");

buttons.forEach(btn =>{
    btn.addEventListener("click",()=>{
        if(btn.innerText === "."){
            display.value = "";
        }
        else if(btn.innerText === "="){
            display.value = eval(display.value);
        }
        else{
            display.value += btn.innerText;
        }
    });
});