console.clear();

let id = location.search.split('?')[1];

function dynamicContentDetails(product) {
    let mainContainer = document.createElement('div');
    mainContainer.id = 'containerD';
    document.getElementById('containerProduct').appendChild(mainContainer);

    let imageSectionDiv = document.createElement('div');
    imageSectionDiv.id = 'imageSection';
    let imgTag = document.createElement('img');
    imgTag.id = 'imgDetails';
    imgTag.src = product.image;
    imageSectionDiv.appendChild(imgTag);

    let productDetailsDiv = document.createElement('div');
    productDetailsDiv.id = 'productDetails';

    let h1 = document.createElement('h1');
    h1.textContent = product.title;

    let h4 = document.createElement('h4');
    h4.textContent = product.category;

    let detailsDiv = document.createElement('div');
    detailsDiv.id = 'details';

    // ✅ Konversi USD -> IDR
    let h3Price = document.createElement('h3');
    let priceIDR = product.price * 15000;
    h3Price.textContent = priceIDR.toLocaleString("id-ID", {
        style: "currency",
        currency: "IDR"
    });

    let h3Desc = document.createElement('h3');
    h3Desc.textContent = "Description";

    let para = document.createElement('p');
    para.textContent = product.description;

    let buttonDiv = document.createElement('div');
    buttonDiv.id = 'button';
    let buttonTag = document.createElement('button');
    buttonTag.textContent = 'Add to Cart';

    buttonTag.onclick = function () {
        let order = id + " ";
        let counter = 1;
        if (document.cookie.indexOf(",counter=") >= 0) {
            order = id + " " + document.cookie.split(',')[0].split('=')[1];
            counter = Number(document.cookie.split(',')[1].split('=')[1]) + 1;
        }
        document.cookie = "orderId=" + order + ",counter=" + counter;
        document.getElementById("badge").innerHTML = counter;
    };

    buttonDiv.appendChild(buttonTag);

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

let httpRequest = new XMLHttpRequest();
httpRequest.onreadystatechange = function () {
    if (this.readyState === 4 && this.status == 200) {
        let product = JSON.parse(this.responseText);
        dynamicContentDetails(product);
    }
};

httpRequest.open("GET", "https://fakestoreapi.com/products/" + id, true);
httpRequest.send();
