define(
	[], 
	function(
		
	){
    
	    return function(){
	    	return {
		    	template : '<div class="gmap"></div>',
		    	scope : {
		    		locations : '='
		    	},
		    	replace : true,
		    	link : function($scope, elem, attrs){
		    			
	    			var map, infoWindow, markers = [],

	    			mapOptions = {
			            center: new google.maps.LatLng(3, 103),
			            zoom:6,
			            mapTypeId: google.maps.MapTypeId.ROADMAP,
			            scrollwheel: true
			        };

			        $scope.$on('newAddress', function(event, data){
			        	var latLng = new google.maps.LatLng(data.location.lat, data.location.lng);
						map.panTo(latLng);
				       	map.setZoom(16);
			        });

			        // init the map
			        function initMap() {
			            if (map === void 0) {
			                map = new google.maps.Map(elem[0], mapOptions);
			            }
			        }    
			        
			        // place a marker
			        function setMarker(map, position, title, content) {
			            var marker,

			            markerOptions = {
			                position: position,
			                map: map,
			                title: title,
			                icon: 'https://maps.google.com/mapfiles/ms/icons/green-dot.png'
			            };

			            marker = new google.maps.Marker(markerOptions);
			            markers.push(marker); // add marker to array
			            
			            google.maps.event.addListener(marker, 'click', function () {
			                // close window if not undefined
			                if (infoWindow !== void 0) {
			                    infoWindow.close();
			                }
			                // create new window
			                var infoWindowOptions = {
			                    content: content
			                };
			                infoWindow = new google.maps.InfoWindow(infoWindowOptions);
			                infoWindow.open(map, marker);
			            });
			        }
			        
			        // show the map and place some markers
			        initMap();

			        window.setTimeout(function(){
			        	for(var i=0; i<$scope.locations.length; i++){
			        		setMarker(map, new google.maps.LatLng($scope.locations[i].lat, $scope.locations[i].lng), $scope.locations[i].city, $scope.locations[i].address);
			        	}
			        }, 0);
			    
		    	}
		    };
	    };	

	}
);