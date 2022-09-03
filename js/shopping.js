const cartArray = [];
function addToCart ( e ) {
    const productName = e.parentNode.parentNode.parentNode.children[1].children[0].innerText;
    const productPrice = e.parentNode.parentNode.parentNode.children[ 1 ].children[ 1 ].children[0].innerText;
    // const productImage = e.parentNode.parentNode.parentNode.children[ 0 ].children.src;
    // console.log(productName, productPrice,productImage);

    const productObj = {
      productName: productName,
      productPrice: parseFloat(productPrice),
    };

    cartArray.push( productObj );

    const cartItems = document.getElementById( "cart-items" );
    cartItems.innerText = cartArray.length;
    
    displayToCart(cartArray);
  const table = `
    
    `;
}

function displayToCart () {
    const cartBody = document.getElementById( "cart-products" );
    cartBody.innerHTML = ''
    for ( let i = 0; i < cartArray.length; i++ ){
       
        const productName = cartArray[i].productName;
        const productPrice = cartArray[i].productPrice;

        const tr = document.createElement( 'tr' );
        
        tr.innerHTML = `
       <tr>
        <th>${i+1}</th>
        <td>${productName}</td>
        <td>${productPrice}</td>
      </tr>
    `;
        cartBody.appendChild( tr );
    }

}