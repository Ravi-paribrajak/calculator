
let string = "";
let buttons = document.querySelectorAll('.button');
let inputs = document.querySelector('.input');
let backspace = document.querySelector('.backspace');

Array.from(buttons).forEach((button) =>{
    button.addEventListener('click',(e) => {
        console.log("Button was clicked");
        
        if(e.target.textContent == "="){
            string = eval(string);
            inputs.value = string;
        }
        else if(e.target.textContent == "AC"){
            string = "";
            inputs.value = string;
        }
        else{
            string = string + e.target.textContent;
            inputs.value = string;
        }
    })
});

// For Backspace button specifically 
backspace.addEventListener('click', (e)=>{
    string = string.slice(0, -1); // Remove all characters except last one
    inputs.value = "";
    
})

