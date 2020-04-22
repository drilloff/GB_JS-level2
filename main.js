// const goods = [
//     {title : 'red socks', price: 150},
//     {title : 'striped socks', price: 170},
//     {title : 'green socks', price: 150},
//     {title : 'blue socks', price: 150},
//     {title : 'dotted socks', price: 170},
//     {title : 'yellow socks', price: 150},
//     {title : 'purple socks', price: 150},
//     {title : 'herringbone socks', price: 175},
//     {title : 'orange socks', price: 150},
//     {title : 'funny socks', price: 250},
//     {title : 'christmas socks', price: 200},
//     {title : 'miitary socks', price: 200}
// ]

// const renderGoodsItem = (title, price) =>{
//     return `<div class = 'goods-item'><img src = "https://placehold.it/300x200" alt = "${title}" width ="300" height ="200"><h1>${title}</h1><p>${price}</p></div>`
// }

// const renderGoodsList = (list=goods) => {
//     list.forEach(item =>{document.querySelector('.goods-list').innerHTML+= renderGoodsItem(item.title, item.price)})
// }
// renderGoodsList()

class GoodsItem {
    constructor(title, price){
        this.title = title,
        this.price = price
    }
    render () {
        return `<div class = 'goods-item'><img src = "https://placehold.it/300x200" alt = "${this.title}" width ="300" height ="200"><h1>${this.title}</h1><p>${this.price}</p></div>`
    }
}

class GoodsList {
    constructor() {
        this.goods = []
    }
    fetchGoods() {
        this.goods = [
            {title : 'red socks', price: 150},
            {title : 'striped socks', price: 170},
            {title : 'green socks', price: 150},
            {title : 'blue socks', price: 150},
            {title : 'dotted socks', price: 170},
            {title : 'yellow socks', price: 150},
            {title : 'purple socks', price: 150},
            {title : 'herringbone socks', price: 175},
            {title : 'orange socks', price: 150},
            {title : 'funny socks', price: 250},
            {title : 'christmas socks', price: 200},
            {title : 'miitary socks', price: 200}
        ]
    }
    render() {
        let listHtml = ''
        this.goods.forEach(item=>{
            const goodItem = new GoodsItem(item.title, item.price)
            listHtml+=goodItem.render()
        })
        document.querySelector('.goods-list').innerHTML = listHtml
    }
    getTotalCost(){
        let totalCost = 0
        this.goods.forEach(el=>{
            totalCost += el.price
        })
        return totalCost
    }
}
class Cart {
    constructor () {
        this.items = []
        this.total = 0
        this.sum = 0
    }
    addProduct () {

    }
    deleteProduct () {

    }
    handleEvents () {

    }
    calculateSum () {

    }
    calculateTotal () {

    }
    render () {

    }

}

class CartItem extends GoodsItem {
    constructor(quantity) {
        super()
        this.quantity = quantity
    }
    handleEvents () {

    }
    render () {

    }

}
const list = new GoodsList()
list.fetchGoods()
list.render()

const item = new CartItem ()
const cart = new CartItem ()
