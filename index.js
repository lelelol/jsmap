var map = L.map('map', {
    center: [-21.771971570063606, -43.36906404885307],
    zoom: 15,
    zoomControl: false,
    boxZoom: false,
    dragging: false,
    scrollWheelZoom: false,
    doubleClickZoom: false,
    touchZoom: false,
});
L.marker([-21.771971570063606, -43.36906404885307]).addTo(map);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a >Lele</a>'
}).addTo(map);
let marcado = 0;
var lat;
var lng;
map.on('click', function (e) {
    if (marcado == 0) {
        marcado = 1;
        L.marker(e.latlng).addTo(map);
    } else {
        marcado = 0;
        map.eachLayer(function (layer) {
            if (layer instanceof L.Marker) {
                map.removeLayer(layer);
            }
        });
    }
    lat = e.latlng.lat;
    lng = e.latlng.lng;
    console.log(lat, lng);
});

var map2 = L.map('map2', {
    center: [-21.771971570063606, -43.36906404885307],
    zoom: 15,
    zoomControl: false,
    boxZoom: false,
    dragging: false,
    scrollWheelZoom: false,
    doubleClickZoom: false,
    touchZoom: false,
});
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a >Lele</a>'
}).addTo(map2);

function marcaMapa() {
    L.marker([lat, lng]).addTo(map2);
}