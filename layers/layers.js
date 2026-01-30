var wms_layers = [];


        var lyr_GoogleRoad_0 = new ol.layer.Tile({
            'title': 'Google Road',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var lyr_PLANVFsigned2_modified_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'PLAN V.F-signed (2)_modified<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/PLANVFsigned2_modified_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-658980.487412, 4165330.953787, -658525.048600, 4165976.442107]
        })
    });
var format_NdeBorne_2 = new ol.format.GeoJSON();
var features_NdeBorne_2 = format_NdeBorne_2.readFeatures(json_NdeBorne_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NdeBorne_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NdeBorne_2.addFeatures(features_NdeBorne_2);
var lyr_NdeBorne_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NdeBorne_2, 
                style: style_NdeBorne_2,
                popuplayertitle: 'N de Borne',
                interactive: true,
                title: '<img src="styles/legend/NdeBorne_2.png" /> N de Borne'
            });

lyr_GoogleRoad_0.setVisible(true);lyr_PLANVFsigned2_modified_1.setVisible(true);lyr_NdeBorne_2.setVisible(true);
var layersList = [lyr_GoogleRoad_0,lyr_PLANVFsigned2_modified_1,lyr_NdeBorne_2];
lyr_NdeBorne_2.set('fieldAliases', {'N� de borne': 'N� de borne', 'X': 'X', 'Y': 'Y', });
lyr_NdeBorne_2.set('fieldImages', {'N� de borne': '', 'X': '', 'Y': '', });
lyr_NdeBorne_2.set('fieldLabels', {'N� de borne': 'no label', 'X': 'inline label - always visible', 'Y': 'inline label - always visible', });
lyr_NdeBorne_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});