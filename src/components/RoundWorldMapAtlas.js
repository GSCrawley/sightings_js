"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var d3_geo_1 = require("d3-geo");
var topojson_client_1 = require("topojson-client");
var uuid = require('react-uuid');
var scale = 200;
var cx = 400;
var cy = 150;
var RoundWorldMap = function () {
    var _a = react_1.useState([]), geographies = _a[0], setGeographies = _a[1];
    react_1.useEffect(function () {
        fetch('/data/world-110m.json').then(function (response) {
            if (response.status !== 200) {
                console.log("Houston we have a problem: " + response.status);
                return;
            }
            response.json().then(function (worldData) {
                var mapFeatures = topojson_client_1.feature(worldData, worldData.objects.countries).features;
                setGeographies(mapFeatures);
            });
        });
    }, []);
    var projection = d3_geo_1.geoOrthographic().scale(scale).translate([cx, cy]).rotate([0, 0]);
    return width = { scale: scale };
    height = { scale: scale };
    viewBox = "0 0 800 450" >
        fill;
    "#0098c8";
    cx = { cx: cx };
    cy = { cy: cy };
    r = { scale: scale }
       
        < g >
        {}(geographies).map(function (d, i) { return key = {}(templateObject_1 || (templateObject_1 = __makeTemplateObject(["path-", ""], ["path-", ""])), uuid()); });
};
d = { geoPath: function () { }, : .projection(projection)(d) };

fill = {}(templateObject_2 || (templateObject_2 = __makeTemplateObject(["rgba(38,50,56,", ")"], ["rgba(38,50,56,", ")"])), (1 / (geographies ? geographies.length : 0)) * i);
stroke = "aliceblue";
strokeWidth = 0.5;

exports.default = RoundWorldMap;
var templateObject_1, templateObject_2;