const cal = document.querySelector("#cal")
const btn = document.querySelector("#btn")
const input = document.querySelector("#d")
function handleClick(e){
    const num = e.target.innerText
    input.value = parseFloat(input.value + num)
    //解决开头多个零
}
for(let i = 0; i<10;i++){
    const newBtn = btn.cloneNode(true)
    newBtn.innerText = i
    cal.appendChild(newBtn)
    newBtn.addEventListener("click",handleClick)
}
cal.removeChild(btn)
