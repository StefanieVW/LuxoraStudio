console.clear();

// Data produk hardcode
const products = [
  {
    id: 1,
    title: "Sweater Rajut Oversize Pria Garis Coklat Putih",
    category: "Pakaian Pria",
    price: 229000,
    image: "img/sweaterboy.jpg",
    description:
      "Sweater rajut oversize pria dengan motif garis horizontal warna coklat muda dan putih. Terbuat dari bahan rajut acrylic premium yang hangat, lembut, dan tetap ringan dipakai. Potongan oversized memberikan kesan kasual modern, cocok untuk gaya streetwear maupun daily outfit. Sweater ini mudah dipadukan dengan cargo pants atau jeans, sempurna untuk tampilan santai namun tetap stylish.",
    alt: "Sweater rajut oversize pria dengan motif garis coklat muda dan putih, berbahan acrylic premium yang hangat dan nyaman."
  },
  {
    id: 2,
    title: "Sweater Garis Wanita Casual Oversize",
    category: "Pakaian Wanita",
    price: 189000,
    image: "img/sweatergirl.jpg",
    description:
      "Sweater wanita bergaya kasual dengan motif garis horizontal hitam di atas dasar warna putih. Desain oversize memberi kenyamanan ekstra sekaligus tampilan trendi. Dibuat dari bahan cotton blend berkualitas tinggi yang adem dan lembut di kulit. Sweater ini cocok dipadukan dengan celana jeans atau rok, ideal untuk kuliah, hangout, maupun kegiatan santai sehari-hari.",
    alt: "Sweater wanita oversize warna putih dengan motif garis hitam horizontal, berbahan cotton blend lembut dan nyaman."
  },
  {
    id: 3,
    title: "Jaket Kulit Sintetis Crop Wanita Hitam",
    category: "Pakaian Wanita",
    price: 299000,
    image: "img/jacketgirl.jpg",
    description:
      "Jaket kulit sintetis crop wanita warna hitam dengan desain biker modern. Terbuat dari bahan kulit sintetis berkualitas tinggi yang lentur, ringan, dan tahan lama. Detail sabuk pada pinggang dan potongan crop menambah kesan edgy sekaligus fashionable. Cocok dipadukan dengan tank top dan jeans high waist untuk tampilan streetwear yang bold dan penuh percaya diri. Jaket ini wajib dimiliki untuk koleksi fashion Anda yang ingin tampil lebih berkarakter.",
    alt: "Jaket crop kulit sintetis wanita warna hitam dengan sabuk pinggang, model biker modern, stylish dan edgy."
  }
];


// Function render produk
function dynamicClothingSection(product) {
  let boxDiv = document.createElement("div");
  boxDiv.id = "box";

  let boxLink = document.createElement("a");
  boxLink.href = "/contentDetails.html?" + product.id;

  let imgTag = document.createElement("img");
  imgTag.src = product.image;
  imgTag.alt = product.alt; // ✅ Alt text detail

  let detailsDiv = document.createElement("div");
  detailsDiv.id = "details";

  let h3 = document.createElement("h3");
  h3.textContent = product.title;

  let h4 = document.createElement("h4");
  h4.textContent = product.category;

  let h2 = document.createElement("h2");
  h2.textContent = product.price.toLocaleString("id-ID", {
    style: "currency",
    currency: "IDR"
  });

  boxDiv.appendChild(boxLink);
  boxLink.appendChild(imgTag);
  boxLink.appendChild(detailsDiv);
  detailsDiv.appendChild(h3);
  detailsDiv.appendChild(h4);
  detailsDiv.appendChild(h2);

  return boxDiv;
}

// Render hanya pakaian
let containerClothing = document.getElementById("containerClothing");

for (let product of products) {
  containerClothing.appendChild(dynamicClothingSection(product));
}
