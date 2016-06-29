var contentString = "HELLO WORLD";
var infowindows = [];
var markers = [];
var map;
var info = new google.maps.InfoWindow;

function initMap() {
  var uluru = {lat: -25.363, lng: 131.044};
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 6,
    center: uluru
  });
    var points = [
      {lat: -25.363, lng: 131.044},
      {lat: -25.363, lng: 132.044},
      {lat: -24.363, lng: 131.044},
    ]
  for (var i = 0; i < 3; i++) {

    infowindow = new google.maps.InfoWindow({
      content: "info"+i
    });
    var marker = new google.maps.Marker({
      position: points[i],
      map: map,
      title: "point" + i
    });
    listen(marker,i);
    markers.push(marker);
    infowindows.push(infowindow);
  }
}

function changeContent(){
  infowindows[0].setContent("MANAR");
}
function openWindow (index) {
  console.log(markers[index]);
  console.log(index);
   infowindows[index].open(map, markers[index]);
}
function listen(marker,index){
  google.maps.event.addListener(marker, 'click', function() {
      closeInfos();
      infowindows[index].open(map, marker);
  });
}
function closeWindow (index) {
   infowindows[index].close(map, markers[index]);
}
function closeInfos() {
 for (var i = 0; i < infowindows.length; i++) {
     closeWindow(i);
   }  
}
function allMarkers () {
console.log(markers)
}
function allWindows () {
console.log(infowindows)
}