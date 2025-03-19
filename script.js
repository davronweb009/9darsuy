const input = document.querySelector('#input');
const wrapper = document.querySelector('.wrapper');
const products = [
    { name: "Mars pen", price: 49, stock:3, image:"https://lab.marsit.uz/media/shop/Mars pen/Shop_pen-removebg-preview.png"},
    { name: "Keyboard Sticker", price: 49, stock:2, image:"https://lab.marsit.uz/media/shop/Keyboard sticker/Shop_keyboard_sticker-removebg-preview.png"},
    { name: "Strobar", price: 49, stock:0, image:"https://lab.marsit.uz/media/shop/Strobar/Strobar.png"},
    { name: "Branded sticker pack", price: 49, stock:11, image:"https://lab.marsit.uz/media/shop/Branded Sticker Pack/Shop_stickers-removebg-preview.png"},
    { name: "Mars rug", price: 49, stock:0, image:"https://lab.marsit.uz/media/shop/Mars pen/Shop_pen-removebg-preview.png"},
    { name: "phone stand", price: 49, stock:0, image:"https://lab.marsit.uz/media/shop/Mars pen/Shop_pen-removebg-preview.png"},
    { name: "Branded Cap", price: 49, stock:0, image:"https://lab.marsit.uz/media/shop/Mars pen/Shop_pen-removebg-preview.png"},
    { name: "Wirlles mouse", price: 49, stock:5, image:"https://lab.marsit.uz/media/shop/Mars pen/Shop_pen-removebg-preview.png"},
    { name: "Branded thermos", price: 49, stock:0, image:"https://lab.marsit.uz/media/shop/Mars pen/Shop_pen-removebg-preview.png"},
    { name: "USB Flash drive", price: 49, stock:0, image:"https://lab.marsit.uz/media/shop/Mars pen/Shop_pen-removebg-preview.png"},
    { name: "Mouse", price: 49, stock:2, image:"https://lab.marsit.uz/media/shop/Mars pen/Shop_pen-removebg-preview.png"},
    { name: "Keyboard", price: 49, stock:0, image:"https://lab.marsit.uz/media/shop/Mars pen/Shop_pen-removebg-preview.png"},

];

function renderProducts(filteredProducts = products){
    const container = document.querySelector(".product-container");
    if(!container){
        const newContainer = document.createElement("div");
        newContainer.className = "product-container";
        document.body.appendChild(newContainer);
    }else{
        container.innerHTML = ""
    }
    filteredProducts.forEach(product =>{
        const productElement = document.createElement("div");
        productElement.className = 'product';
        productElement.style.opacity = product.stock > 0 ? "1" : "0.55";
        productElement.style.boxShadow = product.stock > 0 ? "1" : "0 0 20px 10px gray";
        productElement.onclick = function() {
            if(product.stock == 0) {
                let javob3 = alert('Afsuski bu mahsulotimiz qolmadi')
            }else{
                let sorov = confirm(`Rostdan ham ${product.name} ni olmoqchimisiz`)
                if(sorov == true){
                    let sorov2 = prompt(`Nechta olmoqchisiz`)
                    if(sorov2 > 0){
                        let javob = (` ${sorov2}` * product.price)
                        let javob2 = alert(`Siz ${product.name} ni sotib oldingiz va Sizdan ${javob} coin yechib olindi`)
                    }
                }
                else{
                    let sorov2 = alert(`Muaffaqiyatli bekor qilindi`)
                }
            }
           
        }

        productElement.innerHTML = `
               <h3>${product.name}</h3>
               <img src="${product.image}" alt= "${product.name}" width= "100">
               <p>${product.price}🪙</p>
               <p id="red">${product.stock} ta Qolgan</p>
        `
        
        document.querySelector(".product-container").appendChild(productElement)
    })

}

input.addEventListener("input" , function () {
    const filter = input.value.toLowerCase();
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(filter)
    );
    renderProducts(filteredProducts);
})
renderProducts();

if(products.stock === 0){
    let red = document.getElementById('red');
    red.style.color = 'gray'
}
else if(products.stock > 0){
    let red = document.getElementById('red');
    red.style.color = 'red'
}