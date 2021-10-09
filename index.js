let text = document.querySelector(".text");
let but = document.querySelector(".but");

function call(){
    alert("thanks for signing-in");
}
but.disabled = true; 

text.addEventListener("change", stateHandle);

function stateHandle() {
    if (document.querySelector(".text").value === "") {
        but.disabled = true; 
    } 
    else {
        but.disabled = false; 
    }
}


