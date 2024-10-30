let topQuestions = document.querySelectorAll('.top-question');

let dropDownBtns = document.querySelectorAll('.dropDownBtn');

let dropDownBtnArr = Array.from(dropDownBtns);
let topQuestionArr = Array.from(topQuestions);

dropDownBtnArr.forEach((dropDownBtn, index) => {
    dropDownBtn.addEventListener('click', (e) => {
        let question = topQuestionArr[index];

        if (question.style.display === 'block') {
            question.style.display = 'none';
            dropDownBtn.innerHTML = '<i class="fa-solid fa-plus"></i>';
        } else {
            question.style.display = 'block';
            dropDownBtn.innerHTML = '<i class="fa-solid fa-minus"></i>';
        }
    });
});




let BestSellingProducts = document.getElementById('BestSellingProducts');
let BestSellingProducts2 = document.getElementById('BestSellingProducts2');
let BestSellingProducts3 = document.getElementById('BestSellingProducts3');
let BestSellingProducts4 = document.getElementById('BestSellingProducts4');


const obj1 = [
    {
        id: 1,
        img: 'https://bachatdukan.com/cdn/shop/products/1445_1800x1800.webp?v=1658137584',
        title: `(Pack of 2) Silicone Baby U shaped Tooth Brush, Gum
                    Protector Soft Toothbrush`,
        dprice: 949.00,
        sellPrice: 799.00
    },
    {
        id: 2,
        img: 'https://bachatdukan.com/cdn/shop/files/USB-Rechargeable-Lint-Remover-Electric-Pellets-Lint-Removal-Clothing-Hair-Ball-Trimmer-Sweater-Fuzz-Clothes-Shaver_1800x1800.webp?v=1700903454',
        title: `[Free Home Delivery]Lint Remover- Hairball Trimmer- Fuzz Clothes and Sweater's Spool Shaver`,
        dprice: 949.00,
        sellPrice: 799.00
    },
    {
        id: 3,
        img: 'https://bachatdukan.com/cdn/shop/products/c82c294c-afa4-45c5-ac91-84a3a8e3d57e_1800x1800.jpg?v=1662106300',
        title: `Stainless Steel Manual Fruit Juicer Portable Fruit Press`,
        dprice: 949.00,
        sellPrice: 799.00
    },
    {
        id: 4,
        img: 'https://bachatdukan.com/cdn/shop/files/51-u9IkRg9L._AC_UF1000_1000_QL80_1800x1800.jpg?v=1709977292',
        title: `Gatling Automatic Water Bubble Gun Toy For Kids`,
        dprice: 949.00,
        sellPrice: 799.00
    },
];
const obj2 = [
    {
        id: 1,
        img: 'https://bachatdukan.com/cdn/shop/products/d83705ddb163f52ed9aec5d10bff0017_1800x1800.jpg?v=1660902343',
        title: `Self Adhesive Black & White Marble Sheet for Kitchen / Waterproof Anti Oil & Heat Resistant Wallpaper Sheet (2 Feet x 6.5 feet)`,
        dprice: '1.129.00',
        sellPrice: 699.00
    },
    {
        id: 2,
        img: 'https://bachatdukan.com/cdn/shop/files/02c0a0cdb2b23261b24ae3e7bf02bc96_1800x1800.jpg?v=1709720590',
        title: `Battery Operated Coffee Beater`,
        dprice: '1,259.00',
        sellPrice: 799.00
    },
    {
        id: 3,
        img: 'https://bachatdukan.com/cdn/shop/products/75d9c26aeefc041e1e4872b9cdcbb9da_1800x1800.jpg?v=1660912499',
        title: `Stainless Steel Manual Fruit Juicer Portable Fruit Press`,
        dprice: '1,599.00',
        sellPrice: '1,099.00'
    },
    {
        id: 4,
        img: 'https://bachatdukan.com/cdn/shop/products/HTB1G704hK3tHKVjSZSgq6x4QFXaq_1800x1800.webp?v=1662121736',
        title: `Rechargeable Electric Coffee Mixer Milk Shake Maker Frothier Foamer USB Charging Egg Beater Coffee Beater Handheld 3-Speed Adjustable Blender`,
        dprice: '3,598.00',
        sellPrice: '1,899.00'
    },
];
const obj3 = [
    {
        id: 1,
        img: 'https://bachatdukan.com/cdn/shop/files/USB-Rechargeable-Lint-Remover-Electric-Pellets-Lint-Removal-Clothing-Hair-Ball-Trimmer-Sweater-Fuzz-Clothes-Shaver_1800x1800.webp?v=1700903454',
        title: `[Free Home Delivery] Lint Remover- Hairball Trimmer- Fuzz Clothes and Sweater's Spool Shaver`,
        dprice: '5,398.00',
        sellPrice: '2,499.00'
    },
    {
        id: 2,
        img: 'https://bachatdukan.com/cdn/shop/files/fdabeb0e500291f4bf2b1a53993d6508_1_1800x1800.jpg?v=1685603263',
        title: `Portable Water Sprayer Nozzle Adjustable Metal High Pressure`,
        dprice: '1,579.00',
        sellPrice: 999.00
    },
    {
        id: 3,
        img: 'https://bachatdukan.com/cdn/shop/files/9681b98e1539771c54b9782ad00c70f2_1200x1200_f34e1f1c-6e1a-45ba-aaf7-2929d4d1e818_1800x1800.webp?v=1698734930',
        title: `Beewax ,Furniture Polish ,Wood Seasoning Beewax - Wood Polish and Cleaner for Furniture Care (85g) big size`,
        dprice: '7,898.00',
        sellPrice: '5,900.00'
    },
    {
        id: 4,
        img: 'https://bachatdukan.com/cdn/shop/files/Portable-USB-Air-Conditioner-Fan-Household-Small-Air-Cooler-Humidifier-Hydrocooling-Fan-Portable-Air-Adjustment-For_1800x1800.webp?v=1713267342',
        title: `(FREE HOME DELIVERY) Portable Air Conditioner Fan With 3 Wind Speeds, Humidifier With LED Night Light Water Mist Fans`,
        dprice: '3,598.00',
        sellPrice: '1,899.00'
    },
];
const obj4 = [
    {
        id: 1,
        img: 'https://bachatdukan.com/cdn/shop/files/USB-Rechargeable-Lint-Remover-Electric-Pellets-Lint-Removal-Clothing-Hair-Ball-Trimmer-Sweater-Fuzz-Clothes-Shaver_1800x1800.webp?v=1700903454',
        title: `[Free Home Delivery] Lint Remover- Hairball Trimmer- Fuzz Clothes and Sweater's Spool Shaver`,
        dprice: '5,398.00',
        sellPrice: '2,499.00'
    },
    {
        id: 2,
        img: 'https://bachatdukan.com/cdn/shop/files/USB-Rechargeable-Lint-Remover-Electric-Pellets-Lint-Removal-Clothing-Hair-Ball-Trimmer-Sweater-Fuzz-Clothes-Shaver_1800x1800.webp?v=1700903454',
        title: `[Free Home Delivery] Lint Remover- Hairball Trimmer- Fuzz Clothes and Sweater's Spool Shaver`,
        dprice: '5,398.00',
        sellPrice: '2,499.00'
    },
    {
        id: 3,
        img: 'https://bachatdukan.com/cdn/shop/products/c82c294c-afa4-45c5-ac91-84a3a8e3d57e_1800x1800.jpg?v=1662106300',
        title: `Stainless Steel Manual Fruit Juicer Portable Fruit Press`,
        dprice: '2,578.00',
        sellPrice: '1,899.00'
    },
    {
        id: 4,
        img: 'https://bachatdukan.com/cdn/shop/files/Untitled-1_1024x1024_32b0250b-55be-451c-a45a-ba0079d98bd0_1800x1800.webp?v=1714647097',
        title: `Folding Baby Mosquito Net | Limited Offer Upto 50% Off`,
        dprice: '3,598.00',
        sellPrice: '1,495.00'
    },
];




function dynamicCards() {
    obj1.forEach((item) => {
        BestSellingProducts.innerHTML += `
           <a class='text-black-400' href="file:///C:/Users/Software%20sales/Desktop/Bachat-dukan-project/BACHAT-DUKHAN/asset/singleProduct.html">
           <div class="w-[300px] h-auto py-2 cursor-pointer" onclick='getClickCardItems(${item.id})'>
<img class="w-[95%] mx-auto"
    src="${item.img}" alt="">
<p class="text-center w-[90%] mx-auto mt-2">${item.title}</p>
<p style="text-decoration: line-through black;"
    class="font-bold inline-block text-center ms-[80px] mt-2">RS.${item.dprice}</p>
<p class="inline-block ms-1 font-bold text-pink-400">Rs.${item.sellPrice}</p>
</div>

           </a>
        `;
    })
}
dynamicCards();

function getClickCardItems(itemID) {
    obj1.forEach((cardDetal) => {
        if (cardDetal.id === itemID) {
            let setItemsInlogcalStorage = localStorage.getItem('Mycart', JSON.stringify(cardDetal));
            if (setItemsInlogcalStorage == cardDetal.id) {
                localStorage.removeItem(cardDetal.id)
            }

            let getItems = localStorage.setItem('Mycart', JSON.stringify(cardDetal));
        }
    });
}




function dynamicCards2() {
    obj2.forEach((item) => {
        BestSellingProducts2.innerHTML += `
           <a class='text-black-400' href="file:///C:/Users/Software%20sales/Desktop/Bachat-dukan-project/BACHAT-DUKHAN/asset/singleProduct.html">
           <div class="w-[300px] h-auto py-2 cursor-pointer" onclick='getClickCardItems2(${item.id})'>
<img class="w-[95%] mx-auto"
    src="${item.img}" alt="">
<p class="text-center w-[90%] mx-auto mt-2">${item.title}</p>
<p style="text-decoration: line-through black;"
    class="font-bold inline-block text-center ms-[80px] mt-2">RS.${item.dprice}</p>
<p class="inline-block ms-1 font-bold text-pink-400">Rs.${item.sellPrice}</p>
</div>

           </a>
        `;
    })
}
dynamicCards2();

function getClickCardItems2(itemID) {
    obj2.forEach((cardDetal) => {
        if (cardDetal.id === itemID) {
            let setItemsInlogcalStorage = localStorage.getItem('Mycart', JSON.stringify(cardDetal));
            if (setItemsInlogcalStorage == cardDetal.id) {
                localStorage.removeItem(cardDetal.id)
            }

            let getItems = localStorage.setItem('Mycart', JSON.stringify(cardDetal));
        }
    });
}






function dynamicCards3() {
    obj3.forEach((item) => {
        BestSellingProducts2.innerHTML += `
           <a class='text-black-400' href="file:///C:/Users/Software%20sales/Desktop/Bachat-dukan-project/BACHAT-DUKHAN/asset/singleProduct.html">
           <div class="w-[300px] h-auto py-2 cursor-pointer" onclick='getClickCardItems3(${item.id})'>
<img class="w-[95%] mx-auto"
    src="${item.img}" alt="">
<p class="text-center w-[90%] mx-auto mt-2">${item.title}</p>
<p style="text-decoration: line-through black;"
    class="font-bold inline-block text-center ms-[80px] mt-2">RS.${item.dprice}</p>
<p class="inline-block ms-1 font-bold text-pink-400">Rs.${item.sellPrice}</p>
</div>

           </a>
        `;
    })
}
dynamicCards3();

function getClickCardItems3(itemID) {
    obj3.forEach((cardDetal) => {
        if (cardDetal.id === itemID) {
            let setItemsInlogcalStorage = localStorage.getItem('Mycart', JSON.stringify(cardDetal));
            if (setItemsInlogcalStorage == cardDetal.id) {
                localStorage.removeItem(cardDetal.id)
            }

            let getItems = localStorage.setItem('Mycart', JSON.stringify(cardDetal));
        }
    });
}



function dynamicCards4() {
    obj4.forEach((item) => {
        BestSellingProducts4.innerHTML += `
           <a class='text-black-400' href="file:///C:/Users/Software%20sales/Desktop/Bachat-dukan-project/BACHAT-DUKHAN/asset/singleProduct.html">
           <div class="w-[300px] h-auto py-2 cursor-pointer" onclick='getClickCardItems4(${item.id})'>
<img class="w-[95%] mx-auto"
    src="${item.img}" alt="">
<p class="text-center w-[90%] mx-auto mt-2">${item.title}</p>
<p style="text-decoration: line-through black;"
    class="font-bold inline-block text-center ms-[80px] mt-2">RS.${item.dprice}</p>
<p class="inline-block ms-1 font-bold text-pink-400">Rs.${item.sellPrice}</p>
</div>

           </a>
        `;
    })
}
dynamicCards4();

function getClickCardItems4(itemID) {
    obj4.forEach((cardDetal) => {
        if (cardDetal.id === itemID) {
            let setItemsInlogcalStorage = localStorage.getItem('Mycart', JSON.stringify(cardDetal));
            if (setItemsInlogcalStorage == cardDetal.id) {
                localStorage.removeItem(cardDetal.id)
            }

            let getItems = localStorage.setItem('Mycart', JSON.stringify(cardDetal));
        }
    });
}
