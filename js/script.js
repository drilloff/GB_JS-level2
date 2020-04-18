        // БОЛЬШИМИ БУКВАМИ ПОТОМУ ЧТО КОНСТАНТЫ - МАЯЧОК ДЛЯ СЕБЯ ЧТО ЭТИ ПЕРЕМЕННЫЕ МЕНЯТЬ НЕЛЬЗЯ
        let PRODUCTS_NAMES = ['Processor', 'Display', 'Notebook', 'Mouse', 'Keyboard'] // имитируем базу данных
        let PRICES =[100, 120, 1000, 15, 18]
        let IDS = [0, 1, 2, 3, 4] // идентификаторы
        
        
        let catalog = {
            items: [],
            container: ".vitrina",
            cart: null,
            construct (cart) {
                this.cart = cart
                this._init ()
            },
            _init () {
                this._handleData ()
                this.render ()
                this.handleEvents ()
            },
            handleEvents () {
                document.querySelector(this.container).addEventListener ('click', (evt) =>{
                    if (evt.target.name === 'buy-btn') {
                        this.cart.addProduct (evt.target)
                    }
                })
            },
            _handleData () {                
                for (let i=0; i<IDS.length; i++) {
                this.items.push (this._createNewProduct (i))
                }
            },
            _createNewProduct (index){
            return {
                product_name: PRODUCTS_NAMES[index],
                price: PRICES [index],
                id_product: IDS[index]
                }
            },
            render () {
                this.items.forEach(item => { 
                    document.querySelector(this.container).innerHTML +=
                    `
                    <div class="product">
                        <img src = "https://placehold.it/300x200" alt = "${item.product_name}" width ="300" height ="200">
                        <div class = "description">
                            <h1>${item.product_name}</h1>
                            <p>${item.price}</p>
                            <button class="buy-btn" 
                            name="buy-btn" 
                            data-name='${item.product_name}'
                            data-price='${item.price}'
                            data-id='${item.id_product}'>Купить</button>
                        </div>
                    </div>
                    `
                })
                
            }
        }
        

        let cart = {
            items: [],
            total: 0,
            sum: 0,
            container: ".cart-block",
            construct () {
                this._init ()
            },
            _init () {
                this.handleEventsCart ()
            },
            handleEventsCart () {
                document.querySelector(this.container).addEventListener('click', (event)=>{
                    if(event.target.name === 'del-btn') {
                        this.deleteProduct(event.target)
                    }
                })
                document.querySelector(".btn-cart").addEventListener('click', (event)=>{
                    if(event.target.name === 'btn-cart') {
                        document.querySelector('.cart-items').classList.toggle("invisible")
                    }
                })
            },
            addProduct (param) {
                let id = param.dataset['id']
                let find = this.items.find (param => param.id_product === id)
                if (find) {
                    find.quantity++
                } else {
                    let prod = this._createNewProduct (param)
                    this.items.push(prod)
                }
                this._calculateSum()
                this._calculateTotal()
                this.render()
            },
            _createNewProduct(prod){
                return {
                    product_name: prod.dataset['name'],
                    price: prod.dataset['price'],
                    id_product: prod.dataset['id'],
                    quantity: 1
                    }
            },
            deleteProduct (param) {
                let id = param.dataset['id']
                let find = this.items.find (param => param.id_product === id)
                if (find.quantity > 1) {
                    find.quantity--
                } else {
                    this.items.splice(this.items.indexOf(find),1)
                }
                this._calculateSum()
                this._calculateTotal()
                this.render()
            },
            _calculateSum () {
                this.items.forEach ( el => {
                el.summa = el.quantity * el.price
                return el.summa
                })
                this.sum = 0
                this.items.forEach (el =>{
                    if(el.summa) {
                        this.sum += el.summa
                    } else this.sum += 0
                })
                return this.sum
            },
            _calculateTotal () {
                this.total = 0
                this.items.forEach (el =>{
                    if(el.quantity) {
                        this.total += el.quantity
                    } else this.quantity += 0
                })
                return this.total
            },
            render () {
                let str =''
                let cartItemsBlock = document.querySelector(this.container).querySelector(".cart-items")
                this.items.forEach(item => {
                    str +=
                   `<div class="cart-item" data-id="${item.id_product}">
                        <img src="https://placehold.it/100x80" alt="">
                        <div class="cart-product-desc">
                            <p class="cart-product-name">${item.product_name}</p>
                            <p class="cart-product-quantity">${item.quantity}</p>
                            <p class="cart-product-price">${item.price}</p>
                        </div>
                    <div class="right-block">
                        <button class="del-btn" name="del-btn" data-id="${item.id_product}">x</button>
                    </div>
                </div>`
                })
                cartItemsBlock.innerHTML = str
                document.getElementById('quantity').innerText = `${this.total}`
                document.getElementById('summ').innerText = `${this.sum}`
            },
            
        }
        catalog.construct (cart)
        cart.construct()