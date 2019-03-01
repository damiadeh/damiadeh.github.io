// TODO : store LAD cart in LocallStorage
//check if product exist in LADcart

// Cart state 
var LADCart = JSON.parse(localStorage.getItem('LADCart'));

//dummy data
var dataFromApi = {
    products: [
        {
            name: 'better Bag',
            price: 1000
        }, 
        {
            name: 'Orobo shirt',
            price: 5000
        },
        {
            name: 'Jumia Bag',
            price: 3500
        }, {
            name: 'Dolce shirt',
            price: 1700
        },
        {
            name: 'MakeSense Bag',
            price: 780
        }, 
        {
            name: 'onPoint shirt',
            price: 1800
        },
        {
            name: 'Ralph Bag',
            price: 250
        }, {
            name: 'Gucci shirt',
            price: 3240
        },
    ]
};
var products = dataFromApi.products;
//render data
document.addEventListener('DOMContentLoaded', function() {
    if(!LADCart) LADCart = {cart : []};
    updateCartNo();
    var div = document.getElementById('append_product');
    div.innerHTML += '<div class="row">';
    for (let count = 1; count <= products.length ; count++) {
        if(count%4 == 0 && products[count]){
            div.innerHTML += 	`<div class="clearfix"> </div>
                    </div>
                <br/><br/>
                  <div class="row">`
        }
        div.innerHTML += `<div class="col-md-3 col-xs-6" style="display:inline-block">
            <div class="col-md1">
            <a href="single.html">
                <img class="img-responsive" src="images/pi4.png" alt="" />
            </a>
            <h3><a href="single.html">`+products[count-1].name+`</a></h3>
            <div class="price">
                    <h5 class="item_price">`+products[count-1].price+`</h5>
                    <input class="item_add" type="button" onclick="addToCart(\`` +products[count-1].name+ `\`,`+products[count-1].price+`);" value="Add to Cart"/>
                    <div class="clearfix"> </div>
            </div>
        </div>
        </div>`;
    }

 }, false);

//displayModal
addToCart = (name, price) => {
    document.getElementById("modal").style.display = "block";
    var div = document.getElementById('append_modal');
    var divButton = document.getElementById('append_button');
    div.innerHTML = `<div>
    <h3 style="display:block">`+name+`</h3>
    </div>

    <div class="col-md-6">
    <b>Price: `+price+`</b>
    </div>
    <div class="col-md-6">
    <b>Qty: <input type="number" id="product_quantity"/> </b>
    </div>`;
    divButton.innerHTML = `<button type="button" onclick="addToCartObject(\``+name+ `\`,`+price+`)" class="btn" style="background-color: #52D0C4;">Add to Cart</button>
    <button type="button" onclick="closeModal();" class="btn btn-secondary" data-dismiss="modal">Close</button>`
}

//stores order
addToCartObject = (name,price) => {
    var qty = document.getElementById('product_quantity').value;
    if(!qty){
        alert("You must buy atleast 1");
        return;
    }
    var cost = price*qty;
    var newOrder = {
        productName : name,
        productPrice : price,
        productQuantity : qty,
        productCost: cost
    }
    console.log(newOrder);
    addToLADCart(newOrder);
    saveToLocalStorage();
    updateCartNo();
    closeModal();
}

// add to storage
saveToLocalStorage = () => {
    var cartObject = localStorage.setItem('LADCart', JSON.stringify(LADCart));
}

updateCartNo = () => {
    var number = JSON.parse(localStorage.getItem('LADCart')) ? LADCart.cart.length : 0;
    document.getElementById('cart_total').innerHTML = number;
}

function addToLADCart(newOrder){
    
    LADCart.cart.push(newOrder);
}

//close modal
function closeModal(){
    document.getElementById("modal").style.display = "none";
}

//clears local storage
function clearStorage(){
    console.log("cleared");
    if(LADCart.cart[0]){
        localStorage.removeItem('LADCart');
        document.getElementById('cart_total').innerHTML = 0;
        LADCart.cart = [];
        alert("All orders has been cleared from your local storage");
    }else{
        alert("No item in storage");
    }  
}




