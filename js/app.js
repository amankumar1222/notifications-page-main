
let avtar = document.getElementsByClassName("avtar")
Array.from(avtar).forEach(element => {
    let toggle = document.getElementById("toggle")
    let number = document.querySelector('.number span')
    toggle.addEventListener("click", ()=>{
        element.style.backgroundColor = "#fff"
        number.innerHTML = "0"
    })
     if(number != 0){
        element.addEventListener("click", (e)=>{
            element.style.backgroundColor = "#fff"
            if(number.innerHTML != 0) {
          number.innerHTML = `${ number.innerHTML - e.CAPTURING_PHASE}`
            }
        })
        

     }

});


