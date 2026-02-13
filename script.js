let products = ["test1", "test2", "test3"];

function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if(user === "admin" && pass === "1234") {
    document.getElementById("loginSection").classList.add("hidden");
    document.getElementById("homeSection").classList.remove("hidden");
  } else {
    alert("Błędne dane logowania");
  }
}

function logout() {
  document.getElementById("loginSection").classList.remove("hidden");
  document.getElementById("homeSection").classList.add("hidden");
  document.getElementById("productsSection").classList.add("hidden");
}

function showHome() {
  document.getElementById("homeSection").classList.remove("hidden");
  document.getElementById("productsSection").classList.add("hidden");
}

function showProducts() {
  document.getElementById("homeSection").classList.add("hidden");
  document.getElementById("productsSection").classList.remove("hidden");
  renderProducts();
}

function renderProducts() {
  const list = document.getElementById("productList");
  list.innerHTML = "";

  products.forEach(product => {
    const div = document.createElement("div");
    div.className = "product";
    div.textContent = product;
    list.appendChild(div);
  });
}

function addProduct() {
  const newProduct = document.getElementById("newProductName").value;
  if(newProduct !== "") {
    products.push(newProduct);
    document.getElementById("newProductName").value = "";
    renderProducts();
  }
}

function searchProduct() {
  const search = document.getElementById("searchInput").value.toLowerCase();
  const list = document.getElementById("productList");
  list.innerHTML = "";

  products
    .filter(p => p.toLowerCase().includes(search))
    .forEach(product => {
      const div = document.createElement("div");
      div.className = "product";
      div.textContent = product;
      list.appendChild(div);
    });
}
