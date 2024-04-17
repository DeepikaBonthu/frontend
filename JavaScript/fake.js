document.addEventListener("DOMContentLoaded", () => {
    const productList = document.getElementById("productList");

    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(products => {
            products.forEach(product => {
                const productCard = document.createElement("div");
                productCard.classList.add("product-card");

                const title = document.createElement("div");
                title.classList.add("product-title");
                title.textContent = product.title;

                const description = document.createElement("div");
                description.classList.add("product-description");
                description.textContent = product.description;

                const price = document.createElement("div");
                price.classList.add("product-price");
                price.textContent = `$${product.price}`;

                const image = document.createElement("img");
                image.classList.add("product-image");
                image.src = product.image;

                productCard.appendChild(title);
                productCard.appendChild(description);
                productCard.appendChild(price);
                productCard.appendChild(image);

                productList.appendChild(productCard);
            });
        })
        .catch(error => {
            console.error("Error fetching products:", error);
        });

        function addProduct() {
            const title = document.getElementById('title').value;
            const price = parseFloat(document.getElementById('price').value);
            const description = document.getElementById('description').value;
            const image = document.getElementById('image').value;
            const category = document.getElementById('category').value;
        
            fetch('https://fakestoreapi.com/products', {
                method: "POST",
                body: JSON.stringify({
                    title: title,
                    price: price,
                    description: description,
                    image: image,
                    category: category
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            })
                .then(res => res.json())
                .then(json => {
                    console.log("Product added:", json);
                    // You can perform additional actions here, such as displaying a success message.
                })
                .catch(error => console.error('Error adding product:', error));
        }

});




        
