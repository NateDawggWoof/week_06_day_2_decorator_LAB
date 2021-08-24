// Decorator Constructor and prototypes here
const Decorator = function(){
    this.paintStock = []
}

Decorator.prototype.addPaintCan = function(paintCan){
    this.paintStock.push(paintCan)
}

Decorator.prototype.countPaintStock = function(){
    return this.paintStock.length
}

Decorator.prototype.totalLitres = function(){
    let totalLitres = 0
    for (paintCan of this.paintStock){
        totalLitres += paintCan.litres}
    return totalLitres

}

module.exports = Decorator;
