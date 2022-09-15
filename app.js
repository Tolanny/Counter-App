buttonEl = document.getElementById("button-el")

txtEl = document.getElementById("count-el")

let count = 1

buttonEl.addEventListener("click",function(){
    
    txtEl.textContent = count++
})