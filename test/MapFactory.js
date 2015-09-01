"use strict";
(function (root, factory) {
    if (typeof define === "function" && define.amd) {
        define(["./DataFactory", "src/map/ChoroplethCounties", "src/map/ChoroplethCountries", "src/map/ChoroplethStates", "src/map/ChoroplethStatesHeat", "src/map/GMap", "src/map/GMapHeat", "src/map/GMapGraph", "src/layout/AbsoluteSurface", "src/other/HeatMap", "src/map/countries", "src/map/us-states"], factory);
    } else {
        root.test_ChartFactory = factory(root.test_DataFactory, root.map_ChoroplethCounties, root.map_ChoroplethCountries, root.map_ChoroplethStates, root.map_ChoroplethStatesHeat, root.map_Gmap, root.map_GMapHeat, root.map_GMapGraph, root.layout_AbsoluteSurface, root.other_HeatMap, root.map_countries, root.map_usStates);
    }
}(this, function (DataFactory, ChoroplethCounties, ChoroplethCountries, ChoroplethStates, ChoroplethStatesHeat, Gmap, GMapHeat, GMapGraph, AbsoluteSurface, HeatMap, countries, usStates) {
    return {
        counties: {
            simple: function () {
                var retVal = new ChoroplethCounties()
                    .columns(DataFactory.Counties.simple.columns)
                ;
                var rawData = DataFactory.Counties.simple.rawData;

                var countyData = rawData.map(function (item) {
                    return [item.county, item.weight, item.county_name];
                });
                retVal
                    .data(countyData)
                ;
                return retVal;
            }
        },
        countries: {
            simple: function () {
                var retVal = new ChoroplethCountries()
                    .columns(DataFactory.Countries.simple.columns)
                ;
                
                var nameCodeMap = {};
                for (var key in countries.countryNames) {
                    var item = countries.countryNames[key];
                    nameCodeMap[item.name] = key;
                }

                var rawData = DataFactory.Countries.simple.rawData;

                var countryData = rawData.map(function (item) {
                    return { "country": nameCodeMap[item.name], "weight": item.weight, "label":item.name };
                });

                retVal.data(countryData);

                return retVal;
                ;
            }
        },
        states: {
            simple: function () {
                var retVal = new ChoroplethStates();
                
                var nameCodeMap = {};
                for (var key in usStates.stateNames) {
                    var item = usStates.stateNames[key];
                    nameCodeMap[item.name] = item.code;
                }
                var rawData = DataFactory.States.simple.rawData;
                var stateData = rawData.map(function (item) {
                    return [nameCodeMap[item.name], item.weight, item.name];
                });
                retVal.data(stateData);
                return retVal;
            },
            heatmap: function () {
                var retVal =  new ChoroplethStatesHeat();
                
                var map = this.simple();
                var heat = new HeatMap();
                var heatData = DataFactory.States.heatmap.heatData;

                var origRender = heat.render;
                heat.render = function () {
                    this.data(heatData.map(function (row) {
                        var pos = map.project(row[0], row[1]);
                        return [pos[0], pos[1], row[2]];
                    }));
                    origRender.apply(this, arguments);
                };

                retVal
                    .addLayer(new AbsoluteSurface().widget(map))
                    .addLayer(new AbsoluteSurface().widget(heat))
                ;
                return retVal;
            }
        },
        gmap: {
            simple: function () {
                return new Gmap()
                    .columns(DataFactory.GMap.simple.columns)
                    .data(DataFactory.GMap.simple.data)
                ;
            },
            graph: function () {
                return new GMapGraph()
                    .columns(DataFactory.GMap.graph.columns)
                    .data(DataFactory.GMap.graph.data)
                ;
            },
            heat: function () {
                return new GMapHeat()
                    .columns(DataFactory.GMap.heat.columns)
                    .data(DataFactory.GMap.heat.data)
                ;
            }
        }
    };
}));
