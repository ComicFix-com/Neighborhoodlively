// Example JavaScript code to secure
function calculatePrice(quantity, price) {
    return quantity * price;
}

document.addEventListener('DOMContentLoaded', function() {
    // Example event listener
    var button = document.getElementById('calculateButton');
    button.addEventListener('click', function() {
        var quantity = document.getElementById('quantity').value;
        var price = document.getElementById('price').value;
        var totalPrice = calculatePrice(quantity, price);
        alert('Total Price: ' + totalPrice);
    });
});
