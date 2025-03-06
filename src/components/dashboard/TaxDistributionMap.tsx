
import React from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker
} from "react-simple-maps";
import { Card } from '@/components/ui/card';

// Indonesia GeoJSON with focus on Jakarta region
const geoUrl = "https://raw.githubusercontent.com/deldersveld/topojson/master/countries/indonesia/indonesia-provinces.json";

const markers = [
  { name: "Jakarta Pusat", coordinates: [106.8456, -6.2088], value: "2.5M" },
  { name: "Jakarta Selatan", coordinates: [106.8256, -6.1988], value: "1.8M" },
  { name: "Jakarta Timur", coordinates: [106.8656, -6.2288], value: "3.2M" }
];

const TaxDistributionMap = () => {
  return (
    <div className="w-full h-[400px]">
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 4000,
          center: [106.8456, -6.2088] // Jakarta coordinates
        }}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#EAEAEC"
                stroke="#D6D6DA"
                style={{
                  default: { outline: "none" },
                  hover: { fill: "#F5F5F5", outline: "none" },
                  pressed: { outline: "none" }
                }}
              />
            ))
          }
        </Geographies>
        
        {markers.map(({ name, coordinates, value }) => (
          <Marker key={name} coordinates={coordinates as [number, number]}>
            <circle r={8} fill="#FF5533" fillOpacity={0.8} />
            <text
              textAnchor="middle"
              y={-15}
              className="text-xs fill-current"
            >
              {`Rp ${value}`}
            </text>
          </Marker>
        ))}
      </ComposableMap>
    </div>
  );
};

export default TaxDistributionMap;
