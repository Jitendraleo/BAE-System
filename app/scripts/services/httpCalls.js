define([
		'properties'
	], 
	function(
		properties
	) {
	    
	    return function(xhr){
	    	
	    	this.getLocation = function(params, callback){
	    		xhr.get(properties.locations, params, callback);
	    	};
	    	
	    };	

	}
);