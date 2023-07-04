let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}

let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () => {
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}
// document.querySelector('#add-to-cart').onclick = () => {
//     cartItem.classList.toggle('active');
//     navbar.classList.remove('active');
//     searchForm.classList.remove('active');
// }

window.onscroll = () => {
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

// (function(){
//     const cartInfo = document.querySelector('.add-to-cart');
//     const cart = document.getElementById('cart-items-container');

//     cartInfo.addEventListener('click', function(){
//         cart.classList.toggle('active');
//     });
// })();

(function() {
    const cartBtn = document.querySelectorAll('.add-to-cart');
    cartBtn.forEach(function(btn){
        btn.addEventListener('click', function(event){
            // console.log(event.target);
            if(event.target.classList.contains('add-to-cart')){
                // console.log(event.target.previousElementSibling.previousElementSibling.previousElementSibling.src);
                const fullPath = event.target.previousElementSibling.previousElementSibling.previousElementSibling.src;
                let pos = fullPath.indexOf("images") + 6;
                let partialPath = fullPath.slice(pos);
                // console.log(partialPath);

                const item = {};
                item.img = `images${partialPath}`;
                // console.log(item.img);

                let name = event.target.previousElementSibling.previousElementSibling.textContent;
                // console.log(name);
                item.name = name;
                
                let price = event.target.previousElementSibling.textContent;
                let finalPrice = price.slice(1, 4).trim();
                // console.log(finalPrice);
                item.price = finalPrice;

                const cartItem = document.createElement('div');
                cartItem.classList.add('cart-item');

                cartItem.innerHTML = `
                    <span class="fas fa-times"></span>
                    <img src="${item.img}" alt="">
                    <div class="content">
                        <h3>${item.name}</h3>
                        <div class="cart-item-price" id = "cart-item-price">₹${item.price}</div>
                    </div>
                </div>`

                // console.log(cartItem);

                const cart = document.getElementById('cart-items-container',);
                const total = document.querySelector('.cart-total-container');
                cart.insertBefore(cartItem, total);
                cart.classList.add('active');
                // alert('Item Added to the Cart');
                showTotals();
                // console.log(item);
            }
        });
    });
    function showTotals(){
        // console.log("hello");
        const total = [];
        const items = document.querySelectorAll('.cart-item-price');

        console.log(items);

        items.forEach(function(item){
            const str = item.textContent.slice(1);
            console.log(str);
            total.push(parseFloat(str));
            
            // total.push((Number)(item.textContent));
        });
        // // console.log(total);
        const totalMoney = total.reduce(function(total, item){
            total += item;
            return total;
        },0);
        const finalMoney = totalMoney.toFixed(2);
        // // console.log(finalMoney);
        document.getElementById('cart-total').textContent = finalMoney;
        document.getElementById('cart-count').textContent = total.length;
        // // document.querySelector('.item-total').textContent = finalMoney;
    }
})();