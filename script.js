function increment(){
    let count = document.querySelector("span")
    let error = document.getElementById("error")
    let clearbtn = document.getElementById("clear")
    let decrementbtn = document.getElementById("decrementbtn")
    if(parseInt(count.textContent)==0){
        let decrementbtn = document.getElementById("decrementbtn")
        decrementbtn.removeAttribute("disabled")
        decrementbtn.style.cursor="pointer" 
        error.style.display = "none"
        clearbtn.setAttribute("style","display:inline-block")
    }
    decrementbtn.style.backgroundColor = "white"    
    count.textContent = parseInt(count.textContent)+1
}
function decrement(){
    let count = document.querySelector("span")
    let decrementbtn = document.getElementById("decrementbtn")
    let clearbtn = document.getElementById("clear")
    let error = document.getElementById("error")
    if (parseInt(count.textContent)==1) {
        decrementbtn.style.cursor="not-allowed"
        count.textContent = parseInt(count.textContent)-1
        decrementbtn.setAttribute("disabled",true)
        error.removeAttribute("style")
        clearbtn.setAttribute("style","display:none")
        decrementbtn.style.backgroundColor = "lightblue"
    } 
    else {
        count.textContent = parseInt(count.textContent)-1
    }
}
function clearing(){
    let count = document.querySelector("span")
    let clearbtn = document.getElementById("clear")
    count.textContent = 0
    let decrementbtn = document.getElementById("decrementbtn")
    decrementbtn.style.cursor="not-allowed"
    decrementbtn.style.backgroundColor = "lightblue"
    decrementbtn.setAttribute("disabled",true)
    error.removeAttribute("style")
    clearbtn.setAttribute("style","display:none")
}