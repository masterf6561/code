let cartQuantity = 0;

document.getElementById("showButton").onclick = function() {showFunction()};
function showFunction(){ 
    console.log(`cartQuantity: ${cartQuantity}`);
}

document.getElementById("addButton").onclick = function() {addFunction()};
function addFunction(){
    cartQuantity++;
    document.getElementById("addButton").innerHTML = "Added to cart";
}

document.getElementById("doubleButton").onclick = function() {doubleFunction()};
function doubleFunction(){
    cartQuantity += 2;
}

document.getElementById("resetButton").onclick = function() {resetFunction()};
function resetFunction() {
    cartQuantity = 0;
}