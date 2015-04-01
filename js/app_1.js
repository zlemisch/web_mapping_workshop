///////////////////////////////////////////////////////////////////////////
// Enter your mapbox map id here to reference it for the base layer

var mapId = 'zlemisch.bec3e5a3'; //<- this references the ugly green map that I made
var token = 'pk.eyJ1IjoiemxlbWlzY2giLCJhIjoiT1BRSzVqayJ9.cg-8D1PD29JwmtEa4T6AUA'; //<- this is my token, use yours.

//Create the map object with your mapId and token
L.mapbox.accessToken = token;
var map = L.mapbox.map('map', mapId);

//Set the view of the map to the whole US
map.setView([39, -96], 4);

var dataFileToAdd = 'data/dc_national_parks.geojason';

var featureLayer = L.mapbox.featureLayer().loadURL(dataFileToAdd).addTo(map);

featureLayer.on('ready',function(){
  this.setStyle({
    'color':'#ec008c',
    'fillColor':'#ec088c',
    'weight':4,
    'opacity':.7
  });
  map.fitBounds(featurelLayer.getBounds());
});

