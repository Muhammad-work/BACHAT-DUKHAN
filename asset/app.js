let BestSellingProducts4 = document.getElementById('BestSellingProducts4');

// Function to fetch and display API products
async function fetchAndDisplayAPIProducts() {
    try {
        let response = await fetch('https://fakestoreapi.com/products');
        let products = await response.json();

        // Clear the previous content before appending new ones
        BestSellingProducts4.innerHTML = "";

        products.forEach((item) => {
            BestSellingProducts4.innerHTML += `
                <a class='text-black-400' href="singleProduct.html">
                    <div class="w-[300px] h-auto py-2 cursor-pointer" onclick='getClickCardItemsAPI(${item.id}, "${item.image}", "${item.title}", "${item.price}")'>
                        <img class="w-[95%] mx-auto" src="${item.image}" alt="" id='img'>
                        <p class="text-center w-[90%] mx-auto mt-2">${item.title}</p>
                        <p style="text-decoration: line-through black;" class="font-bold inline-block text-center ms-[80px] mt-2">RS.${(item.price * 1.2).toFixed(2)}</p>
                        <p class="inline-block ms-1 font-bold text-pink-400">Rs.${item.price}</p>
                    </div>
                </a>
            `;
        });
    } catch (error) {
        console.error("Error fetching API products:", error);
    }
}

// Function to store API product in localStorage
function getClickCardItemsAPI(id, image, title, price) {
    let product = {
        id: id,
        img: image,
        title: title,
        dprice: (price * 1.2).toFixed(2),
        sellPrice: price
    };

    // let cart = JSON.parse(localStorage.getItem('Mycart')) || [];
    
    // Check if the item already exists in the cart
    let existingIndex = cart.findIndex(p => p.id === id);
    if (existingIndex !== -1) {
        cart.splice(existingIndex, 1); // Remove if it exists
    } else {
        cart.push(product); // Add new product
    }

    localStorage.setItem('Mycart', JSON.stringify(cart));
}

// Call the function to fetch and display products from API
fetchAndDisplayAPIProducts();
