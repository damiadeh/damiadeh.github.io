var LADCart = JSON.parse(localStorage.getItem('LADCart'));
var products = LADCart ?  LADCart.cart : ""; 
var cost = 0;


document.addEventListener('DOMContentLoaded', function() {
    var div = document.getElementById('display_cart');
    if(LADCart){
        for (let count = 1; count <= products.length ; count++) {
            cost = cost + products[count-1].productCost;
            div.innerHTML += `<div style="background-color: #eeeeee;margin-bottom: 15px">
            <h3>` +products[count-1].productQuantity+`pcs of ` +products[count-1].productName+` | Unit Price : `+products[count-1].productPrice+` | Cost : `+products[count-1].productCost+`</h3>
            </div>`;
        }
        div.innerHTML += '<h2>Total Cost = <b>'+cost+'</b></h2>';
    }else{
        div.innerHTML = `<h3 style="color:red">You have not selected any order</h3>`;
    }
 }, false);