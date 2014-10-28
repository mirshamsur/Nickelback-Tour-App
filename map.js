var map;
var location;
function initialize() {
  var mapOptions = {
    center: new google.maps.LatLng(36.05178307933835, 42.49737373046878),
    zoom: 4
  };
  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);
    var url = 'http://api.eventful.com/json/events/search?c=music&app_key=NpmnLBfV4QKQtQ2N&page_number=1&date=Future&keywords=nickelback&callback=?';
$.getJSON(url, function(response){

for (var i = 0; i < response.events.event.length; i++) {
        var info = response.events.event[i],
            latLng = new google.maps.LatLng(info.latitude, info.longitude);

        // Creating a marker and putting it on the map
        var marker = new google.maps.Marker({
            position: latLng,
            map: map,
            icon: "beer1.png"
        });
    }
});

}

google.maps.event.addDomListener(window, 'load', initialize);