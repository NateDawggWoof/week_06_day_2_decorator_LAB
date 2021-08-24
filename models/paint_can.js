// Paint Can Constructor and prototypes here
const PaintCan = function(litres){
    this.litres = litres
    this.full = true
}
PaintCan.prototype.used = function (){
    this.full =false
}

module.exports = PaintCan;
