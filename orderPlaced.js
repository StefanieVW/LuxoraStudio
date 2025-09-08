// Simpan orderId & counter di cookie (dummy)
document.cookie = "orderId=" + 0 + ",counter=" + 0;

let httpRequest = new XMLHttpRequest(),
    method = "GET",
    jsonRequestURL = "https://fakestoreapi.com/carts";

// GET data dulu
httpRequest.open(method, jsonRequestURL, true);
httpRequest.onreadystatechange = function () {
    if (httpRequest.readyState == 4 && httpRequest.status == 200) {
        // convert JSON jadi JS object
        let jsonArray = JSON.parse(httpRequest.responseText);
        console.log("GET carts:", jsonArray);

        // bikin order dummy baru
        let newOrder = {
            userId: 1,
            date: new Date().toISOString().split("T")[0], // format YYYY-MM-DD
            products: [
                { productId: 1, quantity: 2 },
                { productId: 2, quantity: 1 }
            ]
        };

        // kirim order pakai POST
        let postRequest = new XMLHttpRequest();
        postRequest.open("POST", "https://fakestoreapi.com/carts", true);
        postRequest.setRequestHeader("Content-Type", "application/json");
        postRequest.onreadystatechange = function () {
            if (postRequest.readyState == 4 && postRequest.status == 200) {
                console.log("Order baru berhasil dikirim:", JSON.parse(postRequest.responseText));
            }
        };
        postRequest.send(JSON.stringify(newOrder));
    }
};
httpRequest.send(null);
