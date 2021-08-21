
import React, { useState, useEffect } from 'react'
import { geoOrthographic, geoPath } from 'd3-geo'
import { feature } from 'topojson-client' 
import { Feature, FeatureCollection, Geometry } from 'geojson'

import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite'
import { Button } from '@material-ui/core'
import AnimationFrame from '../../hooks/AnimationFrame'

var uuid = require('react-uuid')

"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });

var scale = 250;
var cx = 400;
var cy = 150;
var initRotation = 100;
var RotatingRoundWorldMap = function () {
    var _a = useState([]), geographies = _a[0], setGeographies = _a[1];
    var _b = useState(initRotation), rotation = _b[0], setRotation = _b[1];
    var _c = useState(false), isRotate = _c[0], setIsRotate = _c[1];
    useEffect(function () {
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
    var projection = geoOrthographic().scale(scale).translate([cx, cy]).rotate([rotation, 0]);
    AnimationFrame.default(function () {
        if (isRotate) {
            var newRotation = rotation;
            if (rotation >= 360) {
                newRotation = rotation - 360;
            }
            setRotation(newRotation + 0.25);
            // console.log(`rotation: ${  rotation}`)
        }
    });
    return size = "medium";
    color = "primary";
    startIcon = {PlayCircleFilledWhiteIcon} ;
};
onClick = {}();
{
    setIsRotate(true);
}

width = { scale };
height = { scale };
viewBox = "0 0 800 450" 
    fill;
"#0098c8";
cx = { cx };
cy = { cy };
r = { scale }
    < g >
    {}(geographies).map(function (d, i) { return key = {}(templateObject_1 || (templateObject_1 = __makeTemplateObject(["path-", ""], ["path-", ""])), uuid()); }, d = { geoPath: function () { }, : .projection(projection)(d) }, fill = {}(templateObject_2 || (templateObject_2 = __makeTemplateObject(["rgba(38,50,56,", ")"], ["rgba(38,50,56,", ")"])), (1 / (geographies ? geographies.length : 0)) * i), stroke = "aliceblue", strokeWidth = { 0.5:  }
        
    )

    

exports.default = RotatingRoundWorldMap;
var templateObject_1, templateObject_2;

