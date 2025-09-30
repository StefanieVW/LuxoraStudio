console.clear();

// Data produk hardcode (copy dari content.js biar bisa dipakai di sini juga)
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

let id = Number(location.search.split('?')[1]);

// cari produk berdasarkan id
const product = products.find(p => p.id === id);

function dynamicContentDetails(product) {
    let mainContainer = document.createElement('div');
    mainContainer.id = 'containerD';
    document.getElementById('containerProduct').appendChild(mainContainer);

    // === BAGIAN GAMBAR ===
    let imageSectionDiv = document.createElement('div');
    imageSectionDiv.id = 'imageSection';
    let imgTag = document.createElement('img');
    imgTag.id = 'imgDetails';
    imgTag.src = product.image;
    imgTag.alt = product.alt;
    imageSectionDiv.appendChild(imgTag);

    // === BAGIAN DETAIL ===
    let productDetailsDiv = document.createElement('div');
    productDetailsDiv.id = 'productDetails';

    let h1 = document.createElement('h1');
    h1.textContent = product.title;

    let h4 = document.createElement('h4');
    h4.textContent = product.category;

    let detailsDiv = document.createElement('div');
    detailsDiv.id = 'details';

    let h3Price = document.createElement('h3');
    h3Price.textContent = product.price.toLocaleString("id-ID", {
        style: "currency",
        currency: "IDR"
    });

    let h3Desc = document.createElement('h3');
    h3Desc.textContent = "Deskripsi Produk";

    let para = document.createElement('p');
    para.textContent = product.description;

    // === TOMBOL ===
    let buttonDiv = document.createElement('div');
    buttonDiv.id = 'button';
    let buttonTag = document.createElement('button');
    buttonTag.textContent = 'Tambah ke Keranjang';

    buttonTag.onclick = function () {
        let order = id + " ";
        let counter = 1;

        if (document.cookie.indexOf(",counter=") >= 0) {
            order = id + " " + document.cookie.split(",")[0].split("=")[1];
            counter = Number(document.cookie.split(",")[1].split("=")[1]) + 1;
        }

        document.cookie = "orderId=" + order + ",counter=" + counter;
        document.getElementById("badge").innerHTML = counter;
    };


    buttonDiv.appendChild(buttonTag);

    // === SUSUN URUTAN ===
    mainContainer.appendChild(imageSectionDiv);
    mainContainer.appendChild(productDetailsDiv);
    productDetailsDiv.appendChild(h1);
    productDetailsDiv.appendChild(h4);
    productDetailsDiv.appendChild(detailsDiv);
    detailsDiv.appendChild(h3Price);
    detailsDiv.appendChild(h3Desc);
    detailsDiv.appendChild(para);
    productDetailsDiv.appendChild(buttonDiv);
}

// cek produk valid
if (product) {
    dynamicContentDetails(product);
} else {
    document.getElementById('containerProduct').innerHTML = "<p>Produk tidak ditemukan.</p>";
}
