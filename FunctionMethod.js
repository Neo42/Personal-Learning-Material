//mode: func.call/apply/bind(obj, argument)
//plant a function onto an object and run it.

//Use call method to fire a tomahawk missle
let canon = { tomahawk: 'Boom!' };
let fire = function(fuel){
		console.log(`${this.tomahawk} ${fuel} went off on the back...`)
};

fire.call(canon,'JP-10');
