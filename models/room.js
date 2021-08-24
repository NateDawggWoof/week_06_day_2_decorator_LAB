// Room Constructor and prototypes here
const Room = function(area){
    this.area = area;
    this.painted = false;
}

Room.prototype.paintedComplete = function(){
    this.painted = true;
}

module.exports = Room;
