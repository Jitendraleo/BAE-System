define([], 
	function() {
		
	    function HomeCtrl($scope, httpCalls){
	    	this.$scope = $scope;
	    	this.httpCalls = httpCalls;
	    	
	    	this.handleResponse = this.handleResponse.bind(this);
	    	this.getLocations();

	    	$scope.plotMap = function(ev, location, city){
	    		ev.preventDefault();
	    		this.$scope.$broadcast('newAddress', {location:location});
	    	}.bind(this);
	    }

	    HomeCtrl.prototype.getLocations = function(){
	    	this.httpCalls.getLocation(null, this.handleResponse);
	    };

	    HomeCtrl.prototype.handleResponse = function(response){
	    	var groupLocations = {};

	    	for(var i in response){
	    		var country = response[i].country.toLowerCase().replace(/ /g,''),
	    			city = response[i].city.toLowerCase().replace(/ /g,'');
	    		
	    		if(!groupLocations[country]){
	    			groupLocations[country] = {};
	    			groupLocations[country].countryName = response[i].country;
	    		}

	    		if(!groupLocations[country][city]){
	    			groupLocations[country][city] = {};
	    			groupLocations[country][city].cityName = response[i].city;
	    			groupLocations[country][city].cities = [];
	    		}

	    		groupLocations[country][city].cities.push(response[i]);
	    	}

	    	this.$scope.groupLocations = groupLocations;
	    	this.$scope.allLocations = response;
	    };

	    return HomeCtrl;
	}
);