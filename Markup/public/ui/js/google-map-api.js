


// ******************************************************************************************
// Configuration Start		
// ******************************************************************************************

//*********************Google MAP *********************/
		
		var color = "#000000" // google map background colour
		var saturation = 0 // 
		var mapLatitude=24.496418
		var mapLongitude= 54.373671//(Fist Value Latitude, Second Value ), get YOUR coordenates here!: http://itouchmap.com/latlong.html
		var mapZoom_value=18 // Map zoom level parameter only numeric  


// Google map marker example 2 locations. Egypt
		// map-marker #1

		var marker1_Latitude=24.496714
		var marker1_Longitude= 54.373490
		var marker1_content="<h4>MAIN OFFICE:</h4><p>United Arab Emirates.</p><p>Tel: +9712 6792323</p>" // marker or  on click content (Info Window) 
		// var marker1_pointerUrl = '../ui/media/element/location.png' // set your color pointer here!


		



//********************* Google MAP END *********************/



//****************************************************************************
		  		// Google map 
//****************************************************************************
			//dragable mobile
			var drag;
			if($(window).width()<796){drag=false;}else{drag=true;}
			
		/* googleMaps */
		
				function map_canvas_loaded() {
				var latlng = new google.maps.LatLng(mapLatitude,mapLongitude);
				
				// setting styles here 
				var styles = [
					{
						"featureType": "landscape",
						"stylers": [
							{"hue": "#f8f4f0"},
							{"saturation": 1},
							{"lightness": 2},
							{"gamma": 1}
						]
					},
					{
						"featureType": "road.highway",
						"stylers": [
							{"hue": "#ef7c4d"},
							{"saturation": 0},
							{"lightness": 1},
							{"gamma": 0}
						]
					},
					{
						"featureType": "road.arterial",
						"stylers": [
							{"hue": color},
							{"saturation": 100},
							{"lightness": 10},
							{"gamma": 0}
						]
					},
					{
						"featureType": "road.local",
						"stylers": [
							{"hue": color},
							{"saturation": 100},
							{"lightness": 10},
							{"gamma": 0}
						]
					},
					{
						"featureType": "water",
						"stylers": [
							{"hue": "#a4bfde"},
							{"saturation": 32},
							{"lightness": 10},
							{"gamma": 0}
						]
					},
					{
						"featureType": "poi",
						"stylers": [
							{"hue": "#000"},
							{"saturation": -100},
							{"lightness": -1},
							{"gamma": 1}
						]
					}
				];		
				var options = {
				 center : latlng,
				 mapTypeId: google.maps.MapTypeId.ROADMAP,
				 zoom : mapZoom_value,
				 styles: styles
				};
				var map_canvas = new google.maps.Map(document.getElementById('map_canvas'), options);
				
			
			
				
				//****************************************************************************
		  		// marker 1 content 
				//****************************************************************************
				var pointer1 = new google.maps.LatLng(marker1_Latitude,marker1_Longitude);
				
				var marker1= new google.maps.Marker({
				 position : pointer1,
				 map : map_canvas
				 // icon: marker1_pointerUrl //Custom Pointer URL
				 });
				
				google.maps.event.addListener(marker1,'click',
				 function() {
				 var infowindow = new google.maps.InfoWindow(
				 {content:marker1_content });
				 infowindow.open(map_canvas,marker1);
				 });
				// marker 1 END

				}

				window.onload = function() {
				 map_canvas_loaded();
				};
			/* End */


			

//Google map end 