let products = [
  { name: "Statuetka Smok", price: 49 },
  { name: "Figurka Robot", price: 39 },
  { name: "Organizer na biurko", price: 29 }
];

let cart = [];

function showHome(){
  hideAll();
  document.getElementById("homeSection").classList.remove("hidden");
}

function showProducts(){
  hideAll();
  document.getElementById("productsSection").classList.remove("hidden");
  renderProducts();
}

function showCart(){
  hideAll();
  document.getElementById("cartSection").classList.remove("hidden");
  renderCart();
}

function hideAll(){
  document.querySelectorAll(".section").forEach(sec => sec.classList.add("hidden"));
}

function renderProducts(){
  const list = document.getElementById("productList");
  list.innerHTML = "";

  products.forEach((p, index)=>{
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <h3>${p.name}</h3>
      <p>${p.price} zł</p>
      <button onclick="addToCart(${index})">Dodaj do koszyka</button>
    `;
    list.appendChild(div);
  });
}

function addProduct(){
  const name = document.getElementById("newName").value;
  const price = document.getElementById("newPrice").value;

  if(name && price){
    products.push({name, price: Number(price)});
    renderProducts();
  }
}

function searchProduct(){
  const search = document.getElementById("searchInput").value.toLowerCase();
  const list = document.getElementById("productList");
  list.innerHTML = "";

  products.filter(p => p.name.toLowerCase().includes(search))
  .forEach((p, index)=>{
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <h3>${p.name}</h3>
      <p>${p.price} zł</p>
      <button onclick="addToCart(${index})">Dodaj do koszyka</button>
    `;
    list.appendChild(div);
  });
}

function addToCart(index){
  cart.push(products[index]);
  document.getElementById("cartCount").textContent = cart.length;
}

function renderCart(){
  const list = document.getElementById("cartList");
  list.innerHTML = "";
  let total = 0;

  cart.forEach(p=>{
    total += p.price;
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `${p.name} - ${p.price} zł`;
    list.appendChild(div);
  });

  document.getElementById("totalPrice").textContent = "Suma: " + total + " zł";
}
