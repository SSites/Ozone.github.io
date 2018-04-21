import React, {Component} from 'react';
import mapboxgl from 'mapbox-gl';
import axios from 'axios';
import Papa from 'papaparse';

import 'assets/css/Maps.css';
import leed from 'assets/img/leed.png';
import PitchToggle from 'views/Maps/PitchToggle.jsx';

mapboxgl.accessToken = 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA';

var geoJson = {
  'type': 'FeatureCollection',
  'features': []
};

class Maps extends Component {

  constructor(props : Props) {
    super(props);
    this.state = {
      lng: -120.426,
      lat: 37.3646,
      zoom: 15.5
    };
  }

  componentDidMount() {
    const {lng, lat, zoom} = this.state;

    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/light-v9',
      center: [
        lng, lat
      ],
      attributionControl: false,
      zoom,
      maxZoom: 17
    });

    map.on('move', () => {
      const {lng, lat} = map.getCenter();
      this.setState({lng: lng.toFixed(4), lat: lat.toFixed(4), zoom: map.getZoom().toFixed(2)});
    });

    map.on('load', () => {
      map.addSource("building-data", {
        "type": "geojson",
        "data": {
          "type": "FeatureCollection",
          "features": [
            {
              "type": "Feature",
              "geometry": {
                "type": "Polygon",
                "coordinates": [
                  [
                    [
                      -120.423602, 37.366656
                    ],
                    [
                      -120.423993, 37.367002
                    ],
                    [
                      -120.423028, 37.367466
                    ],
                    [
                      -120.422783, 37.367245
                    ]
                  ]
                ]
              },
              "properties": {
                "title": "COB1"
              }
            }, {
              "type": "Feature",
              "geometry": {
                "type": "Polygon",
                "coordinates": [
                  [
                    [
                      -120.424881, 37.366648
                    ],
                    [
                      -120.425060, 37.366810
                    ],
                    [
                      -120.424193, 37.367401
                    ],
                    [
                      -120.424000, 37.367222
                    ],
                    [
                      -120.424369, 37.366997
                    ],
                    [
                      -120.424353, 37.366982
                    ]
                  ]
                ]
              },
              "properties": {
                "title": "COB2"
              }
            }, {
              "type": "Feature",
              "geometry": {
                "type": "Polygon",
                "coordinates": [
                  [
                    [
                      -120.424151, 37.366785
                    ],
                    [
                      -120.423969, 37.366582
                    ],
                    [
                      -120.423920, 37.366607
                    ],
                    [
                      -120.423878, 37.366564
                    ],
                    [
                      -120.423864, 37.366576
                    ],
                    [
                      -120.423801, 37.366520
                    ],
                    [
                      -120.424437, 37.366158
                    ],
                    [
                      -120.424403, 37.366172
                    ],
                    [
                      -120.424469, 37.366211
                    ],
                    [
                      -120.424495, 37.366212
                    ],
                    [
                      -120.424476, 37.366187
                    ],
                    [
                      -120.424623, 37.366012
                    ],
                    [
                      -120.425474, 37.366373
                    ],
                    [
                      -120.425384, 37.366474
                    ],
                    [
                      -120.425441, 37.366501
                    ],
                    [
                      -120.425389, 37.366569
                    ],
                    [
                      -120.425330, 37.366577
                    ],
                    [
                      -120.424783, 37.366360
                    ],
                    [
                      -120.424851, 37.366269
                    ],
                    [
                      -120.424805, 37.366233
                    ],
                    [
                      -120.424796, 37.366264
                    ]
                  ]
                ]
              },
              "properties": {
                "title": "KL"
              }
            }, {
              "type": "Feature",
              "geometry": {
                "type": "Polygon",
                "coordinates": [
                  [
                    [
                      -120.422809, 37.36593
                    ],
                    [
                      -120.422286, 37.36632
                    ],
                    [
                      -120.422915, 37.366891
                    ],
                    [
                      -120.422599, 37.367129
                    ],
                    [
                      -120.421649, 37.366277
                    ],
                    [
                      -120.422523, 37.365684
                    ]
                  ]
                ]
              },
              "properties": {
                "title": "SE1"
              }
            }, {
              "type": "Feature",
              "geometry": {
                "type": "Polygon",
                "coordinates": [
                  [
                    [
                      -120.42235, 37.365589
                    ],
                    [
                      -120.421564, 37.366127
                    ],
                    [
                      -120.421226, 37.365856
                    ],
                    [
                      -120.421419, 37.365709
                    ],
                    [
                      -120.421586, 37.365843
                    ],
                    [
                      -120.422187, 37.365438
                    ]
                  ]
                ]
              },
              "properties": {
                "title": "SE2"
              }
            }, {
              "type": "Feature",
              "geometry": {
                "type": "Polygon",
                "coordinates": [
                  [
                    [
                      -120.428128, 37.365095
                    ],
                    [
                      -120.427932, 37.364930
                    ],
                    [
                      -120.427273, 37.365729
                    ],
                    [
                      -120.427087, 37.365560
                    ]
                  ]
                ]
              },
              "properties": {
                "title": "Mariposa"
              }
            }, {
              "type": "Feature",
              "geometry": {
                "type": "Polygon",
                "coordinates": [
                  [
                    [
                      -120.427085, 37.365469
                    ],
                    [
                      -120.427276, 37.365322
                    ],
                    [
                      -120.426462, 37.364621
                    ],
                    [
                      -120.426246, 37.364782
                    ]
                  ]
                ]
              },
              "properties": {
                "title": "Tuolumne"
              }
            }, {
              "type": "Feature",
              "geometry": {
                "type": "Polygon",
                "coordinates": [
                  [
                    [
                      -120.427497, 37.364622
                    ],
                    [
                      -120.427118, 37.364904
                    ],
                    [
                      -120.426651, 37.364506
                    ],
                    [
                      -120.427041, 37.364195
                    ]
                  ]
                ]
              },
              "properties": {
                "title": "DC"
              }
            }, {
              "type": "Feature",
              "geometry": {
                "type": "Polygon",
                "coordinates": [
                  [
                    [
                      -120.420405, 37.366987
                    ],
                    [
                      -120.420143, 37.366758
                    ],
                    [
                      -120.419736, 37.367022
                    ],
                    [
                      -120.420017, 37.367270
                    ]
                  ]
                ]
              },
              "properties": {
                "title": "Facilities"
              }
            }, {
              "type": "Feature",
              "geometry": {
                "type": "Polygon",
                "coordinates": [
                  [
                    [
                      -120.430486, 37.363839
                    ],
                    [
                      -120.430499, 37.363473
                    ],
                    [
                      -120.429989, 37.363470
                    ],
                    [
                      -120.429989, 37.363634
                    ]
                  ]
                ]
              },
              "properties": {
                "title": "Cathedral"
              }
            }, {
              "type": "Feature",
              "geometry": {
                "type": "Polygon",
                "coordinates": [
                  [
                    [
                      -120.42805, 37.363482
                    ],
                    [
                      -120.429800, 37.363639
                    ],
                    [
                      -120.429314, 37.363851
                    ],
                    [
                      -120.429318, 37.363485
                    ]
                  ]
                ]
              },
              "properties": {
                "title": "Tenaya"
              }
            }, {
              "type": "Feature",
              "geometry": {
                "type": "Polygon",
                "coordinates": [
                  [
                    [
                      -120.429370, 37.364398
                    ],
                    [
                      -120.429283, 37.363947
                    ],
                    [
                      -120.430533, 37.364089
                    ],
                    [
                      -120.430499, 37.363965
                    ]
                  ]
                ]
              },
              "properties": {
                "title": "HalfDome"
              }
            }, {
              "type": "Feature",
              "geometry": {
                "type": "Polygon",
                "coordinates": [
                  [
                    [
                      -120.431455, 37.363855
                    ],
                    [
                      -120.430832, 37.363863
                    ],
                    [
                      -120.431454, 37.363527
                    ],
                    [
                      -120.430832, 37.363532
                    ]
                  ]
                ]
              },
              "properties": {
                "title": "Children"
              }
            }, {
              "type": "Feature",
              "geometry": {
                "type": "Polygon",
                "coordinates": [
                  [
                    [
                      -120.422434, 37.367222
                    ],
                    [
                      -120.421853, 37.367642
                    ],
                    [
                      -120.421412, 37.367514
                    ],
                    [
                      -120.421279, 37.367394
                    ],
                    [
                      -120.422006, 37.366837
                    ]
                  ]
                ]
              },
              "properties": {
                "title": "SSM"
              }
            }, {
              "type": "Feature",
              "geometry": {
                "type": "Polygon",
                "coordinates": [
                  [
                    [
                      -120.422728, 37.36743
                    ],
                    [
                      -120.423105, 37.367841
                    ],
                    [
                      -120.422827, 37.367932
                    ],
                    [
                      -120.42246, 37.367585
                    ]
                  ]
                ]
              },
              "properties": {
                "title": "SSB"
              }
            }, {
              "type": "Feature",
              "geometry": {
                "type": "Polygon",
                "coordinates": [
                  [
                    [
                      -120.428960, 37.363478
                    ],
                    [
                      -120.428964, 37.364227
                    ],
                    [
                      -120.428121, 37.364880
                    ],
                    [
                      -120.427730, 37.364533
                    ],
                    [
                      -120.428082, 37.364278
                    ]
                  ]
                ]
              },
              "properties": {
                "title": "Valley Terrace"
              }
            }
          ]
        }
      });

      map.addLayer({
        "id": "KL",
        "type": "fill",
        "source": "building-data",
        "paint": {
          "fill-color": "#888888",
          "fill-opacity": 0.4
        },
        "filter": ["==", "$title", "KL"]
      });
    });

    axios.get(`https://raw.githubusercontent.com/adriandarian/GhettoDatabase/master/Social.csv`).then(res => {
      let results = Papa.parse(res.data, {
        delimiter: ",",
        header: true,
        dynamicTyping: true
      });

      for (let i = 0; i < results.data.length - 1; i++) {
        geoJson.features.push({
          'type': 'Feature',
          'geometry': {
            'type': 'Point',
            'coordinates': [
              results.data[i].longitude,
              results.data[i].latitude
            ]
          },
          'properties': {
            'title': results.data[i].title,
            'description': results.data[i].description,
            'location': results.data[i].location
          }
        });
      }

      geoJson.features.forEach(marker => {
        var refill = document.createElement('div');
        var icon = document.createElement('i');

        switch (marker.properties.title) {
          case 'Water Refill Station':
            icon.className = 'fas fa-tint';
            icon.style.color = 'rgb(6, 129, 208)'
            break;
          case 'Trash Can':
            icon.className = 'fas fa-trash-alt';
            icon.style.color = 'rgb(87, 86, 87)'
            break;
          case 'Bike Rack':
            icon.className = 'fas fa-bicycle';
            icon.style.color = 'rgb(230, 7, 7)'
            break;
          default:
            icon.className = 'fas fa-question';
            icon.style.color = 'rgb(57, 153, 108)'
            break;
        }

        refill.appendChild(icon);
        new mapboxgl.Marker(refill).setLngLat(marker.geometry.coordinates).setPopup(new mapboxgl.Popup({offset: 25}).setHTML('<h3>' + marker.properties.title + '</h3><p>' + marker.properties.description + '</br>' + marker.properties.location + '</p>')).addTo(map);
      });

    });

    ///////Controls
    map.addControl(new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true
      },
      trackUserLocation: true
    }));

    map.addControl(new mapboxgl.NavigationControl());

    map.addControl(new PitchToggle({minpitchzoom: 11}));

  }

  render() {
    return (<div id="map">
      <img src={leed} className="App-leed" alt="leed"/>
      <div ref={el => (this.mapContainer = el)} className="absolute top right left bottom"/>
    </div>)
  }
}

export default Maps;
