console.clear();

// ambil badge dari cookie
if (document.cookie.indexOf(",counter=") >= 0) {
  let counter = document.cookie.split(",")[1].split("=")[1];
  document.getElementById("badge").innerHTML = counter;
}

let cartContainer = document.getElementById("cartContainer");

let boxContainerDiv = document.createElement("div");
boxContainerDiv.id = "boxContainer";

// === DYNAMIC CODE UNTUK ITEM CART ===
function dynamicCartSection(ob, itemCounter) {
  let boxDiv = document.createElement("div");
  boxDiv.id = "box";
  boxContainerDiv.appendChild(boxDiv);

  // gambar produk
  let boxImg = document.createElement("img");
  boxImg.src = ob.image;      // ✅ sesuai products.js
  boxImg.alt = ob.title;
  boxDiv.appendChild(boxImg);

  // judul produk + qty
  let boxh3 = document.createElement("h3");
  boxh3.textContent = ob.title + " × " + itemCounter;
  boxDiv.appendChild(boxh3);

  // subtotal harga
  let boxh4 = document.createElement("h4");
  boxh4.textContent =
    "Subtotal: " +
    (ob.price * itemCounter).toLocaleString("id-ID", {
      style: "currency",
      currency: "IDR",
    });
  boxDiv.appendChild(boxh4);
}

let totalContainerDiv = document.createElement("div");
totalContainerDiv.id = "totalContainer";

let totalDiv = document.createElement("div");
totalDiv.id = "total";
totalContainerDiv.appendChild(totalDiv);

let totalh2 = document.createElement("h2");
totalh2.textContent = "Total Amount";
totalDiv.appendChild(totalh2);

// === UPDATE TOTAL AMOUNT ===
function amountUpdate(amount) {
  let totalh4 = document.createElement("h4");
  totalh4.textContent =
    "Amount: " +
    amount.toLocaleString("id-ID", {
      style: "currency",
      currency: "IDR",
    });
  totalDiv.appendChild(totalh4);
  totalDiv.appendChild(buttonDiv);
}

let buttonDiv = document.createElement("div");
buttonDiv.id = "button";
totalDiv.appendChild(buttonDiv);

let buttonTag = document.createElement("button");
buttonDiv.appendChild(buttonTag);

let buttonLink = document.createElement("a");
buttonLink.href = "/orderPlaced.html?";
buttonLink.textContent = "Place Order";
buttonTag.appendChild(buttonLink);

// === BACKEND LOGIC (pakai products array sendiri) ===
const products = [
  {
    id: 1,
    title: "Sweater Rajut Oversize Pria Garis Coklat Putih",
    category: "Pakaian Pria",
    price: 229000,
    image: "img/sweaterboy.jpg",
    description:
      "Sweater rajut oversize pria dengan motif garis horizontal warna coklat muda dan putih. ...",
    alt: "Sweater rajut oversize pria dengan motif garis coklat muda dan putih, berbahan acrylic premium yang hangat dan nyaman."
  },
  {
    id: 2,
    title: "Sweater Garis Wanita Casual Oversize",
    category: "Pakaian Wanita",
    price: 189000,
    image: "img/sweatergirl.jpg",
    description:
      "Sweater wanita bergaya kasual dengan motif garis horizontal hitam di atas dasar warna putih. ...",
    alt: "Sweater wanita oversize warna putih dengan motif garis hitam horizontal, berbahan cotton blend lembut dan nyaman."
  },
  {
    id: 3,
    title: "Jaket Kulit Sintetis Crop Wanita Hitam",
    category: "Pakaian Wanita",
    price: 299000,
    image: "img/jacketgirl.jpg",
    description:
      "Jaket kulit sintetis crop wanita warna hitam dengan desain biker modern. ...",
    alt: "Jaket crop kulit sintetis wanita warna hitam dengan sabuk pinggang, model biker modern, stylish dan edgy."
  }
];

let totalAmount = 0;

if (document.cookie.indexOf(",counter=") >= 0) {
  let counter = Number(document.cookie.split(",")[1].split("=")[1]);
  document.getElementById("totalItem").textContent =
    "Total Items: " + counter;

  let item = document.cookie
    .split(",")[0]
    .split("=")[1]
    .trim()
    .split(" ");

  let i;
  for (i = 0; i < counter; i++) {
    let itemCounter = 1;
    for (let j = i + 1; j < counter; j++) {
      if (Number(item[j]) == Number(item[i])) {
        itemCounter += 1;
      }
    }
    totalAmount += Number(products[item[i] - 1].price) * itemCounter;
    dynamicCartSection(products[item[i] - 1], itemCounter);

    i += itemCounter - 1;
  }

  // masukkan item box ke cart
  cartContainer.appendChild(boxContainerDiv);

  // masukkan total box sekali di bawah item
  amountUpdate(totalAmount);
  cartContainer.appendChild(totalContainerDiv);
}
