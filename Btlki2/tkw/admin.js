let products = JSON.parse(localStorage.getItem("products")) || [
    { id: 1, name: "Ốp lưng iPhone", price: 150000, image: "img/oplung.jpg" },
    { id: 2, name: "Tai nghe Bluetooth", price: 450000, image: "img/tainghe.jpg" },
    { id: 3, name: "Sạc dự phòng", price: 550000, image: "img/sacdp.jpg" },
    { id: 4, name: "Cáp sạc nhanh", price: 200000, image: "img/capsac.jpg" },
    { id: 5, name: "Giá đỡ điện thoại", price: 180000, image: "img/giado.jpg" },
    { id: 6, name: "Pin dự phòng 10.000mAh", price: 600000, image: "img/pin.jpg" }
];

// Hiển thị danh sách sản phẩm trong Admin
function displayAdminProducts() {
    let productList = document.getElementById("admin-product-list");
    productList.innerHTML = "";
    products.forEach((product, index) => {
        productList.innerHTML += `
            <tr>
                <td>${product.id}</td>
                <td><img src="${product.image}" width="50"></td>
                <td>${product.name}</td>
                <td>${product.price.toLocaleString()} VND</td>
                <td>
                    <button class="btn btn-warning btn-sm" onclick="editProduct(${index})">Sửa</button>
                    <button class="btn btn-danger btn-sm" onclick="deleteProduct(${index})">Xóa</button>
                </td>
            </tr>
        `;
    });
}

// Thêm sản phẩm mới
function addProduct() {
    let name = document.getElementById("product-name").value;
    let price = document.getElementById("product-price").value;
    let image = document.getElementById("product-image").value;

    if (!name || !price || !image) {
        alert("Vui lòng nhập đủ thông tin!");
        return;
    }

    let newProduct = {
        id: products.length + 1,
        name,
        price: parseInt(price),
        image
    };

    products.push(newProduct);
    localStorage.setItem("products", JSON.stringify(products));
    displayAdminProducts();
}

// Xóa sản phẩm
function deleteProduct(index) {
    products.splice(index, 1);
    localStorage.setItem("products", JSON.stringify(products));
    displayAdminProducts();
}

// Sửa sản phẩm
function editProduct(index) {
    let newName = prompt("Nhập tên mới:", products[index].name);
    let newPrice = prompt("Nhập giá mới:", products[index].price);
    let newImage = prompt("Nhập link ảnh mới:", products[index].image);

    if (newName && newPrice && newImage) {
        products[index] = { ...products[index], name: newName, price: parseInt(newPrice), image: newImage };
        localStorage.setItem("products", JSON.stringify(products));
        displayAdminProducts();
    }
}

document.addEventListener("DOMContentLoaded", displayAdminProducts);
