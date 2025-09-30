console.clear();

// Ambil cookie orderId (misal: "orderId=1 2,counter=2")
let cookie = document.cookie;
let orderCookie = cookie.split(",")[0].split("=")[1]; 
let orderIds = orderCookie.trim().split(" ").map(Number);

// Ambil data produk dari array products (yang sama kayak di content.js)
const products = [
  {
    id: 1,
    title: "Sweater Rajut Oversize Pria Garis Coklat Putih",
    category: "Pakaian Pria",
    price: 329000,
    image: "img/sweaterboy.jpg",
  },
  {
    id: 2,
    title: "Sweater Garis Wanita Casual Oversize",
    category: "Pakaian Wanita",
    price: 289000,
    image: "img/sweatergirl.jpg",
  },
  {
    id: 3,
    title: "Jaket Kulit Sintetis Crop Wanita Hitam",
    category: "Pakaian Wanita",
    price: 499000,
    image: "img/jacketgirl.jpg",
  }
];

// Filter produk yang ada di cookie
let orderedProducts = products.filter(p => orderIds.includes(p.id));

// Render list order di halaman Order Placed
let orderContainer = document.getElementById("orderContainer");

let listDiv = document.createElement("div");
listDiv.id = "orderedList";

let ul = document.createElement("ul");
orderedProducts.forEach(p => {
  let li = document.createElement("li");
  li.textContent = `${p.title} - ${p.price.toLocaleString("id-ID", {
    style: "currency",
    currency: "IDR"
  })}`;
  ul.appendChild(li);
});

listDiv.appendChild(ul);
orderContainer.appendChild(listDiv);

// Reset cart setelah order
document.cookie = "orderId=,counter=0";
