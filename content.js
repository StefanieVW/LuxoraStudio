console.clear();

function dynamicClothingSection(product) {
    let boxDiv = document.createElement("div");
    boxDiv.id = "box";

    let boxLink = document.createElement("a");
    boxLink.href = "/contentDetails.html?" + product.id;

    let imgTag = document.createElement("img");
    imgTag.src = product.image;

    let detailsDiv = document.createElement("div");
    detailsDiv.id = "details";

    let h3 = document.createElement("h3");
    h3.textContent = product.title;

    let h4 = document.createElement("h4");
    h4.textContent = product.category;

    // ✅ Konversi USD -> IDR
    let h2 = document.createElement("h2");
    let priceIDR = product.price * 15000; // kurs dummy
    h2.textContent = priceIDR.toLocaleString("id-ID", {
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


let containerClothing = document.getElementById("containerClothing");
let containerAccessories = document.getElementById("containerAccessories");

let httpRequest = new XMLHttpRequest();
httpRequest.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
        let products = JSON.parse(this.responseText);

        for (let product of products) {
            if (product.category === "jewelery") {
                containerAccessories.appendChild(dynamicClothingSection(product));
            } else if (product.category === "men's clothing" || product.category === "women's clothing") {
                containerClothing.appendChild(dynamicClothingSection(product));
            }
        }
    }
};

httpRequest.open("GET", "https://fakestoreapi.com/products", true);
httpRequest.send();
