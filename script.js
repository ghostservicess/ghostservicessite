let cart = [];
let total = 0;

const cartBtn = document.getElementById("cartBtn");
const cartModal = document.getElementById("cartModal");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");

function addToCart(name, price){
    cart.push({name, price});
    total += price;
    updateCart();
}

function updateCart(){
    cartItems.innerHTML = "";
    cart.forEach(item=>{
        let li = document.createElement("li");
        li.textContent = item.name + " - " + item.price + " TL";
        cartItems.appendChild(li);
    });
    cartTotal.textContent = "Toplam: " + total + " TL";
    cartBtn.textContent = "Sepet (" + cart.length + ")";
}

cartBtn.addEventListener("click", ()=>{
    cartModal.style.display = "flex";
});

function closeCart(){
    cartModal.style.display = "none";
}

/* CURSOR EFFECT */
document.addEventListener("mousemove", e=>{
    const glow = document.querySelector(".cursor-glow");
    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";
});
