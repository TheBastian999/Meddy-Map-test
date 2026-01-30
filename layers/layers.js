var wms_layers = [];


        var lyr_WazeWorld_0 = new ol.layer.Tile({
            'title': 'Waze (World)',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://worldtiles3.waze.com/tiles/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleTraffic_1 = new ol.layer.Tile({
            'title': 'Google Traffic',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt?lyrs=h@159000000,traffic|seconds_into_week:-1&style=3&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleTerrain_2 = new ol.layer.Tile({
            'title': 'Google Terrain',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleHybrid_3 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleRoad_4 = new ol.layer.Tile({
            'title': 'Google Road',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_5 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_PLANVFsigned2_modified_6 = new ol.layer.Image({
        opacity: 1,
        
    title: 'PLAN V.F-signed (2)_modified<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/PLANVFsigned2_modified_6.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-658980.487412, 4165330.953787, -658525.048600, 4165976.442107]
        })
    });
var format_NdeBorne_7 = new ol.format.GeoJSON();
var features_NdeBorne_7 = format_NdeBorne_7.readFeatures(json_NdeBorne_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NdeBorne_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NdeBorne_7.addFeatures(features_NdeBorne_7);
var lyr_NdeBorne_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NdeBorne_7, 
                style: style_NdeBorne_7,
                popuplayertitle: 'N de Borne',
                interactive: true,
                title: '<img src="styles/legend/NdeBorne_7.png" /> N de Borne'
            });

lyr_WazeWorld_0.setVisible(true);lyr_GoogleTraffic_1.setVisible(true);lyr_GoogleTerrain_2.setVisible(true);lyr_GoogleHybrid_3.setVisible(true);lyr_GoogleRoad_4.setVisible(true);lyr_GoogleSatellite_5.setVisible(true);lyr_PLANVFsigned2_modified_6.setVisible(true);lyr_NdeBorne_7.setVisible(true);
var layersList = [lyr_WazeWorld_0,lyr_GoogleTraffic_1,lyr_GoogleTerrain_2,lyr_GoogleHybrid_3,lyr_GoogleRoad_4,lyr_GoogleSatellite_5,lyr_PLANVFsigned2_modified_6,lyr_NdeBorne_7];
lyr_NdeBorne_7.set('fieldAliases', {'N� de borne': 'N� de borne', 'X': 'X', 'Y': 'Y', });
lyr_NdeBorne_7.set('fieldImages', {'N� de borne': '', 'X': '', 'Y': '', });
lyr_NdeBorne_7.set('fieldLabels', {'N� de borne': 'no label', 'X': 'inline label - always visible', 'Y': 'inline label - always visible', });
lyr_NdeBorne_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});