// Create a map object centered on a specific location
var map = L.map('map').setView([43.566370062175096, 11.024907726525637], 13);

// Add the OpenStreetMap tile layer to the map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
}).addTo(map);

// Add a marker to the map
var marker = L.marker([43.566370062175096, 11.024907726525637]).addTo(map);

// Add a popup to the marker
marker.bindPopup("<b>Sanni</b><br>Via delle Regioni, 135, 50052 Certaldo FI").openPopup();