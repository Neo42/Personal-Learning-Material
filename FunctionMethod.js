//MODE: ObjReferred.functionTarget.call/apply/bind(objTarget, parameter/paraArrey/dataPassed)

//Use call method to fire a tomahawk missle
let canon = { tomahawk: 'Boom!' };
let fire = function(fuel){
		console.log(`${this.tomahawk} ${fuel} went off on the back...`)
};

fire.call(canon,'JP-10');
