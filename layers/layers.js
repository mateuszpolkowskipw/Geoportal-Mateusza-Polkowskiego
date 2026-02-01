var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_Ortofotomapa_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://mapy.geoportal.gov.pl/wss/service/PZGIK/ORTO/WMS/StandardResolution",
                              attributions: ' ',
                              params: {
                                "LAYERS": "Raster",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Ortofotomapa',
                            popuplayertitle: 'Ortofotomapa',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Ortofotomapa_1, 0]);
var format_19451990_2 = new ol.format.GeoJSON();
var features_19451990_2 = format_19451990_2.readFeatures(json_19451990_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_19451990_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_19451990_2.addFeatures(features_19451990_2);
var lyr_19451990_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_19451990_2, 
                style: style_19451990_2,
                popuplayertitle: '1945 - 1990',
                interactive: true,
    title: '1945 - 1990<br />\
    <img src="styles/legend/19451990_2_0.png" /> -87% – -40%<br />\
    <img src="styles/legend/19451990_2_1.png" /> -40% – -15%<br />\
    <img src="styles/legend/19451990_2_2.png" /> -15% – 0%<br />\
    <img src="styles/legend/19451990_2_3.png" /> 0% – 15%<br />\
    <img src="styles/legend/19451990_2_4.png" /> 15% – 35%<br />\
    <img src="styles/legend/19451990_2_5.png" /> 35% – 65%<br />\
    <img src="styles/legend/19451990_2_6.png" /> 65% – 100%<br />' });
var format_19902024_3 = new ol.format.GeoJSON();
var features_19902024_3 = format_19902024_3.readFeatures(json_19902024_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_19902024_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_19902024_3.addFeatures(features_19902024_3);
var lyr_19902024_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_19902024_3, 
                style: style_19902024_3,
                popuplayertitle: '1990 - 2024',
                interactive: true,
    title: '1990 - 2024<br />\
    <img src="styles/legend/19902024_3_0.png" /> -84% – -50%<br />\
    <img src="styles/legend/19902024_3_1.png" /> -50% – -35%<br />\
    <img src="styles/legend/19902024_3_2.png" /> -35% – -20%<br />\
    <img src="styles/legend/19902024_3_3.png" /> -20% – -10%<br />\
    <img src="styles/legend/19902024_3_4.png" /> -10% – 0%<br />\
    <img src="styles/legend/19902024_3_5.png" /> 0% – 15%<br />\
    <img src="styles/legend/19902024_3_6.png" /> 15% – 30%<br />' });
var format_conajmniejraz_4 = new ol.format.GeoJSON();
var features_conajmniejraz_4 = format_conajmniejraz_4.readFeatures(json_conajmniejraz_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_conajmniejraz_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_conajmniejraz_4.addFeatures(features_conajmniejraz_4);
var lyr_conajmniejraz_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_conajmniejraz_4, 
                style: style_conajmniejraz_4,
                popuplayertitle: 'co najmniej raz',
                interactive: true,
                title: '<img src="styles/legend/conajmniejraz_4.png" /> co najmniej raz'
            });
var format_zawsze_5 = new ol.format.GeoJSON();
var features_zawsze_5 = format_zawsze_5.readFeatures(json_zawsze_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_zawsze_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_zawsze_5.addFeatures(features_zawsze_5);
var lyr_zawsze_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_zawsze_5, 
                style: style_zawsze_5,
                popuplayertitle: 'zawsze',
                interactive: true,
                title: '<img src="styles/legend/zawsze_5.png" /> zawsze'
            });
var format_1940_6 = new ol.format.GeoJSON();
var features_1940_6 = format_1940_6.readFeatures(json_1940_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1940_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1940_6.addFeatures(features_1940_6);
var lyr_1940_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1940_6, 
                style: style_1940_6,
                popuplayertitle: '1940',
                interactive: true,
                title: '<img src="styles/legend/1940_6.png" /> 1940'
            });
var format_1990_7 = new ol.format.GeoJSON();
var features_1990_7 = format_1990_7.readFeatures(json_1990_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1990_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1990_7.addFeatures(features_1990_7);
var lyr_1990_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1990_7, 
                style: style_1990_7,
                popuplayertitle: '1990',
                interactive: true,
                title: '<img src="styles/legend/1990_7.png" /> 1990'
            });
var format_2024_8 = new ol.format.GeoJSON();
var features_2024_8 = format_2024_8.readFeatures(json_2024_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2024_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2024_8.addFeatures(features_2024_8);
var lyr_2024_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2024_8, 
                style: style_2024_8,
                popuplayertitle: '2024',
                interactive: true,
                title: '<img src="styles/legend/2024_8.png" /> 2024'
            });
var group_Korytorzekiwroku = new ol.layer.Group({
                                layers: [lyr_1940_6,lyr_1990_7,lyr_2024_8,],
                                fold: 'open',
                                title: 'Koryto rzeki w roku:'});
var group_obszarwktrymrzekapyna = new ol.layer.Group({
                                layers: [lyr_conajmniejraz_4,lyr_zawsze_5,],
                                fold: 'open',
                                title: 'obszar w którym rzeka płynęła:'});
var group_Zmianyprocentowegoudziaukolejnychprzebiegwrzekiwlatach = new ol.layer.Group({
                                layers: [lyr_19451990_2,lyr_19902024_3,],
                                fold: 'open',
                                title: 'Zmiany procentowego udziału kolejnych przebiegów rzeki w latach:'});
var group_Podkad = new ol.layer.Group({
                                layers: [lyr_OSMStandard_0,lyr_Ortofotomapa_1,],
                                fold: 'open',
                                title: 'Podkład'});

lyr_OSMStandard_0.setVisible(true);lyr_Ortofotomapa_1.setVisible(true);lyr_19451990_2.setVisible(true);lyr_19902024_3.setVisible(true);lyr_conajmniejraz_4.setVisible(true);lyr_zawsze_5.setVisible(true);lyr_1940_6.setVisible(true);lyr_1990_7.setVisible(true);lyr_2024_8.setVisible(true);
var layersList = [group_Podkad,group_Zmianyprocentowegoudziaukolejnychprzebiegwrzekiwlatach,group_obszarwktrymrzekapyna,group_Korytorzekiwroku];
lyr_19451990_2.set('fieldAliases', {'Id': 'Id', 'GRID_ID': 'GRID_ID', 'PERCENTAGE': 'PERCENTAGE', 'PERCENTA_1': 'PERCENTA_1', 'PERCENTA_2': 'PERCENTA_2', 'Field': 'Field', 'Field1': 'Field1', });
lyr_19902024_3.set('fieldAliases', {'Id': 'Id', 'GRID_ID': 'GRID_ID', 'PERCENTAGE': 'PERCENTAGE', 'PERCENTA_1': 'PERCENTA_1', 'PERCENTA_2': 'PERCENTA_2', 'Field': 'Field', 'Field1': 'Field1', });
lyr_conajmniejraz_4.set('fieldAliases', {'FID': 'FID', });
lyr_zawsze_5.set('fieldAliases', {'FID_wspoln': 'FID_wspoln', 'FID_BUG_ż': 'FID_BUG_ż', 'Id': 'Id', 'MERGE_SRC': 'MERGE_SRC', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'FID_WiMAP_': 'FID_WiMAP_', 'DLUG_BRZEG': 'DLUG_BRZEG', 'DLUGOSC': 'DLUGOSC', 'DOKLADNOSC': 'DOKLADNOSC', 'DOSTEPNOSC': 'DOSTEPNOSC', 'GLEBOKOSC': 'GLEBOKOSC', 'ISTNIENIE': 'ISTNIENIE', 'KAT_HYDRO': 'KAT_HYDRO', 'KAT_PLYWU': 'KAT_PLYWU', 'KAT_POJEMN': 'KAT_POJEMN', 'KAT_POLOZ': 'KAT_POLOZ', 'KAT_WODY': 'KAT_WODY', 'NAJW_WYS': 'NAJW_WYS', 'NAZWA': 'NAZWA', 'OBIEKT': 'OBIEKT', 'OPR_UPUST': 'OPR_UPUST', 'OPR_ZBURZ': 'OPR_ZBURZ', 'POCH_HYDRO': 'POCH_HYDRO', 'PRED_PRZEP': 'PRED_PRZEP', 'SREDNIA_GL': 'SREDNIA_GL', 'STAT_EKSPL': 'STAT_EKSPL', 'SZEROKOSC': 'SZEROKOSC', 'TAJNOSC': 'TAJNOSC', 'TYP_AKWED': 'TYP_AKWED', 'TYP_WYBRZ': 'TYP_WYBRZ', 'ZN_ORIENT': 'ZN_ORIENT', 'POWIERZCHN': 'POWIERZCHN', 'ID_1': 'ID_1', 'FID_Żeka_': 'FID_Żeka_', 'Id_12': 'Id_12', 'gridcode': 'gridcode', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Ar_1': 'Shape_Ar_1', 'InPoly_FID': 'InPoly_FID', });
lyr_1940_6.set('fieldAliases', {'Id': 'Id', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_1990_7.set('fieldAliases', {'DLUGOSC': 'DLUGOSC', 'powie': 'powie', });
lyr_2024_8.set('fieldAliases', {'Id': 'Id', 'poweie': 'poweie', 'dlogos': 'dlogos', });
lyr_19451990_2.set('fieldImages', {'Id': 'Range', 'GRID_ID': 'TextEdit', 'PERCENTAGE': 'TextEdit', 'PERCENTA_1': 'TextEdit', 'PERCENTA_2': 'TextEdit', 'Field': 'TextEdit', 'Field1': 'TextEdit', });
lyr_19902024_3.set('fieldImages', {'Id': 'Range', 'GRID_ID': 'TextEdit', 'PERCENTAGE': 'TextEdit', 'PERCENTA_1': 'TextEdit', 'PERCENTA_2': 'TextEdit', 'Field': 'TextEdit', 'Field1': 'TextEdit', });
lyr_conajmniejraz_4.set('fieldImages', {'FID': 'TextEdit', });
lyr_zawsze_5.set('fieldImages', {'FID_wspoln': 'TextEdit', 'FID_BUG_ż': 'TextEdit', 'Id': 'TextEdit', 'MERGE_SRC': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'FID_WiMAP_': 'TextEdit', 'DLUG_BRZEG': 'TextEdit', 'DLUGOSC': 'TextEdit', 'DOKLADNOSC': 'TextEdit', 'DOSTEPNOSC': 'TextEdit', 'GLEBOKOSC': 'TextEdit', 'ISTNIENIE': 'TextEdit', 'KAT_HYDRO': 'TextEdit', 'KAT_PLYWU': 'TextEdit', 'KAT_POJEMN': 'TextEdit', 'KAT_POLOZ': 'TextEdit', 'KAT_WODY': 'TextEdit', 'NAJW_WYS': 'TextEdit', 'NAZWA': 'TextEdit', 'OBIEKT': 'TextEdit', 'OPR_UPUST': 'TextEdit', 'OPR_ZBURZ': 'TextEdit', 'POCH_HYDRO': 'TextEdit', 'PRED_PRZEP': 'TextEdit', 'SREDNIA_GL': 'TextEdit', 'STAT_EKSPL': 'TextEdit', 'SZEROKOSC': 'TextEdit', 'TAJNOSC': 'TextEdit', 'TYP_AKWED': 'TextEdit', 'TYP_WYBRZ': 'TextEdit', 'ZN_ORIENT': 'TextEdit', 'POWIERZCHN': 'TextEdit', 'ID_1': 'TextEdit', 'FID_Żeka_': 'TextEdit', 'Id_12': 'TextEdit', 'gridcode': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Ar_1': 'TextEdit', 'InPoly_FID': 'TextEdit', });
lyr_1940_6.set('fieldImages', {'Id': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_1990_7.set('fieldImages', {'DLUGOSC': 'TextEdit', 'powie': 'TextEdit', });
lyr_2024_8.set('fieldImages', {'Id': 'TextEdit', 'poweie': 'TextEdit', 'dlogos': 'TextEdit', });
lyr_19451990_2.set('fieldLabels', {'Id': 'hidden field', 'GRID_ID': 'hidden field', 'PERCENTAGE': 'hidden field', 'PERCENTA_1': 'hidden field', 'PERCENTA_2': 'hidden field', 'Field': 'no label', 'Field1': 'hidden field', });
lyr_19902024_3.set('fieldLabels', {'Id': 'hidden field', 'GRID_ID': 'hidden field', 'PERCENTAGE': 'hidden field', 'PERCENTA_1': 'hidden field', 'PERCENTA_2': 'hidden field', 'Field': 'hidden field', 'Field1': 'no label', });
lyr_conajmniejraz_4.set('fieldLabels', {'FID': 'hidden field', });
lyr_zawsze_5.set('fieldLabels', {'FID_wspoln': 'hidden field', 'FID_BUG_ż': 'hidden field', 'Id': 'hidden field', 'MERGE_SRC': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'FID_WiMAP_': 'hidden field', 'DLUG_BRZEG': 'hidden field', 'DLUGOSC': 'hidden field', 'DOKLADNOSC': 'hidden field', 'DOSTEPNOSC': 'hidden field', 'GLEBOKOSC': 'hidden field', 'ISTNIENIE': 'hidden field', 'KAT_HYDRO': 'hidden field', 'KAT_PLYWU': 'hidden field', 'KAT_POJEMN': 'hidden field', 'KAT_POLOZ': 'hidden field', 'KAT_WODY': 'hidden field', 'NAJW_WYS': 'hidden field', 'NAZWA': 'hidden field', 'OBIEKT': 'hidden field', 'OPR_UPUST': 'hidden field', 'OPR_ZBURZ': 'hidden field', 'POCH_HYDRO': 'hidden field', 'PRED_PRZEP': 'hidden field', 'SREDNIA_GL': 'hidden field', 'STAT_EKSPL': 'hidden field', 'SZEROKOSC': 'hidden field', 'TAJNOSC': 'hidden field', 'TYP_AKWED': 'hidden field', 'TYP_WYBRZ': 'hidden field', 'ZN_ORIENT': 'hidden field', 'POWIERZCHN': 'hidden field', 'ID_1': 'hidden field', 'FID_Żeka_': 'hidden field', 'Id_12': 'hidden field', 'gridcode': 'hidden field', 'Shape_Le_1': 'hidden field', 'Shape_Ar_1': 'hidden field', 'InPoly_FID': 'hidden field', });
lyr_1940_6.set('fieldLabels', {'Id': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_1990_7.set('fieldLabels', {'DLUGOSC': 'hidden field', 'powie': 'hidden field', });
lyr_2024_8.set('fieldLabels', {'Id': 'hidden field', 'poweie': 'hidden field', 'dlogos': 'hidden field', });
lyr_2024_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});