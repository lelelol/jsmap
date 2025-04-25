//instancia mapa 1 e seta suas propriedades. Observe q usei var e não let para q eu possa acessar o map em qualquer contexto
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
//Cria o subtitulo do mapa
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a >Lele</a>'
}).addTo(map);
//instancia as variaveis de latitude e longitude
var lat;
var lng;

//cria um event listener q le o click do mouse 
map.on('click', function (e) {
    //foreach que percorre todas as camadas do mapa
    map.eachLayer(function (layer) {
        //caso tenha um marker, remove o marker
        if (layer instanceof L.Marker) {
            map.removeLayer(layer);
        }
    });
    //adiciona o novo marker no mapa
    L.marker(e.latlng).addTo(map);
    //salva as variaveis de latitude e longitude que serão usadas no novo mapa
    lat = e.latlng.lat;
    lng = e.latlng.lng;
    console.log(lat, lng);
});

//instancia mapa 1 e seta suas propriedades. Observe q usei var e não let para q eu possa acessar o map em qualquer contexto

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
//Cria o subtitulo do mapa

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a >Lele</a>'
}).addTo(map2);

//marca no mapa 2 a latitude e longitude que foram salvas no click do mapa 1, removendo caso já tenha um marker
function marcaMapa() {
    map2.eachLayer(function (layer) {
        if (layer instanceof L.Marker) {
            map2.removeLayer(layer);
        }
    });
    L.marker([lat, lng]).addTo(map2);
}