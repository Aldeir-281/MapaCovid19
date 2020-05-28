const tilesProvider = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
let map = L.map('map').setView([23.070050, -101.298760], 10)
L.tileLayer(tilesProvider, {
    maxZoom: 8,
}).addTo(map);

L.marker([26.518152, -112.445117]).addTo(map).bindPopup("BAJA CALIFORNIA SUR  <br> Confirmados: 749 <br> Defunciones: 31 <br> Sospechosos: 980");
L.marker([30.037954, -114.920325]).addTo(map).bindPopup(" BAJA CALIFORNIA  <br> Confirmados: 4218 <br> Defunciones: 383 <br> Sospechosos: 2939 ");
L.marker([29.912170, -110.544131]).addTo(map).bindPopup(" SONORA  <br> Confirmados: 1440 <br> Defunciones: 69 <br> Sospechosos: 505");
L.marker([29.116990, -106.205034]).addTo(map).bindPopup(" CHIHUAHUA  <br> Confirmados: 1186 <br> Defunciones: 249 <br> Sospechosos: 303");
L.marker([27.768478, -101.981939]).addTo(map).bindPopup(" COAHUILA  <br> Confirmados: 824 <br> Defunciones: 66 <br> Sospechosos: 279");
L.marker([24.837839, -104.724122]).addTo(map).bindPopup(" DURANGO  <br> Confirmados: 233 <br> Defunciones: 26 <br> Sospechosos: 194");
L.marker([25.036988, -107.588301]).addTo(map).bindPopup(" SINALOA  <br> Confirmados: 2589 <br> Defunciones: 390 <br> Sospechosos: 2243");
L.marker([26.216537, -100.004624]).addTo(map).bindPopup(" NUEVO LEON  <br> Confirmados: 1149 <br> Defunciones: 62 <br> Sospechosos: 1046");
L.marker([24.147277, -98.710587]).addTo(map).bindPopup(" TAMAULIPAS  <br> Confirmados: 1212 <br> Defunciones: 83 <br> Sospechosos: 1105");
L.marker([22.768820, -102.584374]).addTo(map).bindPopup(" ZACATETAS  <br> Confirmados: 236 <br> Defunciones: 27 <br> Sospechosos: 214");
L.marker([21.864259, -104.865670]).addTo(map).bindPopup(" NAYARIT  <br> Confirmados: 421 <br> Defunciones: 42 <br> Sospechosos: 224");
L.marker([22.029428, -100.195132]).addTo(map).bindPopup(" SAN LUIS POTOSI  <br> Confirmados: 692 <br> Defunciones: 36 <br> Sospechosos: 2201");
L.marker([20.844848, -101.197649]).addTo(map).bindPopup(" GUANAJUATO  <br> Confirmados: 1054 <br> Defunciones: 88 <br> Sospechosos: 2189");
L.marker([20.441208, -103.786091]).addTo(map).bindPopup(" JALISCO  <br> Confirmados: 1180 <br> Defunciones: 107 <br> Sospechosos: 3037");
L.marker([21.761748, -102.305092]).addTo(map).bindPopup(" AGUAS CALIENTES  <br> Confirmados: 1212 <br> Defunciones: 879 <br> Sospechosos: 6872");
L.marker([19.243437, -103.725254]).addTo(map).bindPopup(" COLIMA  <br> Confirmados: 157 <br> Defunciones: 14 <br> Sospechosos: 300");
L.marker([20.580924, -100.392026]).addTo(map).bindPopup(" QUERETARO <br> Confirmados: 688 <br> Defunciones: 75 <br> Sospechosos: 3002");
L.marker([20.093500, -98.763396]).addTo(map).bindPopup(" HIDALGO  <br> Confirmados: 1205 <br> Defunciones: 168 <br> Sospechosos: 5072");
L.marker([19.290852, -99.656610]).addTo(map).bindPopup(" ESTADO DE MEXICO  <br> Confirmados: 19560 <br> Defunciones: 14275 <br> Sospechosos: 692");
L.marker([19.702000, -101.194455]).addTo(map).bindPopup(" MICHOACAN  <br> Confirmados: 1368 <br> Defunciones: 116 <br> Sospechosos: 2083");
L.marker([19.402020, -99.145004]).addTo(map).bindPopup(" CIUDAD DE MEXICO  <br> Confirmados: 11057 <br> Defunciones: 8434 <br> Sospechosos: 5027");
L.marker([18.918178, -99.222268]).addTo(map).bindPopup(" MORELOS <br> Confirmados: 1213 <br> Defunciones: 236 <br> Sospechosos: 502");
L.marker([17.549548, -99.500181]).addTo(map).bindPopup(" GUERRERO  <br> Confirmados: 1205 <br> Defunciones: 168 <br> Sospechosos: 5322");
L.marker([19.042488, -98.209255]).addTo(map).bindPopup(" PUEBLA  <br> Confirmados: 2082 <br> Defunciones: 257 <br> Sospechosos: 527");
L.marker([19.413142, -98.141276]).addTo(map).bindPopup(" TLAXCALA  <br> Confirmados: 782 <br> Defunciones: 122 <br> Sospechosos: 827");
L.marker([18.232345, -95.291562]).addTo(map).bindPopup(" VERACRUZ  <br> Confirmados: 2769 <br> Defunciones: 365 <br> Sospechosos: 2982");
L.marker([17.066156, -96.727406]).addTo(map).bindPopup(" OAXACA  <br> Confirmados: 1001 <br> Defunciones: 100 <br> Sospechosos: 2192");
L.marker([16.948288, -93.285201]).addTo(map).bindPopup(" CHIAPAS  <br> Confirmados: 1164 <br> Defunciones: 69 <br> Sospechosos: 121");
L.marker([17.985648, -92.946645]).addTo(map).bindPopup(" TABASCO  <br> Confirmados: 3148 <br> Defunciones: 393 <br> Sospechosos: 9022");
L.marker([19.826666, -90.536935]).addTo(map).bindPopup(" CAMPECHE  <br> Confirmados: 1002 <br> Defunciones: 42 <br> Sospechosos: 532");
L.marker([20.963882, -89.616901]).addTo(map).bindPopup(" YUCATAN  <br> Confirmados: 1487 <br> Defunciones: 291 <br> Sospechosos: 312");
L.marker([18.502264, -88.298026]).addTo(map).bindPopup(" QUINTANA ROO  <br> Confirmados: 1609 <br> Defunciones: 291 <br> Sospechosos: 8115");

