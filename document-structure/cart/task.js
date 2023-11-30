let prods = Array.from(document.getElementsByClassName('product'))
let bag = document.getElementsByClassName('cart__products')[0]

prods.forEach((elem,index)=> {
    let proid = elem.getAttribute('data-id')
    let incr = elem.getElementsByClassName('product__quantity-control_inc')[0]
    let decr = elem.getElementsByClassName('product__quantity-control_dec')[0]
    let val = elem.getElementsByClassName('product__quantity-value')[0]
    let addto = elem.getElementsByClassName('product__add')[0]
    let image = elem.getElementsByTagName('img')[0]


    addto.addEventListener('click', (e)=>{
        let arrayBagChildren = Array.from(bag.children)
        let bagProd = arrayBagChildren.find((element) => element.getAttribute('data-id')===proid)

        if (bagProd) {
            bagProd.querySelector('.cart__product-count').innerText = Number(bagProd.textContent.trim())+Number(val.textContent)
            val.innerText = 1

        } else {
            bag.innerHTML += `
            <div class="cart__product" data-id = ${proid}>
            <img class="cart__product-image" src = "${image.getAttribute('src')}">
            <div class="cart__product-count">${val.innerText}</div>
            </div>`
            
            // let divel = document.createElement('div')
            // let divco = document.createElement('div')
            // divco.classList.add('cart__product-count')
            // divco.innerText = Number(val.innerText)
            // divel.setAttribute('data-id', proid) 
            // divel.classList.add('cart__product')
            // divel.appendChild(image.cloneNode(true))
            // divel.appendChild(divco)
            // bag.appendChild(divel)  
            val.innerText = 1
        }   

    })
    incr.addEventListener('click',(e)=>{val.innerText = Number(val.innerText)+1})
    decr.addEventListener('click',(e)=>{
        if (Number(val.innerText)!=0){
            val.innerText = Number(val.innerText)-1}})
})