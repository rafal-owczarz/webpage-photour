function initMap() {
  const options = {
    zoom: 4,
    center: {
      lat: 46.00164,
      lng: 9.70974
    },
    mapTypeId: 'hybrid'
  };
  const map = new google.maps.Map(document.getElementById('map'), options);

  const addMarker = (coords, info) => {
    const marker = new google.maps.Marker({
      position: coords,
      map: map,
    });

    const infoWindow = new google.maps.InfoWindow({
      content: `<h1>${info}</h1><br><a href='./tours.html#${info.toLowerCase()}'>Book</a>`
    });

    marker.addListener('click', () => {
      infoWindow.open(map, marker);
    });
  };

  addMarker({
    lat: 52.22967,
    lng: 21.01222
  }, 'Warsaw');
  addMarker({
    lat: 50.07553,
    lng: 14.4378
  }, 'Prague');
  addMarker({
    lat: 59.32932,
    lng: 18.06858
  }, 'Stockholm');
  addMarker({
    lat: 59.91386,
    lng: 10.75224
  }, 'Oslo');
  addMarker({
    lat: 33.97159,
    lng: -6.84981
  }, 'Rabat');
  addMarker({
    lat: 36.80649,
    lng: 10.18153
  }, 'Tunis');
  addMarker({
    lat: 37.9838,
    lng: 23.72753
  }, 'Athens');
  addMarker({
    lat: 39.93336,
    lng: 32.85974
  }, 'Ankara');
  addMarker({
    lat: 47.49791,
    lng: 19.04023
  }, 'Budapest');
  addMarker({
    lat: 38.72225,
    lng: -9.13933
  }, 'Lisbon');
  addMarker({
    lat: 40.41677,
    lng: -3.70379
  }, 'Madrid');
  addMarker({
    lat: 41.90278,
    lng: 12.49636
  }, 'Rome');
  addMarker({
    lat: 48.85661,
    lng: 2.35222
  }, 'Paris');
  addMarker({
    lat: 46.94797,
    lng: 7.44744
  }, 'Bern');
  addMarker({
    lat: 52.52,
    lng: 13.40495
  }, 'Berlin');
  addMarker({
    lat: 52.36757,
    lng: 4.90413
  }, 'Amsterdam');
  addMarker({
    lat: 51.50721,
    lng: -0.12758
  }, 'London');
  addMarker({
    lat: 53.3498,
    lng: -6.2603
  }, 'Dublin');
  addMarker({
    lat: 64.14658,
    lng: -21.94263
  }, 'Reykjavik');
}