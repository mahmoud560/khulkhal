// Contentful
const clientBracelets = contentful.createClient({
  space: "hczn77vnykiq",
  accessToken: "_4SZ4qj4mjhQxmNhVMFmXSnMjmn11sAViWk6zxjk7_I"
});
const clientNecklaces = contentful.createClient({
  space: "hczn77vnykiq",
  accessToken: "2ct6jqGH8U5H1y2OSuZv47nY-Wn4wwz6_ENhKaKpEMY"
});

const clientEarrings = contentful.createClient({
  space: "hczn77vnykiq",
  accessToken: "msAwsxGJLq14KybMrfiFGIWD2ZwpotGC_QeXgnTRUW8"
});

const clientRings = contentful.createClient({
  space: "hczn77vnykiq",
  accessToken: "PLp-EjJtXcuo0dFBTPSUrCO15uRVeKATiz4oEGuFVFY"
});

const clientAnklets = contentful.createClient({
  space: "hczn77vnykiq",
  accessToken: "eTnPxE9aEQngprc9ZxsXHB4fU0Ymid303d5uKncBSMM"
});


const clientAll = contentful.createClient({
  space: "hczn77vnykiq",
  accessToken: "62ege8rVXOO_2R-0YozbdES66plxUn8pyecawJ_GMf8"
});

//END OF CONTENTFUL


//cart
let cart = []
//end cart



//bracelets
async function getBracelets(){
    let contentful = await clientBracelets.getEntries({
        content_type:"bracelets"
    })
   let bracelets = contentful.items
   bracelets = bracelets.map((item)=> {
     const {id,descSm,desclg} = item.fields
     const {name,price} = item.fields
     const image = item.fields.img.fields.file.url
     const imagePerson = item.fields.imgPerson.fields.file.url
     const stock = item.fields.stock
     const cat = item.fields.cat
     const cost = item.fields.cost
    return {id,descSm,desclg,name,price,image,imagePerson,stock,cat,cost}
     })
   return bracelets
}
//end of bracelets

//Necklaces
async function getNecklaces(){
    let contentful = await clientBracelets.getEntries({
        content_type:"necklaces"
    })
   let necklaces = contentful.items
   necklaces = necklaces.map((item)=> {
     const {id,descSm,desclg} = item.fields
     const {name,price} = item.fields
     const image = item.fields.img.fields.file.url
     const imagePerson = item.fields.imgPerson.fields.file.url
     const stock = item.fields.stock
     const cat = item.fields.cat
       const cost = item.fields.cost
    return {id,descSm,desclg,name,price,image,imagePerson,stock,cat,cost}
     })
    return necklaces
} 
//end of necklaces

//earrings
async function getEarrings(){
    let contentful = await clientEarrings.getEntries({
        content_type:"earrings"
    })
    let earrings = contentful.items
   earrings = earrings.map((item)=> {
     const {id,descSm,desclg} = item.fields
     const {name,price} = item.fields
     const image = item.fields.img.fields.file.url
     const imagePerson = item.fields.imgPerson.fields.file.url
     const stock = item.fields.stock
     const cat = item.fields.cat
     const cost = item.fields.cost
    return {id,descSm,desclg,name,price,image,imagePerson,stock,cat,cost}
     })
    return earrings
} 
//end of earrings


//rings
async function getRings(){
    let contentful = await clientRings.getEntries({
        content_type:"rings"
    })
   let rings = contentful.items
   rings = rings.map((item)=> {
     const {id,descSm,desclg} = item.fields
     const {name,price} = item.fields
     const image = item.fields.img.fields.file.url
     const imagePerson = item.fields.imgPerson.fields.file.url
     const stock = item.fields.stock
     const cat = item.fields.cat
       const cost = item.fields.cost
    return {id,descSm,desclg,name,price,image,imagePerson,stock,cat,cost}
     })
    return rings
} 
//end of rings


//anklets
async function getAnklets(){
    let contentful = await clientAnklets.getEntries({
        content_type:"anklets"
    })
   let anklets = contentful.items
   anklets = anklets.map((item)=> {
     const {id,descSm,desclg} = item.fields
     const {name,price} = item.fields
     const image = item.fields.img.fields.file.url
     const imagePerson = item.fields.imgPerson.fields.file.url
     const stock = item.fields.stock
     const cat = item.fields.cat
       const cost = item.fields.cost
    return {id,descSm,desclg,name,price,image,imagePerson,stock,cat,cost}
     })
    return anklets
} 
//end of anklets

//all jewelry
async function getAll(){
    let contentful = await clientAll.getEntries({
        content_type:"allJewel"
    })
   let all = contentful.items
   all = all.map((item)=> {
     const {id,descSm,desclg} = item.fields
     const {name,price} = item.fields
     const image = item.fields.img.fields.file.url
     const imagePerson = item.fields.imgPerson.fields.file.url
     const stock = item.fields.stock
     const cat = item.fields.cat
       const cost = item.fields.cost
    return {id,descSm,desclg,name,price,image,imagePerson,stock,cat,cost}
     })
    return all
}
//end of all jewelry


//targeting DOM Elements
    const cartContent = document.getElementsByClassName('cart-content')[0]
   const cartFooter = document.getElementsByClassName('cart-footer')[0]
   const cartSide = document.getElementsByClassName('cart-side')[0]
   const cartTotal = document.getElementsByClassName('side-total')[0]
   
//end of targeting DOM Elements

//display and add to cart works for every categorie
async function displayproducts(products){
    const Nprod = await document.getElementById('Nprod')
    let result = ''
    
    
    if(window.location.href == 'http://localhost:8888/test.check.php/bracelets.php' || window.location.href == 'http://localhost:8888/test.check.php/necklaces.php' || window.location.href == 'http://localhost:8888/test.check.php/earrings.php' || window.location.href == 'http://localhost:8888/test.check.php/rings.php' || window.location.href == 'http://localhost:8888/test.check.php/anklets.php' || window.location.href == 'http://localhost:8888/test.check.php/allJewel.php'){ 
    //displaying in Stock
    let inStock = products.filter(product => {
   let inStockProd =  product.stock != 'out stock' 
   return inStockProd
  })
    
  

    inStock.map(product => {
        result += `    <div class="text-center col-12 col-md-4" data-aos="fade-bottom">
           <div class="hovscale">
               <a href="javascript:setTimeout(()=>{window. location = 'singleProduct.php' },100)";> <img src="${product.image}" class="prod-img img-fluid" id="Nimg" alt="Khulkhal jewelery"> </a>
            <h1>${product.descSm}</h1>
            <h5>EGP ${product.price}</h5>
            </div>
            <div class="scaleprot"><a class="btn-1" data-id=${product.id} >Add to Cart</a></div>
        </div>`
    })
    // end of displaying in Stock Items
    
    
    //Displaying out of Stock items
    let outStock = products.filter(product => {
   let outStockProd =  product.stock === 'out stock'
   return outStockProd
  })
  
  
    outStock.map(product => {
        result += `     <div class="text-center col-12 col-md-4" data-aos="fade-bottom" id="soldDiv">
              <img src="${product.image}" class="prod-img-sold img-fluid" id="Nimg" alt="Khulkhal jewelery"> 
            <h1 class="desc-sold">${product.descSm}</h1>
            <h5 class="price-sold">EGP ${product.price}</h5>
              <span class="sold-out">Sold Out</span> 
        </div> 
       `
    })
    //end of Displaying out of Stock items
    
 
    } else if(window.location.href == 'http://localhost:8888/test.check.php/usersWeb/braceletsUser.php' || window.location.href == 'http://localhost:8888/test.check.php/usersWeb/necklacesUser.php' || window.location.href == 'http://localhost:8888/test.check.php/usersWeb/earringsUser.php'  || window.location.href == 'http://localhost:8888/test.check.php/usersWeb/ringsUser.php' || window.location.href == 'http://localhost:8888/test.check.php/usersWeb/allJewelUser.php'){
        //displaying in Stock
    let inStock = products.filter(product => {
   let inStockProd =  product.stock != 'out stock' 
   return inStockProd
  })
    
  

    inStock.map(product => {
        result += `    <div class="text-center col-12 col-md-4" data-aos="fade-bottom">
           <div class="hovscale">
               <a href="javascript:setTimeout(()=>{window. location = 'accountSingleProduct.php' },100)";> <img src="${product.image}" class="prod-img img-fluid" id="Nimg" alt="Khulkhal jewelery"> </a>
            <h1>${product.descSm}</h1>
            <h5>EGP ${product.price}</h5>
            </div>
            <div class="scaleprot"><a class="btn-1" data-id=${product.id} >Add to Cart</a></div>
        </div>
       `
    })
    // end of displaying in Stock Items
    
    
    //Displaying out of Stock items
    let outStock = products.filter(product => {
   let outStockProd =  product.stock === 'out stock'
   return outStockProd
  })
  
  
    outStock.map(product => {
        result += `     <div class="text-center col-12 col-md-4" data-aos="fade-bottom" id="soldDiv">
              <img src="${product.image}" class="prod-img-sold img-fluid" id="Nimg" alt="Khulkhal jewelery"> 
            <h1 class="desc-sold">${product.descSm}</h1>
            <h5 class="price-sold">EGP ${product.price}</h5>
              <span class="sold-out text-center">Sold Out</span> 
        </div> 
       `
    })
    //end of Displaying out of Stock items
    }
 
   
    
    localStorage.setItem('products',JSON.stringify(products))
    Nprod.innerHTML = result
   const AddToCartBtn= [...document.querySelectorAll('.btn-1')]
   
  //check cart
       AddToCartBtn.map(btn => {
           let id = btn.dataset.id
           let inCart = cart.find(product => product.id === id)
           if(inCart){
               btn.innerText = 'In Cart'
           }
           else{
               btn.innerText = 'Add To Cart'
           }
       })
 //end of check cart
    
//Single product page
   
   const productImgs = [...document.querySelectorAll('.prod-img')]
  productImgs.map(img => [
     img.addEventListener('click',getSingleProduct)
  ])
    
//end of Single product page
    
   function addToCart(){ 
   
    AddToCartBtn.map(button => {
       button.addEventListener('click', event => {
           let id = event.target.dataset.id
           let inCart = cart.find(item => item.id === id)
            if(inCart){
                event.target.innerText = 'In Cart'
            }
           else{
                event.target.innerText = 'In Cart'
         function getCartItems(id){
             let products = JSON.parse(localStorage.getItem('products'))
             let find =  products.find(product => product.id === id)
            let finalFind = {...find,amount:1,size:11}
            
           
            //putting products in cart and saving cart in local storage
           cart = [...cart,finalFind]
             function saveCart(cart){
                 localStorage.setItem('cart',JSON.stringify(cart))
             }
              saveCart(cart)
             //end
             
             //display product in cart
             if(finalFind.cat != 'rings'){
             let newDiv = document.createElement('div')
             let newContents = ` <div class="cart-items">
                <img src="${finalFind.image}" class="img-side">
                <div class="cart-item col-6 order-1">
                    <h6>${finalFind.descSm}</h6>
                    <h5 class="cart-price-side">EGP ${finalFind.price}</h5>
                    <span class="side-btn-remove" data-id=${finalFind.id}>Remove</span>
                </div>
            <div class="sideAmount col-3 order-2">
            <i class="fas fa-minus" id="Down"></i>  
              <p class="item-amount">${finalFind.amount}</p>
              <i class="fas fa-plus" id="Up"></i>
            </div>
         </div>`
             newDiv.innerHTML = newContents
            let cartContent = document.createElement('div')
            cartContent.innerHTML = `<div class="cart-content col-12"> </div>`
             cartContent.append(newDiv)
             cartSide.insertBefore(cartContent,cartFooter)
             }    
             
             else{
                 let newDiv = document.createElement('div')
             let newContents = ` <div class="cart-items">
                <img src="${finalFind.image}" class="img-side">
                <div class="cart-item col-6 order-1">
                    <h6>${finalFind.descSm}</h6>
                    <h5 class="cart-price-side">EGP ${finalFind.price}</h5>
                   <span class="ring-sizes-cart">Size:  <input class="product-input" type="number" value="${finalFind.size}">  </span>
                    <span class="side-btn-remove" data-id=${finalFind.id}>Remove</span>
                </div>
           <div class="sideAmount col-3 order-2">
              </i><i class="fas fa-minus" id="Down"></i>
              <p class="item-amount">${finalFind.amount}</p>
              <i class="fas fa-plus" id="Up"></i>  
            </div>
         </div>`
             newDiv.innerHTML = newContents
            let cartContent = document.createElement('div')
            cartContent.innerHTML = `<div class="cart-content col-12"> </div>`
             cartContent.append(newDiv)
             cartSide.insertBefore(cartContent,cartFooter)
                 
                 
                    // saving size
                let size = document.getElementsByClassName('product-input')[0]
                size.addEventListener('change', (event) => {
                   let id = event.target.parentElement.nextElementSibling.dataset.id
                   let itemWithid = cart.find(item => item.id === id)
                 let changedSize =  parseFloat(event.target.value)
               itemWithid.size = changedSize
                   saveCart(cart)
                 
                })
                
               // end of saving size
                
             }
        
             
         }
        getCartItems(id)
        calculateTotal()
        calCartLength()
               
                 // changing quant / saving quant
            
            let quants = [...document.querySelectorAll('.sideAmount')];
   quants.forEach((item) => {item.addEventListener('click',quantUp)})
           function saveAmount(){
           quants.map(item => {
               let itemAmount = item.firstElementChild.nextElementSibling
             item.addEventListener('click', (event) => {
                let buttonclicked = event.target
                if(buttonclicked.classList.contains('fa-minus') || buttonclicked.classList.contains('fa-plus')){
                    let id = buttonclicked.parentElement.parentElement.firstElementChild.nextElementSibling.lastElementChild.dataset.id
                    let tempItem = cart.find(item => item.id === id)
                  if(buttonclicked.classList.contains('fa-minus') && tempItem.amount >= 2){
                        tempItem.amount--
                         saveCart(cart)
                      calculateTotal()
                    }
                    if(buttonclicked.classList.contains('fa-plus')){
                         tempItem.amount++
                        saveCart(cart)
                        calculateTotal()
                    }

                }
             })
            
           })
        }
saveAmount()
           //end of saving Quant/saving quant
           }
           

           
   
           
           // end of changing quant
            
           
           // removing single items
           const removeSingle = [...document.getElementsByClassName('side-btn-remove')]
           removeSingle.forEach(addEventListener('click',(event) => {
              if(event.target.classList.contains('side-btn-remove')){
                 event.target.parentElement.parentElement.remove()
                  let id = event.target.dataset.id
                  cart = cart.filter(item => item.id !== id)
                   calculateTotal()
                  saveCart(cart)
                  calCartLength()
               //check cart
       AddToCartBtn.map(btn => {
           let id = btn.dataset.id
           let inCart = cart.find(product => product.id === id)
           if(inCart){
               btn.innerText = 'In Cart'
           }
           else{
               btn.innerText = 'Add To Cart'
           }
       })
 //end of check cart
                
              }
              })
            )
           //end of removing single items
       })
           })
 } 
addToCart()
}


//Get and Display Products from localstorage 
function getDisplayCart(){
  cart = getCart()
  displayCart(cart)
    
}



 getDisplayCart()
//End of Get and Display Products from localstorage 

//get Cart
function getCart(){
   return localStorage.getItem('cart')?JSON.parse(localStorage.getItem('cart')):[]
}
//end of get Cart
//display items in cart after relaoding the page
function displayCart(cart){

   cart.forEach( item => {
       
       if(item.cat != 'rings'){ 
        let newDiv = document.createElement('div')
             let newContents = ` <div class="cart-items">
                <img src="${item.image}" class="img-side">
                <div class="cart-item col-6 order-1">
                    <h6>${item.descSm}</h6>
                    <h5 class="cart-price-side">EGP ${item.price}</h5>
                    <span class="side-btn-remove" data-id=${item.id}>Remove</span>
                </div>
            <div class="sideAmount col-3 order-2">
            <i class="fas fa-minus" id="Down"></i>  
              <p class="item-amount">${item.amount}</p>
              <i class="fas fa-plus" id="Up"></i>
            </div>
         </div>`
             newDiv.innerHTML = newContents
            let cartContent = document.createElement('div')
            cartContent.innerHTML = `<div class="cart-content col-12"> </div>`
             cartContent.append(newDiv)
             cartSide.insertBefore(cartContent,cartFooter)
       
       
         // changing quant
            let quants = [...document.querySelectorAll('.sideAmount')];
   quants.forEach((item) => {item.addEventListener('click',quantUp)})
           // end of changing quant
       } else{
            let newDiv = document.createElement('div')
             let newContents = ` <div class="cart-items">
                <img src="${item.image}" class="img-side">
                <div class="cart-item col-6 order-1">
                    <h6>${item.descSm}</h6>
                    <h5 class="cart-price-side">EGP ${item.price}</h5>
                  <span class="ring-sizes-cart">Size:  <input class="product-input" type="number" value="${item.size}">  </span>
                   <span class="side-btn-remove" data-id=${item.id}>Remove</span>
                </div>
            <div class="sideAmount col-3 order-2">
              <i class="fas fa-minus" id="Down"></i>
              <p class="item-amount">${item.amount}</p>
              <i class="fas fa-plus" id="Up"></i>  
            </div>
         </div>`
             newDiv.innerHTML = newContents
            let cartContent = document.createElement('div')
            cartContent.innerHTML = `<div class="cart-content col-12"> </div>`
             cartContent.append(newDiv)
             cartSide.insertBefore(cartContent,cartFooter)
       
       
         // changing quant
            let quants = [...document.querySelectorAll('.sideAmount')];
   quants.forEach((item) => {item.addEventListener('click',quantUp)})
           // end of changing quant
           
              // saving size
                let size = document.getElementsByClassName('product-input')[0]
                size.addEventListener('change', (event) => {
                   let id = event.target.parentElement.nextElementSibling.dataset.id
                   let itemWithid = cart.find(item => item.id === id)
                 let changedSize =  parseFloat(event.target.value)
               itemWithid.size = changedSize
                   saveCart(cart)
                 
                })
                
               // end of saving size
                
       }
   
   })
    
     // removeSingle Item
       let removeSingleBtn = [...document.getElementsByClassName('side-btn-remove')]
       removeSingleBtn.map(btn => {
           btn.addEventListener('click',(event) => {
               let buttonclicked = event.target
              let id = buttonclicked.dataset.id
              cart = cart.filter(product => product.id != id)
                saveCart(cart)
               
                buttonclicked.parentElement.parentElement.parentElement.remove()
               let tempTotal = 0
               cart.map(item => {
                   tempTotal += item.price * item.amount
               })
               cartTotal.innerHTML = tempTotal
           
               //cal cartLength
    let cartLength = document.getElementsByClassName('cartLength')[0]
    cartLength.innerHTML = cart.length
               // end fo showning cart Length
              
               
    //check cart
       let AddToCartBtn = [...document.querySelectorAll('.btn-1')]
       AddToCartBtn.map(btn => {
           let id = btn.dataset.id
           let inCart = cart.find(product => product.id === id)
           if(inCart){
               btn.innerText = 'In Cart'
           }
           else{
               btn.innerText = 'Add To Cart'
           }
       })
 
 //end of check cart
               
           })
       })
       //end of remove Single Item

   
}
//end of display items in cart after reloading the page
//end of get && display products


// showing cartLength 
    function calCartLength(){ 
    let cartLength = document.getElementsByClassName('cartLength')[0]
    cartLength.innerHTML = cart.length
}

 //end of shoowing cart Length


//calculate cartTotal
function calculateTotal(){
 let tempTotal = 0
 cart.map(item => {
     tempTotal += item.price * item.amount
 })
  cartTotal.innerHTML = tempTotal
}

calculateTotal()
//end of calculate cartTotal

//get and display products in checkout
const itemsInfo = document.getElementsByClassName('items-info')[0]
if(itemsInfo != null){
     
    
const itemsNum = itemsInfo.getElementsByClassName('items-num')[0]
function getItems(){
     return localStorage.getItem('cart')?JSON.parse(localStorage.getItem('cart')):[]
}

function displayItems(cart){
    if(cart.length != 0){
    cart.forEach(item => {
        
        if(item.cat != 'rings'){
        
        let newContainer = document.createElement('container')
        newContainer.innerHTML = ` <conatiner class="cart-content-check">
                   <div class="cart-items">
                <img src="${item.image}" class="img-side">
                <div class="cart-item col-6 order-1">
                    <h6>${item.descSm}</h6>
                    <h5 class="cart-price-side">EGP ${item.price}</h5>
                </div>
            <div class="sideAmount-check col-3 order-2">
              <p class="item-amount-check">${item.amount}</p>
            </div>
         </div>
             
                </conatiner>`
        itemsInfo.insertBefore(newContainer,itemsNum)
        } else {
            
            
             let newContainer = document.createElement('container')
        newContainer.innerHTML = ` <conatiner class="cart-content-check">
                   <div class="cart-items">
                <img src="${item.image}" class="img-side">
                <div class="cart-item col-6 order-1">
                    <h6>${item.descSm}</h6>
                    <h5 class="cart-price-side">EGP ${item.price}</h5>
                    <h5 class="size-check"> Size: ${item.size}</h5>
                </div>
            <div class="sideAmount-check col-3 order-2">
              <p class="item-amount-check">${item.amount}</p>
            </div>
         </div>
             
                </conatiner>`
        itemsInfo.insertBefore(newContainer,itemsNum)
        }
        
    })
    } else{
           let newContainer = document.createElement('container')
           newContainer.innerHTML = '<p>your Cart is empty !<p>'
          newContainer.style.color = 'rgba(0,0,60)'
          newContainer.style.fontFamily = 'sans-serif'
          newContainer.style.fontSize = '3rem'
         itemsNum.remove()
         itemsInfo.append(newContainer)
         }
    

}
    
//setting info in string for database
let order = document.getElementsByClassName('piece-check')[0]
let orderInfo = cart.map(item => {
    let ids =  item.id
    let prices = item.price
    let amount = item.amount
    let stock = item.stock
    let size = item.size
    let cat = item.cat
    return ` id:${ids} , price:${prices} , amount:${amount} , stock:${stock} , size:${size},  cat:${cat} ,      `
})

order.value = orderInfo

let pieceIdsForDatabase = document.getElementsByClassName('pieceForAcc')[0]
let orderPieceForDatabase = cart.map(item => {
    let ids =  item.id
    return `${ids}`
})

pieceIdsForDatabase.value = orderPieceForDatabase
    
    
//setting cost INFO fro Database
let costForDatabase = document.getElementsByClassName('costInput')[0]
if(costForDatabase != undefined){
let totalCost = 0
cart.map(item => {
   totalCost += item.cost * item.amount
})
costForDatabase.value = totalCost
//end of setting cost INFO fro Database
}

//end of setting info in string for database
    
function getDisplayItemsCheckout(){
  cart = getItems()
  displayItems(cart)    
}

getDisplayItemsCheckout()
   
    
  
    //setting the delivery time dynamically
if(cart.length != 0) { 
let checkAmount = cart.map(product => {
   return product.amount <= parseFloat(product.stock)
    
})

let amountBiggerThanStock = checkAmount.filter(state => {
    return state === false
})

let deliveryTime = document.getElementsByClassName('delivery-time')[0].lastElementChild

if(amountBiggerThanStock.length === 0){
    deliveryTime.innerHTML = '3-5 days from now'
} else {
     deliveryTime.innerHTML = '7-10 days from now'
}
//end of setting the delivery time dynamically

}

//end of get and display products in checkout

    
//disavble confirmBtn when cart is empty
let confirmBtn = document.getElementsByClassName('confirm-btn')[0].firstElementChild
if(cart.length === 0){
    confirmBtn.style.visibility = 'hidden';
}
//end of disavble confirmBtn when cart is empty
}

// totals in checkout page
function checkoutTotals(){
    let subNnum = document.getElementsByClassName('sub-num')[0]
    let totalNum = document.getElementsByClassName('total-num')[0]
    if(subNnum !=  undefined || null ){   
    let tempTotal = 0
 cart.map(item => {
     tempTotal += item.price * item.amount
 })
    subNnum.innerHTML = tempTotal
    totalNum.innerHTML = tempTotal
        //setting total data for database
    let ordersTotal = document.getElementsByClassName('total')[0]
 ordersTotal.value = tempTotal
        //end of setting total data for database
    }
}

checkoutTotals()
//end of totals in checkout page


// changing quant
            const quants = [...document.querySelectorAll('.sideAmount')];
   quants.forEach((item) => {item.addEventListener('click',quantUp)})
            
           //saving Quant
        function saveAmount(){
           quants.map(item => {
               let itemAmount = item.firstElementChild.nextElementSibling
             item.addEventListener('click', (event) => {
                let buttonclicked = event.target
                if(buttonclicked.classList.contains('fa-minus') || buttonclicked.classList.contains('fa-plus')){
                    let id = buttonclicked.parentElement.parentElement.firstElementChild.nextElementSibling.lastElementChild.dataset.id
                    let tempItem = cart.find(item => item.id === id)
                    if(buttonclicked.classList.contains('fa-minus') && tempItem.amount >= 2){
                        tempItem.amount-- 
                        saveCart(cart)
                        calculateTotal()
                    }
                    if(buttonclicked.classList.contains('fa-plus')){
                         tempItem.amount++
                        saveCart(cart)
                        calculateTotal()
                    }
                   
                
                }
             })
            
           })
        }
saveAmount()
 //end of saving Quant
   
//saving cart in local
function saveCart(cart){
                 localStorage.setItem('cart',JSON.stringify(cart))
             }
//end of saving cart in local


//saving single product in localstorage
function getSingleProduct(event){
   let buttonclicked =  event.target
   let id = buttonclicked.parentElement.parentElement.nextElementSibling.firstElementChild.dataset.id
   let products = JSON.parse(localStorage.getItem('products'))
   let singleProduct =  products.find(product => product.id == id)
   let singleProductSaved = localStorage.setItem('singleProduct',JSON.stringify(singleProduct))
     
}

function getSingleProductHome(event){
   let buttonclicked =  event.target
   let id = buttonclicked.dataset.id
   let products = JSON.parse(localStorage.getItem('products'))
   let singleProduct =  products.find(product => product.id == id)
   let singleProductSaved = localStorage.setItem('singleProduct',JSON.stringify(singleProduct))
}
//end of saving single product in localstorage
 //display single product 
function displaySingleProduct(){
    let sectionFooter = document.getElementsByClassName('section-footer')[0]
     let body = document.getElementsByTagName('body')[0]
     let sectionSingle = document.getElementsByClassName('section-single')[0]
    if(sectionSingle !== undefined || null ){
   let productNotInCart = JSON.parse(localStorage.getItem('singleProduct'))
   let productFromCart = JSON.parse(localStorage.getItem('cart'))
   let id = productNotInCart.id
        
       //displaying all single product info
 
    
 
  
   let sectioSingleProduct = document.createElement('span')
   sectioSingleProduct.innerHTML = 
       
     /**  `      
      <container class="section-img">
           <img src="${productNotInCart.image}" class="img-big img-fluid col-7 col-md-4">
           <img src="${productNotInCart.image}" class="img-small img-fluid col-md-1 col-1">
           <img src="${productNotInCart.imagePerson}" class="img-small img-fluid col-md-1 col-1">
       </container> 
        <h1 class="product-name text-center">${productNotInCart.descSm}</h1>
           <h2 class="product-price text-center">EGP ${productNotInCart.price}</h2>
       <container class="section-info row col-12">
          <div class="p row col-12">
              <div class="div col-md-4 col-12">
               <p class="text-center">
                  ${productNotInCart.desclg}
                </p>
                
            <div class="addToCart-product">
               <button class="addToCartBtnProduct" data-id=${productNotInCart.id}>Add To Cart</button>
            </div>
              </div>
           </div>
     </container>`
   body.insertBefore(sectioSingleProduct,sectionFooter)**/

    
        //end of displaying  all single product info
        
}
   
        
//add To Cart 
body.addEventListener('click', (event => {
    let buttonclicked = event.target

    if(buttonclicked.classList.contains('addToCartBtnProduct')){
        let id = buttonclicked.dataset.id
        let inCart = cart.find(item => item.id === id)
       
        if(inCart){
            buttonclicked.innerHTML = 'In Cart'
        }
    else{ 
        buttonclicked.innerHTML = 'In Cart'
        let products = JSON.parse(localStorage.getItem('products'))
        let product = products.find(product => product.id === id)
      if(product.cat != 'rings')  { 
        
        let addedProducts = {...product,amount:1,size:11}
        cart = [...cart,addedProducts]
       saveCart(cart)   
        
       let newDiv = document.createElement('div')
             let newContents = ` <div class="cart-items">
                <img src="${addedProducts.image}" class="img-side">
                <div class="cart-item col-6 order-1">
                    <h6>${addedProducts.descSm}</h6>
                    <h5 class="cart-price-side">EGP ${addedProducts.price}</h5>
                    <span class="side-btn-remove" data-id=${addedProducts.id}>Remove</span>
                </div>
            <div class="sideAmount col-6 order-2">
              <i class="fas fa-plus" id="Up"></i>
              <p class="item-amount">1</p>
              <i class="fas fa-minus" id="Down"></i>  
            </div>
         </div>`
             newDiv.innerHTML = newContents
            let cartContent = document.createElement('div')
            cartContent.innerHTML = `<div class="cart-content col-12"> </div>`
             cartContent.append(newDiv)
             cartSide.insertBefore(cartContent,cartFooter)
        
           
             
         // changing quant / saving quant
            
            let quants = [...document.querySelectorAll('.sideAmount')];
   quants.forEach((item) => {item.addEventListener('click',quantUp)})
           function saveAmount(){
           quants.map(item => {
               let itemAmount = item.firstElementChild.nextElementSibling
             item.addEventListener('click', (event) => {
                let buttonclicked = event.target
                if(buttonclicked.classList.contains('fa-minus') || buttonclicked.classList.contains('fa-plus')){
                    let id = buttonclicked.parentElement.parentElement.firstElementChild.nextElementSibling.lastElementChild.dataset.id
                    let tempItem = cart.find(item => item.id === id)
                  if(buttonclicked.classList.contains('fa-minus') && tempItem.amount >= 2){
                        tempItem.amount--
                         saveCart(cart)
                      calculateTotal()
                    }
                    if(buttonclicked.classList.contains('fa-plus')){
                         tempItem.amount++
                        saveCart(cart)
                        calculateTotal()
                    }

                }
             })
            
           })
        }
    
saveAmount()
        calculateTotal()
          calCartLength()
           //end of saving Quant/saving quant
        
         // removing single items
           const removeSingle = [...document.getElementsByClassName('side-btn-remove')]
           removeSingle.forEach(addEventListener('click',(event) => {
              if(event.target.classList.contains('side-btn-remove')){
                 event.target.parentElement.parentElement.remove()
                  let id = event.target.dataset.id
                  cart = cart.filter(item => item.id !== id)
                   calculateTotal()
                  saveCart(cart)
                  let cartLength = document.getElementsByClassName('cartLength')[0]
                  cartLength.innerHTML = cart.length
                  let addToCartBtnProduct = document.getElementsByClassName('addToCartBtnProduct')[0]
                  if(id === addToCartBtnProduct.dataset.id){
                   addToCartBtnProduct.innerHTML = 'Add To Cart'
                  }
                
              }
              })
            )
        //end of removeItem
         
      } else{
          
           let addedProducts = {...product,amount:1,size:11}
        cart = [...cart,addedProducts]
       saveCart(cart)   
        
       let newDiv = document.createElement('div')
             let newContents = ` <div class="cart-items">
                <img src="${addedProducts.image}" class="img-side">
                <div class="cart-item col-6 order-1">
                    <h6>${addedProducts.descSm}</h6>
                    <h5 class="cart-price-side">EGP ${addedProducts.price}</h5>
                  <span class="ring-sizes-cart">Size:  <input class="product-input" type="number" value="11">  </span>
                     <span class="side-btn-remove" data-id=${addedProducts.id}>Remove</span>
                </div>
            <div class="sideAmount col-3 order-2">
              <i class="fas fa-minus" id="Down"></i>
              <p class="item-amount">1</p>
              <i class="fas fa-plus" id="Up"></i>  
            </div>
         </div>`
             newDiv.innerHTML = newContents
            let cartContent = document.createElement('div')
            cartContent.innerHTML = `<div class="cart-content col-12"> </div>`
             cartContent.append(newDiv)
             cartSide.insertBefore(cartContent,cartFooter)
        
        
             
         // changing quant / saving quant
            
            let quants = [...document.querySelectorAll('.sideAmount')];
   quants.forEach((item) => {item.addEventListener('click',quantUp)})
           function saveAmount(){
           quants.map(item => {
               let itemAmount = item.firstElementChild.nextElementSibling
             item.addEventListener('click', (event) => {
                let buttonclicked = event.target
                if(buttonclicked.classList.contains('fa-minus') || buttonclicked.classList.contains('fa-plus')){
                    let id = buttonclicked.parentElement.parentElement.firstElementChild.nextElementSibling.lastElementChild.dataset.id
                    let tempItem = cart.find(item => item.id === id)
                  if(buttonclicked.classList.contains('fa-minus') && tempItem.amount >= 2){
                        tempItem.amount--
                         saveCart(cart)
                      calculateTotal()
                    }
                    if(buttonclicked.classList.contains('fa-plus')){
                         tempItem.amount++
                        saveCart(cart)
                        calculateTotal()
                    }

                }
             })
            
           })
        }
saveAmount()
          calculateTotal()
          calCartLength()
           //end of saving Quant/saving quant
          
          
          // saving size
                let size = document.getElementsByClassName('product-input')[0]
                size.addEventListener('change', (event) => {
                   let id = event.target.parentElement.nextElementSibling.dataset.id
                   let itemWithid = cart.find(item => item.id === id)
                 let changedSize =  parseFloat(event.target.value)
               itemWithid.size = changedSize
                   saveCart(cart)
                 
                })
                
               // end of saving size
                
         // removing single items
           const removeSingle = [...document.getElementsByClassName('side-btn-remove')]
           removeSingle.forEach(addEventListener('click',(event) => {
              if(event.target.classList.contains('side-btn-remove')){
                 event.target.parentElement.parentElement.remove()
                  let id = event.target.dataset.id
                  cart = cart.filter(item => item.id !== id)
                   calculateTotal()
                  saveCart(cart)
                  let cartLength = document.getElementsByClassName('cartLength')[0]
                  cartLength.innerHTML = cart.length
                  let addToCartBtnProduct = document.getElementsByClassName('addToCartBtnProduct')[0]
                  if(id === addToCartBtnProduct.dataset.id){
                   addToCartBtnProduct.innerHTML = 'Add To Cart'
                  }
                
              }
              })
            )
          
          
      }
    
    }
        
      } 
          
      })) 
//end of add To Cart
    }
   

displaySingleProduct()
//end of display single product 


//Gesingleprodyct info homepage
/**if(window.location.href == 'http://localhost:8888/test.check.php/home.php' || window.location.href == 'http://localhost:8888/test.check.php/usersWeb/accountHome.php'  ||  window.location.href == 'http://localhost:8888/test.check.php/usersWeb/accountHomeLink.php'){
    
}**/
//end of Gesingleprodyct info homepage
 

if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded',ready)
} else {
    ready()
}

function ready() {
    //bracelets get and display
    const title = document.getElementById('title')
if (title != null && title.innerText === 'Bracelets' ){ 
    getBracelets().then(bracelets => displayproducts(bracelets))}
    //end of bracelets
    
    // necklaces get and display
if (title != null && title.innerText === 'Necklaces' ){
   getNecklaces().then(necklaces => displayproducts(necklaces))}
    //end of necklaces
    
     // Earrings get and display
   if (title != null && title.innerText === 'Earrings' ){
   getEarrings().then(earrings => displayproducts(earrings))}
    //end of Earrings
    
     //Rings get and display
   if (title != null && title.innerText === 'Rings' ){
   getRings().then(rings => displayproducts(rings))}
    //end of Rings
    
     //Anklets
    if (title != null && title.innerText === 'Anklets' ){
   getAnklets().then(anklets => displayproducts(anklets))}
    //end of Anklets
    
     // All get and display
 if (title != null && title.innerText === 'All' ){
   getAll().then(all => displayproducts(all))}
    //end of All
    
    //getting all in home page
if(window.location.href == 'http://localhost:8888/test.check.php/home.php'){
getAll().then(all => displayproducts(all))
}

  if(window.location.href == 'http://localhost:8888/test.check.php/collections.php'){
      sliderCollectionsPage()
  }
    //end of getting all in home page

    
    
    var closeCartSide = document.getElementById('side-close')
   closeCartSide.addEventListener('click',closeCarSideF)
   
    var openCartIcon = document.getElementById('Show-cart')
    openCartIcon.addEventListener('click',showCart)
   
   var slider = document.getElementsByClassName('slider')[0]
   
   if(slider != null){
   slider.addEventListener('click',slide)
     function showImgSlide(){
      let slider1 = document.getElementsByClassName('slider1')[0]
      let slider2 = document.getElementsByClassName('slider2')[0]
    let slider3 = document.getElementsByClassName('slider3')[0]
      slider1.classList.add('show-img')
        slider2.classList.add('hidden')
        slider3.classList.add('hidden')
    }
   
    showImgSlide()
    }
   
    var productPageImgs = document.getElementsByClassName('section-img')[0]
    var productAmount = document.getElementsByClassName('product-amount')[0]
    var addToCartBtnProduct = document.getElementsByClassName('addToCartBtnProduct')[0]
    var inputProduct = document.getElementsByClassName('product-input')[0]
   
   
    if(productPageImgs != null){
    productPageImgs.addEventListener('click',showSmallImgs)
     
     }
    
    
    
    //removeAllBtn
 let removeAllBtn = document.getElementsByClassName('side-transport-btn')[0]
if(removeAllBtn != undefined || null ){
removeAllBtn.addEventListener('click',(event) => {
    let cartItems = [...document.querySelectorAll('.cart-items')]
    let cartLength = document.getElementsByClassName('cartLength')[0]
  cartLength.innerHTML = 0
    cartItems.map(div => {
         div.parentElement.remove()
        localStorage.removeItem('cart')
        cart = []
         const AddToCartBtn= [...document.querySelectorAll('.btn-1')]
        AddToCartBtn.map(btn => {
             calculateTotal()
            cartTotal.innerHTML = '0'
            btn.innerText = "Add To Cart"
        })
        
        })
    })
}
 //End of RemoveAllBtn   
    
//Collection 
const menu = document.getElementsByClassName('menu')[0]
const menuUl = menu.firstElementChild.firstElementChild.firstElementChild
const collectionsLi = document.getElementsByClassName('colections')[0]
const closeCollectionsLi = collectionsLi.firstElementChild
const collections1 = collectionsLi.lastElementChild.firstElementChild
const collections2 =  collections1.nextElementSibling

//showing collections
menuUl.addEventListener('click', (event) => {
    let buttoncliked = event.target
    if(buttoncliked.innerText === 'Collections'){
        collectionsLi.classList.add('showCollections')
    }
     
})
    
collections1.addEventListener('mouseover', () => {
    collectionsLi.style.backgroundImage = "url('images/sandra.jpg')"
})

collections1.addEventListener('mouseout', () => {
    collectionsLi.style.backgroundImage = ""
})
    
collections2.addEventListener('mouseover', () => {
    collectionsLi.style.backgroundImage = "url('images/sandra2.jpg')"
    collectionsLi.style.backgroundRepeat = 'no-repeat'
    collectionsLi.style.backgroundPosition = 'center'
    collectionsLi.style.backgroundSize = '70% 100%'
})

collections2.addEventListener('mouseout', () => {
    collectionsLi.style.backgroundImage = ""
})

//closing collections
closeCollectionsLi.addEventListener('click', () => {
   collectionsLi.classList.remove('showCollections')
})

//End of collections Btn


    
    
    //ShowCreateAccunt/log in
let accountIcon = document.getElementById('createAccount')
let accountMenu = document.getElementsByClassName('accountMenu')[0]
accountIcon.addEventListener('mouseover', () => {
    accountMenu.classList.add('show-accountMenu')
})

accountMenu.addEventListener('mouseover', () => {
    accountMenu.classList.add('show-accountMenu')
})

accountMenu.addEventListener('mouseout', () => {
    accountMenu.classList.remove('show-accountMenu')
})
    
    
//showing and removing createAccountForm
let createAccOverlay = document.getElementsByClassName('createAccountOverlay')[0]
let createAccForm = document.getElementsByClassName('formAcc')[0]
let createBtn = accountMenu.firstElementChild
createBtn.addEventListener('click', () => {
    createAccForm.classList.add('showcreateAccountForm')
    createAccOverlay.classList.add('showcreateAccountOverlay')
})

let closeAccForm = document.getElementById('closeCreateAccount')
if(closeAccForm != null){
closeAccForm.addEventListener('click', () => {
     createAccForm.classList.remove('showcreateAccountForm')
    createAccOverlay.classList.remove('showcreateAccountOverlay')
})
}
//end of showing and removing createAccountForm
    
 
//showing and removing log in
    
let loginOverlay = document.getElementsByClassName('loginOverlay')[0]   
let formLog = document.getElementsByClassName('formlog')[0]
let loginBtn = accountMenu.lastElementChild
loginBtn.addEventListener('click', () => {
    formLog.classList.add('showformlog')
    loginOverlay.classList.add('showloginOverlay')
})

let closeLog = document.getElementById('closelogin')
if(closeLog != null){ 
closeLog.addEventListener('click', () => {
    formLog.classList.remove('showformlog')
    loginOverlay.classList.remove('showloginOverlay')
})
}
    
//end of showing and removing log in
    

//show forgot-password
let forgotPassBtn = document.getElementsByClassName('forgot-pwd')[0]
let forgotPwd = document.getElementsByClassName('forgotPwdForm')[0]
let closeForgotPwd = document.getElementById('closeForgotPwd')
let errorH2 = document.getElementsByClassName('error')[0]
if(forgotPassBtn != undefined){
forgotPassBtn.addEventListener('click', () => {
    formLog.classList.remove('showformlog')
    forgotPwd.classList.add('showforgotPwdForm')
let changeBtn = forgotPwd.getElementsByTagName('button')[0]
changeBtn.addEventListener('click', (event) => {
    let buttonclicked = event.target
    let usernameForgot = forgotPwd.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.value
    let emailForgot = forgotPwd.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.vslue
    let newPwd = forgotPwd.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.value
    let confirmNewPwd = forgotPwd.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.value

    if(usernameForgot == '' || emailForgot == '' || newPwd == '' || confirmNewPwd == ''){
        event.preventDefault()
        errorH2.innerText = 'You have to fill all fields!'
    }
    if(confirmNewPwd != newPwd){
        event.preventDefault()
        errorH2.innerHTML = 'Password and confirm Password have to be identical!'
    }
})
    closeForgotPwd.addEventListener('click',() => {
        forgotPwd.classList.remove('showforgotPwdForm')
        loginOverlay.classList.remove('showloginOverlay')
    })
})
}
    
if(window.location.href === 'http://localhost:8888/test.check.php/home.php?changePassword=failed'){
      forgotPwd.classList.add('showforgotPwdForm')
    loginOverlay.classList.add('showloginOverlay')
    errorH2.innerText = 'The username or the email you entered are incorrect!'
    closeForgotPwd.addEventListener('click',() => {
        forgotPwd.classList.remove('showforgotPwdForm')
        loginOverlay.classList.remove('showloginOverlay')
    })
    let changeBtn = forgotPwd.getElementsByTagName('button')[0]
changeBtn.addEventListener('click', (event) => {
    let buttonclicked = event.target
    let usernameForgot = forgotPwd.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.value
    let emailForgot = forgotPwd.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.vslue
    let newPwd = forgotPwd.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.value
    let confirmNewPwd = forgotPwd.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.value

    if(usernameForgot == '' || emailForgot == '' || newPwd == '' || confirmNewPwd == ''){
        event.preventDefault()
        errorH2.innerText = 'You have to fill all fields!'
    }
    if(confirmNewPwd != newPwd){
        event.preventDefault()
        errorH2.innerHTML = 'Password and confirm Password have to be identical!'
    }
})
}
//end of show forgot-password
    
 
// end of ShowCreateAccunt/log in
    
  

//preventdefault createAccountBtn FORM CREATE ACCOUNT ERRORS
let createAccFormForPrevent = document.getElementsByClassName('formAcc')[0]
if(createAccFormForPrevent != undefined) { 
let createAccBtn =  createAccFormForPrevent.getElementsByTagName('button')[0]
createAccBtn.addEventListener('click', (event) => {
     let username = createAccFormForPrevent.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild
     let email = createAccFormForPrevent.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild
      let pwdAcc =  createAccFormForPrevent.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild
      let pwdAccConfirm =  createAccFormForPrevent.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild
      let birthday =  createAccFormForPrevent.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild
     let errorsCreateAcc = createAccFormForPrevent.firstElementChild.nextElementSibling

     
     if(username.value === '' || email.value === '' || pwdAcc.value === '' || pwdAccConfirm.value === '' || birthday.value === ''){
    event.preventDefault()
       errorsCreateAcc.innerText = 'You have to fill all fileds!!'
         errorsCreateAcc.style.color = 'red'
     }
    
    else if(pwdAcc.value !== pwdAccConfirm.value){
          event.preventDefault()
       errorsCreateAcc.innerText = 'confirm and pwd have to be identical!!'
         errorsCreateAcc.style.color = 'red'
    } else if(pwdAcc.value.length <= 5){
        event.preventDefault()
         errorsCreateAcc.innerText = 'you password can not be less than 5 characters!!'
         errorsCreateAcc.style.color = 'red'
    }
   
}) 
    //error if the username and password already exist
  let errorsCreateAcc = createAccFormForPrevent.firstElementChild.nextElementSibling  
  if(window.location.href ===  'http://localhost:8888/test.check.php/home.php?signup=failed'){ 
      errorsCreateAcc.innerText = 'This username and password already exist'
      errorsCreateAcc.style.color = 'red'
       createAccForm.classList.add('showcreateAccountForm')
    createAccOverlay.classList.add('showcreateAccountOverlay')
  }
  //end of error if the username and password already exist
//end of preventdefault createAccountBtn FORM CREATE ACCOUNT ERRORS
   
 //errors log in form 
    let errorsLog = document.getElementsByClassName('errorsLog')[0]
   if(window.location.href ===  'http://localhost:8888/test.check.php/home.php?login=failed'){
       
        errorsLog.innerText = 'Incorrect username or password'
       errorsLog.style.color = 'red'
        formLog.classList.add('showformlog')
      loginOverlay.classList.add('showloginOverlay')
   }
 //end of errors log in form   
}
//hiding nav onscroll  
var zero = 0;
    let navbar = document.getElementsByClassName('navbar')[0];
     window.addEventListener('scroll', function(){
         var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
         if(scrollTop > zero){
             navbar.style.top = '-70px'
         } else{
             navbar.style.top = '0'
         }
         zero = scrollTop;
     })
// end of hiding nav onscroll 
    
    
    //showing cartLength
    
    calCartLength()
    
    //end of showing cartLength
}


function changeProdAmount(Cr7){
    let buttonclicked = Cr7.target
    let amountPlus = buttonclicked.classList.contains('amount-plus')
    let amountMinus = buttonclicked.classList.contains('amount-minus')
 
    if(amountMinus){
        buttonclicked.nextElementSibling.nextElementSibling.innerHTML--
    }
    if(amountPlus){
        buttonclicked.previousElementSibling.innerHTML++
    }
    if(amountMinus && buttonclicked.nextElementSibling.nextElementSibling.innerHTML <= 0){
         buttonclicked.nextElementSibling.nextElementSibling.innerHTML = 1
    }
}




function showSmallImgs(messi){
    let buttonclicked = messi.target
    let currentImg = document.getElementsByClassName('img-big')[0]
   let changeImg = buttonclicked.src != currentImg.src
   if(buttonclicked.classList.contains('img-small') || buttonclicked.classList.contains('img-small1')){
    currentImg.src = buttonclicked.src
   }
}



function slide(event){
    let buttonclicked = event.target
    let slideRight = buttonclicked.classList.contains('slide-right')
    let slideLeft = buttonclicked.classList.contains('slide-left')
    let slider1 = document.getElementsByClassName('slider1')[0]
    let slider2 = document.getElementsByClassName('slider2')[0]
    let slider3 = document.getElementsByClassName('slider3')[0]
    let slider1Showing = slider1.classList.contains('show-img')
    let slider2Showing = slider2.classList.contains('show-img')
    let slider3Showing = slider3.classList.contains('show-img')
   if(slideLeft && slider1Showing){
     hideImg(slider1)
    showImg(slider3)
   }
   if(slideRight && slider1Showing) {
       hideImg(slider1)
       showImg(slider2)
   }
   if(slideLeft && slider2Showing){
       hideImg(slider2)
       showImg(slider1)
   }
    if(slideRight && slider2Showing){
        hideImg(slider2)
        showImg(slider3)
    }
    if(slideLeft && slider3Showing){
        hideImg(slider3)
        showImg(slider2)
    }
    if(slideRight && slider3Showing){
        hideImg(slider3)
        showImg(slider1)
    }
}
 

function hideImg(coco){
    coco.classList.remove('show-img')
    coco.classList.remove('fade')
    coco.classList.add('hidden')
}

function showImg(bugs){
    bugs.classList.remove('hidden')
    bugs.classList.add('show-img')
    bugs.classList.add('fade')
}



function quantUp(event){
    let buttonclicked = event.target
    let upTrue = buttonclicked.classList.contains('fa-plus')
    let downTrue = buttonclicked.classList.contains('fa-minus')
    let itemAmountInc = buttonclicked.previousElementSibling
    let itemAmountDec = buttonclicked.nextElementSibling
   if(upTrue){
       itemAmountInc.textContent++
   }
    else if(downTrue){
        itemAmountDec.textContent--
    }
if(itemAmountDec != null && upTrue || downTrue){
    if(itemAmountDec.textContent <= 0){
        itemAmountDec.textContent = 1
    }
}
}


function quantityTotal(event){
    var input = event.target
    if (isNaN(input.value) ||  input.value <= 0) {
        input.value = 1
    }
    updateTotal()
}


function showCart(){
   var cartOverlay = document.getElementsByClassName('cart-overlay')[0];
   var cartSide = document.getElementsByClassName('cart-side')[0];
       cartSide.classList.toggle('Show-cart')
       cartOverlay.classList.toggle('transparentbcg')
}


function  closeCarSideF(){
    var cartOverlay = document.getElementsByClassName('cart-overlay')[0];
   var cartSide = document.getElementsByClassName('cart-side')[0];
  cartOverlay.classList.remove('transparentbcg');
   cartSide.classList.remove('Show-cart');
}




//Collectionspgae Slider
function sliderCollectionsPage(){
    let sectionColections = document.getElementsByClassName('sliderDiv')[0]
    let sliderLeft = document.getElementsByClassName('collectionsLeft')[0]
    let sliderRight = document.getElementsByClassName('collectionsRight')[0]
    let positionSlider = 0
    
    if(window.outerWidth > 770){
    if(positionSlider <= 0){
        sliderLeft.style.visibility = 'hidden'
    } else{
        sliderLeft.style.visibility = 'visible'
    }
    
    
    sliderRight.addEventListener('click', () => {
        positionSlider -= 50
        sectionColections.style.left = `${positionSlider + 'rem'}`
        sliderLeft.style.visibility = 'visible'
        if(positionSlider > -200){  
        } else{
            sliderRight.style.visibility = 'hidden'
        }
        
    })
    
    sliderLeft.addEventListener('click', () => {
        positionSlider += 50
        sectionColections.style.left = `${positionSlider + 'rem'}`
        sliderRight.style.visibility = 'visible'
        if(positionSlider < 0){
        }else{
            sliderLeft.style.visibility = 'hidden'
        }
    })
    } else{
        if(positionSlider <= 0){
        sliderLeft.style.visibility = 'hidden'
    } else{
        sliderLeft.style.visibility = 'visible'
    }
    
    
    sliderRight.addEventListener('click', () => {
        positionSlider -= 25
        sectionColections.style.left = `${positionSlider + 'rem'}`
        sliderLeft.style.visibility = 'visible'
        if(positionSlider > -200){  
        } else{
            sliderRight.style.visibility = 'hidden'
        }
        
    })
    
    sliderLeft.addEventListener('click', () => {
        positionSlider += 25
        sectionColections.style.left = `${positionSlider + 'rem'}`
        sliderRight.style.visibility = 'visible'
        if(positionSlider < 0){
        }else{
            sliderLeft.style.visibility = 'hidden'
        }
    })
    }
}
//END OF Collectionspgae Slider

if(window.location.href == 'http://localhost:8888/test.check.php/home.php'  || window.location.href == 'http://localhost:8888/test.check.php/usersWeb/accountHome.php'){
let productImgsHome = [...document.querySelectorAll('.prod-img-home')]
    productImgsHome.map(img => {
        img.addEventListener('click',getSingleProductHome)
    })
    
}










































