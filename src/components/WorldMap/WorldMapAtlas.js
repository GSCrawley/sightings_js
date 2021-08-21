var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });

import React, { useState, useEffect } from 'react';
import { geoEqualEarth, geoPath } from 'd3-geo';
import { feature } from 'topojson-client' ;
import { Feature, FeatureCollection, Geometry } from 'geojson';
// import './WorldMap.scss'

var uuid = require('react-uuid')

var scale = 200;
var cx = 400;
var cy = 150;


const WorldMapAtlas = () => {
  const [geographies, setGeographies] = useState<[] | Array<Feature<Geometry | null>>>([])
    useEffect(() => {
        fetch('/data/world-110m.json').then((response) => {
          if (response.status !== 200) {
            console.log(`Houston we have a problem: ${response.status}`)
            return
          }
          response.json().then(function (worldData) {
            var mapFeatures = topojson_client_1.feature(worldData, worldData.objects.countries).features;
            setGeographies(mapFeatures);
        });
        });
      }, []);

      var projection = d3_geo_1.geoEqualEarth().scale(scale).translate([cx, cy]).rotate([0, 0]);
      return width = { scale: scale };
      height = { scale: scale };
      viewBox = "0 0 800 450" >
      
        {}(geographies).map(function (d, i) { return key = {}(templateObject_1 || (templateObject_1 = __makeTemplateObject(["path-", ""], ["path-", ""])), uuid()); });
        }, d = { geoPath: function () { }, : .projection(projection)(d) }, fill = {}(templateObject_2 || (templateObject_2 = __makeTemplateObject(["rgba(38,50,56,", ")"], ["rgba(38,50,56,", ")"])), (1 / (geographies ? geographies.length : 0)) * i); stroke = "aliceblue",
    strokeWidth = 0.5
   

exports.default  = WorldMapAtlas;
var templateObject_1, templateObject_2;

