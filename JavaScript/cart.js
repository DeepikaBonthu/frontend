function addToCart(product) {
    var cart = document.getElementById('cart');
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(product));
    cart.appendChild(li);
}

document.getElementById('cart').addEventListener('click', function(e) {
    if(e.target.tagName === 'LI') {
        e.target.remove();
    }
});
