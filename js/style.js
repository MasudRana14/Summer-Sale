

let priceTotal = 0;

function clickTheProduct(products) {

    const productName = document.getElementById('CreateProductName');
    const productItem = products.childNodes[3].childNodes[5];
    const ProductText = productItem.innerText;
    
    const ol = document.createElement('ol');
    ol.innerText = ProductText;
    productName.appendChild(ol);
    const ProductsPrice = products.childNodes[3].childNodes[7].innerText.split(' ')[1];
    priceTotal = parseFloat(priceTotal) + parseFloat(ProductsPrice);
    const inputFieldPrice = document.getElementById('total-product-price');
    inputFieldPrice.innerText = priceTotal;

    if (priceTotal > 0) {
        const buyProduct = priceTotal;
        const totalAmount = document.getElementById('Product-Total-Amount');
        const amount = totalAmount.innerText;
        const productTotal = parseFloat(amount);
        totalAmount.innerText = buyProduct;
        const buyProductBtn = document.getElementById('Make-Purchase-btn');

        buyProductBtn.removeAttribute('disabled')
    }
    else {
        purchaseButton.setAttribute('disabled', true);
    }
}

