const inputs = document.querySelectorAll("input");

function create_Elem(){
    let element = document.createElement(inputs[0].value);
    console.log(element);
}