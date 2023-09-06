
class Candy{
    constructor(name, price){
        this.name =name
        this.price = price
    }
    getName(){
        return this.name
    }
    getPrice(){
        return this.price
    }
}
const candy = [
    new Candy('Chocolate', 2.99),
    new Candy('Gummy Bears', 1.49),
    new Candy('Lollipop', 0.99)
];

class ShoppingBasket{
    constructor(){
        this.item =[]
    }
    addItem(items){
        return this.item.push(items)
    }
    getTotalPrice(){
        let total = 0
        for(let item of this.item){
            total += item.getPrice()
        }
        return total
    }



}

const candy1 = new Candy('Mars', 4.99);
const basket = new ShoppingBasket();

basket.addItem(candy1);
basket.addItem(new Candy('Skittle', 3.99));
basket.addItem(new Candy('Skittle', 3.99));

console.log(basket.getTotalPrice());


module.exports = {Candy, ShoppingBasket}