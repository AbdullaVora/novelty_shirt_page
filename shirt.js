
let shirtData = [
    { name: 'Shirt 8786', code: 1234, size: '2y-10y', price: 235, img: 'img/Produkt_2_1800x1800.png' },
    { name: 'Shirt', code: 1234, size: '2y-10y', price: 235, img: 'img/Produkt_2_1800x1800.png' },
    { name: 'Shirt', code: 1234, size: '2y-10y', price: 235, img: 'img/Produkt_2_1800x1800.png' },
    { name: 'Shirt', code: 1234, size: '2y-10y', price: 235, img: 'img/Produkt_2_1800x1800.png' },
    { name: 'Shirt', code: 1234, size: '2y-10y', price: 235, img: 'img/Produkt_2_1800x1800.png' },
    { name: 'Shirt', code: 1234, size: '2y-10y', price: 235, img: 'img/Produkt_2_1800x1800.png' },
    { name: 'Shirt', code: 1234, size: '2y-10y', price: 235, img: 'img/Produkt_2_1800x1800.png' },
    { name: 'Shirt', code: 1234, size: '2y-10y', price: 235, img: 'img/Produkt_2_1800x1800.png' }
]

let cardGroup = document.getElementById('card_group');
cardGroup.innerHTML = '';

let modal = document.getElementById('modal');

// var shirt = JSON.parse(localStorage.getItem('shirt'));
// shirt = shirt.length

for (let i = 0; i < shirtData.length; i++) {
    cardGroup.innerHTML += `
    <div class="card-body-hover position-relative col-xxl-3 col-xl-4 col-md-6 mt-5">
    <div class="card-hover bg-dark z-2 rounded-2 opacity-0 position-absolute top-0 start-0 h-100" onclick="modalbox(${i})" style="width: calc(100% - 20.5px); margin-left: 10px;">
    <div class=" position-absolute top-50 start-50 translate-middle content text-white text-center">
    <span>Product: ${shirtData[i].name}</span>
    <span class="mt-2 d-block">Code: ${shirtData[i].code}</span>
    <span class="d-block">Size: ${shirtData[i].size}</span>
    <span>Price: ${shirtData[i].price}</span>
    </div>
    </div>
    <div class="card border-0 p-2">
    <div class="c-img border-3 border rounded-2">
    <img src="${shirtData[i].img}" alt="" class="img-fluid object-fit-cover">
    </div>
    </div>
    </div>
    `
}

function modalbox(id) {
    // alert('done')
    modal.innerHTML=''

        modal.style.display = 'block';
        modal.innerHTML = `<div class="position-absolute start-50 z-3 translate-middle-x rounded-4" style="width: 50%; height: 95%; top: 22px; background-color: rgba(0,0,0,0.8)">
        <img src="${shirtData[id].img}" alt="" class="img-fluid h-100 w-100 object-fit-contain">
        <button class="fs-4 position-absolute top-0 end-0 bg-transparent text-white p-3 border-0" onclick="modalOff()">X</button>
</div>`

    
}

function modalOff(){
    modal.style.display = 'none'
}
