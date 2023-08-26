fetch('https://fakestoreapi.com/products').then((data) => {
    console.log(data)
    return data.json();
}).then((objectData) => {
    let card = document.getElementById('card');
    for (let i = 0; i < objectData.length; i++) {
        card.innerHTML += `<div class="col-2" ><div class="card">
        <div class="img">
          <img class="card_img" src="${objectData[i].image}" />
        </div>
        <div class="data">
          <h4 class="price">Rs ${objectData[i].price}</h4>
          <p class="dic">
          ${objectData[i].title}
          </p>
        </div>
        </div>
        </div>`
    }
      
    console.log(objectData)    
})










